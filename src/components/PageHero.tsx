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
    <div className="flex items-center gap-3.5 mb-4 justify-center lg:justify-start">
      <span
        className="type-eyebrow text-sm sm:text-[0.95rem] md:text-base font-extrabold text-white lg:text-inherit max-lg:[text-shadow:0_1px_4px_rgba(0,0,0,0.85)] tracking-[0.22em]"
      >
        {children}
      </span>
      <span className="w-10 h-[3.5px] shrink-0" style={{ backgroundColor: ACCENT }} aria-hidden />
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
    ? "relative flex flex-col justify-center pt-28 pb-20 min-h-[min(85vh,740px)] sm:min-h-[min(90vh,800px)] lg:min-h-[min(95vh,900px)] bg-[#001C55] overflow-hidden"
    : "relative flex flex-col justify-center pt-24 pb-12 min-h-[min(80vh,680px)] sm:min-h-[min(85vh,720px)] max-lg:bg-transparent bg-white overflow-hidden lg:justify-start lg:pt-0 lg:pb-0 lg:min-h-[500px] xl:min-h-[520px] 2xl:min-h-[540px]";

  const contentClass = isHome
    ? "w-full lg:col-span-12 flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 text-white"
    : "w-full lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left max-w-none relative z-10 text-white max-lg:[text-shadow:0_2px_8px_rgba(0,0,0,0.9)] lg:text-white min-w-0";

  const titleClass = isHome
    ? "[&_h1]:text-white [&_h1]:break-words [&_h1]:text-center [&_h1]:font-extrabold [&_h1]:uppercase [&_h1]:text-shadow-hero [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:md:text-5xl [&_h1]:lg:text-[3.75rem] [&_h1]:leading-[1.1] [&_h2]:text-white [&_h3]:text-white"
    : "[&_h1]:break-words [&_h1]:text-white [&_h1]:text-center [&_h1]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] lg:[&_h1]:text-left lg:[&_h1]:drop-shadow-none [&_h2]:text-white [&_h3]:text-white";

  const descriptionClass = isHome
    ? `mt-5 ${type.body} w-full max-w-2xl mx-auto text-white/90 text-center text-shadow-hero text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed`
    : `mt-4 lg:mt-5 ${type.body} w-full max-w-none lg:max-w-md text-white lg:text-white/90`;

  const actionsClass = isHome
    ? "mt-8 flex flex-wrap gap-4 md:gap-6 items-center w-full justify-center"
    : "mt-6 lg:mt-7 flex flex-wrap gap-3 items-center w-full justify-center lg:justify-start";

  const eyebrowWrapClass = isHome
    ? "w-full flex justify-center mb-4 [&>*]:mb-0"
    : "w-full flex justify-center lg:justify-start lg:w-auto [&>*]:mb-0";

  return (
    <section className={sectionClass}>
      {/* Background image container */}
      {isHome ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
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
                "radial-gradient(circle, rgba(0, 35, 110, 0.22) 0%, rgba(0, 15, 50, 0.48) 100%), linear-gradient(180deg, rgba(0, 35, 110, 0.25) 0%, rgba(0, 15, 50, 0.55) 100%)",
            }}
            aria-hidden
          />
        </div>
      ) : (
        /* Full-bleed background + gradient — mobile & tablet (below lg) */
        <div className="absolute inset-0 lg:hidden z-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className={heroImageClass}
            style={{ objectPosition: imageObjectPosition }}
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
      )}

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
        className={`${siteContainerClass} relative z-20 ${isNavyDesktop ? "lg:pt-24 lg:pb-10" : ""
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
          <div className={contentClass}>
            {eyebrow ? <div className={eyebrowWrapClass}>{eyebrow}</div> : null}

            <div className={titleClass}>{title}</div>

            {description ? <div className={descriptionClass}>{description}</div> : null}

            {actions ? <div className={actionsClass}>{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
