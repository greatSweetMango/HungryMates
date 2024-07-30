import NextAuth, { NextAuthOptions } from "next-auth";
import FortyTwoProvider from "next-auth/providers/42-school";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AdapterUser } from "next-auth/adapters";
import { Account, Profile, User } from "next-auth";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    FortyTwoProvider({
      clientId: process.env.FORTY_TWO_CLIENT_ID!,
      clientSecret: process.env.FORTY_TWO_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: { user: User | AdapterUser; account: Account | null; profile?: Profile; email?: { verificationRequest?: boolean }; credentials?: Record<string, unknown> }) {
      if (account?.provider === '42-school') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (existingUser) {
          const existingAccount = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
          });

          if (!existingAccount) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
            });
          }

          return true;
        } else {
          const newUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
            },
          });

          await prisma.account.create({
            data: {
              userId: newUser.id,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              type: account.type,
              refresh_token: account.refresh_token,
              access_token: account.access_token,
              expires_at: account.expires_at,
              token_type: account.token_type,
              scope: account.scope,
              id_token: account.id_token,
              session_state: account.session_state,
            },
          });

          return true;
        }
      }

      return true;
    },
    async session({ session, token, user }: { session: any; token: any; user: User | AdapterUser }) {
      session.user.id = user.id;
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
