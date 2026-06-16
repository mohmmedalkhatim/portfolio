import { TbInfoCircle } from "react-icons/tb";
import { theme } from "../../../data/theme";
import useInView from "../../../hooks/useInView";

interface BioContentProps {
  name: string;
  bio: string[];
  skills: string[];
}

function BioContent({ name, bio, skills }: BioContentProps) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        transform: inView ? "translateX(0)" : "translateX(52px)",
        opacity: inView ? 1 : 0,
        transition:
          "transform 1s cubic-bezier(0.16,1,0.3,1) 0.15s, opacity 0.85s ease 0.15s",
      }}
    >
      {/* ── Section label pill ── */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(139,92,246,.08)",
          border: "1px solid rgba(139,92,246,.2)",
          borderRadius: "100px",
          padding: "5px 16px",
          marginBottom: "28px",
        }}
      >

          <TbInfoCircle className="stroke-sky-500"/>
      
        <span
        className="text-sky-400"
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          About Me
        </span>
      </div>

      {/* ── Heading ── */}
      <h2
        style={{
          fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          marginBottom: "28px",
        }}
      >
        <span style={{ color: "#fff" }}>Building things</span> <br />
        <span
          style={{
            background: theme.gradText,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          that actually matter.
        </span>
      </h2>

      {/* ── Bio paragraphs ── */}
      <div style={{ marginBottom: "32px" }}>
        {bio.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: theme.bodyColor,
              marginBottom: i < bio.length - 1 ? "16px" : 0,
            }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* ── Skill chips ── */}
      <div>
        <p
          style={{
            fontSize: "0.68rem",
            color: theme.labelColor,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Core Stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skills.map((s) => (
            <span
              key={s}
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "8px",
                padding: "5px 13px",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,.5)",
                fontFamily: theme.mono,
                letterSpacing: "0.02em",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}export default BioContent;
