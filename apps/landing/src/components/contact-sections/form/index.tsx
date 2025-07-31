"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Phone, Smartphone, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

enum ContactFormFields {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  DEVICE_TYPE = "deviceType",
  DESCRIPTION = "description",
  REFERRED = "referred",
}

// --- ZOD SCHEMA & FORM TYPE ---
const contactSchema = z.object({
  [ContactFormFields.NAME]: z.string().min(1, "El nombre es requerido"),
  [ContactFormFields.EMAIL]: z.string().email("Correo electrónico inválido"),
  [ContactFormFields.PHONE]: z.string().optional().or(z.literal("")),
  [ContactFormFields.DEVICE_TYPE]: z.string().optional(),
  [ContactFormFields.DESCRIPTION]: z
    .string()
    .min(1, "Por favor describe tu problema o solicitud"),
  [ContactFormFields.REFERRED]: z.string().optional(),
});

type ContactFormType = z.infer<typeof contactSchema>;

// --- CAMPOS SELECT ---
const DEVICE_OPTIONS = [
  { value: "laptop", label: "Laptop" },
  { value: "desktop", label: "Computadora de Escritorio" },
  { value: "smartphone", label: "Smartphone" },
  { value: "tablet", label: "Tablet" },
  { value: "gaming", label: "Consola de Videojuegos" },
  { value: "other", label: "Otro" },
];

const REFERRED_OPTIONS = [
  { value: "google", label: "Búsqueda en Google" },
  { value: "social", label: "Redes Sociales" },
  { value: "friend", label: "Amigo o Familiar" },
  { value: "review", label: "Reseñas en línea" },
  { value: "advertisement", label: "Publicidad" },
  { value: "other", label: "Otro" },
];

// --- CAMPOS REUTILIZABLES ---
function FormFieldText({
  label,
  icon: Icon,
  id,
  required,
  error,
  ...props
}: {
  label: string;
  icon?: React.ElementType;
  id: string;
  required?: boolean;
  error?: string;
  [key: string]: any;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-slate-700 font-medium flex items-center gap-2"
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        {...props}
        className={`rounded-2xl border-slate-200 focus:border-brand-500 py-6 ${
          error ? "border-red-300 focus:border-red-500" : ""
        }`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function FormFieldSelect({
  label,
  id,
  options,
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
}: {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-700 font-medium flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={`rounded-2xl border-slate-200 focus:border-brand-500 py-6 ${error ? "border-red-300 focus:border-red-500" : ""}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-2xl">
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function FormFieldTextarea({
  label,
  id,
  required,
  error,
  ...props
}: {
  label: string;
  id: string;
  required?: boolean;
  error?: string;
  [key: string]: any;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-slate-700 font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Textarea
        id={id}
        {...props}
        className={`rounded-2xl border-slate-200 focus:border-brand-500 min-h-[120px] resize-none ${
          error ? "border-red-300 focus:border-red-500" : ""
        }`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// --- MENSAJE DE CONFIRMACIÓN ---
function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16"
    >
      <h2 className="text-2xl font-bold text-brand-700 mb-4">
        ¡Solicitud enviada!
      </h2>
      <p className="text-slate-700 mb-8 max-w-md text-center">
        Gracias por contactarnos. Te responderemos lo más pronto posible dentro
        del horario laboral.
      </p>
      <Button className="w-fit" onClick={onReset}>
        Enviar otra solicitud
      </Button>
    </motion.div>
  );
}

// --- FORMULARIO PRINCIPAL ---
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      [ContactFormFields.NAME]: "",
      [ContactFormFields.EMAIL]: "",
      [ContactFormFields.PHONE]: "",
      [ContactFormFields.DEVICE_TYPE]: "",
      [ContactFormFields.DESCRIPTION]: "",
      [ContactFormFields.REFERRED]: "",
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000)); // Simula API
    setIsSubmitting(false);
    setSent(true);
    reset();
  };

  if (sent) {
    return <SuccessMessage onReset={() => setSent(false)} />;
  }

  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
    >
      <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-slate-800">
            Solicitud de Servicio
          </CardTitle>
          <p className="text-slate-600 mt-2">
            Completa tus datos y nos encargamos del resto.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nombre */}
            <FormFieldText
              label="Nombre completo"
              icon={User}
              id={ContactFormFields.NAME}
              required
              error={errors[ContactFormFields.NAME]?.message}
              {...register(ContactFormFields.NAME)}
              placeholder="Ej: Juan Pérez"
            />

            {/* Email */}
            <FormFieldText
              label="Correo electrónico"
              icon={Mail}
              id={ContactFormFields.EMAIL}
              required
              type="email"
              error={errors[ContactFormFields.EMAIL]?.message}
              {...register(ContactFormFields.EMAIL)}
              placeholder="tucorreo@ejemplo.com"
            />

            {/* Teléfono */}
            <FormFieldText
              label="Teléfono"
              icon={Phone}
              id={ContactFormFields.PHONE}
              type="tel"
              error={errors[ContactFormFields.PHONE]?.message}
              {...register(ContactFormFields.PHONE)}
              placeholder="(555) 123-4567"
            />

            {/* Tipo de dispositivo */}
            <Controller
              name={ContactFormFields.DEVICE_TYPE}
              control={control}
              render={({ field }) => (
                <FormFieldSelect
                  label="Tipo de dispositivo"
                  icon={Smartphone}
                  id={ContactFormFields.DEVICE_TYPE}
                  value={field.value}
                  onChange={field.onChange}
                  options={DEVICE_OPTIONS}
                  placeholder="Selecciona el tipo de dispositivo"
                  error={errors[ContactFormFields.DEVICE_TYPE]?.message}
                />
              )}
            />

            {/* Descripción servicio */}
            <FormFieldTextarea
              label="¿En qué podemos ayudarte?"
              id={ContactFormFields.DESCRIPTION}
              required
              error={errors[ContactFormFields.DESCRIPTION]?.message}
              {...register(ContactFormFields.DESCRIPTION)}
              placeholder="Describe tu problema o el servicio que necesitas. ¡Cuantos más detalles, mejor!"
            />

            {/* Referido */}
            <Controller
              name={ContactFormFields.REFERRED}
              control={control}
              render={({ field }) => (
                <FormFieldSelect
                  label="¿Cómo supiste de nosotros?"
                  id={ContactFormFields.REFERRED}
                  value={field.value}
                  onChange={field.onChange}
                  options={REFERRED_OPTIONS}
                  placeholder="Selecciona una opción"
                  error={errors[ContactFormFields.REFERRED]?.message}
                />
              )}
            />

            {/* Botón enviar */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-500 to-accent-600 hover:from-brand-600 hover:to-accent-700 text-white rounded-2xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ?
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando solicitud...
                  </>
                : "Enviar solicitud"}
              </Button>
            </motion.div>
          </form>
          {/* Info adicional */}
          <motion.div
            className="text-center pt-6 border-t border-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="text-xs text-slate-400">
              Usualmente respondemos en menos de 2 horas en días hábiles. Tu
              información es segura y nunca será compartida.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
