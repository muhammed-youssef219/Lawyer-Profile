import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="واتساب"
        className="grid h-12 w-12 place-items-center border border-gold bg-background text-gold transition-colors duration-200 hover:bg-gold hover:text-primary-foreground"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      </a>
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="اتصال"
        className="grid h-12 w-12 place-items-center border border-border bg-background text-foreground transition-colors duration-200 hover:border-gold hover:text-gold"
      >
        <Phone className="h-5 w-5" strokeWidth={1.5} />
      </a>
    </div>
  );
}
