import { ArrowRight } from "lucide-react";
import { THEME } from "../theme";
import { FOC_PLATFORM_URL } from "../utils/platform";

// "Platform" button - sends the user to the FOC platform link from .env.
// variant "sidebar": white button on the green sidebar.
// variant "inline":  green-outline button next to Download / Exception Summary.
export default function PlatformButton({ variant = "inline", label = "Platform" }) {
  const configured = !!FOC_PLATFORM_URL;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
    cursor: configured ? "pointer" : "not-allowed",
    opacity: configured ? 1 : 0.6,
    transition: "background 0.15s ease",
    boxSizing: "border-box",
  };

  const style =
    variant === "sidebar"
      ? {
          ...base,
          width: "100%",
          padding: "10px 16px",
          background: "#ffffff",
          color: THEME.greenText,
          border: "none",
        }
      : {
          ...base,
          padding: "9px 18px",
          background: "#ffffff",
          color: THEME.greenText,
          border: `1px solid ${THEME.green}`,
        };

  if (!configured) {
    return (
      <span style={style} title="FOC platform link not set - add VITE_FOC_PLATFORM_URL to .env">
        {label} <ArrowRight size={14} />
      </span>
    );
  }

  return (
    <a
      href={FOC_PLATFORM_URL}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.background = THEME.greenTint)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
    >
      {label} <ArrowRight size={14} />
    </a>
  );
}
