import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { ExternalLink, ChevronDown } from "lucide-react";

interface CardStatsProps {
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
  titleStat?: string;
  unit?: string;
  valueStat?: number;
  iconStat?: React.ReactNode;
  colorAccent?: string;
  colorAccentLight?: string;
  showChevronDownIcon?: boolean;
}
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

const CardStats: React.FC<CardStatsProps> = ({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  titleStat,
  unit,
  valueStat,
  iconStat,
  colorAccent,
  colorAccentLight,
  showChevronDownIcon,
}) => {
  return (
    <Card>
      <CardContent className="pt-6 flex flex-row justify-between">
        <div className="w-4/5">
          <div className="flex flex-col justify-start">
            <div className="flex items-center">
              <div className="text-lg font-semibold">{titleStat}</div>
              <div>
                {unit !== undefined && (
                  <span className={`pl-1 ${colorAccent}`}>/ {unit}</span>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <div className={`text-3xl font-semibold ${colorAccent}`}>
                {valueStat}
              </div>
              <Badge className={`ml-1 ${colorAccentLight}`} variant="outline">
                <div className={` ${colorAccent}`}>{iconStat}</div>
              </Badge>
              {showChevronDownIcon && (
                <Button className="p-0 m-0 h-5 ml-1 mb-auto" variant={"outline"}>
                  <ChevronDown className="h-4 w-4"></ChevronDown>
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col mb-auto justify-start items-end">
          <div className="text-right">
            <Link href="#">
              <ExternalLink className="h-4 w-4"></ExternalLink>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStats;
