import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

// Export NextAuth handlers for the App Router
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.provider = account.provider;
      }
      // Attach name/email when available for convenience
      if (profile && typeof profile === "object") {
        const p = profile as Record<string, unknown>;
        token.name = (p.name as string) ?? token.name;
        token.email = (p.email as string) ?? token.email;
        // LinkedIn may send localized first/last name fields
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session as any).provider = (token as any).provider;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };


