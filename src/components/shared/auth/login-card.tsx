import Link from "next/link";
import AuthCard from "./auth-card";
import AuthForm from "./form";

const LoginCard = () => {
  return (
    <AuthCard>
      <div className="space-y-1 text-center">
        <h2 className="font-medium text-white">Welcome back</h2>
        <p className="text-sm text-emerald-100/70">
          Log in to analyze your CV and get more interviews
        </p>
      </div>
      <AuthForm mode="login" />
      <p className="text-center text-sm text-emerald-100/60">
        Don't have an account ?{" "}
        <Link href="/auth/signup" className="text-emerald-400 underline hover:text-emerald-300">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
};

export default LoginCard;
