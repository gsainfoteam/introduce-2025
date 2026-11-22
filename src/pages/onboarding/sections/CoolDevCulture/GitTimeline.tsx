import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CSSProperties, ReactNode, useRef, useSyncExternalStore } from "react";
import { Trans, useTranslation } from "react-i18next";

import boseong from "./assets/avatars/boseong.png";
import dohyun from "./assets/avatars/dohyun.png";
import jinseo from "./assets/avatars/jinseo.png";
import jumyung from "./assets/avatars/jumyung.png";
import yejin from "./assets/avatars/yejin.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ORANGE = "#ff9340";
const GREEN = "#6bcb2a";
const BORDER = "#dcdcdc";

type MessageId = "m1" | "m2" | "m3" | "m4" | "m5" | "m6" | "m7";

const AVATARS: Record<MessageId, string> = {
  m1: jinseo,
  m2: dohyun,
  m3: dohyun,
  m4: yejin,
  m5: jumyung,
  m6: dohyun,
  m7: boseong,
};

type Card =
  | { kind: "message"; id: MessageId; right: number; top: number }
  | { kind: "issue" | "pr"; right: number; top: number };

interface Layout {
  width: number;
  height: number;
  /** 모든 좌표는 디자인 기준 px 이고, 렌더링 시 em 으로 환산되어 컨테이너 폭에 비례한다. */
  orangeX: number;
  /** 선 끝이 투명해지는 그라데이션 길이 */
  fade: number;
  greenX: number;
  mainY: number;
  issueY: number;
  mergedY: number;
  greenNodes: number[];
  greenPath: string;
  labels: { text: string; x: number; y: number; dashFrom: number }[];
  dashes: { x1: number; y1: number; x2: number; y2: number }[];
  cards: Card[];
  /** 메시지 카드의 크기 (데스크톱/모바일이 다르다) */
  metrics: {
    avatar: number;
    padX: number;
    textX: number;
    padTop: number;
    name: number;
    time: number;
    body: number;
    lineHeight: number;
    fullWidth: boolean;
  };
}

// en 시안 기준 (en 이 ko 보다 가로가 넓고, 카드 오른쪽 끝은 두 언어에서 동일하다)
const DESKTOP: Layout = {
  width: 1690,
  height: 2000,
  orangeX: 1242,
  fade: 160,
  greenX: 1030,
  mainY: 182,
  issueY: 509,
  mergedY: 1969,
  greenNodes: [800, 997, 1183, 1668],
  greenPath:
    "M1242 530 C1242 650 1030 660 1030 770 L1030 1668 C1030 1790 1242 1800 1242 1905",
  labels: [
    { text: "main", x: 1357, y: 182, dashFrom: 1282 },
    { text: "71-detail-page", x: 1357, y: 800, dashFrom: 1062 },
    { text: "merged!", x: 1357, y: 1969, dashFrom: 1282 },
  ],
  dashes: [{ x1: 1063, y1: 338, x2: 1063, y2: 457 }],
  cards: [
    { kind: "message", id: "m1", right: 1115, top: 1 },
    { kind: "message", id: "m2", right: 1115, top: 197 },
    { kind: "issue", right: 1115, top: 457 },
    { kind: "message", id: "m3", right: 960, top: 746 },
    { kind: "message", id: "m4", right: 960, top: 942 },
    { kind: "message", id: "m5", right: 960, top: 1133 },
    { kind: "pr", right: 960, top: 1446 },
    { kind: "message", id: "m6", right: 960, top: 1561 },
    { kind: "message", id: "m7", right: 960, top: 1714 },
  ],
  metrics: {
    avatar: 78,
    padX: 28,
    textX: 124,
    padTop: 26,
    name: 32,
    time: 24,
    body: 28,
    lineHeight: 40,
    fullWidth: false,
  },
};

const MOBILE: Layout = {
  width: 599,
  height: 2000,
  orangeX: 554,
  fade: 110,
  greenX: 395,
  mainY: 342,
  issueY: 586,
  mergedY: 1706,
  greenNodes: [808, 1490],
  greenPath:
    "M554 600 C554 710 395 700 395 790 L395 1490 C395 1590 554 1590 554 1670",
  labels: [
    { text: "main", x: 412, y: 342, dashFrom: 0 },
    { text: "71-detail-page", x: 103, y: 808, dashFrom: 0 },
  ],
  dashes: [
    { x1: 400, y1: 586, x2: 530, y2: 586 },
    { x1: 502, y1: 1706, x2: 530, y2: 1706 },
  ],
  cards: [
    { kind: "message", id: "m1", right: 599, top: 0 },
    { kind: "message", id: "m2", right: 599, top: 158 },
    { kind: "issue", right: 398, top: 548 },
    { kind: "message", id: "m3", right: 599, top: 915 },
    { kind: "message", id: "m4", right: 599, top: 1101 },
    { kind: "message", id: "m5", right: 599, top: 1255 },
    { kind: "pr", right: 500, top: 1668 },
    { kind: "message", id: "m6", right: 599, top: 1764 },
    { kind: "message", id: "m7", right: 599, top: 1890 },
  ],
  metrics: {
    avatar: 58,
    padX: 21,
    textX: 93,
    padTop: 17,
    name: 24,
    time: 18,
    body: 21,
    lineHeight: 29,
    fullWidth: true,
  },
};

/** 디자인 기준 px 을 컨테이너 폭에 비례하는 길이로 환산한다. (em 과 달리 요소 자신의 font-size 에 영향받지 않는다) */
const em = (px: number) => `calc(${px} * var(--u))`;

const BranchIcon = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 16 16"
    width={em(size)}
    height={em(size)}
    fill="none"
    stroke="#333"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden
  >
    <circle cx="4" cy="3" r="1.6" />
    <circle cx="4" cy="13" r="1.6" />
    <circle cx="12" cy="4.5" r="1.6" />
    <path d="M4 4.6v6.8M12 6.1c0 3-8 1.8-8 4.7" />
  </svg>
);

const IssueIcon = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 16 16"
    width={em(size)}
    height={em(size)}
    fill="none"
    stroke="#6aa512"
    strokeWidth="1.3"
    aria-hidden
  >
    <circle cx="8" cy="8" r="6.7" />
    <circle cx="8" cy="8" r="1.6" fill="#6aa512" stroke="none" />
  </svg>
);

const PrIcon = ({ size }: { size: number }) => (
  <svg
    viewBox="0 0 16 16"
    width={em(size)}
    height={em(size)}
    fill="none"
    stroke="#6aa512"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="4" cy="3" r="1.5" />
    <circle cx="4" cy="13" r="1.5" />
    <circle cx="12" cy="13" r="1.5" />
    <path d="M4 4.5v7M12 11.5V6a2 2 0 0 0-2-2H8.5M10 2.2 8.3 4 10 5.8" />
  </svg>
);

const Mention = ({ children }: { children?: ReactNode }) => (
  <span className="text-[#0aa8b8] bg-[#0aa8b8]/10 rounded-[0.15em] px-[0.1em]">
    {children}
  </span>
);

const Link = ({ children }: { children?: ReactNode }) => (
  <span className="text-[#0aa8b8]">{children}</span>
);

const cardBase: CSSProperties = {
  position: "absolute",
  background: "#fff",
  border: `${em(2)} solid ${BORDER}`,
  borderRadius: em(24),
  boxSizing: "border-box",
};

const MessageCard = ({
  id,
  card,
  layout,
}: {
  id: MessageId;
  card: Extract<Card, { kind: "message" }>;
  layout: Layout;
}) => {
  const { t } = useTranslation("main");
  const m = layout.metrics;
  const base = `onboarding.coolDevCulture.git.${id}` as const;

  return (
    <div
      data-step
      data-top={card.top}
      style={{
        ...cardBase,
        top: em(card.top),
        right: em(layout.width - card.right),
        ...(m.fullWidth ? { left: 0 } : null),
        display: "flex",
        alignItems: "flex-start",
        paddingLeft: em(m.padX),
        paddingRight: em(m.padX),
        paddingTop: em(m.padTop),
        paddingBottom: em(m.padTop - 1),
        gap: em(m.textX - m.padX - m.avatar),
      }}
    >
      <img
        src={AVATARS[id]}
        alt=""
        style={{
          width: em(m.avatar),
          height: em(m.avatar),
          marginTop: em(2),
          flexShrink: 0,
          borderRadius: em(8),
          objectFit: "cover",
        }}
      />
      <div style={{ lineHeight: em(m.lineHeight), minWidth: 0 }}>
        <div className="whitespace-nowrap">
          <span
            className="font-bold text-dark"
            style={{ fontSize: em(m.name) }}
          >
            {t(`${base}.name`)}
          </span>
          <span
            className="text-[#999]"
            style={{ fontSize: em(m.time), marginLeft: em(m.time * 0.5) }}
          >
            {t(`${base}.time`)}
          </span>
        </div>
        <div
          className="text-dark whitespace-pre-line"
          style={{ fontSize: em(m.body) }}
        >
          <Trans
            t={t}
            i18nKey={`${base}.body`}
            components={{ m: <Mention />, l: <Link /> }}
          />
        </div>
      </div>
    </div>
  );
};

const TitleCard = ({
  card,
  layout,
}: {
  card: Extract<Card, { kind: "issue" | "pr" }>;
  layout: Layout;
}) => {
  const { t } = useTranslation("main");
  const m = layout.metrics;
  const isIssue = card.kind === "issue";
  const icon = m.avatar * 0.6;

  return (
    <div
      data-step
      data-top={card.top}
      className="whitespace-nowrap"
      style={{
        ...cardBase,
        top: em(card.top),
        right: em(layout.width - card.right),
        display: "flex",
        alignItems: "center",
        gap: em(m.body * 0.6),
        height: em(layout.metrics.fullWidth ? 78 : 105),
        paddingLeft: em(m.padX),
        paddingRight: em(m.padX),
        fontSize: em(m.fullWidth ? 23 : 32),
      }}
    >
      {isIssue ? <IssueIcon size={icon} /> : <PrIcon size={icon} />}
      <span className="text-[#777]">{isIssue ? "#71" : "#75"}</span>
      <span className="font-bold text-dark">
        {t(
          isIssue
            ? "onboarding.coolDevCulture.gitIssueTitle"
            : "onboarding.coolDevCulture.gitPrTitle",
        )}
      </span>
    </div>
  );
};

const NODE_R = 31;

const DESKTOP_QUERY = "(min-width: 768px)";

const subscribe = (cb: () => void) => {
  const list = window.matchMedia(DESKTOP_QUERY);
  list.addEventListener("change", cb);
  return () => list.removeEventListener("change", cb);
};

const useIsDesktop = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true,
  );

interface NodeProps {
  x: number;
  y: number;
  r: number;
  color: string;
  stroke: number;
}

const Node = ({ x, y, r, color, stroke }: NodeProps) => (
  <circle
    data-node
    data-y={y}
    cx={x}
    cy={y}
    r={r - stroke / 2}
    fill="#fff"
    stroke={color}
    strokeWidth={stroke}
  />
);

const GitTimeline = () => {
  const isDesktop = useIsDesktop();
  const layout = isDesktop ? DESKTOP : MOBILE;
  const rootRef = useRef<HTMLDivElement>(null);
  const isMobile = !isDesktop;
  const nodeR = isMobile ? 23 : NODE_R;
  const lineW = isMobile ? 11 : 14;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const root = rootRef.current;
        if (!root) return;
        const total = layout.height;
        const fade = layout.fade;
        // 타임라인 진행도 == 섹션 위에서부터의 비율. 화면의 한 기준선(70%)이 훑고 지나가는 요소부터 나타난다.
        const at = (y: number) => (y / total) * 0.93;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.3,
          },
        });

        // 두 선은 같은 마스크로 가려져 있고, 마스크의 끝(그라데이션)이 아래로 내려오며 선이 드러난다.
        tl.fromTo(
          "[data-head]",
          { y: layout.mainY - fade },
          {
            y: layout.mergedY,
            duration: at(layout.mergedY) - at(layout.mainY - fade),
          },
          at(layout.mainY - fade),
        );

        root.querySelectorAll<SVGElement>("[data-node]").forEach((node) => {
          const y = Number(node.dataset.y);
          tl.fromTo(
            node,
            { scale: 0, opacity: 0, transformOrigin: "50% 50%" },
            {
              scale: 1,
              opacity: 1,
              duration: 0.05,
              ease: "back.out(2)",
            },
            at(y),
          );
        });

        root.querySelectorAll<HTMLElement>("[data-step]").forEach((el) => {
          const top = Number(el.dataset.top);
          tl.fromTo(
            el,
            { opacity: 0, x: 40, scale: 0.97, transformOrigin: "100% 50%" },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.07,
              ease: "power2.out",
            },
            at(top),
          );
        });

        root.querySelectorAll<HTMLElement>("[data-label]").forEach((el) => {
          const y = Number(el.dataset.y);
          tl.fromTo(
            el,
            { opacity: 0, x: -24 },
            { opacity: 1, x: 0, duration: 0.05, ease: "power2.out" },
            at(y),
          );
        });

        root.querySelectorAll<SVGElement>("[data-dash]").forEach((el) => {
          const y = Number(el.dataset.y);
          tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.05 }, at(y));
        });
      });

      return () => mm.revert();
    },
    { dependencies: [isDesktop], scope: rootRef, revertOnUpdate: true },
  );

  return (
    <div
      className={isDesktop ? "w-full" : "w-full max-w-[500px]"}
      style={{ containerType: "inline-size" }}
    >
      <div
        ref={rootRef}
        className="relative w-full font-sans"
        style={
          {
            aspectRatio: `${layout.width} / ${layout.height}`,
            "--u": `calc(100cqw / ${layout.width})`,
          } as CSSProperties
        }
      >
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          className="absolute inset-0 w-full h-full"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="git-line-fade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
            <mask
              id="git-line-mask"
              maskUnits="userSpaceOnUse"
              x={0}
              y={-layout.fade}
              width={layout.width}
              height={layout.height + layout.fade * 2}
            >
              <g data-head>
                <rect
                  x={0}
                  y={-layout.height}
                  width={layout.width}
                  height={layout.height}
                  fill="#fff"
                />
                <rect
                  x={0}
                  y={0}
                  width={layout.width}
                  height={layout.fade}
                  fill="url(#git-line-fade)"
                />
              </g>
            </mask>
          </defs>
          {layout.dashes.map((d, i) => (
            <line
              key={i}
              data-dash
              data-y={d.y1}
              {...d}
              stroke="#d4d4d4"
              strokeWidth={isMobile ? 3 : 4}
              strokeDasharray="8 8"
            />
          ))}
          {layout.labels.map(
            (l) =>
              !isMobile && (
                <line
                  key={l.text}
                  data-dash
                  data-y={l.y}
                  x1={l.dashFrom}
                  x2={l.x - 12}
                  y1={l.y}
                  y2={l.y}
                  stroke="#d4d4d4"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />
              ),
          )}
          <g mask="url(#git-line-mask)">
            <path
              data-line="green"
              d={layout.greenPath}
              stroke={GREEN}
              strokeWidth={lineW}
            />
            <line
              data-line="orange"
              x1={layout.orangeX}
              x2={layout.orangeX}
              y1={layout.mainY}
              y2={layout.mergedY}
              stroke={ORANGE}
              strokeWidth={lineW}
            />
          </g>
          {layout.greenNodes.map((y) => (
            <Node
              key={y}
              x={layout.greenX}
              y={y}
              r={nodeR}
              color={GREEN}
              stroke={lineW}
            />
          ))}
          {[layout.mainY, layout.issueY, layout.mergedY].map((y) => (
            <Node
              key={y}
              x={layout.orangeX}
              y={y}
              r={nodeR}
              color={ORANGE}
              stroke={lineW}
            />
          ))}
        </svg>

        {layout.labels.map((l) => (
          <div
            key={l.text}
            data-label
            data-y={l.y}
            className="absolute flex items-center font-inconsolata font-semibold text-dark whitespace-nowrap"
            style={{
              left: em(l.x),
              top: em(l.y),
              transform: "translateY(-50%)",
              gap: em(isMobile ? 8 : 12),
              fontSize: em(isMobile ? 28 : 38),
            }}
          >
            <BranchIcon size={isMobile ? 28 : 36} />
            {l.text}
          </div>
        ))}

        {layout.cards.map((card, i) =>
          card.kind === "message" ? (
            <MessageCard key={i} id={card.id} card={card} layout={layout} />
          ) : (
            <TitleCard key={i} card={card} layout={layout} />
          ),
        )}
      </div>
    </div>
  );
};

export default GitTimeline;
