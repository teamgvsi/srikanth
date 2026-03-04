import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact, ContactInput } from "@/hooks/use-contact";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const { mutate: submitContact, isPending } = useSubmitContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => {
        form.reset();
        setOpen(false);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] glass-panel border-white/50 shadow-2xl p-6 md:p-8 rounded-3xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-serif text-3xl text-foreground">Let's Connect</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-base">
            Drop me a message to discuss strategy, partnerships, or consulting opportunities.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              {...form.register("name")}
              className="bg-white/50 border-white/60 focus-visible:ring-primary h-12 rounded-xl"
            />
            {form.formState.errors.name && (
              <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="john@example.com" 
              {...form.register("email")}
              className="bg-white/50 border-white/60 focus-visible:ring-primary h-12 rounded-xl"
            />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell me about your project..." 
              rows={4}
              {...form.register("message")}
              className="bg-white/50 border-white/60 focus-visible:ring-primary resize-none rounded-xl"
            />
            {form.formState.errors.message && (
              <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-medium shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
