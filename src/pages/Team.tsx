import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Star,
  UserPlus,
  Shield,
  Award
} from "lucide-react";

const teamData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@shatch.com",
    role: "Chief Technology Officer",
    department: "Engineering",
    status: "active",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    joinDate: "2022-01-15",
    avatar: "/api/placeholder/40/40",
    rating: 4.9,
    projects: 12,
    skills: ["React", "Node.js", "Team Leadership"]
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@shatch.com",
    role: "Senior Developer",
    department: "Engineering",
    status: "active",
    location: "Seattle, WA",
    phone: "+1 (555) 234-5678",
    joinDate: "2022-03-20",
    avatar: "/api/placeholder/40/40",
    rating: 4.8,
    projects: 8,
    skills: ["Python", "AI/ML", "Cloud Architecture"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@shatch.com",
    role: "Product Manager",
    department: "Product",
    status: "active",
    location: "Austin, TX",
    phone: "+1 (555) 345-6789",
    joinDate: "2021-11-10",
    avatar: "/api/placeholder/40/40",
    rating: 4.7,
    projects: 15,
    skills: ["Product Strategy", "Agile", "Analytics"]
  },
  {
    id: 4,
    name: "David Park",
    email: "david.park@shatch.com",
    role: "UX Designer",
    department: "Design",
    status: "vacation",
    location: "Los Angeles, CA",
    phone: "+1 (555) 456-7890",
    joinDate: "2022-06-01",
    avatar: "/api/placeholder/40/40",
    rating: 4.6,
    projects: 6,
    skills: ["UI/UX", "Figma", "User Research"]
  },
  {
    id: 5,
    name: "Lisa Wong",
    email: "lisa.wong@shatch.com",
    role: "Marketing Director",
    department: "Marketing",
    status: "active",
    location: "New York, NY",
    phone: "+1 (555) 567-8901",
    joinDate: "2021-09-15",
    avatar: "/api/placeholder/40/40",
    rating: 4.8,
    projects: 10,
    skills: ["Digital Marketing", "Content Strategy", "SEO"]
  },
  {
    id: 6,
    name: "Alex Thompson",
    email: "alex.thompson@shatch.com",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "inactive",
    location: "Denver, CO",
    phone: "+1 (555) 678-9012",
    joinDate: "2022-08-12",
    avatar: "/api/placeholder/40/40",
    rating: 4.5,
    projects: 4,
    skills: ["AWS", "Docker", "Kubernetes"]
  }
];

const Team = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTeam = teamData.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter;
    const matchesStatus = statusFilter === "all" || member.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      active: "default",
      vacation: "secondary",
      inactive: "destructive"
    };
    return variants[status] || "secondary";
  };

  const getDepartmentColor = (department: string) => {
    const colors: Record<string, string> = {
      Engineering: "bg-primary/20 text-primary",
      Product: "bg-success/20 text-success",
      Design: "bg-warning/20 text-warning",
      Marketing: "bg-destructive/20 text-destructive"
    };
    return colors[department] || "bg-muted/20 text-muted-foreground";
  };

  const totalMembers = teamData.length;
  const activeMembers = teamData.filter(m => m.status === "active").length;
  const totalProjects = teamData.reduce((sum, m) => sum + m.projects, 0);
  const avgRating = teamData.reduce((sum, m) => sum + m.rating, 0) / teamData.length;

  return (
    <div className="space-y-6">
      <Header 
        title="Team Management" 
        subtitle="Manage your team members and track performance"
      />

      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{totalMembers}</p>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <UserPlus className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{activeMembers}</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{totalProjects}</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">{avgRating.toFixed(1)}</p>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Directory */}
      <Card className="card-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Team Directory</CardTitle>
            <Button className="glow-hover">
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted/20 border-border/20"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Dept: {departmentFilter === "all" ? "All" : departmentFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                <DropdownMenuItem onClick={() => setDepartmentFilter("all")}>
                  All Departments
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Engineering")}>
                  Engineering
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Product")}>
                  Product
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Design")}>
                  Design
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDepartmentFilter("Marketing")}>
                  Marketing
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Status: {statusFilter === "all" ? "All" : statusFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass">
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                  All Status
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("vacation")}>
                  On Vacation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>
                  Inactive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeam.map((member) => (
              <Card key={member.id} className="card-glass hover:glow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="glass">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Member</DropdownMenuItem>
                          <DropdownMenuItem>Send Message</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Status and Department */}
                    <div className="flex items-center gap-2">
                      <Badge variant={getStatusBadge(member.status)}>
                        {member.status}
                      </Badge>
                      <Badge className={getDepartmentColor(member.department)}>
                        {member.department}
                      </Badge>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{member.location}</span>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/20">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-current" />
                        <span className="text-sm font-medium">{member.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {member.projects} projects
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Skills</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTeam.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No team members found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;