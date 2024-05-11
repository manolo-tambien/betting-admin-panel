import React, { createContext } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip'
import { Home, FileBarChart, Hammer } from 'lucide-react'
import Link from "next/link"


export default function SidebarBig() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex dark:bg-gray-950">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50"
                href="/"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Admin Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Admin Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
            {/* Makes icon/link selected style: bg-gray-100 */}
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg  text-gray-900 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports"
              >
                <FileBarChart className="h-5 w-5" />
                <span className="sr-only">Reports</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Reports</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/maintenance"
              >
                <Hammer className="h-5 w-5" />
                <span className="sr-only">Maintenance</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Maintenance</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
