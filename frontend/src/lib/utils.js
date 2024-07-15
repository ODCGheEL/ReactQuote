import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const BACKEND_URL = "https://reactquote-backend.onrender.com/api/quotes/"