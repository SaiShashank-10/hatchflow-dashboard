import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  Users,
  MapPin,
  Video,
  Coffee,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const eventsData = [
  {
    id: 1,
    title: "Team Standup",
    type: "meeting",
    time: "09:00 AM",
    duration: "30 min",
    attendees: 8,
    location: "Conference Room A",
    color: "bg-primary/20 text-primary",
    urgent: false
  },
  {
    id: 2,
    title: "Client Presentation",
    type: "presentation",
    time: "02:00 PM",
    duration: "1 hour",
    attendees: 5,
    location: "Virtual - Zoom",
    color: "bg-destructive/20 text-destructive",
    urgent: true
  },
  {
    id: 3,
    title: "Project Review",
    type: "review",
    time: "03:30 PM",
    duration: "45 min",
    attendees: 6,
    location: "Conference Room B",
    color: "bg-warning/20 text-warning",
    urgent: false
  },
  {
    id: 4,
    title: "Coffee Chat",
    type: "casual",
    time: "04:30 PM",
    duration: "30 min",
    attendees: 3,
    location: "Cafe",
    color: "bg-success/20 text-success",
    urgent: false
  }
];

const upcomingEvents = [
  {
    id: 5,
    title: "Board Meeting",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "meeting",
    attendees: ["Sarah J.", "Michael C.", "Emily R."]
  },
  {
    id: 6,
    title: "Product Launch",
    date: "Jan 20",
    time: "09:00 AM",
    type: "event",
    attendees: ["David P.", "Lisa W.", "Alex T."]
  },
  {
    id: 7,
    title: "Training Session",
    date: "Jan 22",
    time: "02:00 PM",
    type: "training",
    attendees: ["Team Members"]
  }
];

const Calendar = () => {
  const [currentDate] = useState(new Date());
  const [selectedDate] = useState(new Date());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventIcon = (type: string) => {
    const icons: Record<string, any> = {
      meeting: Users,
      presentation: Briefcase,
      review: CalendarIcon,
      casual: Coffee,
      event: CalendarIcon,
      training: Briefcase
    };
    return icons[type] || CalendarIcon;
  };

  return (
    <div className="space-y-6">
      <Header 
        title="Calendar" 
        subtitle="Manage your schedule and upcoming events"
      />

      {/* Calendar Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">12</p>
                <p className="text-sm text-muted-foreground">Today's Events</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">34</p>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">89</p>
                <p className="text-sm text-muted-foreground">Meetings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <Video className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">23</p>
                <p className="text-sm text-muted-foreground">Virtual Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card className="card-glass">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Today's Schedule</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatDate(currentDate)}
                  </p>
                </div>
                <Button className="glow-hover">
                  <Plus className="w-4 h-4 mr-2" />
                  New Event
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {eventsData.map((event) => {
                const EventIcon = getEventIcon(event.type);
                return (
                  <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-16 bg-primary rounded-full" />
                      <div className={`p-2 rounded-lg ${event.color}`}>
                        <EventIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        {event.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time} • {event.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {event.location.includes("Virtual") ? (
                            <Video className="w-4 h-4" />
                          ) : (
                            <MapPin className="w-4 h-4" />
                          )}
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-6">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => {
                const EventIcon = getEventIcon(event.type);
                return (
                  <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <EventIcon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.date} at {event.time}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.isArray(event.attendees) ? (
                          <div className="flex -space-x-1">
                            {event.attendees.slice(0, 3).map((attendee, index) => (
                              <Avatar key={index} className="w-5 h-5 border-2 border-background">
                                <AvatarFallback className="text-xs bg-primary/20 text-primary">
                                  {attendee.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                            {event.attendees.length > 3 && (
                              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                                +{event.attendees.length - 3}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">{event.attendees}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Mini Calendar */}
          <Card className="card-glass">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">January 2024</CardTitle>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="p-2 font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`p-2 rounded-lg hover:bg-primary/20 cursor-pointer transition-colors ${
                      day === selectedDate.getDate() ? 'bg-primary text-primary-foreground' : ''
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;