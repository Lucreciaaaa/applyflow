"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { signInSchema, signUpSchema } from "@/features/analysis/validation/analysis-form-schema";

type LoginFormValues = z.infer<typeof signInSchema>;
type SignupFormValues = z.infer<typeof signUpSchema>;

type Props = {
  mode: "login" | "signup";
};

const inputClassName =
  "border-emerald-500/20 text-white placeholder:text-white/40 bg-white/5 rounded-md h-9";

export default function AuthForm({ mode }: Props) {
  const isSignup = mode === "signup";
  const schema = isSignup ? signUpSchema : signInSchema;

  const form = useForm<SignupFormValues | LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: isSignup
      ? { userName: "", email: "", password: "" }
      : { email: "", password: "" },
  });

  const onSubmit = (data: SignupFormValues | LoginFormValues) => {
    console.log(data); // TODO: Replace with actual authentication logic
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {isSignup && (
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
                aria-describedby={fieldState.invalid ? "form-username-error" : undefined}
                placeholder="Jane Doe"
                autoComplete="name"
                className={inputClassName}
              />
              {fieldState.invalid && (
                <FieldError id="form-username-error" errors={[fieldState.error]} />
              )}
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
              aria-describedby={fieldState.invalid ? "form-email-error" : undefined}
              placeholder="you@example.com"
              autoComplete="email"
              type="email"
              className={inputClassName}
            />
            {fieldState.invalid && <FieldError id="form-email-error" errors={[fieldState.error]} />}
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
              aria-describedby={fieldState.invalid ? "form-password-error" : undefined}
              placeholder="••••••••"
              autoComplete={isSignup ? "new-password" : "current-password"}
              type="password"
              className={inputClassName}
            />
            {fieldState.invalid && (
              <FieldError id="form-password-error" errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />

      <button
        type="submit"
        className="inline-flex h-9 w-full items-center justify-center rounded-md bg-linear-to-r from-emerald-500 to-emerald-600 px-4 text-white transition-all hover:from-emerald-600 hover:to-emerald-700 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
      >
        {isSignup ? "Create account" : "Log in"}
      </button>
    </form>
  );
}
