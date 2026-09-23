import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function ContactBlock() {
  return (
    <div>
      <Heading variant="eyebrow">Contact us</Heading>
      <Heading variant="section">Send us a message</Heading>
      <Text>
        Have a question, want to book an event or just want to say hi? Drop us a
        message and we&apos;ll get back to you soon
      </Text>
      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium">Your name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              className="border-input bg-background focus-visible:ring-ring min-h-11 w-full rounded-sm border px-4 py-2 text-sm outline-none focus-visible:ring-1"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium">Your email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="border-input bg-background focus-visible:ring-ring min-h-11 w-full rounded-sm border px-4 py-2 text-sm outline-none focus-visible:ring-1"
            />
          </label>
        </div>
        <label className="block space-y-2">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            rows={5}
            required
            className="border-input bg-background focus-visible:ring-ring w-full resize-y rounded-sm border px-4 py-3 text-sm outline-none focus-visible:ring-1"
          />
        </label>
        <Button type="button">Send message</Button>
      </form>
    </div>
  );
}
