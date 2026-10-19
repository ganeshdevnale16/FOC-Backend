// FOC platform link, read from the environment.
// Set VITE_FOC_PLATFORM_URL in Frontend/.env (Vite only exposes variables
// that start with VITE_). Restart `npm run dev` after changing .env.
export const FOC_PLATFORM_URL = (import.meta.env.VITE_FOC_PLATFORM_URL || "").trim();
