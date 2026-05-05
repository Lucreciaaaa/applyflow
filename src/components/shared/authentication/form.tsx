"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Controller, useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signUpSchema } from "@/features/analysis/domain/form-schema";

const inputClassName =
  "border-emerald-500/20 text-white placeholder:text-white/40 bg-white/5 rounded-md h-9";

export function AuthenticationForm({ hasAnAccount }: { hasAnAccount: boolean }) {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="space-y-4">
      {!hasAnAccount && (
        <Controller
          name="userName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-username" className="text-emerald-50">
                Name
              </FieldLabel>
              <Input
                {...field}
                id="form-username"
                aria-invalid={fieldState.invalid}
                placeholder="Jane Doe"
                autoComplete="off"
                className={inputClassName}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      )}

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-email" className="text-emerald-50">
              Email
            </FieldLabel>
            <Input
              {...field}
              id="form-email"
              aria-invalid={fieldState.invalid}
              placeholder="you@example.com"
              autoComplete="off"
              className={inputClassName}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-password" className="text-emerald-50">
              Password
            </FieldLabel>
            <Input
              {...field}
              id="form-password"
              aria-invalid={fieldState.invalid}
              placeholder="••••••••"
              autoComplete="off"
              type="password"
              className={inputClassName}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
}
