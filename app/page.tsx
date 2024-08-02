import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <div className="mt-6">
        <Link href="/login" className="text-blue-500 hover:underline mx-2">
          Login
        </Link>
        <Link href="/register" className="text-blue-500 hover:underline mx-2">
          Register
        </Link>
      </div>
    </main>
  );
}
