type PageIntroProps = {
  title: string;
  subtitle: string;
};

const PageIntro = ({ title, subtitle }: PageIntroProps) => {
  return (
    <div className="mb-8 space-y-2">
      <h1 className="text-3xl font-semibold text-white">{title}</h1>
      <p className="text-sm text-emerald-100">{subtitle}</p>
    </div>
  );
};

export default PageIntro;
