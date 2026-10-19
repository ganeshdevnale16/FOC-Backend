import { ArrowLeft, Bot, Plus } from "lucide-react";
import { THEME } from "../theme";
import PlatformButton from "./PlatformButton";

const RECENT_CHATS = ["GC Compliance Audit"];

const WHITE_SOFT = "rgba(255, 255, 255, 0.82)";
const WHITE_LINE = "rgba(255, 255, 255, 0.35)";
const WHITE_HOVER = "rgba(255, 255, 255, 0.16)";

// Green "Future of Controls" style sidebar.
export default function Sidebar({ moduleTitle, onBack }) {
  return (
    <div
      style={{
        width: 260,
        flexShrink: 0,
        backgroundColor: THEME.green,
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: "none",
            border: "none",
            borderBottom: `1px solid ${WHITE_LINE}`,
            padding: "14px 16px",
            fontSize: 12.5,
            fontWeight: 600,
            color: "#ffffff",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <ArrowLeft size={14} /> All modules
        </button>
      )}

      {/* Current module, shown as the active (white) item */}
      {moduleTitle && (
        <div style={{ padding: "14px 12px 4px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#ffffff",
              borderRadius: 8,
              padding: "9px 12px",
            }}
          >
            <Bot size={16} color={THEME.greenText} style={{ flexShrink: 0 }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: THEME.greenText,
                lineHeight: 1.4,
              }}
            >
              {moduleTitle}
            </span>
          </div>
        </div>
      )}

      <div style={{ padding: "12px 12px 16px" }}>
        <button
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "transparent",
            border: `1px solid ${WHITE_LINE}`,
            borderRadius: 8,
            padding: "9px 12px",
            fontSize: 13,
            fontWeight: 600,
            color: "#ffffff",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = WHITE_HOVER)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <Plus size={16} /> New Chat
        </button>
      </div>

      <div style={{ flex: 1, padding: "0 12px", overflowY: "auto" }}>
        <div
          style={{
            fontSize: 10,
            color: WHITE_SOFT,
            padding: "0 8px 8px",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            fontWeight: 700,
          }}
        >
          Recent
        </div>
        {RECENT_CHATS.map((chat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "9px 12px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 500,
              color: "#ffffff",
              marginBottom: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = WHITE_HOVER)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {chat}
            </span>
          </div>
        ))}
      </div>

      {/* Platform link - opens the FOC platform (VITE_FOC_PLATFORM_URL) */}
      <div style={{ padding: "12px 12px" }}>
        <PlatformButton variant="sidebar" />
      </div>

      <div
        style={{
          padding: 16,
          borderTop: `1px solid ${WHITE_LINE}`,
          fontSize: 12,
          fontWeight: 500,
          color: WHITE_SOFT,
        }}
      >
        Powered by AI
      </div>
    </div>
  );
}
