import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type CustomSessionClaims = {
  metadata?: {
    approved?: boolean;
  };
};

const isProtectedRoute = createRouteMatcher(["/games(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isProtectedRoute(request)) {
    return NextResponse.next();
  }

  const { isAuthenticated, sessionClaims, redirectToSignIn } = await auth();

  if (!isAuthenticated) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }

  const claims = sessionClaims as CustomSessionClaims;
  const isApproved = claims.metadata?.approved === true;

  if (!isApproved) {
    const pendingUrl = new URL("/pending-approval", request.url);
    return NextResponse.redirect(pendingUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};