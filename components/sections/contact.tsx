"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="space-y-12 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <Card className="glassmorphism border-0">
            <CardHeader className="text-center pb-4">
              <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold">Send us a Message</h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50 border-border"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="bg-background/50 border-border min-h-[150px] resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}