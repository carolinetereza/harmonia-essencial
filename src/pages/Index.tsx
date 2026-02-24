import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import fotonaBg from "@/assets/fotona-bg.jpg";
import BookingSection from "@/components/BookingSection";
import logo from "@/assets/logo.png";
import FloatingSocial from "@/components/FloatingSocial";

const WHATSAPP_URL = "https://wa.me/5511994672773?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const fotonaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);

  const { scrollYProgress } = useScroll({
    target: fotonaRef,
    offset: ["start end", "end start"],
  });
  const fotonaY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="grain-overlay">
      <FloatingSocial />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="LC Clinic" className="h-8 w-auto" />
          <a
            href="#agendar"
            className="hidden md:inline-block px-8 py-2.5 text-[13px] tracking-[0.08em] font-sans font-medium text-primary-foreground btn-premium rounded-sm"
          >
            Agendar consulta
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            alt="Dr. Lucas Montanari"
            className="w-full h-full object-cover scale-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs tracking-[0.35em] uppercase font-sans font-medium mb-8"
            style={{ color: "hsl(24 30% 77%)" }}
          >
            Resultados Duradouros
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif font-semibold leading-[1.08] tracking-[-0.5px] mb-8 text-white"
          >
            Excelência em Harmonização Facial e Corporal
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="font-sans text-[17px] md:text-lg font-normal max-w-2xl mx-auto mb-14 text-white/75 leading-[1.65]"
          >
            Protocolos médicos personalizados com tecnologia avançada para resultados naturais e duradouros.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="#agendar"
              className="inline-block px-12 py-4 text-[13px] tracking-[0.08em] font-sans font-medium backdrop-blur-sm border border-white/30 text-white btn-premium-outline"
            >
              Agendar consulta privada
            </a>
            <p className="text-[13px] tracking-[0.12em] font-sans text-white/45 font-normal">
              Atendimento em São Paulo, Aracaju e Recife
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofia Médica */}
      <section className="py-36 md:py-48 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
          >
            Filosofia
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-foreground mb-20 leading-[1.12]"
          >
            A Arte da Naturalidade
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <motion.p variants={fadeUp} className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.65]">
              Nosso foco não é transformação exagerada.
            </motion.p>
            <motion.p variants={fadeUp} className="font-serif text-2xl md:text-[28px] italic text-foreground leading-[1.2]">
              É refinamento. É estrutura. É equilíbrio.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.65]">
              Harmonização facial e corporal baseada em ciência, precisão anatômica e respeito à individualidade de cada paciente.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-xs mx-auto border-t border-border origin-left"
      />

      {/* Tecnologia Fotona */}
      <section ref={fotonaRef} className="relative py-36 md:py-48 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: fotonaY }}>
          <img
            src={fotonaBg}
            alt="Tecnologia Fotona"
            className="w-full h-full object-cover scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans mb-8"
            style={{ color: "hsl(24 30% 77%)" }}
          >
            Tecnologia de Ponta
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-white mb-10 leading-[1.12]"
          >
            Tecnologia Fotona: Estímulo Profundo de Colágeno
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={2} variants={fadeUp}
            className="font-sans text-[17px] font-normal text-white/65 mb-20 max-w-2xl leading-[1.65]"
          >
            Protocolo personalizado após avaliação.
          </motion.p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              "Estímulo avançado de colágeno e elastina",
              "Redução progressiva de rugas e flacidez",
              "Melhora da textura e firmeza da pele",
              "Resultados progressivos e duradouros",
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeUp}
                className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="w-1 h-full min-h-[24px] bg-gradient-to-b from-nude to-transparent flex-shrink-0" />
                <p className="font-sans text-[15px] md:text-base text-white/85 leading-[1.65]">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-36 md:py-48 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8 text-center"
          >
            Especialidades
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-foreground mb-24 text-center leading-[1.12]"
          >
            Protocolos Médicos de Excelência
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Injetáveis de Alta Performance",
                items: [
                  "Botox (Face, Pescoço, Bruxismo, Hiperidrose)",
                  "Preenchimentos Estruturais",
                  "Bioestimuladores Faciais e Corporais",
                  "Skinboosters",
                  "Lifting Temporal",
                ],
              },
              {
                title: "Harmonização Corporal",
                items: [
                  "Harmonização Glútea",
                  "Definição de Abdômen",
                  "Ultrassom Micro e Macro Focado",
                  "Criolipólise",
                ],
              },
              {
                title: "Tecnologias Avançadas",
                items: [
                  "Laser CO2",
                  "Lavieen",
                  "Ethera",
                  "Ultraformer",
                  "Luz Pulsada",
                  "Microagulhamento",
                  "Peelings Químicos",
                  "MMP Capilar",
                ],
              },
            ].map((category, idx) => (
              <motion.div key={idx} variants={fadeUp}
                className="glass-card p-8 md:p-10 rounded-sm h-full hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="font-serif font-medium text-foreground mb-8 leading-tight">
                  {category.title}
                </h3>
                <ul className="space-y-3.5">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="font-sans text-[15px] text-muted-foreground leading-[1.65] flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experiência do Paciente */}
      <section className="py-36 md:py-48 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
            >
              Sua Jornada
            </motion.p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              custom={1} variants={fadeUp}
              className="font-serif text-foreground leading-[1.12]"
            >
              Experiência Personalizada
            </motion.h2>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-10"
          >
            {[
              { step: "01", title: "Consulta Detalhada", desc: "Avaliação completa com escuta atenta às suas expectativas e histórico" },
              { step: "02", title: "Planejamento Individual", desc: "Protocolo exclusivo desenhado para a sua anatomia e objetivos" },
              { step: "03", title: "Execução Precisa", desc: "Procedimentos realizados com técnica apurada e tecnologia de ponta" },
              { step: "04", title: "Acompanhamento", desc: "Seguimento estratégico para otimizar e manter os resultados" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="text-center md:text-left"
              >
                <p className="font-serif text-4xl md:text-5xl font-light text-secondary/30 mb-5">
                  {item.step}
                </p>
                <h3 className="font-serif font-medium text-foreground mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="py-36 md:py-48 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
            >
              Atendimento
            </motion.p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              custom={1} variants={fadeUp}
              className="font-serif text-foreground mb-20 leading-[1.12]"
            >
              Onde Atendemos
            </motion.h2>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {["São Paulo", "Aracaju", "Recife"].map((city) => (
              <motion.div
                key={city}
                variants={fadeUp}
                className="text-center py-10 border-t border-border"
              >
                <h3 className="font-serif font-medium text-foreground mb-3">
                  {city}
                </h3>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                  Atendimento com hora marcada
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* CTA Final */}
      <section className="py-36 md:py-48 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="font-serif mb-10 leading-[1.12]"
          >
            Seu Protocolo Começa com Uma Avaliação Especializada
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-sans text-[17px] font-normal mb-14 opacity-65 leading-[1.65]"
          >
            Agende sua consulta privada e descubra o protocolo ideal para os seus objetivos.
          </motion.p>
          <motion.a
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={2} variants={fadeUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-4 text-[13px] tracking-[0.08em] font-sans font-medium border border-primary-foreground/25 text-primary-foreground btn-premium-outline"
          >
            Agendar consulta
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <img src={logo} alt="LC Clinic" className="h-10 w-auto invert" />
              <p className="font-sans text-[13px] text-background/45">
                Harmonização Facial e Corporal
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="font-sans text-[13px] text-background/45">
                São Paulo, Aracaju e Recife
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] tracking-[0.08em] text-background/65 hover:text-background transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-[13px] text-background/25">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
