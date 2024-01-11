import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  // development
  if (process.env.NODE_ENV === "development") {
    return `${process.env.NEXT_PUBLIC_LOCAL_URL}${path}`;
    // production
  } else {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${path}`;
  }
}
