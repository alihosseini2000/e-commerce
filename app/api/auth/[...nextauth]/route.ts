// import NextAuth, { AuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";

import { handlers } from "@/auth";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     EmailProvider({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST!,
//         port: Number(process.env.EMAIL_SERVER_PORT!),
//         auth: {
//           user: process.env.EMAIL_SERVER_USER!,
//           pass: process.env.EMAIL_SERVER_PASSWORD!,
//         },
//       },
//       from: process.env.EMAIL_FROM!,
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, account, profile }) {
//       if (account) {
//         token.accessToken = account.access_token;
//         if (profile) token.user = profile;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = token.user;
//       return session;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


export const {GET , POST} = handlers;