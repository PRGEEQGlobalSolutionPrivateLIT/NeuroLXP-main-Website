
import type { Metadata } from "next";
import "./globals.css";
import { GlobalExpertProvider } from "@/components/TalkToOurExpert/TalkToExpertButton";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "NeuroLXP",
  description: "One Platform, Many Missions",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <GlobalExpertProvider>
          {children}
          <CookieConsent />
        </GlobalExpertProvider>
      </body>
    </html>
  );
}
