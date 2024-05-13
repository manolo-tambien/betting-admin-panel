import React from "react";
import {
  CircleHelp,
  Trash,
  RefreshCw,
  Printer,
  PanelsTopLeft,
  X,
  Users,
  ArrowUp,
  DollarSign,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CardStats from "@/components/functionals/card-stats";
import { Card } from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-rows-4">
        {/* First row */}
        <div className="flex items-center justify-start   ">
          <h3 className="scroll-m-20 text-2xl font-semibold">Dashboard</h3>
          <Link
            className="flex items-center text-blue-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <CircleHelp />
          </Link>
        </div>

        {/* Second row */}
        <div className="flex items-center justify-start pt-0  ">
          <p className="text-red-500">Please contact your master agent</p>
        </div>

        {/* Third row */}
        <div className="flex flex-wrap items-start  ">
          {/* Firs column */}
          <div className="flex flex-col m-1 items-start">
            <Label className="mb-1">Summary for agent</Label>
            <Select defaultValue="demo">
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">33BOSTONE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Second column */}
          <div className="flex flex-col m-1 items-start">
            <Label className="mb-1">Period of time</Label>
            <Select defaultValue="demo">
              <SelectTrigger className="w-[210px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">03/11/2024 - 03/17/2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Third column */}
          <div className="flex flex-col mt-auto m-1 text-blue-500 items-start justify-end">
            <Button variant="outline">
              <Trash className="mr-1 w-4 h-4" />
              Clear all filters
            </Button>
          </div>

          <div className="flex ml-auto m-1 mt-auto items-end justify-end">
            <Button className="m-1" variant="outline">
              <RefreshCw className="mr-1 w-4 h-4 text-blue-500" />
              Refresh
            </Button>
            <Button className="m-1 " variant="outline">
              <Printer className="mr-1 w-4 h-4 text-blue-500" />
              Print
            </Button>
            <Button className="m-1" variant="outline">
              <PanelsTopLeft className="mr-1 w-4 h-4 text-blue-500" />
              Change Views
            </Button>
          </div>
        </div>

        {/* Fourth row */}
        <div className="flex items-center justify-start  ">
          <span>Filter By:</span>
          <Badge className="ml-1 bg-blue-100" variant="secondary">
            <span className="text-blue-500">03/11/2024 - 03/17/2024</span>
            <Link href="#">
              <X className="w-4 h-4"></X>
            </Link>
          </Badge>
        </div>
      </div>

      {/* Fifth row */}
      <div className="flex items-center justify-start">
        {/* First column */}
        <div className="w-1/4 pl-0  p-4">
          {/* <h4 className="text-lg font-semibold">Column 1</h4>
          <p>This is the content of column 1.</p> */}
          <CardStats
            titleStat="This week"
            unit="Players Lose"
            valueStat={-18914}
            iconStat={<ArrowDown />}
            colorAccent="text-red-500"
            colorAccentLight="bg-red-100"
          />
        </div>

        {/* Second column */}
        <div className="w-1/4   p-4">
          <CardStats
            colorAccent="text-blue-500"
            colorAccentLight="bg-blue-100"
            titleStat="Active Players"
            valueStat={11}
            iconStat={<Users />}
          />
        </div>

        {/* Third column */}
        <div className="w-1/4   p-4">
          <CardStats
            unit="Players Win"
            colorAccent="text-green-500"
            colorAccentLight="bg-green-100"
            titleStat="Last Week"
            valueStat={8683}
            iconStat={<ArrowUp />}
          />
        </div>

        {/* Fourth column */}
        <div className="w-1/4   p-4">
          <CardStats
            colorAccent="text-blue-500"
            colorAccentLight="bg-blue-100"
            titleStat="Distribution"
            valueStat={0}
            iconStat={<DollarSign />}
          />
        </div>
      </div>
    </div>
  );
}
