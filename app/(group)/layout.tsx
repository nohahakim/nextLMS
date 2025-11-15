import { ReactNode } from "react";

// 📝 Imports ReactNode type for children

export default function GroupLayout({ children }: { children: ReactNode }) {
  return <div className="h-full bg-sky-700 text-white">{children}</div>;
}
