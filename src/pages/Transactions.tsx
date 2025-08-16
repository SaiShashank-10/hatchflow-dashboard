import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Receipt,
  Search,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  DollarSign,
  TrendingUp,
  Calendar
} from "lucide-react";

const transactionsData = [
  {
    id: "TXN-001",
    type: "income",
    amount: 2500.00,
    description: "Software License - Enterprise",
    category: "Revenue",
    date: "2024-01-15",
    status: "completed",
    method: "Bank Transfer",
    client: "Tech Corp Inc."
  },
  {
    id: "TXN-002",
    type: "expense",
    amount: 450.00,
    description: "Office Supplies",
    category: "Operations",
    date: "2024-01-14",
    status: "completed",
    method: "Credit Card",
    client: "Office Depot"
  },
  {
    id: "TXN-003",
    type: "income",
    amount: 8750.00,
    description: "Consulting Services Q1",
    category: "Services",
    date: "2024-01-13",
    status: "pending",
    method: "Wire Transfer",
    client: "Global Solutions Ltd."
  },
  {
    id: "TXN-004",
    type: "expense",
    amount: 1200.00,
    description: "Cloud Infrastructure - Monthly",
    category: "Technology",
    date: "2024-01-12",
    status: "completed",
    method: "Auto Pay",
    client: "AWS"
  },
  {
    id: "TXN-005",
    type: "income",
    amount: 3200.00,
    description: "Mobile App Development",
    category: "Development",
    date: "2024-01-11",
    status: "completed",
    method: "PayPal",
    client: "StartupXYZ"
  }
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredTransactions = transactionsData.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || transaction.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      completed: "default",
      pending: "destructive",
      failed: "secondary"
    };
    return variants[status] || "secondary";
  };

  const totalIncome = transactionsData
    .filter(t => t.type === "income" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactionsData
    .filter(t => t.type === "expense" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      <Header 
        title="Transactions" 
        subtitle="Track your financial transactions and cash flow"
      />

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <ArrowUpRight className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">${totalIncome.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Income</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <ArrowDownLeft className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">${totalExpenses.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">${netProfit.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Net Profit</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Receipt className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{transactionsData.length}</p>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Transaction History</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button className="glow-hover gap-2">
                <Receipt className="w-4 h-4" />
                Add Transaction
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/20 border-border/20"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Type: {typeFilter === "all" ? "All" : typeFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                <DropdownMenuItem onClick={() => setTypeFilter("all")}>
                  All Types
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("income")}>
                  Income
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTypeFilter("expense")}>
                  Expenses
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-border/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/10">
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Client/Vendor</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-muted/5">
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {transaction.type === "income" ? (
                          <ArrowUpRight className="w-4 h-4 text-success" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4 text-destructive" />
                        )}
                        <span className="capitalize">{transaction.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{transaction.client}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{transaction.method}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{transaction.date}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadge(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`font-semibold ${
                        transaction.type === "income" ? "text-success" : "text-destructive"
                      }`}>
                        {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No transactions found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;