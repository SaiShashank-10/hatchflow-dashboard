import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CreditCard,
  Plus,
  Edit,
  Trash2,
  DollarSign,
  Users,
  Check,
  Star
} from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    billing: "monthly",
    features: ["5 Projects", "10GB Storage", "Email Support", "Basic Analytics"],
    popular: false,
    color: "hsl(195 100% 50%)"
  },
  {
    id: 2,
    name: "Pro",
    price: 99,
    billing: "monthly",
    features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Advanced Analytics", "API Access"],
    popular: true,
    color: "hsl(270 70% 60%)"
  },
  {
    id: 3,
    name: "Enterprise",
    price: 299,
    billing: "monthly",
    features: ["Everything in Pro", "Custom Integrations", "Dedicated Support", "SLA Guarantee", "On-premise Option"],
    popular: false,
    color: "hsl(180 100% 50%)"
  }
];

const recentTransactions = [
  {
    id: "TXN-001",
    customer: "Acme Corp",
    plan: "Enterprise",
    amount: 299,
    status: "completed",
    date: "2024-01-15"
  },
  {
    id: "TXN-002",
    customer: "TechStart LLC",
    plan: "Pro",
    amount: 99,
    status: "completed",
    date: "2024-01-14"
  },
  {
    id: "TXN-003",
    customer: "Design Studio",
    plan: "Basic",
    amount: 29,
    status: "pending",
    date: "2024-01-14"
  },
  {
    id: "TXN-004",
    customer: "Innovation Inc",
    plan: "Pro",
    amount: 99,
    status: "failed",
    date: "2024-01-13"
  }
];

const Pricing = () => {
  const [isAddPlanOpen, setIsAddPlanOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Header 
        title="Pricing & Transactions" 
        subtitle="Manage your pricing plans and monitor transactions"
      />

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`card-glass relative ${plan.popular ? 'ring-2 ring-primary glow-primary' : ''}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                <span className="text-muted-foreground">/{plan.billing}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 space-y-2">
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-destructive">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Plan Button */}
      <div className="flex justify-end">
        <Dialog open={isAddPlanOpen} onOpenChange={setIsAddPlanOpen}>
          <DialogTrigger asChild>
            <Button className="glow-hover">
              <Plus className="w-4 h-4 mr-2" />
              Add New Plan
            </Button>
          </DialogTrigger>
          <DialogContent className="glass">
            <DialogHeader>
              <DialogTitle>Create New Pricing Plan</DialogTitle>
              <DialogDescription>
                Add a new pricing plan to your offerings
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="plan-name">Plan Name</Label>
                <Input id="plan-name" placeholder="Enter plan name" />
              </div>
              <div>
                <Label htmlFor="plan-price">Price</Label>
                <Input id="plan-price" type="number" placeholder="29" />
              </div>
              <div>
                <Label htmlFor="plan-features">Features (one per line)</Label>
                <textarea
                  id="plan-features"
                  className="w-full p-2 bg-muted/20 border border-border/20 rounded-md"
                  rows={4}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddPlanOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddPlanOpen(false)}>
                  Create Plan
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold gradient-text">$12,847</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Subscriptions</p>
                <p className="text-2xl font-bold gradient-text">547</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-warning/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold gradient-text">23.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Churn Rate</p>
                <p className="text-2xl font-bold gradient-text">4.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-mono">{transaction.id}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>{transaction.plan}</TableCell>
                  <TableCell className="font-semibold">${transaction.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transaction.status === "completed" ? "default" :
                        transaction.status === "pending" ? "secondary" : "destructive"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;