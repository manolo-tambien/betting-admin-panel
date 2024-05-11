import React from 'react'
import { DropdownMenu, DropdownMenuContent,DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'

export default function DropdownMenuProfile() {
    return (
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
    )
}
