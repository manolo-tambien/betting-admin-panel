import React, { createContext } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Home, FileBarChart, Hammer } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function SidebarBig() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white sm:flex dark:bg-gray-950">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Home />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            <DropdownMenuLabel>Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/admin"
              >
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Summary</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Link
                      className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                      href="/admin/sumary/filters"
                    >
                      <span>Filters</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                      href="/admin/sumary/metrics"
                    >
                      <span>Metrics</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <FileBarChart />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            <DropdownMenuLabel>Reports</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports/wmq-reports"
              >
                <span>Weekly/Monthly/Quarterly Reports</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports/wagers"
              >
                <span>Wagers</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports/performance"
              >
                <span>Performance</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports/history"
              >
                <span>History</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/reports/miscellaneous"
              >
                <span>Miscellaneous</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Hammer />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            <DropdownMenuLabel>Maintenance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/maintenance/agents"
              >
                <span>Agents</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/maintenance/players"
              >
                <span>Players</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/maintenance/tree"
              >
                <span>Tree</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center justify-center rounded-lg text-gray-900 transition-colors hover:text-gray-950   dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/maintenance/billing"
              >
                <span>Billing</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </aside>
  );
}
