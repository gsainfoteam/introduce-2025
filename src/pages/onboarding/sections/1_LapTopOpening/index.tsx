import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useAtom } from "jotai";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import LapTopBottomImage from "src/assets/laptop/laptop-bottom.png";
import LapTopCoverImage from "src/assets/laptop/laptop-cover-b.svg";
import LapTopTopImage from "src/assets/laptop/laptop-top.png";
import { navbarStateAtom } from "src/store/atoms";

import styles from "./LapTopOpening.module.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const LapTopOpening = () => {
  const { t } = useTranslation("main");

  const macbookRef = useRef<HTMLDivElement>(null);
  const laptopTopRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const [, setNavbarState] = useAtom(navbarStateAtom);

  const SCROLL_TRIGGER_ID = "laptopScroller";

  useGSAP(() => {
    ScrollTrigger.defaults({
      markers: false,
    });

    const macbook = gsap.timeline({
      scrollTrigger: {
        trigger: macbookRef.current,
        scrub: true,
        start: "100% bottom",
        end: "200% top",
        pin: true,
        id: SCROLL_TRIGGER_ID,
      },
    });

    macbook
      .to(laptopTopRef.current, {
        transform: "translate3d(0, 0, 0) rotateX(0deg)",
        ease: "power2.in",
      })
      .to(mockupRef.current, {
        scale: 5.3,
        ease: "power2.in",
      });

    macbook.to(
      screenRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "-=0.5",
    );

    macbook.to(
      macbookRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "-=0.2",
    );

    macbook.call(
      () => {
        const st = ScrollTrigger.getById(SCROLL_TRIGGER_ID);
        if (st) {
          if (st.direction > 0) {
            setNavbarState({ mode: "light", hasBackground: true });
          } else {
            setNavbarState({ mode: "dark", hasBackground: false });
          }
        }
      },
      undefined,
      "-=0.2",
    );

    return () => {
      macbook.kill();
      ScrollTrigger.getById(SCROLL_TRIGGER_ID)?.kill();
    };
  });

  return (
    <>
      <main className="relative h-screen">
        <div className={`${styles.macbook} `} ref={macbookRef}>
          <div className="bg-gradient-to-b from-[#3F3F3F] to-dark to-80% absolute left-0 top-0 w-full h-full flex" />
          <div
            className={`${styles.mockup} ${styles.loaded} ${styles.opened} *:px-[10%] *:md:px-0`}
            ref={mockupRef}
          >
            <div className={`${styles.part} ${styles.top}`} ref={laptopTopRef}>
              <img
                src={LapTopTopImage}
                alt="LapTop"
                className={`${styles.top} px-[10%] md:px-0 translate-z-1 md:translate-z-0`}
              />
              <div className={`${styles.cover} relative`}>
                <img src={LapTopCoverImage} alt="" />
              </div>

              <div
                className={`${styles.screen} px-[10%] md:px-0 top-[5%] left-[1.5%] right-[1.5%] md:top-[4%] md:left-[3%] md:right-[3%]`}
              >
                <div
                  className="w-full h-full bg-white opacity-0 rounded-md"
                  ref={screenRef}
                />
              </div>

              <h1
                className={`${styles.pTitle} text-5xl md:text-6xl text-white rotate-x-90 -translate-z-[80px] md:-translate-z-[100px]`}
              >
                {t("onboarding.introduction.infoteamIs")}
              </h1>
            </div>
            <div
              className={`${styles.part} ${styles.bottom} scale-80 md:scale-100`}
            >
              <img src={LapTopCoverImage} alt="" className={styles.cover} />
              <img src={LapTopBottomImage} alt="" className={styles.bottom} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LapTopOpening;
