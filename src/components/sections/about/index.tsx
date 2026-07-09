import { ABOUT } from "../../../data/aboutData";
import { theme } from "../../../data/theme";
import ProfileImage from "../../shared/AboutImage";
import BioContent from "../../ui/BioContent";
import StatCard from "../../ui/statCard";

export default function AboutSection() {
  const { name, bio, stats, imageAlt, skills } = ABOUT;

  return (
    <section
      aria-label={`About ${name}`}
      style={{
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "clamp(60px,10vh,120px) clamp(20px,5vw,48px)",
        fontFamily: theme.font,
        position: "relative",
        overflow: "hidden",
      }}
    >



      {/* ── Cyan ambient orb (bottom-right) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(6,182,212,.06) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content wrapper ── */}
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Split layout: image left · bio right
            auto-fit collapses to single column on mobile          */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "clamp(48px, 8vw, 88px)",
            alignItems: "start",
            marginBottom: "80px",
            width: "80%",
          }}
        >
          <BioContent name={name} bio={bio} skills={skills} />
        </div>

        {/* Stats grid — 4 cols desktop, 2 tablet, 1 mobile      */}

      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes statusPulse {
          0%,100% { opacity:1; transform:scale(1);    }
          50%      { opacity:.4; transform:scale(.82); }
        }
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
      `}</style>
    </section>
  );
}