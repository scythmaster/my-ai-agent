import type { Metadata } from "next"
// import DashboardLayout from "@/components/DashboardLayout"
// import ChatInterface from "@/components/ChatInterface"
import ConversationHistory from "@/components/ConversationHistory"
import AIAgentInfo from "@/components/AIAgentInfo"
import ChatInterface from "@/components/ChatInterface"
// import DashboardLayout from "@/components/DashBoard"
import Head from 'next/head';

// export const metadata: Metadata = {
//   title: "AI Agent Dashboard",
//   description: "Interact with your AI Agent and view your conversation history",
// }

export default function DashboardPage() {
  return (
    <>
     <Head>
        <title>Dashboard - Welcome to AI Agent</title>
        <meta name="description" content="Welcome to your dashboard. Manage your activities and track progress here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      {/* <DashboardLayout> */}
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/4 p-4">
          <ConversationHistory />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <ChatInterface />
        </div>
        <div className="w-full lg:w-1/4 p-4">
          <AIAgentInfo />
        </div>
      </div>
    {/* </DashboardLayout> */}
      </>
    
  )
}
