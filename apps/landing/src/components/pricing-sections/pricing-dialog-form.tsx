"use client";

import { ReactNode, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Confetti, ConfettiRef } from "../magicui/confetti";

enum PricingDialogFormId {
  Name = "name",
  Email = "email",
  Phone = "phone",
  Message = "message",
}

const pricingFormSchema = z.object({
  name: z.string().min(1, "Nombre es requerido").max(50, "Nombre muy largo"),
  email: z.email("Correo electrónico inválido").max(100, "Correo muy largo"),
  phone: z.string().min(1, "Teléfono es requerido").optional(),
  message: z
    .string()
    .min(1, "Mensaje es requerido")
    .max(700, "Mensaje demasiado largo")
    .optional(),
});

export const PricingDialogForm = ({ children }: { children: ReactNode }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);

  const confettiRef = useRef<ConfettiRef>(null);

  const form = useForm<z.infer<typeof pricingFormSchema>>({
    resolver: zodResolver(pricingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof pricingFormSchema>) {
    console.log(values);
    setFormSubmitted(true);
    form.reset();
  }

  function handleShowDialogForm() {
    setDialogOpen(true);
    setFormSubmitted(false);
  }

  function handleConfettiTrigger() {
    if (confettiRef.current) {
      confettiRef.current.fire({});
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild type="button" onClick={handleShowDialogForm}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {formSubmitted ? "¡Gracias por tu interés!" : "Solicitud de Plan"}
          </DialogTitle>
          {formSubmitted ? null : (
            <DialogDescription>
              Por favor, proporciona la siguiente información para completar tu
              solicitud.
            </DialogDescription>
          )}
        </DialogHeader>
        {formSubmitted ?
          <div>
            <Confetti
              ref={confettiRef}
              className="absolute left-0 top-0 z-0 size-full"
              onMouseEnter={handleConfettiTrigger}
            />
            <p className="text-center">
              Nos pondremos en contacto contigo lo mas pronto posible.
            </p>
            <DialogClose asChild>
              <Button variant="outline" className="mt-4 w-full z-50 relative">
                Volver
              </Button>
            </DialogClose>
          </div>
        : <>
            <Form {...form}>
              <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                  <FormField
                    name={PricingDialogFormId.Name}
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel htmlFor={PricingDialogFormId.Name}>
                          Nombre Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            id={PricingDialogFormId.Name}
                            placeholder="Su Nombre Completo..."
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={PricingDialogFormId.Email}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel htmlFor={PricingDialogFormId.Email}>
                          Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input
                            id={PricingDialogFormId.Email}
                            placeholder="somemail@example.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={PricingDialogFormId.Phone}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel htmlFor={PricingDialogFormId.Phone}>
                          Número de Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input
                            id={PricingDialogFormId.Phone}
                            placeholder="+123 456 7890"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={PricingDialogFormId.Message}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel htmlFor={PricingDialogFormId.Message}>
                          Mensaje Adicional
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            id={PricingDialogFormId.Message}
                            placeholder="Escriba cualquier detalle adicional que nos pueda ser de ayuda aquí..."
                            className="resize-none h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter className="mt-6">
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button type="submit" className="active:bg-brand-600">
                    Save changes
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        }
      </DialogContent>
    </Dialog>
  );
};
