"use client";
import { useRouter } from "next/navigation";

export const useActiveClass = (
  path: string,
  activeClass = "text-yellow-500 font-bold",
  inactiveClass = "text-white"
) => {
  const router = useRouter();
  return router.pathname === path ? activeClass : inactiveClass;
};
