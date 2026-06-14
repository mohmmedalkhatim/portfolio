import { ReactElement } from "react";

export default function PageContainer({ children, className = "" }:{ children?: React.ReactElement | String | ReactElement[] | undefined; className?: string }) {
  return (
    <main className={`min-h-screen w-full bg-gray-50 px-4 py-10 ${className}`}>
      <div className="mx-auto w-full max-w-4xl">
        {children}
      </div>
    </main>
  );
}
