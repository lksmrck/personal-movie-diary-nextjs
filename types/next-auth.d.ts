/* import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { SessionOptions } from "next-auth";

//Extending Next-auth interfaces
declare module "next-auth" {
  interface AuthOptions {
    signIn?: ({ profile }: any) => Promise<any>;
    userSession?: ({ session }: any) => Promise<any>;
  }
}
 */
