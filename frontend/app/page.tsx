"use client";

import { useEffect } from "react";
import { isLoggedIn } from "@/lib/auth";

export default function HomePage() {
  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/login";
    }
  }, []);

  return null;
}
