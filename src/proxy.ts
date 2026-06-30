import { type NextRequest, NextResponse } from "next/server";

const locales = ["en", "bn"];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    const urlLocale = pathname.split("/")[1];
    const response = NextResponse.next();
    response.cookies.set("locale", urlLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
    return response;
  }

  const isFile = pathname.includes(".");
  const isInternal =
    pathname.startsWith("/_next") || pathname.startsWith("/api");

  if (isFile || isInternal) {
    return NextResponse.next();
  }

  const savedLocale = request.cookies.get("locale")?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    request.nextUrl.pathname = `/${savedLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  let targetLocale = "bn";
  const acceptLanguage = request.headers.get("accept-language") || "";
  if (acceptLanguage.startsWith("en") || acceptLanguage.includes("en-US")) {
    targetLocale = "en";
  }

  request.nextUrl.pathname = `/${targetLocale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set("locale", targetLocale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|sitemap.xml|robots.txt).*)",
  ],
};
