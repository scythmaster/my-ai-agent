export const metadata = {
    title: "Login | My Company",
    description: "Login to access your account.",
  };
  
  export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    );
  }
  