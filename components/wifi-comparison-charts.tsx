"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { location: "九楼", redmiDown: 49, redmiUp: 64, cpeDown: 55, cpeUp: 75, redmiRSSI: -68, cpeRSSI: -75 },
  { location: "九楼楼梯", redmiDown: 21, redmiUp: 19, cpeDown: 4, cpeUp: 13, redmiRSSI: -83, cpeRSSI: -83 },
  { location: "九楼楼梯门口", redmiDown: 12, redmiUp: 18, cpeDown: 29, cpeUp: 36, redmiRSSI: -82, cpeRSSI: -81 },
  { location: "九楼楼梯门口穿二墙", redmiDown: 11, redmiUp: 15, cpeDown: 0, cpeUp: 0, redmiRSSI: -86, cpeRSSI: -86 },
  { location: "3楼", redmiDown: 37, redmiUp: 41, cpeDown: 18, cpeUp: 29, redmiRSSI: -78, cpeRSSI: -84 },
  { location: "3楼楼梯", redmiDown: 1, redmiUp: 8, cpeDown: 0, cpeUp: 0, redmiRSSI: -86, cpeRSSI: -91 },
  { location: "3楼楼梯门口", redmiDown: 0, redmiUp: 0, cpeDown: 0, cpeUp: 0, redmiRSSI: -87, cpeRSSI: -94 },
  { location: "一楼", redmiDown: 42, redmiUp: 34, cpeDown: 28, cpeUp: 52, redmiRSSI: -81, cpeRSSI: -76 },
  { location: "一楼大厅", redmiDown: 30, redmiUp: 28, cpeDown: 4, cpeUp: 20, redmiRSSI: -83, cpeRSSI: -80 },
]

export function WifiComparisonCharts() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>红米路由器、CPE 测试对比</CardTitle>
          <CardDescription>
            比较不同楼层、不同摆放场景下，红米路由器（4 天线）和 CPE（2 天线）连接 RN 的上/下行速率
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              redmiDown: {
                label: "红米下行速率",
                color: "hsl(var(--chart-1))",
              },
              redmiUp: {
                label: "红米上行速率",
                color: "hsl(var(--chart-2))",
              },
              cpeDown: {
                label: "CPE下行速率",
                color: "hsl(var(--chart-3))",
              },
              cpeUp: {
                label: "CPE上行速率",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" label={{ value: '速率 (Mbps)', angle: -90, position: 'insideLeft' }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend verticalAlign="top" height={36} />
                <Line yAxisId="left" type="monotone" dataKey="redmiDown" stroke="var(--color-redmiDown)" name="红米下行速率" />
                <Line yAxisId="left" type="monotone" dataKey="redmiUp" stroke="var(--color-redmiUp)" name="红米上行速率" />
                <Line yAxisId="left" type="monotone" dataKey="cpeDown" stroke="var(--color-cpeDown)" name="CPE下行速率" />
                <Line yAxisId="left" type="monotone" dataKey="cpeUp" stroke="var(--color-cpeUp)" name="CPE上行速率" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>RSSI 对比</CardTitle>
          <CardDescription>
            比较不同楼层、不同摆放场景下，红米路由器（4 天线）和 CPE（2 天线）的 RSSI 值
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              redmiRSSI: {
                label: "红米 RSSI",
                color: "hsl(var(--chart-1))",
              },
              cpeRSSI: {
                label: "CPE RSSI",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'RSSI (dBm)', angle: -90, position: 'insideLeft' }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="redmiRSSI" stroke="var(--color-redmiRSSI)" name="红米 RSSI" />
                <Line type="monotone" dataKey="cpeRSSI" stroke="var(--color-cpeRSSI)" name="CPE RSSI" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
