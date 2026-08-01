import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "É seguro instalar o Giraboi?",
    a: "Sim. O APK é oficial, distribuído diretamente pela nossa equipe. Você só precisa autorizar a instalação de apps de fontes externas, como pede o Android.",
  },
  {
    q: "Como eu dou meu lance?",
    a: "Direto pelo WhatsApp com o leiloeiro. O app te conecta pelo número (62) 99848-1808 durante o pregão ao vivo.",
  },
  {
    q: "Preciso me cadastrar?",
    a: "Você acompanha os leilões livremente. Para dar lances, é preciso um cadastro simples dentro do app.",
  },
  {
    q: "Funciona em qual Android?",
    a: "Em qualquer aparelho com Android 8.0 (Oreo) ou superior.",
  },
];

export function FAQ() {
  return (
    <section id="perguntas" className="px-5 py-12">
      <SectionHeader index="05" eyebrow="Perguntas frequentes">
        Ficou com <span className="text-platinum italic">dúvida?</span>
      </SectionHeader>
      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-[13.5px] font-medium">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[12.5px] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
