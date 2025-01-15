import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "ایمیل", type: "text", placeholder: "example@example.com" },
        password: { label: "رمز عبور", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        // ارسال درخواست به API سرور برای تأیید کاربر
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
          const user = await res.json();
          return user; // بازگرداندن اطلاعات کاربر برای ذخیره در سشن
        }

        return null; // بازگرداندن null در صورت ناموفق بودن
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // صفحه ورود سفارشی
    error: "/auth/error", // مدیریت خطاها
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
      };
      return session;
    },
  },
});

export { handler as GET, handler as POST };
