"use client";

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";
// import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-500 to-white relative overflow-hidden"
//     >
//       {/* Background gridlines */}
//       <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px">
//         {[...Array(144)].map((_, index) => (
//           <div
//             key={index}
//             className="w-full h-full border border-gray-300 border-opacity-30"
//           ></div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Card className="p-6 shadow-2xl rounded-2xl bg-white/90 backdrop-blur">
//           <CardContent>
//             <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">AI Assistant</h1>
//             <p className="text-center text-gray-600 mb-6 text-lg italic">
//               Empower your productivity with intelligent solutions
//             </p>
//             {/* <form className="space-y-4"> */}
//               {/* <Input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-2 border rounded-lg shadow-sm"
//               />
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-2 border rounded-lg shadow-sm"
//               /> */}
//               <SignedIn>
//                 <Link href='./dashboard'>
//                 <button className=""></button>
//                 </Link>
//               </SignedIn>

//               <SignedOut>
//                 <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} forceRedirectUrl={'/dashboard'}>
//               <Button className="w-full bg-gray-700 text-white p-2 rounded-lg shadow-md hover:bg-gray-600">
//                 SignUp
//               </Button>
//               </SignInButton>
//               </SignedOut>
              
//             {/* </form> */}
//             {/* <p className="text-center text-sm text-gray-500 mt-4">
//               Don&apos;t have an account? <a href="#" className="text-gray-700 underline">Sign up</a>
//             </p> */}
//             <p className="text-gray-400 text-sm text-center mt-8">
//               Powered by IBM&apos; WxTools & your favourite LLM&apos;s
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };
import LoginForm from "@/components/LoginForm"
import AIInfo from "@/components/AIInfo"
import LoginPage from "./login/page";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    // <main className="min-h-screen bg-gradient-to-br from-wine-900 to-wine-800 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
    //   <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    //   <div
    //     className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/0 to-black/20"
    //     aria-hidden="true"
    //   >
    //     <div className="h-full w-full bg-black/[0.02] backdrop-blur-[1px]" />
    //   </div>
    //   <div className="z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-8">
    //     <LoginForm />
    //     <AIInfo />
    //   </div>
    // </main>
    //  <div className="mt-4 w-full max-w-md">
  //   <SignedIn>
  //   <Link href="./dashboard">
  //     <Button className="w-full bg-wine-600 text-wine-100 p-2 rounded-lg shadow-md hover:bg-wine-700">
  //       Go to Dashboard
  //     </Button>
  //   </Link>
  // </SignedIn>

  // <SignedOut>
  //   <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} forceRedirectUrl={"/dashboard"}>
  //     <Button className="w-full bg-wine-600 text-wine-100 p-2 rounded-lg shadow-md hover:bg-wine-700">
  //       Sign Up
  //     </Button>
  //   </SignInButton>
  // </SignedOut>
    <div>
      <SignedIn>
        <DashboardPage/>
      </SignedIn>
      <SignedOut>
  //   <LoginPage/>
  // </SignedOut>
      
    </div>
  )
}