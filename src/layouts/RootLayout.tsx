import Navbar from "@/components/ui/Navbar";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-md">
      <Toaster
        toastOptions={{
          duration: 4000,
          icon: null,
          style: {
            fontSize: "14px",
            padding: 0,
            boxShadow: "0px 0px 0px",
            backgroundColor: "transparent",
          },
        }}
      />
      <Navbar />
      <div className="px-4 py-5 text-sm">{children}</div>
    </div>
  );
}
