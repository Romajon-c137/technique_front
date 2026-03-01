/**
 * mwallet/dengi.kg API Types
 * Документация: https://sandbox.dengi.kg/qrpay
 */

// Базовый запрос
export interface MWalletBaseRequest {
    cmd: string;
    version: number;
    sid: string;
    mktime: string;
    lang: 'ru' | 'en';
    hash: string;
}

// Данные для создания счета
export interface CreateInvoiceData {
    order_id: string;          // Уникальный номер заказа
    desc: string;              // Описание платежа (до 1000 символов)
    amount: number | null;     // Сумма в копейках (100 = 1.00 сом)
    currency: string;          // Обычно "KGS"
    test: 0 | 1;              // 1 - тестовый, 0 - боевой
    long_term?: 0 | 1 | null; // 1 - многоразовый QR, 0 - одноразовый
    user_to?: string | null;   // Телефон абонента (996700100200)
    date_life?: string | null; // Время жизни счета (YYYY-MM-DD HH:MM:SS)
    date_start_push?: string | null;
    count_push?: number | null;
    send_push?: 0 | 1;
    send_sms?: 0 | 1;
    success_url?: string | null;
    fail_url?: string | null;
    result_url?: string | null;
    fields_other?: string | object | null;
    transtype?: string | null;
    items?: InvoiceItem[];     // Информация о товарах
}

// Товар в счете
export interface InvoiceItem {
    id: string;
    name: string;
    amount: string;
    count: string;
    image?: string;
}

// Запрос создания счета
export interface CreateInvoiceRequest extends MWalletBaseRequest {
    cmd: 'createInvoice';
    data: CreateInvoiceData;
}

// Ответ на создание счета
export interface CreateInvoiceResponse {
    version: number;
    mktime: string;
    sid: string;
    cmd: 'createInvoice';
    data: {
        invoice_id: string;     // Уникальный ID счета
        qr: string;            // URL QR-кода
        emv_qr: string;        // Дубликат qr
        emv_qr_img: string | null;
        qr_url: string;        // URL для открытия
        link_app: string;      // Диплинк для приложения
        site_pay: string;      // Ссылка на оплату
    };
    hash: string;
    error?: {
        code: number;
        message: string;
    };
}

// Конфигурация мерчанта
export interface MWalletConfig {
    version: number;           // Обычно 1005
    sid: string;              // SID мерчанта
    password: string;         // Пароль для API
    serverUrl: string;        // URL сервера
    testMode: boolean;        // Тестовый режим
}
