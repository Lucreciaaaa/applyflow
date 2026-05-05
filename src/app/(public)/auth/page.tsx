import AuthentificationCard from "@/components/shared/authentification-card";

export default function Authentication() {
  return (
    <div className="flex w-full items-center justify-center">
      <AuthentificationCard hasAnAccount={false} />
    </div>
  );
}
