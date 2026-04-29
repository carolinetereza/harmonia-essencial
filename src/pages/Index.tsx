import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero-bg.jpg";
import fotonaBg from "@/assets/fotona-bg.jpg";
import lucasProfile from "@/assets/lucas-profile.jpg";
import BookingSection from "@/components/BookingSection";
import lcLogo from "@/assets/lc-clinica-logo.png";
import FloatingSocial from "@/components/FloatingSocial";
import ParticleBackground from "@/components/ParticleBackground";
import Card3D from "@/components/Card3D";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_URL = "https://wa.me/551131923965";
const WHATSAPP_MENTORIA_URL = "https://wa.me/551131923965?text=" + encodeURIComponent("Olá, gostaria de saber mais sobre as Mentorias 2026.");
const WHATSAPP_PACIENTE_MODELO_URL = "https://wa.me/551131923965?text=" + encodeURIComponent("Olá, gostaria de informações sobre a vaga para paciente modelo.");
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
  const sobreRef = useRef<HTMLElement>(null);
  const tratamentosRef = useRef<HTMLElement>(null);
  const jornadaRef = useRef<HTMLElement>(null);
  const mentoriasRef = useRef<HTMLElement>(null);
  const atendimentoRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Separator line reveal
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

      // CTA heading letter-spacing scrub
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

      // Sobre section — image clip-path reveal + text slide
      if (sobreRef.current) {
        const img = sobreRef.current.querySelector("img");
        const textBlock = sobreRef.current.querySelector(".sobre-text");
        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 1.4,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
        if (textBlock) {
          gsap.fromTo(
            textBlock,
            { x: 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: textBlock,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }

      // Tratamentos — cards stagger from bottom with rotation
      if (tratamentosRef.current) {
        const cards = tratamentosRef.current.querySelectorAll(".treatment-card");
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: tratamentosRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Jornada steps — horizontal slide-in with counter
      if (jornadaRef.current) {
        const steps = jornadaRef.current.querySelectorAll(".jornada-step");
        steps.forEach((step, i) => {
          gsap.fromTo(
            step,
            { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Mentorias — scale up cards
      if (mentoriasRef.current) {
        const mentoriaCards = mentoriasRef.current.querySelectorAll(".mentoria-card");
        gsap.fromTo(
          mentoriaCards,
          { scale: 0.9, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: mentoriasRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Atendimento — location cards fade + slide up
      if (atendimentoRef.current) {
        const locs = atendimentoRef.current.querySelectorAll(".location-card");
        gsap.fromTo(
          locs,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: atendimentoRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Footer — slide up reveal
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Technology section — equipment cards horizontal stagger
      if (fotonaRef.current) {
        const techCards = fotonaRef.current.querySelectorAll(".tech-card");
        gsap.fromTo(
          techCards,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fotonaRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
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
          <img src={lcLogo} alt="LC Clinica" className="h-10 w-auto" />
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
            alt="LC Clinica"
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
            style={{ color: "hsl(0 0% 85%)" }}
          >
            Founder Lucas Montanari Cerqueira
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif font-semibold leading-[1.08] tracking-[-0.5px] mb-6 text-white"
          >
            LC Clinica
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

      <section ref={sobreRef} className="py-36 md:py-48 bg-background">
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
              className="sobre-text space-y-8"
            >
              <motion.p variants={fadeUp} className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.75]">
                Lucas Montanari Cerqueira é especialista em Harmonização Facial e Corporal e Estética Avançada. Com dupla graduação em Enfermagem e Biomedicina em São Paulo, e pós-graduado em Dermatologia e Estética Avançada, une profundo conhecimento anatômico a um olhar refinado. Registros profissionais: Coren-SP 557197 (Enfermeiro) | Biomédico.
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

      {/* Tecnologia de Ponta */}
      <section ref={fotonaRef} className="relative py-36 md:py-48 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: fotonaY }}>
          <img
            src={fotonaBg}
            alt="Tecnologia de Ponta"
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
            style={{ color: "hsl(0 0% 85%)" }}
          >
            Tecnologia de Ponta
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-white mb-10 leading-[1.12]"
          >
            Equipamentos de Ultima Geração
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
              { name: "Fotona", desc: "Estímulo profundo de colágeno e elastina com laser de alta performance" },
              { name: "Laser CO2", desc: "Rejuvenescimento e resurfacing cutâneo com precisão fracionada" },
              { name: "Etherea", desc: "Plataforma multifuncional para tratamentos de pele avançados" },
              { name: "Lavieeen", desc: "Tecnologia laser para manchas, textura e revitalização da pele" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className="tech-card flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm hover:bg-white/[0.08] transition-colors duration-300"
              >
                <div className="w-1 h-full min-h-[24px] bg-gradient-to-b from-white to-transparent flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-medium text-white mb-1 text-lg">{item.name}</h3>
                  <p className="font-sans text-[15px] md:text-base text-white/75 leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tratamentos */}
      <section ref={tratamentosRef} className="py-36 md:py-48 bg-background">
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
                  className="treatment-card glass-card p-8 md:p-10 rounded-sm h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col"
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

      {/* Paciente Modelo */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
          >
            Oportunidade
          </motion.p>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            custom={1} variants={fadeUp}
            className="font-serif text-foreground mb-6 leading-[1.12]"
          >
            Vaga para Paciente Modelo
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={2} variants={fadeUp}
            className="font-sans text-[17px] text-muted-foreground leading-[1.75] mb-10 max-w-xl mx-auto"
          >
            Participe dos nossos treinamentos práticos como paciente modelo. Conteúdo programático em breve.
          </motion.p>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            custom={3} variants={fadeUp}
          >
            <a
              href={WHATSAPP_PACIENTE_MODELO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-4 text-[13px] tracking-[0.08em] font-sans font-medium text-primary-foreground btn-premium rounded-sm"
            >
              Quero ser paciente modelo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experiência do Paciente */}
      <section ref={jornadaRef} className="py-36 md:py-48 bg-background">
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
                className="jornada-step text-center md:text-left"
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
      <section ref={mentoriasRef} className="py-36 md:py-48 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-[13px] tracking-[0.25em] uppercase font-sans text-muted-foreground mb-8"
            >
              Corpo Docente
            </motion.p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              custom={1} variants={fadeUp}
              className="font-serif text-foreground mb-10 leading-[1.12]"
            >
              Cursos e Mentorias 2026
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              custom={2} variants={fadeUp}
              className="font-sans text-[17px] md:text-lg font-normal text-muted-foreground leading-[1.75] max-w-2xl mx-auto"
            >
              Programa exclusivo de cursos e mentorias para profissionais da estética que desejam aprimorar suas técnicas e elevar o nível de atendimento. Direção de Lucas Montanari Cerqueira.
            </motion.p>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              custom={3} variants={fadeUp}
              className="font-sans text-[15px] font-medium text-foreground mt-6 tracking-wide"
            >
              Turmas exclusivas com no máximo 3 alunos
            </motion.p>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              custom={4} variants={fadeUp}
              className="font-sans text-[14px] italic text-muted-foreground/80 mt-3 max-w-2xl mx-auto"
            >
              Conteúdos programáticos serão disponibilizados em breve pelo Dr. Felipe Ajala.
            </motion.p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                tag: "Curso · Maio",
                month: "Maio",
                dates: "24 e 25 de Maio (sábado e domingo)",
                title: "Biomestimuladores de Colágeno Facial",
                desc: "Biomestimuladores facial, toxina e preenchimento. Carga horária: 12 horas. Teoria (maio e junho).",
                instructor: "Dr. Felipe Ajala — CRM 280980 | CRBM 20230",
                inscricao: "R$ 500 (via PIX)",
                investimento: "R$ 3.800 em até 10x sem juros",
              },
              {
                tag: "Curso · Junho",
                month: "Junho",
                dates: "27 e 28 de Junho (sábado e domingo)",
                title: "Toxina e Preenchedores",
                desc: "Toxina botulínica e preenchedores para harmonização facial. Carga horária: 12 horas. Teoria (maio e junho).",
                instructor: "Dr. Felipe Ajala — CRM 280980 | CRBM 20230",
                inscricao: "R$ 500 (via PIX)",
                investimento: "R$ 3.700 em até 10x sem juros",
              },
              {
                tag: "Mentoria · Julho",
                month: "Julho",
                dates: "25 de Julho (sábado)",
                title: "Complicações por Preenchedores",
                desc: "Mentoria supervisionada. Carga horária: 6 horas. Coordenação: Lucas Montanari Cerqueira.",
                instructor: "Dr. Cláudio Fontes — Cirurgião Dentista | CRO RJ 31865",
                inscricao: "R$ 500 (via PIX)",
                investimento: "R$ 2.700",
              },
            ].map((mentoria, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="mentoria-card glass-card p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-secondary mb-3 font-medium">
                  {mentoria.tag} 2026
                </p>
                <h3 className="font-serif font-medium text-foreground mb-2 leading-tight text-lg md:text-xl">
                  {mentoria.title}
                </h3>
                <p className="font-sans text-[14px] text-foreground font-medium mb-4">
                  {mentoria.dates}
                </p>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65] mb-6">
                  {mentoria.desc}
                </p>
                <div className="border-t border-border pt-5 space-y-3">
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                      Ministrante
                    </p>
                    <p className="font-sans text-[14px] text-foreground">
                      {mentoria.instructor}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-6 gap-2">
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                        Inscrição
                      </p>
                      <p className="font-sans text-[14px] text-foreground font-medium">
                        {mentoria.inscricao}
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                        Investimento
                      </p>
                      <p className="font-sans text-[14px] text-foreground font-medium">
                        {mentoria.investimento}
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-[12px] tracking-[0.1em] uppercase text-muted-foreground/60 pt-2">
                    Direção: Lucas Montanari Cerqueira
                  </p>
                  <p className="font-sans text-[13px] text-muted-foreground italic">
                    Conteúdo programático em breve.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Localização das Mentorias */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="glass-card rounded-sm p-6 md:p-8 mb-12 flex items-start gap-4 max-w-lg mx-auto"
          >
            <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-medium text-foreground mb-2 text-base">Local dos Cursos e Mentorias</h4>
              <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                Rua Carlos Sampaio, 304 — cj 91, Bela Vista, São Paulo — SP
              </p>
              <p className="font-sans text-[13px] text-muted-foreground/70 mt-1">
                Próximo à Avenida Paulista
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Sampaio+304+Bela+Vista+S%C3%A3o+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] text-secondary hover:text-foreground transition-colors mt-2 inline-block"
              >
                Ver no mapa →
              </a>
            </div>
          </motion.div>

          {/* Corpo Docente */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="glass-card rounded-sm p-8 md:p-10 mb-12 max-w-3xl mx-auto"
          >
            <h4 className="font-serif font-medium text-foreground mb-6 text-lg text-center">Corpo Docente</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-2">Teoria e Prática</p>
                <p className="font-serif text-foreground text-base leading-tight mb-1">Dr. Felipe Ajala</p>
                <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">Médico CRM 280980 | Biomédico CRBM 20230</p>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-2">Mentoria Supervisionada</p>
                <p className="font-serif text-foreground text-base leading-tight mb-1">Dr. Cláudio Fontes</p>
                <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">Cirurgião Dentista | CRO RJ 31865</p>
              </div>
              <div>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-2">Direção</p>
                <p className="font-serif text-foreground text-base leading-tight mb-1">Lucas Montanari Cerqueira</p>
                <p className="font-sans text-[13px] text-muted-foreground leading-[1.6]">Enfermeiro | Biomédico | COREN 557197 — Diretor de educação e mentorias</p>
              </div>
            </div>
            <p className="font-sans text-[13px] text-muted-foreground italic text-center border-t border-border pt-5">
              Mentoria supervisionada por profissionais qualificados conforme listado acima.
            </p>
          </motion.div>

          {/* Certificação */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="glass-card rounded-sm p-6 md:p-8 mb-12 max-w-lg mx-auto text-center"
          >
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-muted-foreground/60 mb-3">Certificação</p>
            <h4 className="font-serif font-medium text-foreground mb-3 text-base">Certificado de 12 horas</h4>
            <p className="font-sans text-[14px] text-muted-foreground leading-[1.65]">
              Emitido após conclusão e assinado por Dr. Felipe Ajala (Médico).
            </p>
            <p className="font-sans text-[13px] text-muted-foreground/70 mt-2">
              Direção: Lucas Montanari Cerqueira — LC Clínica
            </p>
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
      <section ref={atendimentoRef} className="py-36 md:py-48 bg-background">
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
              {
                city: "São Paulo — SP",
                address: "Rua Carlos Sampaio, 304 — cj 91, Bela Vista",
                extra: "Próximo à Avenida Paulista",
                phone: "(11) 3192-3965",
                mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Sampaio+304+Bela+Vista+S%C3%A3o+Paulo",
              },
              {
                city: "Rio de Janeiro — RJ",
                address: "R. Farme de Amoedo, 75 — Grupo 302, Ipanema",
                extra: "Atendimento com hora marcada",
                phone: "(11) 3192-3965",
                mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Farme+de+Amoedo+75+Ipanema+Rio+de+Janeiro",
              },
            ].map((loc) => (
              <motion.div
                key={loc.city}
                variants={fadeUp}
                className="location-card text-center py-10 border-t border-border"
              >
                <MapPin className="w-5 h-5 text-secondary mx-auto mb-4" />
                <h3 className="font-serif font-medium text-foreground mb-3">
                  {loc.city}
                </h3>
                <p className="font-sans text-[15px] text-muted-foreground leading-[1.65]">
                  {loc.address}
                </p>
                <p className="font-sans text-[13px] text-muted-foreground/70 mt-1">
                  {loc.extra}
                </p>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] text-secondary hover:text-foreground transition-colors mt-2 inline-block"
                >
                  Ver no mapa →
                </a>
                <a href={`tel:+${loc.phone.replace(/\D/g, '')}`} className="font-sans text-[14px] text-secondary hover:text-foreground transition-colors mt-2 inline-block">
                  {loc.phone}
                </a>
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
                <span className="text-foreground font-medium">11:00 às 21:00</span>
              </div>
              <div className="flex justify-between font-sans text-[15px]">
                <span className="text-muted-foreground">Sábado</span>
                <span className="text-foreground font-medium">Cursos e mentorias</span>
              </div>
            </div>
            <p className="font-sans text-[13px] text-muted-foreground/70 mt-5 leading-[1.6]">
              Intervalo de 1h por consulta · Último horário disponível: 21:00.
              Sábados dedicados a cursos e mentorias (horário a definir).
            </p>
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
      <footer ref={footerRef} className="py-20 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
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
                  @lcclinica
                </span>
              </div>
            </div>
          </div>
          <div className="mt-14 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-[13px] text-background/35 mb-2">
              Lucas Montanari Cerqueira — Coren-SP 557197 | Biomédico
            </p>
            <p className="font-sans text-[13px] text-background/25">
              © {new Date().getFullYear()} LC Clínica — lcclinica.com.br — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
