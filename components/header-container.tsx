import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import React from "react";
import { Button } from "./ui/button";
import SidebarClosed from "./sidebar-closed";
import { Mail, CircleUserRound, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeaderContainer() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-white sm:static sm:h-auto sm:bg-transparent  sm:py-2 px-6 sm:px-6 dark:bg-gray-950">
      {/* Lista de iconos al estar cerrada */}
      <SidebarClosed></SidebarClosed>

      {/* Keep for margin left and offset behivor */}
      <div className="relative ml-auto flex-1 md:grow-0"></div>

      <Link href="#">
        <Mail className="h-4 w-4" />
      </Link>

      <CircleUserRound className="ml-5 h-9 w-9"></CircleUserRound>
      <span className="ml-1 mr-2">33BOSTONE</span>
      <Button variant={"ghost"} className="ml-2 h-auto p-0 m-0">
        <ChevronDown></ChevronDown>
      </Button>
    </header>
  );
}
