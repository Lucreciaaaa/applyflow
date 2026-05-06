import Link from "next/link";
import AuthCard from "./auth-card";
import AuthForm from "./form";

const SignupCard = () => {
  return (
    <AuthCard>
      <div className="space-y-1 text-center">
        <h2 className="font-medium text-white">Create your account</h2>
        <p className="text-sm text-emerald-100/70">
          Understand why your CV doesn’t get interviews and fix it
        </p>
      </div>
      <AuthForm mode="signup" />
      <p className="text-center text-sm text-emerald-100/60">
        Already have an account ? {/* TODO: replace with Link */}
        <Link href="/auth/login" className="text-emerald-400 underline hover:text-emerald-300">
          Log in
        </Link>
      </p>
    </AuthCard>
  );
};

export default SignupCard;
