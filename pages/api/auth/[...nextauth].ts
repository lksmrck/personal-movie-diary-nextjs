import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import { SessionOptions, AuthOptions, NextAuthOptions } from "next-auth";
import User from "@models/User";

const getGoogleCredentials = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId?.length === 0) {
    throw new Error("No client ID for Google provider set.");
  }

  if (!clientSecret || clientSecret?.length === 0) {
    throw new Error("No client secret for Google provider set.");
  }

  return { clientId, clientSecret };
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        // Checks if user already exist
        const userExists = await User.findOne({ email: profile?.email });

        // TODO: upravit ID generator
        if (!userExists) {
          await User.create({
            id: Math.random(),
            name: profile?.name,
            email: profile?.email,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

/* export { handler as GET, handler as POST } */
export default handler;
