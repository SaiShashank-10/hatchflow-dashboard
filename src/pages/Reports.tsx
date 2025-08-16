import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  PieChart,
  Filter,
  Eye
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 32000, profit: 13000 },
  { month: "Feb", revenue: 52000, expenses: 35000, profit: 17000 },
  { month: "Mar", revenue: 48000, expenses: 31000, profit: 17000 },
  { month: "Apr", revenue: 61000, expenses: 42000, profit: 19000 },
  { month: "May", revenue: 55000, expenses: 38000, profit: 17000 },
  { month: "Jun", revenue: 67000, expenses: 45000, profit: 22000 },
];

const departmentData = [
  { name: "Engineering", value: 45, color: "hsl(195 100% 50%)" },
  { name: "Marketing", value: 25, color: "hsl(270 70% 60%)" },
  { name: "Sales", value: 20, color: "hsl(180 100% 50%)" },
  { name: "Operations", value: 10, color: "hsl(45 100% 60%)" },
];

const reportsData = [
  {
    id: 1,
    title: "Q1 Financial Report",
    description: "Comprehensive financial analysis for Q1 2024",
    type: "Financial",
    status: "completed",
    date: "2024-01-31",
    format: "PDF",
    size: "2.4 MB"
  },
  {
    id: 2,
    title: "Team Performance Analysis",
    description: "Monthly team productivity and performance metrics",
    type: "HR",
    status: "pending",
    date: "2024-01-15",
    format: "Excel",
    size: "1.8 MB"
  },
  {
    id: 3,
    title: "Customer Satisfaction Survey",
    description: "Results from customer feedback and satisfaction survey",
    type: "Customer",
    status: "completed",
    date: "2024-01-20",
    format: "PDF",
    size: "3.1 MB"
  },
  {
    id: 4,
    title: "Project Status Dashboard",
    description: "Current status of all active projects and milestones",
    type: "Project",
    status: "completed",
    date: "2024-01-25",
    format: "PDF",
    size: "4.2 MB"
  }
];

const Reports = () => {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      completed: "default",
      pending: "destructive",
      draft: "secondary"
    };
    return variants[status] || "secondary";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Financial: "bg-success/20 text-success",
      HR: "bg-primary/20 text-primary",
      Customer: "bg-warning/20 text-warning",
      Project: "bg-destructive/20 text-destructive"
    };
    return colors[type] || "bg-muted/20 text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      <Header 
        title="Reports & Analytics" 
        subtitle="Generate and view comprehensive business reports"
      />

      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">24</p>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">18</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">6</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <Download className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">142</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="card-glass">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Revenue Trend</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
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
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card className="card-glass">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Resource Distribution</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
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
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {departmentData.map((entry, index) => (
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
          </CardContent>
        </Card>
      </div>

      {/* Profit/Loss Analysis */}
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Profit & Loss Analysis</CardTitle>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass">
                  <DropdownMenuItem>Last 3 Months</DropdownMenuItem>
                  <DropdownMenuItem>Last 6 Months</DropdownMenuItem>
                  <DropdownMenuItem>Last Year</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
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
              <Bar dataKey="revenue" fill="hsl(195 100% 50%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(0 84% 60%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" fill="hsl(142 76% 36%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Reports</CardTitle>
            <Button className="glow-hover">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportsData.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className={getTypeColor(report.type)}>
                        {report.type}
                      </Badge>
                      <Badge variant={getStatusBadge(report.status)}>
                        {report.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{report.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium">{report.format}</p>
                    <p className="text-xs text-muted-foreground">{report.size}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="glass">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Report
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;