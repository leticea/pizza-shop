import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import colors from "tailwindcss/colors";

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryFn: getDailyRevenueInPeriod,
    queryKey: ["metrics", "daily-revenue-in-period"],
  });

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod && (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />

              <CartesianGrid vertical={false} className="stroke-muted" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors["violet"]["500"]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
