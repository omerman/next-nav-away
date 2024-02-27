"use client";
import { useBeforeUnload } from "@/app/useBeforeUnload";

export function Provider({ children }: any) {
  return <useBeforeUnload.Provider>{children}</useBeforeUnload.Provider>;
}
