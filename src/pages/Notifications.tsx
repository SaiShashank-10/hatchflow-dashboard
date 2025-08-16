import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Check,
  X,
  Settings,
  Mail,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  Info,
  Calendar,
  DollarSign,
  Users,
  Trash2
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    type: "success",
    title: "Payment Received",
    message: "Payment of $2,500 has been received from Tech Corp Inc.",
    time: "2 minutes ago",
    read: false,
    avatar: "/api/placeholder/32/32",
    category: "financial"
  },
  {
    id: 2,
    type: "info",
    title: "New Team Member",
    message: "Jessica Brown has joined the Engineering team",
    time: "1 hour ago",
    read: false,
    avatar: "/api/placeholder/32/32",
    category: "team"
  },
  {
    id: 3,
    type: "warning",
    title: "Project Deadline Approaching",
    message: "S-HATCH Mobile App project deadline is in 3 days",
    time: "3 hours ago",
    read: true,
    avatar: "/api/placeholder/32/32",
    category: "project"
  },
  {
    id: 4,
    type: "info",
    title: "Meeting Scheduled",
    message: "Client presentation scheduled for tomorrow at 2:00 PM",
    time: "5 hours ago",
    read: true,
    avatar: "/api/placeholder/32/32",
    category: "calendar"
  },
  {
    id: 5,
    type: "error",
    title: "Server Alert",
    message: "High CPU usage detected on production server",
    time: "6 hours ago",
    read: false,
    avatar: "/api/placeholder/32/32",
    category: "system"
  },
  {
    id: 6,
    type: "success",
    title: "Task Completed",
    message: "Security audit has been completed successfully",
    time: "1 day ago",
    read: true,
    avatar: "/api/placeholder/32/32",
    category: "project"
  }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [filter, setFilter] = useState("all");
  const [settings, setSettings] = useState({
    email: true,
    push: true,
    desktop: false,
    financial: true,
    team: true,
    project: true,
    system: true
  });

  const getNotificationIcon = (type: string) => {
    const icons: Record<string, any> = {
      success: CheckCircle,
      error: AlertTriangle,
      warning: AlertTriangle,
      info: Info
    };
    return icons[type] || Bell;
  };

  const getNotificationColor = (type: string) => {
    const colors: Record<string, string> = {
      success: "text-success",
      error: "text-destructive",
      warning: "text-warning",
      info: "text-primary"
    };
    return colors[type] || "text-muted-foreground";
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, any> = {
      financial: DollarSign,
      team: Users,
      project: Bell,
      calendar: Calendar,
      system: Settings
    };
    return icons[category] || Bell;
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    return notification.category === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <Header 
        title="Notifications" 
        subtitle="Manage your notifications and alerts"
      />

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{notifications.length}</p>
                <p className="text-sm text-muted-foreground">Total Notifications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{unreadCount}</p>
                <p className="text-sm text-muted-foreground">Unread</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <CheckCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">12</p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <Settings className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">5</p>
                <p className="text-sm text-muted-foreground">System Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notifications List */}
        <div className="lg:col-span-2">
          <Card className="card-glass">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CardTitle>Recent Notifications</CardTitle>
                  {unreadCount > 0 && (
                    <Badge variant="secondary">{unreadCount} unread</Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={markAllAsRead}>
                    <Check className="w-4 h-4 mr-2" />
                    Mark All Read
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { key: "all", label: "All" },
                  { key: "unread", label: "Unread" },
                  { key: "financial", label: "Financial" },
                  { key: "team", label: "Team" },
                  { key: "project", label: "Projects" },
                  { key: "system", label: "System" }
                ].map((filterOption) => (
                  <Button
                    key={filterOption.key}
                    variant={filter === filterOption.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(filterOption.key)}
                  >
                    {filterOption.label}
                  </Button>
                ))}
              </div>

              {/* Notifications */}
              <div className="space-y-2">
                {filteredNotifications.map((notification) => {
                  const NotificationIcon = getNotificationIcon(notification.type);
                  const CategoryIcon = getCategoryIcon(notification.category);
                  
                  return (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border transition-colors hover:bg-muted/5 ${
                        notification.read ? 'border-border/20' : 'border-primary/20 bg-primary/5'
                      }`}
                    >
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={notification.avatar} />
                        <AvatarFallback className="bg-primary/20">
                          <CategoryIcon className="w-5 h-5 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2">
                          <NotificationIcon className={`w-4 h-4 mt-1 ${getNotificationColor(notification.type)}`} />
                          <div className="flex-1">
                            <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredNotifications.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No notifications found.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <div>
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Delivery Methods */}
              <div className="space-y-4">
                <h4 className="font-medium">Delivery Methods</h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Email Notifications</span>
                  </div>
                  <Switch
                    checked={settings.email}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, email: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Push Notifications</span>
                  </div>
                  <Switch
                    checked={settings.push}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, push: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Desktop Notifications</span>
                  </div>
                  <Switch
                    checked={settings.desktop}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, desktop: checked }))
                    }
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Financial</span>
                  </div>
                  <Switch
                    checked={settings.financial}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, financial: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Team Updates</span>
                  </div>
                  <Switch
                    checked={settings.team}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, team: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Project Updates</span>
                  </div>
                  <Switch
                    checked={settings.project}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, project: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">System Alerts</span>
                  </div>
                  <Switch
                    checked={settings.system}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, system: checked }))
                    }
                  />
                </div>
              </div>

              <Button className="w-full glow-hover">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Notifications;