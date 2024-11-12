import "./globals.css";
import { PlayerProvider } from "./playerContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PlayerProvider>
        <body className="bg-black">
          {children}
        </body>
      </PlayerProvider>
    </html>
  );
}
