import { Header } from "@/components/layout/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  Activity,
  Target
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import heroImage from "@/assets/hero-dashboard.jpg";

const salesData = [
  { name: "Jan", value: 400, revenue: 2400 },
  { name: "Feb", value: 300, revenue: 1398 },
  { name: "Mar", value: 500, revenue: 9800 },
  { name: "Apr", value: 280, revenue: 3908 },
  { name: "May", value: 590, revenue: 4800 },
  { name: "Jun", value: 320, revenue: 3800 },
  { name: "Jul", value: 420, revenue: 4300 },
];

const pieData = [
  { name: "Basic", value: 35, color: "hsl(195 100% 50%)" },
  { name: "Pro", value: 45, color: "hsl(270 70% 60%)" },
  { name: "Enterprise", value: 20, color: "hsl(180 100% 50%)" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Header 
        title="Dashboard" 
        subtitle="Welcome back to S-HATCH Company Analytics"
      />

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="relative h-full flex items-center p-8">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-2">
                Welcome back, Mark Johnson
              </h2>
              <p className="text-muted-foreground">
                Glad to see you again! Monitor your business metrics and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Today's Money"
          value="$53,000"
          change="+55%"
          changeType="positive"
          icon={<DollarSign className="w-6 h-6 text-primary-foreground" />}
        />
        <MetricCard
          title="Today's Users"
          value="2,300"
          change="+3%"
          changeType="positive"
          icon={<Users className="w-6 h-6 text-primary-foreground" />}
        />
        <MetricCard
          title="New Clients"
          value="3,462"
          change="-2%"
          changeType="negative"
          icon={<ShoppingCart className="w-6 h-6 text-primary-foreground" />}
        />
        <MetricCard
          title="Total Sales"
          value="$103,430"
          change="+5%"
          changeType="positive"
          icon={<TrendingUp className="w-6 h-6 text-primary-foreground" />}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <ChartCard
          title="Sales Overview"
          subtitle="+5% more in 2021"
          className="lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(195 100% 50%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(195 100% 50%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(195 100% 50%)"
                strokeWidth={3}
                fill="url(#salesGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Activity Chart */}
        <ChartCard title="Active Users" subtitle="(+23) than last week">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="value" fill="hsl(195 100% 50%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Plan Distribution */}
        <ChartCard title="Plan Distribution" subtitle="Current subscriptions">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {entry.name} ({entry.value}%)
                </span>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-glass p-6 text-center">
          <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">95%</h3>
          <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
        </div>
        <div className="card-glass p-6 text-center">
          <Target className="w-8 h-8 text-success mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">1,465</h3>
          <p className="text-sm text-muted-foreground">Referral Tracking</p>
        </div>
        <div className="card-glass p-6 text-center">
          <TrendingUp className="w-8 h-8 text-warning mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1">9.3</h3>
          <p className="text-sm text-muted-foreground">Safety Score</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;