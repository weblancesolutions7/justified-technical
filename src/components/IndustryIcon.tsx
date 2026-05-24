const strokeProps = {
  className: "w-full h-full",
  viewBox: "0 0 64 64",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IndustryIcon({ id }: { id: string }) {
  switch (id) {
    case "construction":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M14 54V18" />
          <path d="M8 18h36" />
          <path d="M14 26h4" />
          <path d="M14 36h4" />
          <path d="M14 46h4" />
          <path d="M8 18l6-10 6 10" />
          <path d="M34 18v14" />
          <rect x="29" y="32" width="10" height="10" rx="1.5" />
          <path d="M29 32l10 10" />
          <path d="M38 54V42h18v12" />
          <path d="M38 42l9-8 9 8" />
          <path d="M47 34v20" />
          <path d="M38 48h18" />
        </svg>
      );
    case "industrial":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M12 54c3-10 3-20 5-28h12c2 8 2 18 5 28" />
          <path d="M32 54c3-10 3-20 5-28h12c2 8 2 18 5 28" />
          <path d="M15 38h13" />
          <path d="M13 46h17" />
          <path d="M35 38h13" />
          <path d="M33 46h17" />
          <path d="M19 21c-1-5 2-8 3-11c2 3 1 7 0 11" />
          <path d="M39 21c-1-5 2-8 3-11c2 3 1 7 0 11" />
          <path d="M20 54v-4h6v4" />
          <path d="M40 54v-4h6v4" />
        </svg>
      );
    case "oil-gas":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M24 54L30 16h4l6 38" />
          <path d="M25 45h14" />
          <path d="M27 34h10" />
          <path d="M29 23h6" />
          <path d="M25 45l12-11" />
          <path d="M37 45L27 34" />
          <path d="M27 34l8-11" />
          <path d="M35 34L29 23" />
          <path d="M14 54V38" />
          <path d="M8 32l12 10" />
          <path d="M8 32C7 35 9 38 10 40" />
          <path d="M7 36v18" />
          <path d="M18 42v12" />
          <path d="M48 54V30" />
          <path d="M48 30c-2-4 0-8 3-11c3 3 2 7 0 11z" fill="currentColor" />
        </svg>
      );
    case "events":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M32 54V22" />
          <path d="M32 22c-10-5-18 3-18 12h36c0-9-8-17-18-12z" />
          <path d="M32 26c-6-4-12-2-16 6" />
          <path d="M32 26c6-4 12-2 16 6" />
          <path d="M32 30c-4-3-8-1-10 5" />
          <path d="M32 30c4-3 8-1 10 5" />
          <circle cx="14" cy="38" r="2.5" />
          <circle cx="50" cy="38" r="2.5" />
          <circle cx="22" cy="35" r="2" />
          <circle cx="42" cy="35" r="2" />
          <circle cx="32" cy="16" r="3" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M8 54V34l8-8l8 8" />
          <path d="M24 54V24l8-8l8 8" />
          <path d="M40 54V34l8-8l8 8v20" />
          <path d="M12 28V16h4v12" />
          <path d="M14 11c0-2 2-3 2-5" />
          <circle cx="32" cy="35" r="6" />
          <path d="M32 26v3" />
          <path d="M32 41v3" />
          <path d="M23 35h3" />
          <path d="M38 35h3" />
          <path d="M44 54V42h8v12" />
          <path d="M44 48h8" />
        </svg>
      );
    case "hotels":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M14 54V14h36v40" />
          <path d="M12 14l20-8l20 8" />
          <path d="M32 6V1" />
          <path d="M32 1l5 2.5l-5 2.5" />
          <path d="M22 54V41c0-4 4-8 10-8s10 4 10 8v13" />
          <path d="M26 54V44c0-2 2-4 6-4s6 2 6 4v10" />
          <rect x="20" y="20" width="6" height="7" rx="1" />
          <rect x="38" y="20" width="6" height="7" rx="1" />
          <rect x="20" y="30" width="6" height="7" rx="1" />
          <rect x="38" y="30" width="6" height="7" rx="1" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M18 54V28c0-5 5-9 14-9s14 4 14 9v26" />
          <path d="M8 54V36h10" />
          <path d="M46 36h10v18" />
          <path d="M25 21c0-5 3-8 7-8s7 3 7 8" />
          <path d="M34 29l-5 10h6l-3 9" />
          <path d="M13 36V26" />
          <path d="M51 36V26" />
          <circle cx="13" cy="24" r="1.5" fill="currentColor" />
          <circle cx="51" cy="24" r="1.5" fill="currentColor" />
        </svg>
      );
    case "entertainment":
      return (
        <svg {...strokeProps}>
          <path d="M32 12l4.5 9.1 10.1 1.5-7.3 7.1 1.7 10.1L32 34.5l-9 4.7 1.7-10.1-7.3-7.1 10.1-1.5L32 12z" />
        </svg>
      );
    case "data-centers":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <rect x="14" y="18" width="36" height="28" rx="2" />
          <path d="M20 26h24" />
          <path d="M20 32h24" />
          <path d="M20 38h16" />
          <circle cx="42" cy="38" r="2" fill="currentColor" />
          <path d="M26 14v4" />
          <path d="M38 14v4" />
        </svg>
      );
    case "film-productions":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <rect x="12" y="20" width="40" height="24" rx="2" />
          <path d="M12 28h40" />
          <path d="M20 20v-6h24v6" />
          <circle cx="22" cy="36" r="3" />
          <circle cx="32" cy="36" r="3" />
          <circle cx="42" cy="36" r="3" />
        </svg>
      );
    case "marine-ports":
      return (
        <svg {...strokeProps}>
          <path d="M6 54h52" />
          <path d="M10 42h44" />
          <path d="M18 42V28l14-8l14 8v14" />
          <path d="M32 20v22" />
          <path d="M24 34h16" />
          <path d="M46 46c-4-2-8-2-14-2s-10 0-14 2" />
        </svg>
      );
    default:
      return (
        <svg {...strokeProps}>
          <rect x="8" y="8" width="12" height="12" rx="3.5" />
          <rect x="26" y="8" width="12" height="12" rx="3.5" />
          <rect x="44" y="8" width="12" height="12" rx="3.5" />
          <rect x="8" y="26" width="12" height="12" rx="3.5" />
          <rect x="26" y="26" width="12" height="12" rx="3.5" />
          <rect x="44" y="26" width="12" height="12" rx="3.5" />
          <rect x="8" y="44" width="12" height="12" rx="3.5" />
          <rect x="26" y="44" width="12" height="12" rx="3.5" />
          <rect x="44" y="44" width="12" height="12" rx="3.5" />
        </svg>
      );
  }
}
