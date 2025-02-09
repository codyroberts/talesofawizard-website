import type { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const options: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  session: {
    strategy: 'jwt',
  },
};
