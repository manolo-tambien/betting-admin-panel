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
import { Card, CardContent } from "@/components/ui/card";

import BarChart from "@/components/bar-chart";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex flex-col">
        {/* First row */}
        <div className="flex items-center justify-start py-2">
          <h3 className="scroll-m-20 text-2xl font-semibold">Dashboard</h3>
          <Link
            className="flex items-center text-blue-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <CircleHelp />
          </Link>
        </div>

        {/* Second row */}
        <div className="flex items-center justify-start py-4">
          <p className="text-red-500">Please contact your master agent</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-start">
          {/* First column */}
          <div className="flex flex-col p-1 w-full sm:w-full md:w-1/4 lg:w-1/4 items-start">
            <Label className="mb-1">Summary for agent</Label>
            <Select defaultValue="demo">
              <SelectTrigger className="">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">33BOSTONE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Second column */}
          <div className="flex flex-col p-1  w-full sm:w-full md:w-2/4 lg:w-1/4 items-start">
            <Label className="mb-1">Period of time</Label>
            <Select defaultValue="demo">
              <SelectTrigger className="">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="demo">03/11/2024 - 03/17/2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Third column */}
          <div className="flex flex-col p-1 mt-auto w-full sm:w-full md:w-1/4  lg:w-1/4 text-blue-500 items-start justify-end">
            <Button variant="outline">
              <Trash className="mr-1 w-4 h-4" />
              Clear all filters
            </Button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="py-4">
          <span>Filter By:</span>
          <Badge className="ml-1 bg-blue-100" variant="secondary">
            <span className="text-blue-500">03/11/2024 - 03/17/2024</span>
            <Link href="#">
              <X className="w-4 h-4"></X>
            </Link>
          </Badge>
        </div>

        <div className=" xl:ml-auto">
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

      <div className="flex flex-wrap">
        {/* First column */}
        <div className="w-full xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-full p-4">
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
        <div className=" w-full xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-full p-4">
          <CardStats
            colorAccent="text-blue-500"
            colorAccentLight="bg-blue-100"
            titleStat="Active Players"
            valueStat={11}
            iconStat={<Users />}
          />
        </div>

        {/* Third column */}
        <div className=" w-full xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-full p-4">
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
        <div className=" w-full xl:w-1/4 lg:w-1/2 md:w-1/2 sm:w-full p-4">
          <CardStats
            showChevronDownIcon={true}
            colorAccent="text-blue-500"
            colorAccentLight="bg-blue-100"
            titleStat="Distribution"
            valueStat={0}
            iconStat={<DollarSign />}
          />
        </div>
      </div>

      <div className="w-full">
        <Card>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
