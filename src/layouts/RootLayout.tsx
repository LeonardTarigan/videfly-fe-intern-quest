import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-md">
      <Navbar />
      <div className="px-4 py-5 text-sm">{children}</div>
    </div>
  );
}
