import {
    MWalletConfig,
    CreateInvoiceRequest,
    CreateInvoiceResponse,
    CreateInvoiceData,
} from '@/types/mwallet';
import md5 from 'crypto-js/md5';

/**
 * ВАЖНО: Для генерации hash нужна информация из раздела 
 * "Формирование hash для подписи запроса" документации
 * 
 * Пока что это placeholder функция
 */
function generateHash(config: MWalletConfig, data: any, mktime: string): string {
    // TODO: Реализовать согласно документации mwallet
    // Обычно hash формируется из конкатенации полей + пароль мерчанта
    // и вычисляется MD5

    // Предполагаемый формат (нужно уточнить):
    // const dataString = JSON.stringify(data) + config.password + mktime;
    // return md5(dataString).toString();

    console.warn('⚠️ Hash generation not implemented - need documentation');
    return 'PLACEHOLDER_HASH';
}

/**
 * Создание счета и получение QR-кода
 */
export async function createInvoice(
    config: MWalletConfig,
    invoiceData: CreateInvoiceData
): Promise<CreateInvoiceResponse> {
    const mktime = Date.now().toString();

    const request: CreateInvoiceRequest = {
        cmd: 'createInvoice',
        version: config.version,
        sid: config.sid,
        mktime,
        lang: 'ru',
        data: invoiceData,
        hash: generateHash(config, invoiceData, mktime),
    };

    console.log('📤 Отправка запроса в mwallet:', {
        url: config.serverUrl,
        request: {
            ...request,
            hash: request.hash.substring(0, 10) + '...',
        },
    });

    try {
        const response = await fetch(config.serverUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const result: CreateInvoiceResponse = await response.json();

        console.log('📥 Ответ от mwallet:', result);

        if (result.error) {
            throw new Error(`API Error: ${result.error.message} (Code: ${result.error.code})`);
        }

        return result;
    } catch (error) {
        console.error('❌ Ошибка при создании счета:', error);
        throw error;
    }
}

/**
 * Пример использования для тестирования
 */
export function createTestInvoice(config: MWalletConfig): Promise<CreateInvoiceResponse> {
    const testData: CreateInvoiceData = {
        order_id: `TEST_${Date.now()}`,
        desc: 'Тестовый платеж через mwallet',
        amount: 10000, // 100.00 сом
        currency: 'KGS',
        test: 1,
        send_push: 1,
        send_sms: 1,
        long_term: null,
        user_to: null,
        date_life: null,
        date_start_push: null,
        count_push: null,
        success_url: null,
        fail_url: null,
        fields_other: null,
        transtype: null,
        result_url: null,
    };

    return createInvoice(config, testData);
}
