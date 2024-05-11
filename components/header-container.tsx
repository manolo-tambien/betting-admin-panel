import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '../components/ui/dropdown-menu'
import { Sheet, PanelLeftIcon, Link, Package2Icon, HomeIcon, ShoppingCartIcon, PackageIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { SheetTrigger, SheetContent } from './ui/sheet'

export default function HeaderContainer() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 dark:bg-gray-950">
          
          {/* Lista de iconos al estar cerrada */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="sm:hidden" size="icon" variant="outline">
                <PanelLeftIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-xs" side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-900 text-lg font-semibold text-gray-50 md:text-base dark:bg-gray-50 dark:text-gray-900"
                  href="#"
                >
                  <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  <HomeIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                  <ShoppingCartIcon className="h-5 w-5" />
                  Orders
                </Link>
                <Link className="flex items-center gap-4 px-2.5 text-gray-950 dark:text-gray-50" href="#">
                  <PackageIcon className="h-5 w-5" />
                  Products
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

           
          
          {/* Keep for margin left and offset behivor */}
          <div className="relative ml-auto flex-1 md:grow-0">
          </div>

          {/* DropdownMenuProfile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="overflow-hidden rounded-full" size="icon" variant="outline">
                <img
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  height={36}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "36/36",
                    objectFit: "cover",
                  }}
                  width={36}
                /> 
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
  )
}
