// src/app/layout.tsx
import TopHorizontalLoader from "./components/loading";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { LoadingProvider } from "./context/loadingContext";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "An example Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <TopHorizontalLoader />
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
