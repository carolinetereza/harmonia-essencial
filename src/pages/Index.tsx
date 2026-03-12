import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero-bg.jpg";
import fotonaBg from "@/assets/fotona-bg.jpg";
import lucasProfile from "@/assets/lucas-profile.jpg";
import BookingSection from "@/components/BookingSection";
import logo from "@/assets/logo.png";
import FloatingSocial from "@/components/FloatingSocial";
import ParticleBackground from "@/components/ParticleBackground";
import Card3D from "@/components/Card3D";
import { Mail, Phone, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL = "https://wa.me/message/WOXHA4R7VVDJD1";
const WHATSAPP_MENTORIA_URL = "https://wa.me/message/WOXHA4R7VVDJD1?text=" + encodeURIComponent("Olá, gostaria de saber mais sobre as Mentorias 2026.");
const EMAIL = "lcclinic@yahoo.com";
const INSTAGRAM_URL = "https://www.instagram.com/lucasmontanari.hof";

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
  const separatorRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (separatorRef.current) {
      gsap.fromTo(
        separatorRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: separatorRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (ctaRef.current) {
      const heading = ctaRef.current.querySelector("h2");
      if (heading) {
        gsap.fromTo(
          heading,
          { letterSpacing: "0.05em" },
          {
            letterSpacing: "-0.01em",
            ease: "none",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top bottom",
              end: "top center",
              scrub: 1,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
      <ParticleBackground />
      <FloatingSocial />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="LC Clinic" className="h-8 w-auto" />
          <a
            href="#agendar"
            className="px-6 md:px-8 py-2 md:py-2.5 text-[12px] md:text-[13px] tracking-[0.08em] font-sans font-medium text-primary-foreground btn-premium rounded-sm"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            alt="LC Clinic"
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
            className="text-xs tracking-[0.35em] uppercase font-sans font-medium mb-4"
            style={{ color: "hsl(24 30% 77%)" }}
          >
            Founder Lucas Montanari
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif font-semibold leading-[1.08] tracking-[-0.5px] mb-6 text-white"
          >
            LC Clinic
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="font-sans text-[17px] md:text-lg font-normal max-w-2xl mx-auto mb-14 text-white/75 leading-[1.65]"
          >
            Especialista em Harmonização Facial e Corporal e Estética Avançada
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
              Atendimento em São Paulo e Rio de Janeiro
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sobre — Bio */}
      <section className="py-36 md:py-48 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8 text-center"
          >
            Sobre
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-foreground mb-16 leading-[1.12] text-center"
          >
            Lucas Montanari Cerqueira
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex-shrink-0"
            >
              <img
                src={lucasProfile}
                alt="Lucas Montanari Cerqueira"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-sm shadow-xl"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.p variants={fadeUp} className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.75]">
                Lucas Montanari Cerqueira é especialista em Harmonização Facial e Corporal e Estética Avançada. Com dupla graduação em Enfermagem e Biomedicina em São Paulo, e pós-graduado em Dermatologia e Estética Avançada, une profundo conhecimento anatômico a um olhar refinado.
              </motion.p>
              <motion.p variants={fadeUp} className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.75]">
                Desde 2020, dedica-se a realçar a beleza com segurança e naturalidade, somando mais de 4.000 pacientes atendidos. Além da atuação clínica no eixo Rio-São Paulo, compartilha sua expertise ministrando Mentorias VIP para profissionais da área.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div
        ref={separatorRef}
        className="max-w-xs mx-auto border-t border-border origin-left"
        style={{ transform: "scaleX(0)" }}
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

      {/* Tratamentos */}
      <section className="py-36 md:py-48 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8 text-center"
          >
            Tratamentos
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-foreground mb-24 text-center leading-[1.12]"
          >
            Protocolos de Excelência
          </motion.h2>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Toxina Botulínica", desc: "Suavização de linhas de expressão com precisão e naturalidade" },
              { title: "Preenchedores", desc: "Volumização e contorno facial para harmonização estrutural" },
              { title: "Ultraformer III", desc: "Lifting não-cirúrgico com ultrassom micro e macro focado" },
              { title: "MPT", desc: "Microagulhamento com drug delivery para rejuvenescimento profundo" },
              { title: "Criolipólise", desc: "Redução de gordura localizada com tecnologia de resfriamento" },
              { title: "Anatomia", desc: "Conhecimento anatômico avançado aplicado a cada protocolo" },
            ].map((item, idx) => (
              <Card3D key={idx} className="h-full">
                <motion.div variants={fadeUp}
                  className="glass-card p-8 md:p-10 rounded-sm h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  <h3 className="font-serif font-medium text-foreground mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                    {item.desc}
                  </p>
                </motion.div>
              </Card3D>
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
              { step: "03", title: "Execução Precisa", desc: "Tratamentos realizados com técnica apurada e tecnologia de ponta" },
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

      {/* Mentorias 2026 */}
      <section className="py-36 md:py-48 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
            >
              Educação
            </motion.p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              custom={1} variants={fadeUp}
              className="font-serif text-foreground mb-10 leading-[1.12]"
            >
              Mentorias 2026
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              custom={2} variants={fadeUp}
              className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.75] max-w-2xl mx-auto"
            >
              Programa exclusivo de mentoria para profissionais da estética que desejam aprimorar suas técnicas e elevar o nível de atendimento. Acompanhamento direto de Lucas Montanari.
            </motion.p>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              custom={3} variants={fadeUp}
              className="font-sans text-[15px] font-medium text-primary mt-6 tracking-wide"
            >
              Turmas exclusivas com no máximo 3 alunos
            </motion.p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {[
              {
                month: "Abril",
                dates: "24 e 25 de Abril",
                title: "Bioestimuladores de Colágeno",
                desc: "Técnicas avançadas de aplicação de bioestimuladores para rejuvenescimento e estímulo de colágeno.",
              },
              {
                month: "Maio",
                dates: "22 e 23 de Maio",
                title: "Toxina e Preenchedores",
                desc: "Protocolos de excelência em toxina botulínica e preenchedores para harmonização facial.",
              },
            ].map((mentoria, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="glass-card p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary/70 mb-3 font-medium">
                  {mentoria.month} 2026
                </p>
                <h3 className="font-serif font-medium text-foreground mb-2 leading-tight text-lg md:text-xl">
                  {mentoria.title}
                </h3>
                <p className="font-sans text-[14px] text-primary font-medium mb-4">
                  {mentoria.dates}
                </p>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65] mb-6">
                  {mentoria.desc}
                </p>
                <div className="border-t border-border pt-5">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                    Conteúdo Programático
                  </p>
                  <p className="font-sans text-[14px] text-muted-foreground italic">
                    Em breve
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={4} variants={fadeUp}
            className="text-center"
          >
            <a
              href={WHATSAPP_MENTORIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-4 text-[13px] tracking-[0.08em] font-sans font-medium text-primary-foreground btn-premium rounded-sm"
            >
              Quero minha vaga exclusiva
            </a>
          </motion.div>
        </div>
      </section>

      {/* Atendimento — Localidades e Horários */}
      <section className="py-36 md:py-48 bg-cream">
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
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            {[
              { city: "São Paulo — SP", address: "Atendimento com hora marcada" },
              { city: "Rio de Janeiro — RJ", address: "Atendimento com hora marcada" },
            ].map((loc) => (
              <motion.div
                key={loc.city}
                variants={fadeUp}
                className="text-center py-10 border-t border-border"
              >
                <h3 className="font-serif font-medium text-foreground mb-3">
                  {loc.city}
                </h3>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                  {loc.address}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Horários */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="text-center glass-card rounded-sm p-8 md:p-10 max-w-md mx-auto"
          >
            <h3 className="font-serif font-medium text-foreground mb-6 leading-tight">
              Horário de Funcionamento
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between font-sans text-[15px]">
                <span className="text-muted-foreground">Segunda a Sexta</span>
                <span className="text-foreground font-medium">13:00 às 21:00</span>
              </div>
              <div className="flex justify-between font-sans text-[15px]">
                <span className="text-muted-foreground">Sábado</span>
                <span className="text-foreground font-medium">09:00 às 14:00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* CTA Final */}
      <section ref={ctaRef} className="py-36 md:py-48 bg-primary text-primary-foreground">
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

          {/* Dual CTA — WhatsApp + Email */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={2} variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-[13px] tracking-[0.08em] font-sans font-medium border border-primary-foreground/25 text-primary-foreground btn-premium-outline rounded-sm"
            >
              <Phone className="w-4 h-4" />
              Agendar via WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Agendamento%20de%20Consulta`}
              className="inline-flex items-center gap-3 px-10 py-4 text-[13px] tracking-[0.08em] font-sans font-medium border border-primary-foreground/25 text-primary-foreground btn-premium-outline rounded-sm"
            >
              <Mail className="w-4 h-4" />
              Agendar via E-mail
            </a>
          </motion.div>
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
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="font-sans text-[13px] text-background/45">
                  São Paulo — SP &nbsp;|&nbsp; Rio de Janeiro — RJ
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-sans text-[13px] text-background/65 hover:text-background transition-colors"
                >
                  {EMAIL}
                </a>
                <a
                  href="tel:+551131923965"
                  className="font-sans text-[13px] text-background/65 hover:text-background transition-colors"
                >
                  (11) 3192-3965
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @lucasmontanari.hof"
                  className="text-background/45 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <span className="font-sans text-[12px] text-background/35">
                  @lcclinic — em construção
                </span>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-[13px] text-background/25">
              © {new Date().getFullYear()} LC Clinic — lucasmontanari.com.br — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
