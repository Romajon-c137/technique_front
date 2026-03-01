"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  name: string;
  icon: string;
  href: string;
  isQR?: boolean;
}

const tabs: TabItem[] = [
  { name: "Главное", icon: "home", href: "/home" },
  { name: "Техники", icon: "techniques", href: "/techniques" },
  { name: "QR", icon: "qr", href: "/qr", isQR: true },
  { name: "Поиск", icon: "search", href: "/search" },
  { name: "Профиль", icon: "profile", href: "/profile" },
];

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const iconClass = className || "currentColor";

  if (name === "home") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "techniques") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "profile") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "qr") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 7.5H7.5V10.5H10.5V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 7.5H13.5V10.5H16.5V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 13.5H7.5V16.5H10.5V13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 13.5H13.5V16.5H16.5V13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return null;
};

export function ButtonNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/home") {
      return pathname.startsWith("/home");
    }
    if (href === "/techniques") {
      return pathname.startsWith("/techniques");
    }
    if (href === "/profile") {
      return pathname.startsWith("/profile");
    }
    return pathname === href;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 max-w-[480px] mx-auto">
      <div className="flex items-end justify-around px-3 py-3 pt-4">
        {tabs.map((tab) => {
          const active = isActive(tab.href);

          if (tab.isQR) {
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className="flex flex-col items-center justify-center -mt-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center shadow-lg text-white">
                  <IconComponent name={tab.icon} />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className="flex flex-col items-center gap-1 min-w-[60px]"
            >
              <div
                className={`w-6 h-6 flex items-center justify-center ${active ? "text-primary-500" : "text-dark-100"
                  }`}
              >
                <IconComponent name={tab.icon} />
              </div>
              <span
                className={`text-[12px] font-normal leading-tight ${active ? "text-primary-500" : "text-dark-100"
                  }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
