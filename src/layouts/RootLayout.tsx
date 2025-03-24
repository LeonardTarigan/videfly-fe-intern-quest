import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-lg mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
