import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Next.js 16: `src/proxy.ts` (ранее middleware).
 * Default export — то, что ожидает node-адаптер; так же рекомендует next-intl.
 */
export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/((?!api|_next|_next/static|_next/image|_vercel|.*\\..*).*)",
  ],
};
