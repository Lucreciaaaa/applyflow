export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-linear-to-br from-emerald-500 via-emerald-900 to-black">
      {children}
    </div>
  );
}
