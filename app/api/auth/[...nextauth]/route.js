import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@lib/db"

const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    })
  ],

  callbacks: {
    async jwt({ user, token }) {
      //   update token if user is returned
      if (user) {
        token.user = user;
      }
      //   return final_token
      return token;
    },

    async session({ session, user, token }) {
        return session
      },
  },
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: 'jwt',
  },
})

export { handler as GET, handler as POST, NextAuth as nextAuthOptions }