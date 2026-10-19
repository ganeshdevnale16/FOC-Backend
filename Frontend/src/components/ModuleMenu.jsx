import { ArrowRight, Bot, Clock } from "lucide-react";
import { THEME } from "../theme";

// Main page - green banner + white module cards ("Future of Controls" style).
export default function ModuleMenu({ modules, onSelect }) {
  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        background: THEME.pageBg,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >


      <div
        style={{
          padding: 32,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 280px))",
          gap: 20,
        }}
      >
        {modules.map((mod) => {
          const disabled = !!mod.comingSoon;
          const Card = disabled ? "div" : "button";

          return (
            <Card
              key={mod.id}
              onClick={disabled ? undefined : () => onSelect(mod)}
              style={{
                textAlign: "left",
                background: "#ffffff",
                border: `1px solid ${THEME.border}`,
                borderRadius: 12,
                padding: 20,
                minHeight: 150,
                cursor: disabled ? "default" : "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                opacity: disabled ? 0.6 : 1,
                boxShadow: "0 2px 10px rgba(15, 23, 42, 0.06)",
                transition: "border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                if (disabled) return;
                e.currentTarget.style.borderColor = THEME.green;
                e.currentTarget.style.boxShadow = "0 8px 22px rgba(15, 23, 42, 0.10)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                if (disabled) return;
                e.currentTarget.style.borderColor = THEME.border;
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(15, 23, 42, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Light-green icon tile */}
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: THEME.greenTint,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {disabled ? (
                  <Clock size={17} color={THEME.greenText} />
                ) : (
                  <Bot size={18} color={THEME.greenText} />
                )}
              </div>

              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: THEME.text,
                    margin: "0 0 6px",
                    lineHeight: 1.35,
                  }}
                >
                  {mod.menu.title}
                </h2>
                {mod.menu.tagline && (
                  <p style={{ fontSize: 12.5, color: THEME.muted, margin: 0, lineHeight: 1.5 }}>
                    {mod.menu.tagline}
                  </p>
                )}
              </div>

              {!disabled && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: THEME.greenText,
                  }}
                >
                  Open assistant <ArrowRight size={13} />
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
