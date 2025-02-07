import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import LapTopBottomImage from "src/assets/laptop/laptop-bottom.png";
import LapTopCoverImage from "src/assets/laptop/laptop-cover-b.svg";
import LapTopTopImage from "src/assets/laptop/laptop-top.png";

import styles from "./LapTopOpening.module.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const LapTopOpening = () => {
  const macbookRef = useRef<HTMLDivElement>(null);
  const laptopTopRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.defaults({
      markers: true,
    });

    const macbook = gsap.timeline({
      scrollTrigger: {
        trigger: macbookRef.current,
        scrub: true,
        start: "100% bottom",
        end: "200% top",
        pin: true,
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
  });

  return (
    <>
      <main className="relative h-screen">
        <div className={styles.macbook} ref={macbookRef}>
          <div className="bg-gradient-to-b from-[#3F3F3F] to-dark to-80% absolute left-0 top-0 w-full h-full flex" />
          <div
            className={`${styles.mockup} ${styles.loaded} ${styles.opened}`}
            ref={mockupRef}
          >
            <div className={`${styles.part} ${styles.top}`} ref={laptopTopRef}>
              <img src={LapTopTopImage} alt="LapTop" className={styles.top} />
              <img src={LapTopCoverImage} alt="" className={styles.cover} />

              <h1 className={styles.pTitle}>인포팀은</h1>
            </div>
            <div className={`${styles.part} ${styles.bottom}`}>
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
