import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const conversations = [
  { id: 1, title: "Project Brainstorming", date: "2023-07-15" },
  { id: 2, title: "Code Review Discussion", date: "2023-07-14" },
  { id: 3, title: "Bug Fixing Session", date: "2023-07-13" },
  // Add more conversations as needed
]

export default function ConversationHistory() {
  return (
    <Card className="h-[calc(100vh-10rem)]">
      <CardHeader>
        <CardTitle>Conversation History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-15rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="mb-4 p-3 rounded-lg cursor-pointer hover:bg-wine-300 transition-colors"
            >
              <h3 className="font-semibold text-wine-800">{conversation.title}</h3>
              <p className="text-sm text-wine-600">{conversation.date}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

