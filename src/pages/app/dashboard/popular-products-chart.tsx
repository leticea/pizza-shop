import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

import { ResponsiveContainer, PieChart, Pie } from "recharts";
import colors from "tailwindcss/colors";

const data = [
  { product: "Marguerita", amount: 40 },
  { product: "Vegetariana", amount: 18 },
  { product: "Portuguesa", amount: 50 },
  { product: "Calabresa", amount: 32 },
  { product: "Palmito", amount: 21 },
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie data={data} dataKey="amount" nameKey="product" />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
