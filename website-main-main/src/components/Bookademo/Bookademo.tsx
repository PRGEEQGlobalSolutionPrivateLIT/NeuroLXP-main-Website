"use client";

import styles from "./Bookademo.module.css";
import { createPortal } from "react-dom";
import "flag-icons/css/flag-icons.min.css";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import { allCountries } from "country-telephone-data";
import {
  isValidPhoneNumber,
  type CountryCode,
} from "libphonenumber-js";
import { CloseIcon } from "@/components/icons/Icons";

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function PresentationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.92"
        y="4.08"
        width="22.17"
        height="15.17"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M14 19.25V23.33"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M8.17 23.33H19.83"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="10"
        cy="6.5"
        r="3.25"
        stroke="#2F3547"
        strokeWidth="1.25"
      />
      <path
        d="M3.75 16.75C3.75 13.16 6.55 10.75 10 10.75C13.45 10.75 16.25 13.16 16.25 16.75"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.5"
        y="4.5"
        width="15"
        height="11"
        rx="2"
        stroke="#2F3547"
        strokeWidth="1.25"
      />
      <path
        d="M3.5 5.5L10 11L16.5 5.5"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"
        fill="#2F3547"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="4.5"
        width="14"
        height="12.5"
        rx="1.5"
        stroke="#2F3547"
        strokeWidth="1.25"
      />
      <path
        d="M6.5 3V6"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M13.5 3V6"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M3 8.5H17"
        stroke="#2F3547"
        strokeWidth="1.25"
      />
      <path
        d="M7.5 12.5L9.1 14L13 10.5"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="#2F3547"
        strokeWidth="1.25"
      />
      <path
        d="M10 6V10L13 12"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#2F3547"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResizeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M19 5L5 19M19 11L11 19M19 17L17 19"
        stroke="#2F3547"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Country options                                                            */
/* -------------------------------------------------------------------------- */

function countryFlag(iso2: string) {
  return iso2
    .toUpperCase()
    .replace(/[A-Z]/g, (letter) =>
      String.fromCodePoint(127397 + letter.charCodeAt(0))
    );
}

const countryCodeOptions = allCountries
  .map((country) => ({
    id: country.iso2,
    dialCode: `+${country.dialCode}`,
    label: country.name,
    flag: countryFlag(country.iso2),
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

/* -------------------------------------------------------------------------- */
/* Dropdown                                                                   */
/* -------------------------------------------------------------------------- */

type NeumorphicOption = {
  value: string;
  label: string;
  searchText?: string;
};

type NeumorphicDropdownProps = {
  value: string;
  placeholder: string;
  options: NeumorphicOption[];
  onChange: (value: string) => void;
  onBlur?: () => void;
  onOpenChange?: (open: boolean) => void;
  ariaLabel: string;
  className?: string;
  renderValue?: (option: NeumorphicOption) => ReactNode;
  searchable?: boolean;
  searchPlaceholder?: string;
};

function NeumorphicDropdown({
  value,
  placeholder,
  options,
  onChange,
  onBlur,
  onOpenChange,
  ariaLabel,
  className = "",
  renderValue,
  searchable = false,
  searchPlaceholder = "Search",
}: NeumorphicDropdownProps) {
  const [open, setOpen] = useState(false);
  const [menuPlacement, setMenuPlacement] =
    useState<"down" | "up">("down");
  const [searchTerm, setSearchTerm] = useState("");

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const selected = options.find((option) => option.value === value);

  const filteredOptions = searchable
    ? (() => {
        const query = searchTerm.trim().toLowerCase();

        if (!query) return options;

        return options
          .map((option) => {
            const value = option.value.toLowerCase();
            const label = option.label.toLowerCase();
            const searchText = (
              option.searchText ?? ""
            ).toLowerCase();

            const searchableText =
              `${label} ${searchText}`.trim();

            const words = searchableText
              .split(/\s+/)
              .filter(Boolean);

            let score = -1;

            /*
             * Highest priority:
             * exact country/ISO code match.
             *
             * Example:
             * "IN" / "in" => India first.
             */
            if (value === query) {
              score = 100;
            } else if (
              label === query ||
              searchText === query
            ) {
              score = 90;
            } else if (
              value.startsWith(query)
            ) {
              score = 80;
            } else if (
              words.some(
                (word) => word === query
              )
            ) {
              score = 70;
            } else if (
              words.some((word) =>
                word.startsWith(query)
              )
            ) {
              score = 60;
            } else if (
              searchableText.includes(query)
            ) {
              score = 50;
            }

            return {
              option,
              score,
            };
          })
          .filter(({ score }) => score >= 0)
          .sort((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score;
            }

            return a.option.label.localeCompare(
              b.option.label
            );
          })
          .map(({ option }) => option);
      })()
    : options;

  useLayoutEffect(() => {
    if (!open) return;

    const updateMenuPlacement = () => {
      const wrapper = wrapperRef.current;
      const menu = menuRef.current;

      if (!wrapper || !menu) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const menuHeight = menu.getBoundingClientRect().height;

      const gap = 7;
      const viewportPadding = 10;

      const spaceBelow =
        window.innerHeight -
        wrapperRect.bottom -
        viewportPadding;

      const spaceAbove =
        wrapperRect.top -
        viewportPadding;

      if (
        spaceBelow < menuHeight + gap &&
        spaceAbove >= menuHeight + gap
      ) {
        setMenuPlacement("up");
      } else {
        setMenuPlacement("down");
      }
    };

    const frame =
      window.requestAnimationFrame(updateMenuPlacement);

    window.addEventListener("resize", updateMenuPlacement);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(
        "resize",
        updateMenuPlacement
      );
    };
  }, [open, options.length]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        onBlur?.();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onBlur]);

  useEffect(() => {
    if (!open || !searchable) return;

    const frame = window.requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });

    return () =>
      window.cancelAnimationFrame(frame);
  }, [open, searchable]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles["book-demo-custom-dropdown"]} ${className}`}
    >
      <button
        type="button"
        className={
          styles["book-demo-custom-dropdown-trigger"]
        }
        onClick={() =>
          setOpen((current) => {
            const next = !current;

            onOpenChange?.(next);

            return next;
          })
        }
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span
          className={
            selected
              ? styles[
                  "book-demo-custom-dropdown-value"
                ]
              : styles[
                  "book-demo-custom-dropdown-placeholder"
                ]
          }
        >
          {selected
            ? renderValue
              ? renderValue(selected)
              : selected.label
            : placeholder}
        </span>

        <ChevronDownIcon
          className={`${styles["book-demo-custom-dropdown-chevron"]} ${
            open
              ? styles[
                  "book-demo-custom-dropdown-chevron-open"
                ]
              : ""
          }`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          className={`${styles["book-demo-custom-dropdown-menu"]} ${
            menuPlacement === "up"
              ? styles[
                  "book-demo-custom-dropdown-menu-up"
                ]
              : ""
          }`}
          role="listbox"
          aria-label={ariaLabel}
        >
          {searchable && (
            <div
              className={
                styles[
                  "book-demo-custom-dropdown-search-wrap"
                ]
              }
            >
              <input
                ref={searchInputRef}
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                className={
                  styles[
                    "book-demo-custom-dropdown-search"
                  ]
                }
                placeholder={searchPlaceholder}
                aria-label={`${ariaLabel} search`}
                autoComplete="off"
              />
            </div>
          )}

          <div
            className={
              styles[
                "book-demo-custom-dropdown-options"
              ]
            }
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={
                    option.value === value
                  }
                  className={`${styles["book-demo-custom-dropdown-option"]} ${
                    option.value === value
                      ? styles[
                          "book-demo-custom-dropdown-option-selected"
                        ]
                      : ""
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setSearchTerm("");
                    setOpen(false);
                    onBlur?.();
                  }}
                >
                  {renderValue
                    ? renderValue(option)
                    : option.label}
                </button>
              ))
            ) : (
              <span
                className={
                  styles[
                    "book-demo-custom-dropdown-no-results"
                  ]
                }
              >
                No countries found
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Validation / Time constants                                                */
/* -------------------------------------------------------------------------- */

const emailPattern =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

const COMMON_EMAIL_DOMAIN_TYPOS: Record<string, string> = {
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "yahoo.co": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "outlook.co": "outlook.com",
  "outlook.con": "outlook.com",
  "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "icloud.co": "icloud.com",
  "icloud.con": "icloud.com",
};

function validateEmailAddress(value: string) {
  const normalized = value.trim().toLowerCase();

  if (!emailPattern.test(normalized)) {
    return {
      valid: false,
      message: "Please enter a valid email address.",
    };
  }

  const [, domain = ""] = normalized.split("@");

  /*
   * Reject known incomplete / mistyped provider domains.
   * Example:
   * abc@gmail.co  -> invalid
   * abc@gmail.com -> valid
   */
  const suggestedDomain = COMMON_EMAIL_DOMAIN_TYPOS[domain];

  if (suggestedDomain) {
    return {
      valid: false,
      message: `Please enter the complete email address. Did you mean ${suggestedDomain}?`,
    };
  }

  /*
   * For common consumer providers, require their complete canonical domain.
   * This makes gmail.co, gmail.c, yahoo.co, outlook.co, etc. invalid even
   * when they otherwise satisfy the generic email syntax.
   */
  const commonProviderRules: Record<string, string> = {
    gmail: "gmail.com",
    yahoo: "yahoo.com",
    outlook: "outlook.com",
    hotmail: "hotmail.com",
    icloud: "icloud.com",
  };

  const domainParts = domain.split(".");
  const provider = domainParts[0] ?? "";
  const requiredDomain = commonProviderRules[provider];

  if (requiredDomain && domain !== requiredDomain) {
    return {
      valid: false,
      message: `Please enter the complete email address. Did you mean ${requiredDomain}?`,
    };
  }

  return {
    valid: true,
    message: "",
  };
}

const MAX_PHONE_DIGITS = 15;

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAY_LABELS = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
];

const HOUR_OPTIONS: NeumorphicOption[] =
  Array.from({ length: 24 }, (_, hour) => {
    const value = String(hour).padStart(2, "0");

    return {
      value,
      label: value,
    };
  });

const MINUTE_OPTIONS: NeumorphicOption[] = [
  { value: "00", label: "00" },
  { value: "05", label: "05" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
  { value: "25", label: "25" },
  { value: "30", label: "30" },
  { value: "35", label: "35" },
  { value: "40", label: "40" },
  { value: "45", label: "45" },
  { value: "50", label: "50" },
  { value: "55", label: "55" },
];

/* -------------------------------------------------------------------------- */
/* Time parsing                                                               */
/* -------------------------------------------------------------------------- */

function parseTimeValue(value: string) {
  const normalized = value.trim();

  /*
   * Canonical picker value:
   * HH : MM
   *
   * IMPORTANT:
   * Use \d, not \\d.
   */
  const twentyFourHourMatch =
    /^(\d{1,2})\s*:\s*(\d{2})$/.exec(
      normalized
    );

  if (twentyFourHourMatch) {
    const hour = Number(twentyFourHourMatch[1]);
    const minute = twentyFourHourMatch[2];

    if (
      hour >= 0 &&
      hour <= 23 &&
      Number(minute) >= 0 &&
      Number(minute) <= 59
    ) {
      return {
        hour: String(hour).padStart(2, "0"),
        minute,
      };
    }
  }

  /*
   * Backward-compatible legacy value:
   * HH : MM : AM/PM
   */
  const legacyMatch =
    /^(\d{1,2})\s*:\s*(\d{2})\s*:\s*(AM|PM)$/i.exec(
      normalized
    );

  if (legacyMatch) {
    let hour = Number(legacyMatch[1]);
    const minute = legacyMatch[2];
    const period =
      legacyMatch[3].toUpperCase();

    if (
      hour >= 1 &&
      hour <= 12 &&
      Number(minute) >= 0 &&
      Number(minute) <= 59
    ) {
      if (period === "AM") {
        hour = hour === 12 ? 0 : hour;
      } else {
        hour =
          hour === 12 ? 12 : hour + 12;
      }

      return {
        hour: String(hour).padStart(2, "0"),
        minute,
      };
    }
  }

  return {
    hour: "",
    minute: "",
  };
}

function formatTimeValue(
  hour: string,
  minute: string
) {
  if (!hour || !minute) return "";

  return `${hour.padStart(2, "0")} : ${minute}`;
}

/* -------------------------------------------------------------------------- */
/* Time Picker                                                                */
/* -------------------------------------------------------------------------- */

function TimePicker({
  value,
  onChange,
  onOpenChange,
  onBlur,
}: {
  value: string;
  onChange: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
  onBlur?: () => void;
}) {
  const initial = parseTimeValue(value);

  const [hour, setHour] = useState(
    initial.hour
  );

  const [minute, setMinute] = useState(
    initial.minute
  );

  useEffect(() => {
    if (!value.trim()) {
      setHour("");
      setMinute("");
      return;
    }

    const parsed = parseTimeValue(value);

    if (parsed.hour) {
      setHour(parsed.hour);
    }

    if (parsed.minute) {
      setMinute(parsed.minute);
    }
  }, [value]);

  const updatePart = (
    part: "hour" | "minute",
    nextValue: string
  ) => {
    const nextHour =
      part === "hour" ? nextValue : hour;

    const nextMinute =
      part === "minute"
        ? nextValue
        : minute;

    if (part === "hour") {
      setHour(nextValue);
    }

    if (part === "minute") {
      setMinute(nextValue);
    }

    if (nextHour && nextMinute) {
      onChange(
        formatTimeValue(
          nextHour,
          nextMinute
        )
      );
    }
  };

  return (
    <div
      className={
        styles["book-demo-time-picker"]
      }
    >
      <NeumorphicDropdown
        value={hour}
        placeholder="HH"
        ariaLabel="Hour (24-hour format)"
        onChange={(next) =>
          updatePart("hour", next)
        }
        onOpenChange={onOpenChange}
        onBlur={onBlur}
        className={
          styles["book-demo-time-part-hour"]
        }
        options={HOUR_OPTIONS}
      />

      <span
        className={
          styles["book-demo-time-separator"]
        }
        aria-hidden="true"
      >
        :
      </span>

      <NeumorphicDropdown
        value={minute}
        placeholder="MM"
        ariaLabel="Minute"
        onChange={(next) =>
          updatePart("minute", next)
        }
        onOpenChange={onOpenChange}
        onBlur={onBlur}
        className={
          styles["book-demo-time-part-minute"]
        }
        options={MINUTE_OPTIONS}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Date helpers                                                               */
/* -------------------------------------------------------------------------- */

function formatIso(
  year: number,
  month: number,
  day: number
) {
  const mm = String(month + 1).padStart(
    2,
    "0"
  );

  const dd = String(day).padStart(
    2,
    "0"
  );

  return `${year}-${mm}-${dd}`;
}

function formatDisplayDate(iso: string) {
  const [year, month, day] =
    iso.split("-").map(Number);

  return `${day} ${
    MONTH_NAMES[month - 1].slice(0, 3)
  } ${year}`;
}

type CalendarCell = {
  day: number;
  iso: string | null;
  currentMonth: boolean;
  isPast: boolean;
};

function getCalendarCells(
  year: number,
  month: number
): CalendarCell[] {
  const firstWeekday = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const daysInPrevMonth = new Date(
    year,
    month,
    0
  ).getDate();

  const startOfToday = new Date();

  startOfToday.setHours(
    0,
    0,
    0,
    0
  );

  const cells: CalendarCell[] = [];

  for (
    let i = firstWeekday - 1;
    i >= 0;
    i--
  ) {
    cells.push({
      day: daysInPrevMonth - i,
      iso: null,
      currentMonth: false,
      isPast: false,
    });
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    const cellDate = new Date(
      year,
      month,
      day
    );

    cells.push({
      day,
      iso: formatIso(
        year,
        month,
        day
      ),
      currentMonth: true,
      isPast:
        cellDate <= startOfToday,
    });
  }

  let trailingDay = 1;

  while (cells.length < 42) {
    cells.push({
      day: trailingDay,
      iso: null,
      currentMonth: false,
      isPast: false,
    });

    trailingDay += 1;
  }

  return cells;
}

/* -------------------------------------------------------------------------- */
/* Calendar                                                                   */
/* -------------------------------------------------------------------------- */

type NeumorphicCalendarProps = {
  panelId: string;
  selectedDate: string;
  viewYear: number;
  viewMonth: number;
  yearOptions: number[];
  todayIso: string;
  anchorRef: RefObject<
    HTMLButtonElement | null
  >;
  onSelectDate: (iso: string) => void;
  onViewMonthChange: (month: number) => void;
  onViewYearChange: (year: number) => void;
};

type CalendarPosition = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  placement:
    | "bottom"
    | "top"
    | "left"
    | "right";
};

function NeumorphicCalendar({
  panelId,
  selectedDate,
  viewYear,
  viewMonth,
  yearOptions,
  todayIso,
  anchorRef,
  onSelectDate,
  onViewMonthChange,
  onViewYearChange,
}: NeumorphicCalendarProps) {
  const cells = getCalendarCells(
    viewYear,
    viewMonth
  );

  const panelRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [position, setPosition] =
    useState<CalendarPosition | null>(
      null
    );

  const updatePosition = () => {
    const anchor = anchorRef.current;
    const panel = panelRef.current;

    if (!anchor || !panel) return;

    const rect =
      anchor.getBoundingClientRect();

    const viewportPadding = 12;
    const gap = 8;

    const isMobileViewport =
      window.innerWidth <= 480;

    if (isMobileViewport) {
      const mobileWidth = Math.min(
        330,
        window.innerWidth -
          viewportPadding * 2
      );

      const mobileMaxHeight =
        Math.max(
          220,
          Math.floor(
            window.innerHeight * 0.48
          )
        );

      const mobileTop = Math.max(
        viewportPadding,
        window.innerHeight -
          mobileMaxHeight -
          viewportPadding
      );

      setPosition({
        top: Math.round(mobileTop),
        left: viewportPadding,
        width: Math.round(
          mobileWidth
        ),
        maxHeight: Math.round(
          mobileMaxHeight
        ),
        placement: "bottom",
      });

      return;
    }

    const panelWidth = Math.min(
      330,
      Math.max(290, rect.width),
      window.innerWidth -
        viewportPadding * 2
    );

    const naturalHeight =
      panel.scrollHeight;

    const spaceBelow =
      window.innerHeight -
      rect.bottom -
      viewportPadding;

    const spaceAbove =
      rect.top -
      viewportPadding;

    const spaceRight =
      window.innerWidth -
      rect.right -
      viewportPadding;

    const spaceLeft =
      rect.left -
      viewportPadding;

    const datetimeRow =
      anchor.closest(
        "[data-book-demo-datetime-row]"
      );

    const phoneField =
      datetimeRow?.parentElement
        ?.previousElementSibling as
        | HTMLElement
        | null;

    const phoneFieldBottom =
      phoneField?.getBoundingClientRect()
        .bottom ?? 0;

    const safeSpaceAbove =
      Math.max(
        0,
        rect.top -
          Math.max(
            viewportPadding,
            phoneFieldBottom
          ) -
          gap
      );

    let top =
      rect.bottom + gap;

    let left = rect.left;

    let maxHeight = Math.max(
      160,
      window.innerHeight -
        viewportPadding * 2
    );

    let placement:
      CalendarPosition["placement"] =
      "bottom";

    if (
      spaceBelow >=
      naturalHeight + gap
    ) {
      top = rect.bottom + gap;
      left = rect.left;
      maxHeight = spaceBelow;
      placement = "bottom";
    } else if (
      safeSpaceAbove >=
      naturalHeight + gap
    ) {
      top =
        rect.top -
        naturalHeight -
        gap;

      left = rect.left;
      maxHeight = safeSpaceAbove;
      placement = "top";
    } else if (
      spaceRight >=
      panelWidth + gap
    ) {
      left =
        rect.right + gap;

      top = Math.max(
        viewportPadding,
        rect.top
      );

      maxHeight = Math.max(
        160,
        window.innerHeight -
          top -
          viewportPadding
      );

      placement = "right";
    } else if (
      spaceLeft >=
      panelWidth + gap
    ) {
      left =
        rect.left -
        panelWidth -
        gap;

      top = Math.max(
        viewportPadding,
        rect.top
      );

      maxHeight = Math.max(
        160,
        window.innerHeight -
          top -
          viewportPadding
      );

      placement = "left";
    } else {
      maxHeight = Math.max(
        160,
        window.innerHeight -
          viewportPadding * 2
      );

      left = Math.min(
        Math.max(
          viewportPadding,
          rect.left
        ),
        Math.max(
          viewportPadding,
          window.innerWidth -
            panelWidth -
            viewportPadding
        )
      );

      top = Math.min(
        Math.max(
          viewportPadding,
          rect.bottom + gap
        ),
        Math.max(
          viewportPadding,
          window.innerHeight -
            maxHeight -
            viewportPadding
        )
      );

      placement = "bottom";
    }

    setPosition({
      top: Math.round(top),
      left: Math.round(left),
      width: Math.round(
        panelWidth
      ),
      maxHeight: Math.round(
        maxHeight
      ),
      placement,
    });
  };

  useLayoutEffect(() => {
    const frame =
      window.requestAnimationFrame(
        updatePosition
      );

    const handleResize = () =>
      updatePosition();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.cancelAnimationFrame(
        frame
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [viewMonth, viewYear]);

  return (
    <div
      ref={panelRef}
      className={
        styles["book-demo-calendar-panel"]
      }
      role="dialog"
      aria-label="Choose a date"
      id={panelId}
      data-placement={
        position?.placement ??
        "bottom"
      }
      style={
        position
          ? {
              top: position.top,
              left: position.left,
              width: position.width,
              maxHeight:
                position.maxHeight,
            }
          : undefined
      }
    >
      <div
        className={
          styles[
            "book-demo-calendar-controls"
          ]
        }
      >
        <NeumorphicDropdown
          value={String(viewMonth)}
          placeholder="Month"
          ariaLabel="Month"
          onChange={(value) =>
            onViewMonthChange(
              Number(value)
            )
          }
          className={
            styles[
              "book-demo-calendar-dropdown"
            ]
          }
          options={MONTH_NAMES.map(
            (name, index) => ({
              value: String(index),
              label: name,
            })
          )}
        />

        <NeumorphicDropdown
          value={String(viewYear)}
          placeholder="Year"
          ariaLabel="Year"
          onChange={(value) =>
            onViewYearChange(
              Number(value)
            )
          }
          className={
            styles[
              "book-demo-calendar-dropdown"
            ]
          }
          options={yearOptions.map(
            (year) => ({
              value: String(year),
              label: String(year),
            })
          )}
        />
      </div>

      <div
        className={
          styles[
            "book-demo-calendar-scroll-area"
          ]
        }
      >
        <div
          className={
            styles[
              "book-demo-calendar-weekdays"
            ]
          }
        >
          {WEEKDAY_LABELS.map(
            (label) => (
              <span
                key={label}
                className={
                  styles[
                    "book-demo-calendar-weekday"
                  ]
                }
              >
                {label}
              </span>
            )
          )}
        </div>

        <div
          className={
            styles[
              "book-demo-calendar-grid"
            ]
          }
        >
          {cells.map(
            (cell, index) => {
              const isSelectable =
                cell.currentMonth &&
                !cell.isPast;

              const classNames = [
                styles[
                  "book-demo-calendar-day"
                ],
              ];

              if (
                !cell.currentMonth
              ) {
                classNames.push(
                  styles[
                    "book-demo-calendar-day-muted"
                  ]
                );
              }

              if (
                cell.iso ===
                selectedDate
              ) {
                classNames.push(
                  styles[
                    "book-demo-calendar-day-selected"
                  ]
                );
              }

              if (
                cell.iso ===
                todayIso
              ) {
                classNames.push(
                  styles[
                    "book-demo-calendar-day-today"
                  ]
                );
              }

              return (
                <button
                  key={index}
                  type="button"
                  className={classNames.join(
                    " "
                  )}
                  disabled={
                    !isSelectable
                  }
                  onClick={() =>
                    cell.iso &&
                    onSelectDate(
                      cell.iso
                    )
                  }
                >
                  {cell.day}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Book a Demo                                                                */
/* -------------------------------------------------------------------------- */

export default function BookADemo() {
  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [organizationName, setOrganizationName] =
    useState("");

  const [countryCode, setCountryCode] =
    useState("in");

  const [phone, setPhone] =
    useState("");

  const [dateValue, setDateValue] =
    useState("");

  const [timeValue, setTimeValue] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [consent, setConsent] = useState(false);

  const [
    isPrivacyPolicyOpen,
    setIsPrivacyPolicyOpen,
  ] = useState(false);

  const [touched, setTouched] =
    useState({
      fullName: false,
      email: false,
      organizationName: false,
      countryCode: false,
      phone: false,
      date: false,
      time: false,
    });

  /* ------------------------------------------------------------------------ */
  /* Current date / year logic                                                */
  /* ------------------------------------------------------------------------ */

  const now = new Date();

  const actualCurrentYear =
    now.getFullYear();

  const actualCurrentMonth =
    now.getMonth();

  const actualCurrentDay =
    now.getDate();

  const todayIso = formatIso(
    actualCurrentYear,
    actualCurrentMonth,
    actualCurrentDay
  );

  /*
   * YEAR LOGIC
   *
   * December 25 through December 31:
   *     active year = next year
   *     active month = January
   *
   * January 1 through December 24:
   *     active year = current year
   *     active month = current month
   *
   * Only ONE year is displayed in the year dropdown.
   */
  const isFinalSevenDaysOfYear =
    actualCurrentMonth === 11 &&
    actualCurrentDay >= 25;

  const displayYear =
    isFinalSevenDaysOfYear
      ? actualCurrentYear + 1
      : actualCurrentYear;

  const initialDisplayMonth =
    isFinalSevenDaysOfYear
      ? 0
      : actualCurrentMonth;

  const yearOptions = [displayYear];

  /* ------------------------------------------------------------------------ */
  /* Calendar state                                                           */
  /* ------------------------------------------------------------------------ */

  const [isCalendarOpen, setIsCalendarOpen] =
    useState(false);

  const [viewYear, setViewYear] =
    useState(displayYear);

  const [viewMonth, setViewMonth] =
    useState(initialDisplayMonth);

  const dateFieldRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const dateButtonRef =
    useRef<HTMLButtonElement | null>(
      null
    );

  /*
   * Keep the calendar synchronized with
   * the automatically calculated display year.
   *
   * This is especially important around
   * December 25 / January 1.
   */
  useEffect(() => {
    if (!dateValue) {
      setViewYear(displayYear);
      setViewMonth(initialDisplayMonth);
    }
  }, [
    displayYear,
    initialDisplayMonth,
    dateValue,
  ]);

  useEffect(() => {
    if (!isCalendarOpen) return;

    const handlePointerDown = (
      event: MouseEvent
    ) => {
      if (
        dateFieldRef.current &&
        !dateFieldRef.current.contains(
          event.target as Node
        )
      ) {
        setIsCalendarOpen(false);
      }
    };

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsCalendarOpen(false);
        dateButtonRef.current?.focus();
      }
    };

    document.addEventListener(
      "mousedown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isCalendarOpen]);

  /* ------------------------------------------------------------------------ */
  /* Validation                                                               */
  /* ------------------------------------------------------------------------ */

  const isFullNameValid =
    /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(
      fullName.trim()
    );

  const emailValidation =
    validateEmailAddress(email);

  const isEmailValid =
    emailValidation.valid;

  const isOrganizationNameValid =
    organizationName.trim().length >= 2;

  const isCountryCodeValid =
    countryCodeOptions.some(
      (option) =>
        option.id === countryCode
    );

  const normalizedPhone =
    phone
      .replace(/\D/g, "")
      .trim();

  const isPhoneValid =
    isCountryCodeValid &&
    normalizedPhone.length > 0 &&
    isValidPhoneNumber(
      normalizedPhone,
      countryCode.toUpperCase() as CountryCode
    );

  /*
   * Demo bookings can only be made
   * from tomorrow onward.
   */
  const isDateValid =
    dateValue.trim().length > 0 &&
    dateValue > todayIso;

  const isTimeValid =
    timeValue.trim().length > 0;

  const isMessageValid =
    message.trim().length > 0 &&
    message.length <= 250;

  const isMessageAtLimit =
    message.length === 250;

  const isFormValid =
    isFullNameValid &&
    isEmailValid &&
    isOrganizationNameValid &&
    isCountryCodeValid &&
    isPhoneValid &&
    isDateValid &&
    isTimeValid &&
    isMessageValid &&
    consent;

  const markTouched = (
    field: keyof typeof touched
  ) => {
    setTouched((current) => ({
      ...current,
      [field]: true,
    }));
  };

  /* ------------------------------------------------------------------------ */
  /* Calendar actions                                                         */
  /* ------------------------------------------------------------------------ */

  const toggleCalendar = () => {
    setIsCalendarOpen((open) => {
      const next = !open;

      if (next) {
        if (dateValue) {
          const [year, month] =
            dateValue
              .split("-")
              .map(Number);

          setViewYear(year);
          setViewMonth(month - 1);
        } else {
          /*
           * No selected date:
           * use the automatic current/next-year logic.
           */
          setViewYear(displayYear);
          setViewMonth(
            initialDisplayMonth
          );
        }
      }

      return next;
    });
  };

  const handleSelectDate = (
    iso: string
  ) => {
    /*
     * Prevent today and all past dates
     * even if the handler is triggered
     * programmatically.
     */
    if (iso <= todayIso) {
      return;
    }

    setDateValue(iso);
    setIsCalendarOpen(false);

    dateButtonRef.current?.focus();
  };

  /* ------------------------------------------------------------------------ */
  /* IDs                                                                      */
  /* ------------------------------------------------------------------------ */

  const nameId = useId();
  const emailId = useId();
  const organizationId = useId();
  const countryId = useId();
  const phoneId = useId();
  const dateId = useId();
  const timeId = useId();
  const messageId = useId();
  const consentId = useId();
  const headingId = useId();
  const calendarPanelId = useId();

  /* ------------------------------------------------------------------------ */
  /* Submit                                                                    */
  /* ------------------------------------------------------------------------ */

  const handleSubmit = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      organizationName: true,
      countryCode: true,
      phone: true,
      date: true,
      time: true,
    });

    if (!isFormValid) {
      return;
    }

    try {
      const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/email/book-demo`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: fullName.trim(),
      email: email.trim(),
      organizationName: organizationName.trim(),
      countryCode:
  countryCodeOptions.find(
    (option) => option.id === countryCode
  )?.dialCode ?? "",
phone: normalizedPhone,
      demoDate: dateValue,
      demoTime: timeValue,
      message: message.trim(),
      consent,
    }),
  }
);

      let responseData: unknown = null;

      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        const errorMessage =
          responseData &&
          typeof responseData === "object" &&
          "message" in responseData &&
          typeof responseData.message === "string"
            ? responseData.message
            : "Unable to submit the demo request.";

        throw new Error(errorMessage);
      }

      setFullName("");
      setEmail("");
      setOrganizationName("");
      setCountryCode("in");
      setPhone("");
      setDateValue("");
      setTimeValue("");
      setMessage("");
      setConsent(false);

      setTouched({
        fullName: false,
        email: false,
        organizationName: false,
        countryCode: false,
        phone: false,
        date: false,
        time: false,
      });

      window.alert("Demo request submitted successfully.");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to submit the demo request.";

      window.alert(errorMessage);
    }
  };

  return (
    <section
      className={
        styles["book-demo-section"]
      }
      aria-labelledby={headingId}
    >
      <div
        className={
          styles["book-demo-card"]
        }
      >
        <div
          className={
            styles["book-demo-header"]
          }
        >
          <h2
            className={
              styles["book-demo-title"]
            }
            id={headingId}
          >
            <span
              className={
                styles["book-demo-title-text"]
              }
            >
              Book a Demo
            </span>
          </h2>

          {/*
          <p className={styles["book-demo-subtitle"]}>
            <PresentationIcon
              className={
                styles["book-demo-subtitle-icon"]
              }
            />
            Schedule Your Personalized Demo
          </p>
          */}
        </div>

        <form
          className={
            styles["book-demo-form"]
          }
          onSubmit={handleSubmit}
        >
          <div
            className={
              styles["book-demo-name-email-row"]
            }
          >
          {/* ---------------------------------------------------------------- */}
          {/* Full Name                                                        */}
          {/* ---------------------------------------------------------------- */}

          <div
            className={
              styles["book-demo-field"]
            }
          >
            <label
              htmlFor={nameId}
              className={
                styles["book-demo-label"]
              }
            >
              Full Name
            </label>

            <div
              className={
                styles["book-demo-input-wrap"]
              }
            >
              <span
                className={
                  styles[
                    "book-demo-input-icon"
                  ]
                }
                aria-hidden="true"
              >
                <UserIcon />
              </span>

              <input
                id={nameId}
                type="text"
                className={
                  styles["book-demo-input"]
                }
                placeholder="Enter your name"
                value={fullName}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="words"
                onChange={(event) =>
                  setFullName(
                    event.target.value.replace(
                      /[^A-Za-z ]/g,
                      ""
                    )
                  )
                }
                onBlur={() =>
                  markTouched("fullName")
                }
                aria-invalid={
                  touched.fullName &&
                  !isFullNameValid
                }
                aria-describedby={
                  touched.fullName &&
                  !isFullNameValid
                    ? `${nameId}-error`
                    : undefined
                }
                required
              />
            </div>

            {touched.fullName &&
              !isFullNameValid && (
                <p
                  id={`${nameId}-error`}
                  className={
                    styles[
                      "book-demo-error"
                    ]
                  }
                  role="alert"
                >
                  Please enter your full name.
                </p>
              )}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Email                                                             */}
          {/* ---------------------------------------------------------------- */}

          <div
            className={
              styles["book-demo-field"]
            }
          >
            <label
              htmlFor={emailId}
              className={
                styles["book-demo-label"]
              }
            >
              Email Address
            </label>

            <div
              className={
                styles["book-demo-input-wrap"]
              }
            >
              <span
                className={
                  styles[
                    "book-demo-input-icon"
                  ]
                }
                aria-hidden="true"
              >
                <MailIcon />
              </span>

              <input
                id={emailId}
                type="email"
                className={
                  styles["book-demo-input"]
                }
                placeholder="Enter your email address"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                onBlur={() =>
                  markTouched("email")
                }
                aria-invalid={
                  touched.email &&
                  !isEmailValid
                }
                aria-describedby={
                  touched.email &&
                  !isEmailValid
                    ? `${emailId}-error`
                    : undefined
                }
                required
              />
            </div>

            {(touched.email ||
              (email.includes("@") && email.includes("."))) &&
              !isEmailValid && (
                <p
                  id={`${emailId}-error`}
                  className={
                    styles[
                      "book-demo-error"
                    ]
                  }
                  role="alert"
                >
                  {emailValidation.message}
                </p>
              )}
          </div>

          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Contact / Scheduling layout                                      */}
          {/* Phone + Date/Time on the left; Organization on the right.         */}
          {/* ---------------------------------------------------------------- */}

          <div className={styles["book-demo-contact-schedule-layout"]}>
            <div className={styles["book-demo-contact-schedule-left"]}>
              {/* ---------------------------------------------------------------- */}
                        {/* Phone                                                             */}
                        {/* ---------------------------------------------------------------- */}

                        <div
                          className={
                            styles["book-demo-field"]
                          }
                        >
                          <label
                            htmlFor={phoneId}
                            className={
                              styles["book-demo-label"]
                            }
                          >
                            Phone Number
                          </label>

                          <div
                            className={
                              styles[
                                "book-demo-phone-row"
                              ]
                            }
                          >
                            <div
                              className={
                                styles[
                                  "book-demo-country-wrap"
                                ]
                              }
                            >
                              <label
                                htmlFor={countryId}
                                className={
                                  styles["sr-only"]
                                }
                              >
                                Country code
                              </label>

                              <NeumorphicDropdown
                                value={countryCode}
                                placeholder="Select"
                                ariaLabel="Country code"
                                onChange={
                                  setCountryCode
                                }
                                onBlur={() =>
                                  markTouched(
                                    "countryCode"
                                  )
                                }
                                className={
                                  styles[
                                    "book-demo-country-dropdown"
                                  ]
                                }
                                searchable
                                searchPlaceholder="Search code"
                                options={countryCodeOptions.map(
                                  (option) => ({
                                    value: option.id,
                                    label: `${option.flag} ${option.dialCode} — ${option.label}`,
                                    searchText: `${option.label} ${option.id} ${option.dialCode}`,
                                  })
                                )}
                                renderValue={(option) => {
                                  const selectedCountry =
                                    countryCodeOptions.find(
                                      (country) =>
                                        country.id === option.value
                                    );

                                  return selectedCountry ? (
                                    <span
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      <span
                                        aria-hidden="true"
                                        className={`fi fi-${selectedCountry.id.toLowerCase()}`}
                                        style={{
                                          width: "22px",
                                          minWidth: "22px",
                                          height: "16px",
                                          borderRadius: "2px",
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                        }}
                                      />
                                      <span>
                                        {selectedCountry.dialCode}
                                      </span>
                                    </span>
                                  ) : (
                                    option.label
                                  );
                                }}
                              />
                            </div>

                            <div
                              className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-phone-wrap"]}`}
                            >
                              <span
                                className={
                                  styles[
                                    "book-demo-input-icon"
                                  ]
                                }
                                aria-hidden="true"
                              >
                                <PhoneIcon />
                              </span>

                              <input
                                id={phoneId}
                                type="tel"
                                className={
                                  styles[
                                    "book-demo-input"
                                  ]
                                }
                                placeholder="Enter phone number"
                                maxLength={
                                  MAX_PHONE_DIGITS
                                }
                                inputMode="numeric"
                                value={phone}
                                onChange={(event) =>
                                  setPhone(
                                    event.target.value
                                      .replace(/\D/g, "")
                                      .slice(
                                        0,
                                        MAX_PHONE_DIGITS
                                      )
                                  )
                                }
                                onBlur={() =>
                                  markTouched("phone")
                                }
                                aria-invalid={
                                  touched.phone &&
                                  !isPhoneValid
                                }
                                aria-describedby={
                                  touched.phone &&
                                  !isPhoneValid
                                    ? `${phoneId}-error`
                                    : undefined
                                }
                                required
                              />
                            </div>
                          </div>

                          {touched.countryCode &&
                            !isCountryCodeValid && (
                              <p
                                id={`${countryId}-error`}
                                className={
                                  styles[
                                    "book-demo-error"
                                  ]
                                }
                                role="alert"
                              >
                                Please select a country code.
                              </p>
                            )}

                          {touched.phone &&
                            !isPhoneValid && (
                              <p
                                id={`${phoneId}-error`}
                                className={
                                  styles[
                                    "book-demo-error"
                                  ]
                                }
                                role="alert"
                              >
                                Please enter a valid phone number for the selected country code.
                              </p>
                            )}
                        </div>

              {/* ---------------------------------------------------------------- */}
                        {/* Date and Time                                                    */}
                        {/* ---------------------------------------------------------------- */}

                        <div
                          className={
                            styles["book-demo-field"]
                          }
                        >
                          <label
                            htmlFor={dateId}
                            className={
                              styles["book-demo-label"]
                            }
                          >
                            Preferred Demo Date and Time
                          </label>

                          <div
                            className={
                              `${styles[
                                "book-demo-datetime-row"
                              ]} ${styles["book-demo-datetime-single-field"]}`
                            }
                            data-book-demo-datetime-row
                          >
                            {/* Date */}
                            <div
                              className={
                                styles["book-demo-date-wrap"]
                              }
                              ref={dateFieldRef}
                            >
                              <button
                                type="button"
                                id={dateId}
                                ref={dateButtonRef}
                                className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-date-trigger"]}`}
                                onClick={toggleCalendar}
                                onBlur={() =>
                                  markTouched("date")
                                }
                                aria-haspopup="dialog"
                                aria-expanded={
                                  isCalendarOpen
                                }
                                aria-controls={
                                  calendarPanelId
                                }
                                aria-invalid={
                                  touched.date &&
                                  !isDateValid
                                }
                                aria-describedby={
                                  touched.date &&
                                  !isDateValid
                                    ? `${dateId}-error`
                                    : undefined
                                }
                              >
                                <span
                                  className={
                                    styles[
                                      "book-demo-input-icon"
                                    ]
                                  }
                                  aria-hidden="true"
                                >
                                  <CalendarIcon />
                                </span>

                                <span
                                  className={`${styles["book-demo-input"]} ${styles["book-demo-date-display"]}${
                                    dateValue
                                      ? ""
                                      : ` ${styles["book-demo-date-placeholder"]}`
                                  }`}
                                >
                                  {dateValue
                                    ? formatDisplayDate(
                                        dateValue
                                      )
                                    : "Select date"}
                                </span>
                              </button>

                              {isCalendarOpen && (
                                <NeumorphicCalendar
                                  panelId={
                                    calendarPanelId
                                  }
                                  selectedDate={
                                    dateValue
                                  }
                                  anchorRef={
                                    dateButtonRef
                                  }
                                  viewYear={viewYear}
                                  viewMonth={viewMonth}
                                  yearOptions={
                                    yearOptions
                                  }
                                  todayIso={todayIso}
                                  onSelectDate={
                                    handleSelectDate
                                  }
                                  onViewMonthChange={
                                    setViewMonth
                                  }
                                  onViewYearChange={
                                    setViewYear
                                  }
                                />
                              )}
                            </div>

                            {/* Time */}
                            <div
                              className={`${styles["book-demo-input-wrap"]} ${styles["book-demo-time-wrap"]}`}
                            >
                              <span
                                className={
                                  styles[
                                    "book-demo-input-icon"
                                  ]
                                }
                                aria-hidden="true"
                              >
                                <ClockIcon />
                              </span>

                              <label
                                htmlFor={timeId}
                                className={
                                  styles["sr-only"]
                                }
                              >
                                Preferred time
                              </label>

                              <TimePicker
                                value={timeValue}
                                onChange={
                                  setTimeValue
                                }
                                onOpenChange={(
                                  open
                                ) => {
                                  if (open) {
                                    setIsCalendarOpen(
                                      false
                                    );
                                  }
                                }}
                                onBlur={() =>
                                  markTouched("time")
                                }
                              />
                            </div>
                          </div>

                          {touched.date &&
                            !isDateValid && (
                              <p
                                id={`${dateId}-error`}
                                className={
                                  styles[
                                    "book-demo-error"
                                  ]
                                }
                                role="alert"
                              >
                                Please select a date from tomorrow onward.
                              </p>
                            )}

                          {touched.time &&
                            !isTimeValid && (
                              <p
                                id={`${timeId}-error`}
                                className={
                                  styles[
                                    "book-demo-error"
                                  ]
                                }
                                role="alert"
                              >
                                Please select a time.
                              </p>
                            )}
                        </div>
            </div>

            <div className={styles["book-demo-organization-column"]}>
              {/* ---------------------------------------------------------------- */}
                        {/* Organization Name                                                */}
                        {/* ---------------------------------------------------------------- */}

                        <div className={styles["book-demo-field"]}>
                          <label
                            htmlFor={organizationId}
                            className={styles["book-demo-label"]}
                          >
                            Organization Name
                          </label>

                          <div className={styles["book-demo-input-wrap"]}>
                            <span
                              className={styles["book-demo-input-icon"]}
                              aria-hidden="true"
                            >
                              <UserIcon />
                            </span>

                            <textarea
                              id={organizationId}
                              className={`${styles["book-demo-textarea"]} ${styles["book-demo-organization-textarea"]}`}
                              placeholder="Enter organization name"
                              value={organizationName}
                              onChange={(event) => setOrganizationName(event.target.value)}
                              onBlur={() => markTouched("organizationName")}
                              aria-invalid={
                                touched.organizationName && !isOrganizationNameValid
                              }
                              aria-describedby={
                                touched.organizationName && !isOrganizationNameValid
                                  ? `${organizationId}-error`
                                  : undefined
                              }
                              rows={4}
                              required
                            />
                          </div>

                          {touched.organizationName && !isOrganizationNameValid && (
                            <p
                              id={`${organizationId}-error`}
                              className={styles["book-demo-error"]}
                              role="alert"
                            >
                              Please enter your organization name.
                            </p>
                          )}
                        </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Message                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div
            className={
              styles["book-demo-field"]
            }
          >
            <label
              htmlFor={messageId}
              className={
                styles["book-demo-label"]
              }
            >
              Message
            </label>

            <div
              className={
                styles[
                  "book-demo-textarea-wrap"
                ]
              }
            >
              <textarea
                id={messageId}
                className={
                  styles[
                    "book-demo-textarea"
                  ]
                }
                placeholder="Type your message here....."
                value={message}
                onChange={(event) =>
                  setMessage(
                    event.target.value.slice(
                      0,
                      250
                    )
                  )
                }
                maxLength={250}
                aria-describedby={`${messageId}-limit`}
                rows={5}
                required
              />

              <span
                id={`${messageId}-limit`}
                className={
                  styles[
                    "book-demo-message-count"
                  ]
                }
                aria-live="polite"
              >
                {250 - message.length}/250
              </span>

              {isMessageAtLimit && (
                <span
                  className={
                    styles[
                      "book-demo-message-limit"
                    ]
                  }
                  role="status"
                  aria-live="polite"
                >
                  Maximum character limit reached.
                </span>
              )}
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Consent                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div
            className={
              styles[
                "book-demo-consent-row"
              ]
            }
          >
            <span
              className={
                styles[
                  "book-demo-checkbox-wrap"
                ]
              }
            >
              <input
                id={consentId}
                type="checkbox"
                className={
                  styles[
                    "book-demo-checkbox-input"
                  ]
                }
                checked={consent}
                onChange={(event) =>
                  setConsent(event.target.checked)
                }
                aria-label="I agree to be contacted for the platform demo and accept the Privacy Policy of Prgeeq Global Solutions Private Limited."
                required
              />

              <span
                className={
                  styles[
                    "book-demo-checkbox-box"
                  ]
                }
                aria-hidden="true"
              >
                <CheckIcon
                  className={
                    styles[
                      "book-demo-check-icon"
                    ]
                  }
                />
              </span>
            </span>

            <p
              className={
                styles[
                  "book-demo-consent-text"
                ]
              }
            >
              I agree to be contacted for
              the platform demo and accept
              the{" "}
              <button
                type="button"
                className={
                  styles[
                    "book-demo-privacy-link"
                  ]
                }
                onClick={() =>
                  setIsPrivacyPolicyOpen(
                    true
                  )
                }
              >
                Privacy Policy
              </button>{" "}
              of{" "}
              <strong>
                Prgeeq Global Solutions Private Limited.
              </strong>
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Privacy Policy                                                    */}
          {/* ---------------------------------------------------------------- */}

          {isPrivacyPolicyOpen && (
            <div
              className={
                styles[
                  "book-demo-privacy-overlay"
                ]
              }
              role="presentation"
              onMouseDown={(event) => {
                if (
                  event.target ===
                  event.currentTarget
                ) {
                  setIsPrivacyPolicyOpen(
                    false
                  );
                }
              }}
            >
              <div
                className={
                  styles[
                    "book-demo-privacy-dialog"
                  ]
                }
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-policy-title"
                aria-describedby="privacy-policy-description"
              >
                <div
                  className={
                    styles[
                      "book-demo-privacy-header"
                    ]
                  }
                >
                  <div
                    className={
                      styles[
                        "book-demo-privacy-heading"
                      ]
                    }
                  >
                    <h3
                      id="privacy-policy-title"
                      className={
                        styles[
                          "book-demo-privacy-title"
                        ]
                      }
                    >
                      Privacy Policy
                    </h3>

                    <p
                      id="privacy-policy-description"
                      className={
                        styles[
                          "book-demo-privacy-description"
                        ]
                      }
                    >
                      Please review the privacy information below before continuing.
                    </p>
                  </div>

                  <button
                    type="button"
                    className={
                      styles[
                        "book-demo-privacy-close"
                      ]
                    }
                    onClick={() =>
                      setIsPrivacyPolicyOpen(
                        false
                      )
                    }
                    aria-label="Close privacy policy"
                  >
                    <CloseIcon
                      className={
                        styles[
                          "book-demo-privacy-close-icon"
                        ]
                      }
                    />
                  </button>
                </div>

                <div
                  className={
                    styles[
                      "book-demo-privacy-content"
                    ]
                  }
                >
                  <h3>
                    PRIVACY POLICY ACCEPTANCE
                  </h3>

                  <p>
                    By accessing or using the
                    Platform, I hereby provide
                    my explicit, informed, and
                    unconditional consent to{" "}
                    <strong>
                      PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED
                    </strong>{" "}
                    for the following:
                  </p>

                  <h4>
                    1.{" "}
                    <strong>
                      ACKNOWLEDGMENT
                    </strong>
                  </h4>

                  <p>
                    I have carefully read,
                    fully understood, and
                    voluntarily agree to be
                    bound by the Terms and
                    Conditions of{" "}
                    <strong>
                      PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED
                    </strong>
                    .
                  </p>

                  <h4>
                    2.{" "}
                    <strong>
                      DATA COLLECTION AND USAGE CONSENT
                    </strong>
                  </h4>

                  <p>
                    I confirm that I have read
                    and understood the Privacy
                    Policy and agree to its
                    terms.
                  </p>

                  <ul>
                    <li>
                      Identification details
                    </li>
                    <li>
                      Contact information
                    </li>
                    <li>
                      Usage data and activity
                      logs
                    </li>
                    <li>
                      Device and technical
                      data
                    </li>
                  </ul>

                  <h4>
                    3.{" "}
                    <strong>
                      DATA COLLECTION AND USAGE CONSENT
                    </strong>
                  </h4>

                  <p>
                    I consent to the collection
                    and processing of my personal
                    data, including but not
                    limited to:
                  </p>

                  <ul>
                    <li>
                      Account management and
                      authentication
                    </li>
                    <li>
                      Service delivery and
                      personalization
                    </li>
                    <li>
                      Communication and
                      notifications
                    </li>
                    <li>
                      Legal and regulatory
                      compliance
                    </li>
                    <li>
                      Security monitoring and
                      fraud prevention
                    </li>
                  </ul>

                  <h4>
                    4.{" "}
                    <strong>
                      DATA SECURITY DISCLAIMER
                    </strong>
                  </h4>

                  <ul>
                    <li>
                      The Company implements
                      reasonable technical and
                      organizational safeguards
                    </li>

                    <li>
                      However, I acknowledge
                      that no digital system is
                      completely secure
                    </li>

                    <li>
                      The Company shall not be
                      liable for data breaches
                      resulting from sophisticated
                      cyber-attacks beyond
                      reasonable control
                    </li>
                  </ul>

                  <h4>
                    5.{" "}
                    <strong>
                      PAYMENT AND FRAUD PREVENTION DISCLAIMER
                    </strong>
                  </h4>

                  <ul>
                    <li>
                      I understand that
                      payment-related
                      communications must be
                      verified through official
                      Company channels
                    </li>

                    <li>
                      The Company does not
                      accept responsibility for
                      losses due to fraudulent
                      payment requests or
                      impersonation
                    </li>
                  </ul>

                  <h4>
                    6.{" "}
                    <strong>
                      USER RIGHTS
                    </strong>
                  </h4>

                  <p>
                    Subject to applicable laws,
                    I understand I may:
                  </p>

                  <ul>
                    <li>
                      Access my data
                    </li>

                    <li>
                      Request correction or
                      deletion
                    </li>

                    <li>
                      Withdraw consent where
                      permissible
                    </li>
                  </ul>

                  <h4>
                    7.{" "}
                    <strong>
                      THIRD-PARTY SERVICES
                    </strong>
                  </h4>

                  <p>
                    I acknowledge that certain
                    services may involve
                    third-party providers, and
                    the Company is not responsible
                    for their independent
                    practices.
                  </p>

                  <h4>
                    8.{" "}
                    <strong>
                      CONSENT VALIDITY
                    </strong>
                  </h4>

                  <p>
                    This consent:
                  </p>

                  <ul>
                    <li>
                      Is legally binding
                    </li>

                    <li>
                      Remains valid until
                      withdrawn (subject to
                      legal obligations)
                    </li>

                    <li>
                      Applies to all Platform
                      interactions
                    </li>
                  </ul>

                  <p>
                    <strong>
                      MANDATORY CONSENT ACTIONS
                      (IMPLEMENTATION):
                    </strong>
                  </p>

                  <p>
                    I agree to the Privacy
                    Policy
                  </p>

                  <p>
                    I consent to data processing
                    as described
                  </p>

                  <p>
                    <strong>
                      OPTIONAL CONSENTS:
                    </strong>
                  </p>

                  <p>
                    I agree to receive marketing
                    communications
                  </p>

                  <p>
                    I accept use of cookies and
                    tracking technologies
                  </p>

                  <p>
                    <strong>
                      COMPANY DETAILS: PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED
                    </strong>
                  </p>

                  <p
                    className={
                      styles[
                        "book-demo-privacy-last-line"
                      ]
                    }
                  >
                    <strong>
                      Email:
                      contact@prgeeq.com
                    </strong>
                  </p>
                </div>

                <div
                  className={
                    styles[
                      "book-demo-privacy-footer"
                    ]
                  }
                >
                  <button
                    type="button"
                    className={
                      styles[
                        "book-demo-privacy-accept"
                      ]
                    }
                    onClick={() => {
                      setIsPrivacyPolicyOpen(
                        false
                      );

                      setConsent(false);
                    }}
                  >
                    Close &amp; Accept
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------------------- */}
          {/* Submit                                                            */}
          {/* ---------------------------------------------------------------- */}

          <button
            type="submit"
            className={
              styles["book-demo-submit"]
            }
            disabled={!isFormValid}
          >
            Book a Demo
          </button>
        </form>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Book a Demo Modal                                                          */
/* -------------------------------------------------------------------------- */

const BOOK_DEMO_MODAL_LAYOUT = `
/* Modal positioning stays in this component; existing form styles are preserved. */
[data-book-demo-modal-overlay][data-book-demo-modal-overlay] {
  position: fixed !important;
  inset: 0 !important;
  z-index: 2147483000 !important;
  width: 100% !important;
  max-width: none !important;
  height: 100vh !important;
  height: 100dvh !important;
  min-height: 0 !important;
  max-height: none !important;
  margin: 0 !important;
  padding: 16px !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  transform: none !important;
  isolation: isolate;
  overscroll-behavior: contain;
  background: rgba(25, 32, 51, 0.48);
}

[data-book-demo-modal-dialog][data-book-demo-modal-dialog] {
  position: relative !important;
  inset: auto !important;
  transform: none !important;
  margin: 0 !important;
  width: min(1080px, 100%) !important;
  max-width: 100% !important;
  min-width: 0 !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: 100% !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: visible !important;
  flex: 0 1 auto !important;
  background: #dfe6e9;
  border-radius: 20px;
}

[data-book-demo-modal-scroll][data-book-demo-modal-scroll] {
  position: relative !important;
  inset: auto !important;
  transform: none !important;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
  min-height: 0 !important;
  max-height: calc(100vh - 32px) !important;
  max-height: calc(100dvh - 32px) !important;
  margin: 0 !important;
  padding: 16px !important;
  box-sizing: border-box !important;
  flex: 1 1 auto !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  border-radius: inherit;
}

/* Keep the embedded form in normal flow so Submit is part of the scroll area. */
[data-book-demo-modal-scroll][data-book-demo-modal-scroll] > section {
  position: relative !important;
  inset: auto !important;
  transform: none !important;
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  height: auto !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

[data-book-demo-modal-close][data-book-demo-modal-close] {
  position: absolute !important;
  top: 10px !important;
  right: 10px !important;
  bottom: auto !important;
  left: auto !important;
  z-index: 10 !important;
  transform: none !important;
}

@media (max-width: 767px) {
  [data-book-demo-modal-overlay][data-book-demo-modal-overlay] { padding: 8px !important; }
  [data-book-demo-modal-scroll][data-book-demo-modal-scroll] {
    max-height: calc(100vh - 16px) !important;
    max-height: calc(100dvh - 16px) !important;
    padding: 12px !important;
  }
}
`;

function BookDemoModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef(onClose);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  // Render outside every page section, transformed wrapper, and footer.
  // Waiting for mount keeps document access safe during Next.js rendering.
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useEffect(() => {
    if (!portalTarget) return;

    const previouslyFocused = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    const alreadyModalOpen = document.body.classList.contains("modal-open");

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    dialogRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === "Escape") {
        closeRef.current();
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const controls = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.getClientRects().length > 0 && !element.closest('[inert]'));
      const first = controls[0];
      const last = controls[controls.length - 1];

      if (!first) {
        event.preventDefault();
        dialog.focus();
      } else if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (!alreadyModalOpen) document.body.classList.remove("modal-open");
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [portalTarget]);

  if (!portalTarget) return null;

  return createPortal(
    <div
      className={styles["book-demo-modal-overlay"]} data-book-demo-modal-overlay="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeRef.current();
      }}
    >
      <style>{BOOK_DEMO_MODAL_LAYOUT}</style>
      <div
        className={styles["book-demo-modal-dialog"]} data-book-demo-modal-dialog="true"
        role="dialog"
        aria-modal="true"
        aria-label="Book a demo"
        ref={dialogRef}
        tabIndex={-1}
      >
        <button
          type="button"
          className={styles["book-demo-modal-close"]} data-book-demo-modal-close="true"
          onClick={onClose}
          aria-label="Close book a demo form"
        >
          <CloseIcon className={styles["book-demo-modal-close-icon"]} />
        </button>
        <div className={styles["book-demo-modal-scroll"]} data-book-demo-modal-scroll="true">
          <BookADemo />
        </div>
      </div>
    </div>,
    portalTarget
  );
}

/* -------------------------------------------------------------------------- */
/* Book Demo Trigger                                                          */
/* -------------------------------------------------------------------------- */

export function BookDemoTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() =>
          setIsOpen(true)
        }
      >
        {children}
      </button>

      {isOpen && (
        <BookDemoModal
          onClose={() =>
            setIsOpen(false)
          }
        />
      )}
    </>
  );
}

export { BookDemoModal };