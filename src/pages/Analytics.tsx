import { Header } from "@/components/layout/Header";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Eye,
  Users,
  Clock,
  Globe
} from "lucide-react";

const analyticsData = [
  { month: "Jan", revenue: 4000, users: 240, sessions: 400, conversion: 2.4 },
  { month: "Feb", revenue: 3000, users: 138, sessions: 300, conversion: 1.8 },
  { month: "Mar", revenue: 5000, users: 280, sessions: 500, conversion: 3.2 },
  { month: "Apr", revenue: 4500, users: 390, sessions: 450, conversion: 2.8 },
  { month: "May", revenue: 6000, users: 480, sessions: 600, conversion: 3.5 },
  { month: "Jun", revenue: 5500, users: 380, sessions: 550, conversion: 3.1 },
];

const performanceData = [
  { subject: "Speed", A: 120, B: 110, fullMark: 150 },
  { subject: "Reliability", A: 98, B: 130, fullMark: 150 },
  { subject: "Security", A: 86, B: 130, fullMark: 150 },
  { subject: "Features", A: 99, B: 100, fullMark: 150 },
  { subject: "UX", A: 85, B: 90, fullMark: 150 },
  { subject: "Support", A: 65, B: 85, fullMark: 150 },
];

const trafficSources = [
  { source: "Organic Search", visitors: 45230, percentage: 42.3, trend: "up" },
  { source: "Direct", visitors: 28450, percentage: 26.7, trend: "up" },
  { source: "Social Media", visitors: 18920, percentage: 17.8, trend: "down" },
  { source: "Referral", visitors: 9840, percentage: 9.2, trend: "up" },
  { source: "Email", visitors: 4280, percentage: 4.0, trend: "down" },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <Header 
        title="Analytics" 
        subtitle="Deep insights into your business performance"
      />

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Page Views</p>
                <p className="text-2xl font-bold gradient-text">2.4M</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">+12.5%</span>
                </div>
              </div>
              <Eye className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unique Visitors</p>
                <p className="text-2xl font-bold gradient-text">485K</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">+8.2%</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Session</p>
                <p className="text-2xl font-bold gradient-text">3m 45s</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-destructive" />
                  <span className="text-xs text-destructive">-2.1%</span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Bounce Rate</p>
                <p className="text-2xl font-bold gradient-text">24.3%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">-5.4%</span>
                </div>
              </div>
              <Globe className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <ChartCard title="Revenue Trend" subtitle="Monthly performance over time">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(195 100% 50%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(195 100% 50%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
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
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* User Growth */}
        <ChartCard title="User Growth" subtitle="New users vs sessions">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(270 70% 60%)"
                strokeWidth={3}
                dot={{ fill: "hsl(270 70% 60%)", strokeWidth: 2, r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="hsl(180 100% 50%)"
                strokeWidth={3}
                dot={{ fill: "hsl(180 100% 50%)", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Conversion Rate */}
        <ChartCard title="Conversion Rate" subtitle="Monthly conversion tracking">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Bar 
                dataKey="conversion" 
                fill="hsl(195 100% 50%)" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Performance Radar */}
        <ChartCard title="Performance Metrics" subtitle="System performance overview">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <PolarRadiusAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Radar
                name="Current"
                dataKey="A"
                stroke="hsl(195 100% 50%)"
                fill="hsl(195 100% 50%)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Target"
                dataKey="B"
                stroke="hsl(270 70% 60%)"
                fill="hsl(270 70% 60%)"
                fillOpacity={0.1}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Traffic Sources */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/10">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div>
                    <p className="font-medium">{source.source}</p>
                    <p className="text-sm text-muted-foreground">
                      {source.visitors.toLocaleString()} visitors
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">{source.percentage}%</span>
                  <Badge 
                    variant={source.trend === "up" ? "default" : "secondary"}
                    className={source.trend === "up" ? "text-success" : "text-destructive"}
                  >
                    {source.trend === "up" ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {source.trend}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;