import type { ReactNode } from "react";
import Image from "next/image";
import { ACCENT, NAVY } from "@/lib/theme";
import { type } from "@/lib/typography";

export type PageHeroDesktopVariant = "white" | "navy";

export type PageHeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition?: string;
  desktopVariant?: PageHeroDesktopVariant;
  priority?: boolean;
};

/** Eyebrow label + accent line (inner pages). Navy on mobile, inherits on desktop. */
export function HeroEyebrowLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`${type.eyebrow} text-[#001C55] lg:text-inherit`}>
        {children}
      </span>
      <span className="w-8 h-[3px] shrink-0" style={{ backgroundColor: ACCENT }} aria-hidden />
    </div>
  );
}

/** CTA that matches home primary on mobile; navy-outline on mobile, white-outline on navy desktop. */
export function HeroOutlineButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border-2 border-[#001C55] text-[#001C55] hover:bg-[#f4f5f7] lg:border-white lg:text-white lg:hover:bg-white/10 ${type.btn} px-6 py-3 rounded-md transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  imageSrc,
  imageAlt,
  imageObjectPosition = "center",
  desktopVariant = "navy",
  priority = true,
}: PageHeroProps) {
  const isWhite = desktopVariant === "white";
  const objectPositionStyle = { objectPosition: imageObjectPosition };
  /** Crop to fill — preserves aspect ratio (no stretch) */
  const heroImageClass = "object-cover";

  return (
    <section
      className={
        isWhite
          ? "relative flex flex-col justify-center pt-24 pb-12 min-h-[min(80vh,680px)] sm:min-h-[min(85vh,720px)] md:min-h-[min(88vh,820px)] md:pt-28 md:pb-0 max-md:bg-transparent bg-white overflow-hidden"
          : "relative flex flex-col pt-24 pb-8 lg:pt-0 lg:pb-0 lg:h-[420px] bg-white overflow-hidden"
      }
    >
      {/* Home hero: small screens — image background + dark overlay for readable text */}
      {isWhite ? (
        <div className="absolute inset-0 md:hidden z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className={heroImageClass}
            style={{ objectPosition: "center center" }}
            priority={priority}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 12, 40, 0.45) 0%, rgba(0, 12, 40, 0.68) 42%, rgba(0, 12, 40, 0.88) 100%)",
            }}
            aria-hidden
          />
        </div>
      ) : null}

      {/* Home hero: medium+ — diagonal image (narrower = wider white section) */}
      {isWhite ? (
        <div
          className="absolute right-0 top-0 bottom-0 w-[52%] xl:w-[48%] hidden md:block z-0 overflow-hidden"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 58vw"
            className={heroImageClass}
            style={objectPositionStyle}
            priority={priority}
          />
        </div>
      ) : (
        <>
          <div className="absolute right-0 top-0 bottom-0 hidden lg:block w-[58%] z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="58vw"
              className="object-cover object-center"
            />
          </div>
          <div
            className="absolute inset-y-0 left-0 z-10 hidden lg:block w-[52%]"
            style={{
              background: NAVY,
              clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)",
            }}
          />
        </>
      )}

      <div
        className={`container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10 ${
          isWhite ? "" : "lg:h-full lg:flex lg:items-center lg:pt-24"
        }`}
      >
        <div
          className={
            isWhite
              ? "grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center"
              : "flex flex-col lg:block"
          }
        >
          <div
            className={
              isWhite
                ? "w-full md:col-span-7 xl:col-span-6 flex flex-col items-center md:items-start text-center md:text-left max-w-none relative z-10 text-white md:text-[#001C55] max-md:[text-shadow:0_2px_8px_rgba(0,0,0,0.9)]"
                : "max-w-xl lg:max-w-lg text-left text-[#001C55] lg:text-white"
            }
          >
            {eyebrow ? (
              <div className={`[&>*]:mb-0 ${isWhite ? "w-full flex justify-center md:block md:w-auto" : ""}`}>
                {eyebrow}
              </div>
            ) : null}

            <div
              className={
                isWhite
                  ? "[&_h1]:text-white [&_h1]:break-words [&_h1]:text-center [&_h1]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] md:[&_h1]:drop-shadow-none md:[&_h1]:text-left md:[&_h1]:text-[#001C55] [&_h2]:text-white md:[&_h2]:text-[#001C55] [&_h3]:text-white md:[&_h3]:text-[#001C55]"
                  : "[&_h1]:text-[#001C55] lg:[&_h1]:text-white [&_h2]:text-[#001C55] lg:[&_h2]:text-white [&_h3]:text-[#001C55] lg:[&_h3]:text-white"
              }
            >
              {title}
            </div>

            {description ? (
              <div
                className={`mt-4 md:mt-5 ${type.body} w-full max-w-none md:max-w-md text-white md:text-[#4a5568] ${
                  !isWhite ? "lg:text-white/90" : ""
                }`}
              >
                {description}
              </div>
            ) : null}

            {actions ? (
              <div
                className={`mt-6 md:mt-7 flex flex-wrap gap-3 items-center w-full ${
                  isWhite ? "justify-center md:justify-start" : ""
                }`}
              >
                {actions}
              </div>
            ) : null}
          </div>

          {/* Spacer for diagonal layout (md+) — home uses bg image on small instead */}
          {isWhite ? (
            <div className="hidden md:block md:col-span-5 xl:col-span-6 relative w-full">
              <div className="w-full h-[min(72vh,640px)]" aria-hidden />
            </div>
          ) : (
            <div className="w-full mt-8 lg:mt-0">
              <div className="w-full lg:hidden relative h-[280px] sm:h-[340px] overflow-hidden border border-[#e8eaed]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={priority}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
