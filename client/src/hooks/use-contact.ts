import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

// Fallback schema if not easily importable
const fallbackSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is required"),
});

export type ContactInput = z.infer<typeof fallbackSchema>;

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Fallback path in case api definition isn't fully robust
      const path = api?.contact?.create?.path || "/api/contact";
      
      const res = await fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        let errorMsg = "Failed to send message";
        try {
          const errData = await res.json();
          errorMsg = errData.message || errorMsg;
        } catch (e) {}
        throw new Error(errorMsg);
      }
      
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
