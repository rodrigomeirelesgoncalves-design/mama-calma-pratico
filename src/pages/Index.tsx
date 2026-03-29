import { ArrowRight, Check, Heart, Calendar, Sun, Users, Sparkles } from "lucide-react";
import ebookCover from "@/assets/ebook-pos-parto-pratico.png";

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
              Tenha um guia prático para organizar sua rotina, cuidar de você com mais gentileza e atravessar essa fase com mais clareza e menos culpa.
            </p>
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Quero adicionar Pós-Parto Prático
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="flex-shrink-0 md:w-[340px]">
            <img
              src={ebookCover}
              alt="Guia Pós-Parto Prático por Carolina Souza"
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
            O que o <em className="text-primary">Pós-Parto Prático</em> entrega
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              icon={<Calendar className="w-5 h-5 text-accent-foreground" />}
              title="Organização da rotina"
              description="Um plano simples para estruturar o dia sem rigidez — respeitando o ritmo do bebê e o seu."
            />
            <BenefitCard
              icon={<Sun className="w-5 h-5 text-accent-foreground" />}
              title="Autocuidado possível"
              description="Pequenas práticas reais que cabem na sua realidade, sem idealização ou cobrança."
            />
            <BenefitCard
              icon={<Users className="w-5 h-5 text-accent-foreground" />}
              title="Relação com o parceiro"
              description="Como manter a conexão e dividir responsabilidades de forma prática e gentil."
            />
            <BenefitCard
              icon={<Heart className="w-5 h-5 text-accent-foreground" />}
              title="Adaptação emocional"
              description="Acolhimento para os dias difíceis, sem linguagem clínica — com empatia e normalização."
            />
          </div>
          <div className="mt-6 bg-accent/50 border border-border rounded-xl p-6 text-center max-w-2xl mx-auto">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
              Retorno gradual à vida pessoal
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Orientações para voltar a se sentir você mesma — no seu tempo, sem pressa e sem culpa.
            </p>
          </div>
        </div>
      </section>

      {/* Feelings Checklist */}
      <section className="bg-accent/40 py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-10 text-foreground">
            Com esse guia, você vai sentir
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

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Oferta especial — só agora
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">
            Pós-Parto Prático
          </h2>
          <p className="text-muted-foreground mb-2 text-lg">
            Guia digital premium para organizar sua rotina, cuidar de você e atravessar o pós-parto com mais clareza.
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            O próximo passo natural depois de cuidar da amamentação.
          </p>

          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary">
                R$67
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">
              Valor exclusivo de pós-compra. Essa oferta não estará disponível depois.
            </p>
            <a
              href="#"
              className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity mb-4"
            >
              Quero adicionar Pós-Parto Prático
            </a>
            <p className="text-xs text-muted-foreground">
              Acesso imediato · Leia no celular, tablet ou computador · Acesso vitalício
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
