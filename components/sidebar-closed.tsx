import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { FileBarChart, PanelLeft, Hammer, Home } from 'lucide-react'
import Link from "next/link"

export default function SidebarClosed() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="sm:hidden" size="icon" variant="outline">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-xs" side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="/admin">
                        <Home className="h-5 w-5" />
                        Admin Dashboard
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                        <FileBarChart className="h-5 w-5" />
                        Reports
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-950 dark:text-gray-50" href="#">
                        <Hammer className="h-5 w-5" />
                        Maintenance
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
