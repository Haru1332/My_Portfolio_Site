"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, track } from "@/lib/analytics";

// Visiting any page with ?notrack=1 excludes this browser from stats (the owner's own visits); ?notrack=0 undoes it.
const bootstrap = `
(function(){try{var q=location.search;
if(q.indexOf('notrack=1')>-1)localStorage.setItem('notrack','1');
if(q.indexOf('notrack=0')>-1)localStorage.removeItem('notrack');
if(localStorage.getItem('notrack')==='1')window['ga-disable-${GA_ID}']=true;}catch(e){}})();
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('js',new Date());gtag('config','${GA_ID}');
`;

/** Google Analytics 4, production builds only. Also counts mail-link clicks (베타 신청, 문의하기). */
export function Analytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href^='mailto:']");
      if (!link) return;
      const subject = new URL(link.getAttribute("href") ?? "").searchParams.get("subject");
      track("mail_click", { subject: subject ?? "(none)", page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script id="ga-bootstrap" strategy="afterInteractive">{bootstrap}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
