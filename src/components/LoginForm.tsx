"use client"

import { SignIn } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function LoginForm() {
  return (
    <Card className="w-full max-w-md bg-wine-800/50 backdrop-blur-sm border-wine-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-wine-100">Welcome Back</CardTitle>
        <CardDescription className="text-wine-200">Login to your AI-Agent account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: "bg-wine-600 hover:bg-wine-700 text-wine-100",
              card: "bg-transparent shadow-none",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton: "bg-wine-700 border border-wine-600 text-wine-100 hover:bg-wine-600",
              formFieldInput: "bg-wine-800 border-wine-700 text-wine-100 placeholder-wine-300",
              formFieldLabel: "text-wine-200",
              footerActionLink: "text-wine-300 hover:text-wine-200",
            },
          }}
        />
      </CardContent>
    </Card>
  )
}