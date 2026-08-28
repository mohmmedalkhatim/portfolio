import { useState } from "react";
import useInView from "../../../hooks/useInView";
import { theme } from "../../../data/theme";

interface ProfileImageProps {
  name: string;
  alt: string;
}

function ProfileImage({ name, alt }: ProfileImageProps) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  /* Derive "MA" from name */
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: inView ? "translateX(0)" : "translateX(-52px)",
        opacity: inView ? 1 : 0,
        transition:
          "transform 1s cubic-bezier(0.16,1,0.3,1), opacity 0.85s ease",
        display: "flex",
        justifyContent: "center",
        paddingTop: "8px",
      }}
    >
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ position: "relative", width: "290px", height: "290px" }}
      >
        {/* Ambient purple-cyan glow */}
        <div
          style={{
            position: "absolute",
            inset: "-44px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(124,58,237,.22) 0%,rgba(6,182,212,.07) 55%,transparent 70%)",
            opacity: hov ? 1 : 0.45,
            transition: "opacity 0.5s",
            pointerEvents: "none",
          }}
        />

        {/* Gradient ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: theme.gradRing,
            padding: "3px",
            opacity: hov ? 1 : 0.65,
            transition: "opacity 0.4s",
          }}
        >
          {/* Ring inner fill — hides the gradient in the gap */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: theme.bg,
            }}
          />
        </div>

        {/* Avatar surface */}
        <div
          role="img"
          aria-label={alt}
          style={{
            position: "absolute",
            inset: "6px",
            borderRadius: "50%",
            overflow: "hidden",
            background:
              "linear-gradient(150deg,#1e1b4b 0%,#2e1065 30%,#0c1a45 65%,#0f172a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: hov ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Decorative orbs inside avatar */}
          <div
            style={{
              position: "absolute",
              bottom: "-30px",
              left: "-30px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(124,58,237,.18)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "-10px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "rgba(6,182,212,.1)",
              pointerEvents: "none",
            }}
          />

          {/* Initials */}
          <span
            style={{
              position: "relative",
              zIndex: 2,
              userSelect: "none",
              fontSize: "5.5rem",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              background: theme.gradText,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {initials}
          </span>
        </div>

        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            right: "-18px",
            zIndex: 10,
            background: "linear-gradient(135deg,#1e1b4b,#0f172a)",
            border: "1px solid rgba(139,92,246,.3)",
            borderRadius: "12px",
            padding: "8px 14px",
            boxShadow: "0 8px 32px rgba(0,0,0,.5)",
            transform: hov ? "translateY(-5px)" : "translateY(0)",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              fontSize: "0.6rem",
              color: "rgba(255,255,255,.38)",
              fontWeight: 500,
              marginBottom: "3px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Status
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: theme.green,
                boxShadow: "0 0 8px rgba(74,222,128,.6)",
                animation: "statusPulse 2s ease-in-out infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                color: "#fff",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Open to work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}export default ProfileImage
