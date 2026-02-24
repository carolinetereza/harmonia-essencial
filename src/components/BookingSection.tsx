import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronDown, CalendarIcon, Clock, User, Stethoscope, ArrowRight, Loader2 } from "lucide-react";

const PROCEDURES = [
  "Botox (Face / Pescoço / Bruxismo / Hiperidrose)",
  "Preenchimento Facial",
  "Skinboosters",
  "Bioestimuladores de Colágeno",
  "Lifting Temporal",
  "Harmonização Glútea",
  "Harmonização Corporal",
  "Criolipólise",
  "Laser Fotona",
  "Ultraformer",
  "Peeling Químico",
  "Microagulhamento",
  "MMP Terapia Capilar",
  "Luz Pulsada",
  "Protocolo Definição de Abdômen",
  "Outros",
];

const TIME_SLOTS = Array.from({ length: 19 }, (_, i) => {
  const hour = Math.floor(i / 2) + 9;
  const min = i % 2 === 0 ? "00" : "30";
  return `${String(hour).padStart(2, "0")}:${min}`;
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [procedure, setProcedure] = useState("");
  const [otherProcedure, setOtherProcedure] = useState("");
  const [showProcedureDropdown, setShowProcedureDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    name: false,
    procedure: false,
    other: false,
  });

  const errors = useMemo(() => ({
    date: touched.date && !selectedDate,
    time: touched.time && !selectedTime,
    name: touched.name && !name.trim(),
    procedure: touched.procedure && !procedure,
    other: touched.other && procedure === "Outros" && !otherProcedure.trim(),
  }), [touched, selectedDate, selectedTime, name, procedure, otherProcedure]);

  const isValid = selectedDate && selectedTime && name.trim() && procedure && (procedure !== "Outros" || otherProcedure.trim());

  const handleSubmit = () => {
    setTouched({ date: true, time: true, name: true, procedure: true, other: true });
    if (!isValid) return;

    setIsSubmitting(true);

    const formattedDate = format(selectedDate!, "dd/MM/yyyy", { locale: ptBR });
    const procedureText = procedure === "Outros" ? otherProcedure.trim() : procedure;

    const message = `Olá, meu nome é ${name.trim()}.

Gostaria de agendar uma consulta para:

Procedimento: ${procedureText}

Data: ${formattedDate}
Horário: ${selectedTime}

Aguardo confirmação.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/5511994672773?text=${encoded}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="agendar" className="py-32 md:py-44 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--nude)/0.3)] via-[hsl(var(--cream))] to-[hsl(var(--ivory))]"/>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.3em] uppercase font-sans text-muted-foreground mb-6"
          >
            Agendamento
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-serif text-3xl md:text-5xl font-medium text-foreground leading-[1.15]"
          >
            Agende Sua Consulta
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={2}
          variants={fadeUp}
          className="glass-card rounded-lg p-8 md:p-12 shadow-[0_20px_60px_-15px_hsla(var(--warm-brown)/0.15)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_hsla(var(--warm-brown)/0.2)] hover:-translate-y-1"
        >
          {/* Calendar */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
                Data da Consulta
              </label>
            </div>
            <div className={cn(
              "rounded-lg border transition-colors duration-300 overflow-hidden",
              errors.date ? "border-destructive/50" : "border-border"
            )}>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  setTouched(t => ({ ...t, date: true }));
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                locale={ptBR}
                className="p-4 pointer-events-auto mx-auto"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4 w-full",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-sm font-serif font-medium text-foreground",
                  nav: "space-x-1 flex items-center",
                  nav_button: "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md border border-border hover:bg-accent transition-colors",
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-full font-sans font-normal text-[0.75rem] uppercase tracking-wider",
                  row: "flex w-full mt-1",
                  cell: "h-10 w-full text-center text-sm p-0.5 relative focus-within:relative focus-within:z-20",
                  day: "h-10 w-full rounded-md font-sans text-sm p-0 font-normal hover:bg-accent transition-colors aria-selected:opacity-100",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground font-medium",
                  day_outside: "text-muted-foreground opacity-30",
                  day_disabled: "text-muted-foreground opacity-30 cursor-not-allowed",
                  day_hidden: "invisible",
                }}
              />
            </div>
            <AnimatePresence>
              {errors.date && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-xs text-destructive mt-2">
                  Selecione uma data para a consulta.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Time Selection */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
                Horário Preferido
              </label>
            </div>
            <div className={cn(
              "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2",
            )}>
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    setSelectedTime(time);
                    setTouched(t => ({ ...t, time: true }));
                  }}
                  className={cn(
                    "py-2.5 px-2 rounded-md font-sans text-sm transition-all duration-300 border",
                    selectedTime === time
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-transparent border-border text-foreground hover:bg-accent hover:border-accent"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
            <AnimatePresence>
              {errors.time && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-xs text-destructive mt-2">
                  Selecione um horário.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Name */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-muted-foreground" />
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
                Seu Nome Completo
              </label>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, name: true }))}
              placeholder="Digite seu nome completo"
              maxLength={100}
              className={cn(
                "w-full px-4 py-3 rounded-md bg-transparent border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-300",
                errors.name ? "border-destructive/50" : "border-border"
              )}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-xs text-destructive mt-2">
                  Informe seu nome completo.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Procedure */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="w-4 h-4 text-muted-foreground" />
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
                Procedimento de Interesse
              </label>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowProcedureDropdown(!showProcedureDropdown)}
                onBlur={() => setTimeout(() => setShowProcedureDropdown(false), 200)}
                className={cn(
                  "w-full px-4 py-3 rounded-md bg-transparent border font-sans text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-300",
                  errors.procedure ? "border-destructive/50" : "border-border",
                  procedure ? "text-foreground" : "text-muted-foreground/50"
                )}
              >
                {procedure || "Selecione o procedimento"}
                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-300", showProcedureDropdown && "rotate-180")} />
              </button>
              <AnimatePresence>
                {showProcedureDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 top-full left-0 right-0 mt-1 rounded-md border border-border bg-background shadow-xl max-h-64 overflow-y-auto"
                  >
                    {PROCEDURES.map((p) => (
                      <button
                        key={p}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setProcedure(p);
                          setTouched(t => ({ ...t, procedure: true }));
                          setShowProcedureDropdown(false);
                          if (p !== "Outros") setOtherProcedure("");
                        }}
                        className={cn(
                          "w-full px-4 py-2.5 text-left font-sans text-sm transition-colors hover:bg-accent",
                          procedure === p ? "bg-accent text-foreground font-medium" : "text-foreground"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {errors.procedure && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-xs text-destructive mt-2">
                  Selecione um procedimento.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Other procedure input */}
            <AnimatePresence>
              {procedure === "Outros" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden"
                >
                  <input
                    type="text"
                    value={otherProcedure}
                    onChange={(e) => setOtherProcedure(e.target.value)}
                    onBlur={() => setTouched(t => ({ ...t, other: true }))}
                    placeholder="Descreva o procedimento desejado"
                    maxLength={200}
                    className={cn(
                      "w-full px-4 py-3 rounded-md bg-transparent border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all duration-300",
                      errors.other ? "border-destructive/50" : "border-border"
                    )}
                  />
                  <AnimatePresence>
                    {errors.other && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="font-sans text-xs text-destructive mt-2">
                        Descreva o procedimento de interesse.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <motion.button
            onClick={handleSubmit}
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={cn(
              "w-full py-4 rounded-md font-sans text-xs tracking-[0.25em] uppercase font-medium transition-all duration-500 flex items-center justify-center gap-3",
              "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Redirecionando...
              </>
            ) : (
              <>
                Confirmar Agendamento
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>

          <p className="font-sans text-xs text-muted-foreground text-center mt-4">
            Você será redirecionado ao WhatsApp para confirmação.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
