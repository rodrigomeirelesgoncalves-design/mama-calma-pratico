import { ArrowRight, Check, Heart, Calendar, Sun, Users, Sparkles, Star, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-pos-parto-mockup.png";

const testimonials = [
  {
    name: "Juliana M.",
    location: "São Paulo, SP",
    text: "Eu me sentia completamente perdida nos primeiros meses. O app me deu uma estrutura simples que me ajudou a retomar o controle da minha rotina sem pressão.",
  },
  {
    name: "Camila R.",
    location: "Belo Horizonte, MG",
    text: "O melhor investimento que fiz no meu pós-parto. Os lembretes de autocuidado me fazem parar e respirar. Parece pouco, mas muda tudo.",
  },
  {
    name: "Fernanda S.",
    location: "Curitiba, PR",
    text: "Meu marido começou a usar comigo e pela primeira vez a gente conseguiu dividir tarefas sem briga. Recomendo demais.",
  },
  {
    name: "Mariana L.",
    location: "Rio de Janeiro, RJ",
    text: "Chorei lendo alguns conteúdos porque me senti vista. Não é um app frio, é como ter uma amiga experiente do lado.",
  },
  {
    name: "Tatiane B.",
    location: "Florianópolis, SC",
    text: "Voltei a trabalhar com 4 meses e o app me ajudou a organizar tudo: rotina do bebê, minha agenda e até o que comer. Salvou minha sanidade.",
  },
  {
    name: "Priscila A.",
    location: "Recife, PE",
    text: "Eu cancelei todas as outras assinaturas e fiquei só com essa. R$67 por mês por essa clareza toda vale cada centavo.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Top Banner */}
      <div className="bg-primary py-3 text-center">
        <p className="text-primary-foreground text-sm font-medium tracking-wide">
          ✅ Sua compra do <strong>Amamentação e Rotina Real</strong> foi confirmada.
        </p>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              Oferta especial — segundo passo
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
              O pós-parto não precisa ser vivido no{" "}
              <em className="text-primary">modo sobrevivência</em>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Tenha um app de acompanhamento diário para organizar sua rotina, cuidar de você com mais gentileza e atravessar essa fase com mais clareza e menos culpa.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4 text-primary" />
              <span>App disponível para celular, tablet e computador</span>
            </div>
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Quero assinar o Pós-Parto Prático
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex-shrink-0 md:w-[360px]">
            <img
              src={appMockup}
              alt="App Pós-Parto Prático — acompanhamento diário para mães"
              width={800}
              height={1024}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="bg-accent/40 py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            A amamentação é só uma parte.{" "}
            <em className="text-primary">E o resto do pós-parto?</em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Você já cuidou da amamentação. Mas o dia continua: a rotina desorganizada, o cansaço acumulado, a sensação de que tudo é urgente e nada é possível. Falta uma estrutura simples para atravessar essa fase com mais leveza — sem precisar ser perfeita.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-foreground">
            O que o app{" "}
            <em className="text-primary">Pós-Parto Prático</em> entrega
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              icon={<Calendar className="w-5 h-5 text-accent-foreground" />}
              title="Organização da rotina"
              description="Planeje seu dia com leveza, respeitando o ritmo do bebê e o seu — sem rigidez."
            />
            <BenefitCard
              icon={<Sun className="w-5 h-5 text-accent-foreground" />}
              title="Autocuidado possível"
              description="Lembretes e práticas reais que cabem na sua realidade, sem idealização."
            />
            <BenefitCard
              icon={<Users className="w-5 h-5 text-accent-foreground" />}
              title="Relação com o parceiro"
              description="Ferramentas para dividir responsabilidades de forma prática e gentil."
            />
            <BenefitCard
              icon={<Heart className="w-5 h-5 text-accent-foreground" />}
              title="Adaptação emocional"
              description="Conteúdo acolhedor para os dias difíceis, com empatia e normalização."
            />
          </div>
          <div className="mt-6 bg-accent/50 border border-border rounded-xl p-6 text-center max-w-2xl mx-auto">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
              Retorno gradual à vida pessoal
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Acompanhamento contínuo para voltar a se sentir você mesma — no seu tempo, sem pressa e sem culpa.
            </p>
          </div>
        </div>
      </section>

      {/* Feelings Checklist */}
      <section className="bg-accent/40 py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-10 text-foreground">
            Com o app, você vai sentir
          </h2>
          <div className="space-y-4">
            {[
              "Mais organização na rotina com o bebê",
              "Mais acolhimento nos dias difíceis",
              "Menos sensação de estar perdida",
              "Mais clareza sobre suas prioridades reais",
              "Menos culpa por cuidar de si mesma",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-card rounded-lg px-5 py-4 border border-border"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-foreground">
            O que mães como você{" "}
            <em className="text-primary">estão dizendo</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-xl p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="bg-accent/40 py-16 md:py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Assinatura mensal — cancele quando quiser
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            App Pós-Parto Prático
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            Seu acompanhamento diário para organizar a rotina, cuidar de você e atravessar o pós-parto com clareza.
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            O próximo passo natural depois de cuidar da amamentação.
          </p>

          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
                R$67
              </span>
              <span className="text-lg text-muted-foreground font-medium">/mês</span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">
              Valor exclusivo de pós-compra. Cancele quando quiser, sem burocracia.
            </p>
            <a
              href="#"
              className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity mb-4"
            >
              Quero assinar o Pós-Parto Prático
            </a>
            <p className="text-xs text-muted-foreground">
              Acesso imediato · Celular, tablet ou computador · Cancele a qualquer momento
            </p>
          </div>

          <a
            href="#"
            className="inline-block mt-8 text-sm text-muted-foreground underline hover:text-foreground transition-colors"
          >
            Não, obrigada. Quero seguir sem esse complemento.
          </a>
        </div>
      </section>
    </div>
  );
};

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start hover:shadow-md transition-shadow">
    <div className="bg-accent rounded-lg p-3 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-serif text-lg font-semibold mb-1 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default Index;
