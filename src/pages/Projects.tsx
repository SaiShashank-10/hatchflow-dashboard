import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Briefcase,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Calendar,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "S-HATCH Mobile App",
    description: "Next-generation mobile application for our platform",
    status: "in-progress",
    progress: 75,
    team: 8,
    deadline: "2024-03-15",
    budget: 150000,
    spent: 112500,
    priority: "high"
  },
  {
    id: 2,
    name: "AI Integration Platform",
    description: "Integrating AI capabilities across all services",
    status: "planning",
    progress: 25,
    team: 5,
    deadline: "2024-06-30",
    budget: 200000,
    spent: 25000,
    priority: "medium"
  },
  {
    id: 3,
    name: "Security Enhancement",
    description: "Comprehensive security audit and improvements",
    status: "completed",
    progress: 100,
    team: 4,
    deadline: "2024-01-31",
    budget: 80000,
    spent: 75000,
    priority: "high"
  },
  {
    id: 4,
    name: "Data Analytics Dashboard",
    description: "Advanced analytics and reporting system",
    status: "in-progress",
    progress: 60,
    team: 6,
    deadline: "2024-04-20",
    budget: 120000,
    spent: 72000,
    priority: "medium"
  }
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      "in-progress": "default",
      "completed": "secondary",
      "planning": "destructive"
    };
    return variants[status] || "secondary";
  };

  const getPriorityColor = (priority: string) => {
    const colors: Record<string, string> = {
      high: "text-destructive",
      medium: "text-warning",
      low: "text-success"
    };
    return colors[priority] || "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      <Header 
        title="Projects" 
        subtitle="Manage and track your company projects"
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">12</p>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <Target className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">8</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">47</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
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
                <p className="text-2xl font-bold gradient-text">$2.1M</p>
                <p className="text-sm text-muted-foreground">Total Budget</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Projects */}
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Project Management</CardTitle>
            <Button className="glow-hover">
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/20 border-border/20"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Status: {statusFilter === "all" ? "All" : statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                  All Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("in-progress")}>
                  In Progress
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("planning")}>
                  Planning
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("completed")}>
                  Completed
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-glass hover:glow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="glass">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Project</DropdownMenuItem>
                          <DropdownMenuItem>Team Settings</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Archive Project</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Status and Priority */}
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusBadge(project.status)}>
                        {project.status.replace("-", " ")}
                      </Badge>
                      <span className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>
                        {project.priority} priority
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{project.team} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{project.deadline}</span>
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="pt-2 border-t border-border/20">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Budget Used</span>
                        <span className="font-medium">
                          ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <Progress 
                        value={(project.spent / project.budget) * 100} 
                        className="h-1 mt-2" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;