import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
