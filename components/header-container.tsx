import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '../components/ui/dropdown-menu'
import React from 'react'
import { Button } from './ui/button'
import SidebarClosed  from "./sidebar-closed";
import DropdownMenuProfile from "./dropdown-menu-profile";


export default function HeaderContainer() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-gray-950">
          
          {/* Lista de iconos al estar cerrada */}
          <SidebarClosed></SidebarClosed>

          {/* Keep for margin left and offset behivor */}
          <div className="relative ml-auto flex-1 md:grow-0">
          </div>

          {/* DropdownMenuProfile */}
          <DropdownMenuProfile></DropdownMenuProfile>
        </header>
  )
}
