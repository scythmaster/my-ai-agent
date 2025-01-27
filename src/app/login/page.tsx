"use client";

import AIInfo from "@/components/AIInfo";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
       <main className="min-h-screen bg-gradient-to-br from-wine-900 to-wine-800 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
         <div
           className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/0 to-black/20"
           aria-hidden="true"
         >
           <div className="h-full w-full bg-black/[0.02] backdrop-blur-[1px]" />
         </div>
         <div className="z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-8">
           <LoginForm />
           <AIInfo/>
         </div>
       </main>
  );
}
