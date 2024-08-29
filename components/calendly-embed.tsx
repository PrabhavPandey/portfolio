"use client";

import React, { useEffect, FC } from "react";

interface CalendlyEmbedProps {
  url: string;
  text: string;
  color: string;
  textColor: string;
  branding?: boolean;
}

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyEmbed: FC<CalendlyEmbedProps> = ({ url, text, color, textColor, branding }) => {
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    const linkId = "calendly-widget-link";

    if (!document.getElementById(linkId)) {
      const head = document.querySelector("head");
      if (head) {
        const link = document.createElement("link");
        link.id = linkId;
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css");
        head.appendChild(link);
      }
    }

    if (!document.getElementById(scriptId)) {
      const head = document.querySelector("head");
      if (head) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
        script.async = true;
        head.appendChild(script);

        script.onload = () => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url,
              text,
              color,
              textColor,
              branding,
              prefill: {
                customAnswers: {
                  a3: "Portfolio website"
                }
              }
            });
          }
        };
      }
    } else {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    }
  }, [url, text, color, textColor, branding]);

  return null;
};

export default CalendlyEmbed;