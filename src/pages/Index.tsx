import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import fotonaBg from "@/assets/fotona-bg.jpg";
import BookingSection from "@/components/BookingSection";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5511994672773?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="LC Clinic" className="h-8 w-auto" />
          <a
            href="#agendar"
            className="hidden md:inline-block px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-sans font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Agendar Consulta
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
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 text-white"
          >
            Excelência em Harmonização Facial e Corporal
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="font-sans text-base md:text-lg font-light max-w-2xl mx-auto mb-12 text-white/80 leading-relaxed"
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
              className="inline-block px-10 py-4 text-xs tracking-[0.25em] uppercase font-sans font-medium bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-500"
            >
              Agendar Consulta Privada
            </a>
            <p className="text-xs tracking-[0.15em] uppercase font-sans text-white/50">
              Atendimento em São Paulo · Aracaju · Recife
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filosofia Médica */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-6"
            >
              Filosofia
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-foreground mb-16 leading-[1.15]"
            >
              A Arte da Naturalidade
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="space-y-6 max-w-2xl mx-auto">
              <p className="font-sans text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                Nosso foco não é transformação exagerada.
              </p>
              <p className="font-serif text-2xl md:text-3xl italic text-foreground">
                É refinamento. É estrutura. É equilíbrio.
              </p>
              <p className="font-sans text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                Harmonização facial e corporal baseada em ciência, precisão anatômica e respeito à individualidade de cada paciente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-xs mx-auto border-t border-border" />

      {/* Tecnologia Fotona */}
      <section ref={fotonaRef} className="relative py-32 md:py-44 overflow-hidden">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans mb-6"
              style={{ color: "hsl(24 30% 77%)" }}
            >
              Tecnologia de Ponta
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl font-medium text-white mb-8 leading-[1.15]"
            >
              Tecnologia Fotona: Estímulo Profundo de Colágeno
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-sans text-lg font-light text-white/70 mb-16 max-w-2xl leading-relaxed"
            >
              Protocolo personalizado após avaliação.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                "Estímulo avançado de colágeno e elastina",
                "Redução progressiva de rugas e flacidez",
                "Melhora da textura e firmeza da pele",
                "Resultados progressivos e duradouros",
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-1 h-full min-h-[24px] bg-gradient-to-b from-nude to-transparent flex-shrink-0" />
                  <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-6 text-center"
            >
              Especialidades
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-20 text-center leading-[1.15]"
            >
              Protocolos Médicos de Excelência
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={idx}
                variants={fadeUp}
                className="group glass-card p-8 md:p-10 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-8 leading-tight">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="font-sans text-sm text-muted-foreground leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência do Paciente */}
      <section className="py-32 md:py-44 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-6"
            >
              Sua Jornada
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-[1.15]"
            >
              Experiência Personalizada
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consulta Detalhada", desc: "Avaliação completa com escuta atenta às suas expectativas e histórico" },
              { step: "02", title: "Planejamento Individual", desc: "Protocolo exclusivo desenhado para a sua anatomia e objetivos" },
              { step: "03", title: "Execução Precisa", desc: "Procedimentos realizados com técnica apurada e tecnologia de ponta" },
              { step: "04", title: "Acompanhamento", desc: "Seguimento estratégico para otimizar e manter os resultados" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={idx}
                variants={fadeUp}
                className="text-center md:text-left"
              >
                <p className="font-serif text-4xl md:text-5xl font-light text-secondary/40 mb-4">
                  {item.step}
                </p>
                <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-6"
            >
              Atendimento
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-16 leading-[1.15]"
            >
              Onde Atendemos
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {["São Paulo", "Aracaju", "Recife"].map((city, idx) => (
              <motion.div
                key={city}
                custom={idx}
                variants={fadeUp}
                className="text-center py-8 border-t border-border"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                  {city}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
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
      <section className="py-32 md:py-44 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl md:text-5xl font-medium mb-8 leading-[1.15]"
            >
              Seu Protocolo Começa com Uma Avaliação Especializada
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="font-sans text-base font-light mb-12 opacity-70 leading-relaxed"
            >
              Agende sua consulta privada e descubra o protocolo ideal para os seus objetivos.
            </motion.p>
            <motion.a
              custom={2}
              variants={fadeUp}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 text-xs tracking-[0.25em] uppercase font-sans font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-500"
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-serif text-lg tracking-wide">Dr. Lucas Montanari</p>
              <p className="font-sans text-xs text-background/50 mt-1">
                Harmonização Facial e Corporal
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="font-sans text-xs text-background/50">
                São Paulo · Aracaju · Recife
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-[0.15em] uppercase text-background/70 hover:text-background transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-xs text-background/30">
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
