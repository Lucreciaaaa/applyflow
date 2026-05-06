import AuthenticationCard from "@/components/shared/authentication-card";

export default function Authentication() {
  return (
    <div className="flex w-full items-center justify-center">
      <AuthenticationCard hasAnAccount={false} />
    </div>
  );
}
