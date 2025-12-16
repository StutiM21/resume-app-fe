"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Placeholder: integrate your auth/API call here
      await new Promise((resolve) => setTimeout(resolve, 800));
      // On success, redirect or update state as needed
      // e.g., router.push("/dashboard")
      alert("Logged in (demo)");
    } catch (e) {
      setError("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh grid grid-cols-1 md:grid-cols-2">
      {/* Left aqua panel */}
      <div className="hidden md:block bg-gradient-to-br from-blue-600 to-purple-600" />


      {/* Right content */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          {/* Social sign-in */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
              onClick={() => signIn("linkedin", { callbackUrl: "/" })}
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              <span>Sign In With LinkedIn</span>
            </button>
            <span className="text-xs text-gray-500">OR</span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <Image src="/google.svg" alt="Google" width={16} height={16} />
              <span>Sign In With Google</span>
            </button>
          </div>

          {/* Form panel */}
          <div className="mt-6 rounded-[32px] bg-zinc-100 p-8">
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-gray-900 shadow-sm outline-none ring-cyan-500 focus:border-cyan-500 focus:ring-2"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-3 pr-12 text-gray-900 shadow-sm outline-none ring-cyan-500 focus:border-cyan-500 focus:ring-2"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
                >
                  {isSubmitting ? "Signing in…" : "Sign In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


