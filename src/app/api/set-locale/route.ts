import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isSupportedLocale, getLocaleCookieName } from "@/lib/locale";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const locale = body?.locale;

  if (!locale || !isSupportedLocale(locale)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const cookieStore = await cookies();
  cookieStore.set(getLocaleCookieName(), locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return NextResponse.json({ success: true });
}
