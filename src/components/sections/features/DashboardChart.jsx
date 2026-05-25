import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, YAxis } from "recharts"

const chartData = [
  { name: "Jan", value: 42 },
  { name: "Feb", value: 68 },
  { name: "Mar", value: 28 },
  { name: "Apr", value: 18 },
  { name: "May", value: 92, active: true },
  { name: "Jun", value: 36 },
  { name: "Jul", value: 62 },
  { name: "Aug", value: 36 },
  { name: "Sep", value: 16 },
  { name: "Oct", value: 28 },
]

export function DashboardChart() {
  return (
    <div className="h-[245px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 8,
            right: 6,
            left: -18,
            bottom: 0,
          }}
          barGap={10}
        >
          <CartesianGrid
            vertical={false}
            stroke="rgba(0,72,56,0.08)"
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={12}
            ticks={[0, 20, 60, 100]}
            tickFormatter={(value) => {
              if (value === 100) return "10K"
              if (value === 60) return "6K"
              if (value === 20) return "2K"
              return "0"
            }}
            className="text-[12px] font-medium"
          />

          <Bar dataKey="value" radius={[9, 9, 9, 9]} barSize={24}>
            {chartData.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.active ? "#00513F" : "#D9DDD7"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}