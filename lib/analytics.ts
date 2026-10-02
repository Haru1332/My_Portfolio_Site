export const GA_ID = "G-V21HW9NC4L";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. No-op when analytics isn't loaded (dev, or the owner opted out with ?notrack=1). */
export function track(event: string, params?: Record<string, string>) {
  window.gtag?.("event", event, params);
}
