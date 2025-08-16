import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Search,
  Book,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  Headphones,
  Send,
  ExternalLink
} from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click 'Forgot Password'. Enter your email address and follow the instructions sent to your email.",
    category: "account"
  },
  {
    id: 2,
    question: "How can I upgrade my subscription plan?",
    answer: "Navigate to the Pricing page in your dashboard, select your desired plan, and follow the upgrade process. Your new features will be available immediately.",
    category: "billing"
  },
  {
    id: 3,
    question: "How do I add team members?",
    answer: "Go to the Team Management page, click 'Add Member', enter their email address and role, then send an invitation. They'll receive an email to join your workspace.",
    category: "team"
  },
  {
    id: 4,
    question: "Can I export my data?",
    answer: "Yes, you can export your data from the Reports section. Choose the data type and format (CSV, PDF, Excel) and click export. The file will be sent to your email.",
    category: "data"
  },
  {
    id: 5,
    question: "How do I set up notifications?",
    answer: "Visit the Notifications page to customize your notification preferences. You can choose delivery methods and select which categories of notifications you want to receive.",
    category: "settings"
  },
  {
    id: 6,
    question: "What integrations are available?",
    answer: "S-HATCH supports integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Zapier, and more. Check the integrations page for the full list.",
    category: "integrations"
  }
];

const helpResources = [
  {
    title: "Getting Started Guide",
    description: "Complete guide to setting up your S-HATCH dashboard",
    type: "guide",
    icon: Book,
    link: "#"
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video walkthroughs of key features",
    type: "video",
    icon: Video,
    link: "#"
  },
  {
    title: "API Documentation",
    description: "Technical documentation for developers",
    type: "docs",
    icon: FileText,
    link: "#"
  },
  {
    title: "Community Forum",
    description: "Connect with other S-HATCH users",
    type: "community",
    icon: Users,
    link: "#"
  }
];

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [supportForm, setSupportForm] = useState({
    subject: "",
    message: "",
    priority: "medium"
  });

  const filteredFaq = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: "all", label: "All" },
    { key: "account", label: "Account" },
    { key: "billing", label: "Billing" },
    { key: "team", label: "Team" },
    { key: "data", label: "Data" },
    { key: "settings", label: "Settings" },
    { key: "integrations", label: "Integrations" }
  ];

  return (
    <div className="space-y-6">
      <Header 
        title="Help & Support" 
        subtitle="Get help and find answers to your questions"
      />

      {/* Support Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-success/20">
                <MessageCircle className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">< 2hrs</p>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/20">
                <Book className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground">Help Articles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <Users className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search and Filter */}
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search FAQ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-muted/20 border-border/20"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.key}
                      variant={selectedCategory === category.key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.key)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="space-y-2">
                {filteredFaq.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border border-border/20 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-xs">
                          {faq.category}
                        </Badge>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaq.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No FAQ found matching your search.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <div className="space-y-6">
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors cursor-pointer">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-muted-foreground">Get instant help</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors cursor-pointer">
                  <div className="p-2 rounded-lg bg-success/20">
                    <Mail className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@s-hatch.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors cursor-pointer">
                  <div className="p-2 rounded-lg bg-warning/20">
                    <Phone className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-HELP</p>
                  </div>
                </div>
              </div>

              {/* Support Form */}
              <div className="space-y-4 pt-4 border-t border-border/20">
                <h4 className="font-medium">Send us a message</h4>
                
                <Input
                  placeholder="Subject"
                  value={supportForm.subject}
                  onChange={(e) => setSupportForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="bg-muted/20 border-border/20"
                />
                
                <Textarea
                  placeholder="Describe your issue..."
                  value={supportForm.message}
                  onChange={(e) => setSupportForm(prev => ({ ...prev, message: e.target.value }))}
                  className="bg-muted/20 border-border/20 min-h-[100px]"
                />
                
                <Button className="w-full glow-hover">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Help Resources */}
          <Card className="card-glass">
            <CardHeader>
              <CardTitle>Help Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {helpResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/20 hover:bg-muted/5 transition-colors cursor-pointer">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;