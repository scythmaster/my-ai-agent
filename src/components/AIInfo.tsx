import { Bot, Zap, Shield } from 'lucide-react'

export default function AIInfo() {
  return (
    <div className="text-wine-100 space-y-6 max-w-md">
      <h2 className="text-3xl font-bold mb-4">AI-Agent: Your Intelligent Assistant</h2>
      <p className="text-wine-200 mb-6">
        Experience the power of AI-driven assistance tailored to your needs. Our AI-Agent is designed to streamline your
        tasks and boost productivity.
      </p>
      <div className="space-y-4">
        <Feature
          icon={<Bot className="w-6 h-6" />}
          title="Advanced AI Technology"
          description="Cutting-edge machine learning algorithms for intelligent interactions."
        />
        <Feature
          icon={<Zap className="w-6 h-6" />}
          title="Lightning-Fast Responses"
          description="Get instant answers and solutions to your queries and problems."
        />
        <Feature
          icon={<Shield className="w-6 h-6" />}
          title="Secure and Private"
          description="Your data is protected with state-of-the-art encryption and privacy measures."
        />
      </div>
    </div>
  )
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-wine-200">{title}</h3>
        <p className="text-wine-300">{description}</p>
      </div>
    </div>
  )
}