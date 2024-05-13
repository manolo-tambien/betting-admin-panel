import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { ExternalLink } from "lucide-react";

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
}

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
}) => {
  return (
    <Card>
      <CardContent className="pt-6 flex flex-row justify-between">
        <div className="w-3/4">
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
                <div className={`text-3xl font-semibold ${colorAccent}`}>{valueStat}</div>
                <div className={`pl-2 ${colorAccent}`}>{iconStat}</div>
            </div>

          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-end items-end">
          <div className="text-right">
            <ExternalLink></ExternalLink>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStats;
