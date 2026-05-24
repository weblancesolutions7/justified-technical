import type { ReactNode } from "react";
import Image from "next/image";
import { siteContainerClass } from "@/lib/layout";
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

/** Eyebrow — white on full-bleed (mobile + tablet); desktop colors from lg. */
export function HeroEyebrowLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
      <span
        className={`${type.eyebrow} text-white lg:text-inherit max-lg:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)]`}
      >
        {children}
      </span>
      <span className="w-8 h-[3px] shrink-0" style={{ backgroundColor: ACCENT }} aria-hidden />
    </div>
  );
}

/** CTA — white outline on full-bleed (mobile + tablet); desktop styles from lg. */
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
      className={`inline-flex items-center gap-2 border-2 ${type.btn} px-6 py-3 rounded-md transition-colors max-lg:border-white max-lg:text-white max-lg:hover:bg-white/10 max-lg:shadow-[0_2px_8px_rgba(0,0,0,0.35)] lg:border-white lg:text-white lg:hover:bg-white/10 ${className}`}
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
  const isHome = desktopVariant === "white";
  const isNavyDesktop = desktopVariant === "navy";
  const objectPositionStyle = { objectPosition: imageObjectPosition };
  const heroImageClass = "object-cover";

  const sectionClass = isHome
    ? "relative flex flex-col justify-center pt-24 pb-12 min-h-[min(80vh,680px)] sm:min-h-[min(85vh,720px)] max-lg:bg-transparent bg-white overflow-hidden lg:min-h-[min(88vh,820px)] lg:pt-28 lg:pb-0"
    : "relative flex flex-col justify-center pt-24 pb-12 min-h-[min(80vh,680px)] sm:min-h-[min(85vh,720px)] max-lg:bg-transparent bg-white overflow-hidden lg:justify-start lg:pt-0 lg:pb-0 lg:min-h-[500px] xl:min-h-[520px] 2xl:min-h-[540px]";

  const contentClass = isHome
    ? "w-full lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left max-w-none relative z-10 text-white lg:text-[#001C55] max-lg:[text-shadow:0_2px_8px_rgba(0,0,0,0.9)]"
    : "w-full lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left max-w-none relative z-10 text-white max-lg:[text-shadow:0_2px_8px_rgba(0,0,0,0.9)] lg:text-white min-w-0";

  const titleClass = isHome
    ? "[&_h1]:text-white [&_h1]:break-words [&_h1]:text-center [&_h1]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] lg:[&_h1]:drop-shadow-none lg:[&_h1]:text-left lg:[&_h1]:text-[#001C55] [&_h2]:text-white lg:[&_h2]:text-[#001C55] [&_h3]:text-white lg:[&_h3]:text-[#001C55]"
    : "[&_h1]:break-words [&_h1]:text-white [&_h1]:text-center [&_h1]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] lg:[&_h1]:text-left lg:[&_h1]:drop-shadow-none [&_h2]:text-white [&_h3]:text-white";

  const descriptionClass = isHome
    ? `mt-4 lg:mt-5 ${type.body} w-full max-w-none lg:max-w-md text-white lg:text-[#4a5568]`
    : `mt-4 lg:mt-5 ${type.body} w-full max-w-none lg:max-w-md text-white lg:text-white/90`;

  const actionsClass =
    "mt-6 lg:mt-7 flex flex-wrap gap-3 items-center w-full justify-center lg:justify-start";

  const eyebrowWrapClass = "w-full flex justify-center lg:justify-start lg:w-auto [&>*]:mb-0";

  return (
    <section className={sectionClass}>
      {/* Full-bleed background + gradient — mobile & tablet (below lg) */}
      <div className="absolute inset-0 lg:hidden z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={heroImageClass}
          style={{ objectPosition: isHome ? "center center" : objectPositionStyle.objectPosition }}
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

      {/* Home desktop — diagonal image from lg */}
      {isHome ? (
        <div
          className="absolute right-0 top-0 bottom-0 w-[52%] xl:w-[48%] hidden lg:block z-0 overflow-hidden"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw"
            className={heroImageClass}
            style={objectPositionStyle}
            priority={priority}
          />
        </div>
      ) : null}

      {/* Inner pages desktop — navy diagonal from lg */}
      {isNavyDesktop ? (
        <>
          <div className="absolute right-0 top-0 bottom-[-2px] hidden lg:block lg:w-[58%] xl:w-[56%] 2xl:w-[54%] z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 58vw"
              className="object-cover object-center"
            />
          </div>
          <div
            className="absolute top-0 bottom-[-2px] left-0 z-10 hidden lg:block lg:w-[56%] xl:w-[54%] 2xl:w-[52%] lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)] xl:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] 2xl:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]"
            style={{ background: NAVY }}
            aria-hidden
          />
        </>
      ) : null}

      <div
        className={`${siteContainerClass} relative z-20 ${
          isNavyDesktop ? "lg:pt-24 lg:pb-10" : ""
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
          <div className={contentClass}>
            {eyebrow ? <div className={eyebrowWrapClass}>{eyebrow}</div> : null}

            <div className={titleClass}>{title}</div>

            {description ? <div className={descriptionClass}>{description}</div> : null}

            {actions ? <div className={actionsClass}>{actions}</div> : null}
          </div>

          {isHome ? (
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 relative w-full">
              <div className="w-full h-[min(72vh,640px)]" aria-hidden />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
