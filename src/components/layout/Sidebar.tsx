import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CreditCard,
  BarChart3,
  Table,
  User,
  Settings,
  Menu,
  X,
  Zap,
  FileText,
  Receipt,
  Users,
  Bell,
  Calendar,
  Briefcase,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Projects",
    icon: Briefcase,
    href: "/projects",
  },
  {
    title: "Transactions",
    icon: Receipt,
    href: "/transactions",
  },
  {
    title: "Team",
    icon: Users,
    href: "/team",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/reports",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "Tables",
    icon: Table,
    href: "/tables",
  },
  {
    title: "Pricing",
    icon: CreditCard,
    href: "/pricing",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className={cn(
      "glass border-r transition-all duration-300 flex flex-col h-screen",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/20">
        <div className={cn(
          "flex items-center gap-2 transition-opacity duration-200",
          collapsed && "opacity-0"
        )}>
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg gradient-text">S-HATCH</h2>
            <p className="text-xs text-muted-foreground">Company Dashboard</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="text-muted-foreground hover:text-foreground hover:bg-muted/20"
        >
          {collapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                "hover:bg-primary/10 hover:text-primary glow-hover",
                isActive && "bg-primary/20 text-primary glow-primary",
                collapsed && "justify-center px-2"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className={cn(
                "font-medium transition-opacity duration-200",
                collapsed && "opacity-0 w-0"
              )}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/20">
        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg bg-gradient-secondary hover:bg-gradient-primary transition-all duration-200",
            collapsed && "justify-center"
          )}
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
          <div className={cn(
            "transition-opacity duration-200",
            collapsed && "opacity-0 w-0"
          )}>
            <p className="text-sm font-medium">Settings</p>
            <p className="text-xs text-muted-foreground">Configure your dashboard</p>
          </div>
        </Link>
      </div>
    </div>
  );
}