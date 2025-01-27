import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AIAgentInfo() {
  return (
    <Card className="h-[calc(100vh-10rem)]">
      <CardHeader>
        <CardTitle>AI Agent Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-wine-800">Model</h3>
            <p className="text-wine-600">GPT-4</p>
          </div>
          <div>
            <h3 className="font-semibold text-wine-800">Capabilities</h3>
            <ul className="list-disc list-inside text-wine-600">
              <li>Natural language processing</li>
              <li>Code generation and analysis</li>
              <li>Problem-solving</li>
              <li>Data analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-wine-800">Last Updated</h3>
            <p className="text-wine-600">July 15, 2023</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

