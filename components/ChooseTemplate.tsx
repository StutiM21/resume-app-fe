import ChooseTemplateCard from "./ChooseTemplateCard";

export default function ChooseTemplates() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Choose Your Perfect Template
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <ChooseTemplateCard />
        <ChooseTemplateCard />
        <ChooseTemplateCard />
      </div>
    </section>
  );
}
