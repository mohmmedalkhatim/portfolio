import { useState } from "react";
import { theme } from "../../../data/theme";
import useInView from "../../../hooks/useInView";
import AnimatedCounter from "../../shared/Animated/AnimatedConter";

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  delta: string;
  positive: boolean;
  Icon: React.ReactElement;
  delay?: number;
}

function StatCard({
  value,
  suffix,
  label,
  delta,
  positive,
  Icon,
  delay = 0,
}: StatCardProps) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  const deltaColor = positive ? theme.green : theme.red;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        /* Entrance animation */
        transform: inView ? "translateY(0)" : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transition: [
          `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
          `opacity 0.6s ease ${delay}ms`,
          "background-color 0.3s",
          "border-color 0.3s",
        ].join(", "),

        /* Glassmorphism surface */
        backgroundColor: hov ? theme.surfaceHov : theme.surface,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${hov ? theme.borderHov : theme.border}`,
        borderRadius: "20px",
        padding: "28px 20px 24px",
        textAlign: "center",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top shimmer accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: hov
            ? "linear-gradient(90deg,transparent,rgba(139,92,246,.75),transparent)"
            : "linear-gradient(90deg,transparent,rgba(255,255,255,.09),transparent)",
          transition: "background 0.3s",
        }}
      />

      {/* Icon */}
      <div style={{ color: "rgba(167,139,250,.65)", marginBottom: "10px" }}>
        {Icon}
      </div>

      {/* Count-up number */}
      <div
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: "6px",
          letterSpacing: "-0.03em",
          background: theme.gradText,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <AnimatedCounter end={value} suffix={suffix} triggered={inView} delay={delay} />
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: "0.68rem",
          color: theme.mutedColor,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "12px",
        }}
      >
        {label}
      </div>

      {/* Delta trend badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: positive
            ? "rgba(74,222,128,.08)"
            : "rgba(248,113,113,.08)",
          border: `1px solid ${
            positive ? "rgba(74,222,128,.22)" : "rgba(248,113,113,.22)"
          }`,
          borderRadius: "100px",
          padding: "3px 10px",
        }}
      >
        {}
        <span
          style={{
            fontSize: "0.66rem",
            fontWeight: 600,
            color: deltaColor,
            letterSpacing: "0.02em",
          }}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}export default StatCard;