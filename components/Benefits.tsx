export default function Benefits() {
  const items = [
    "Broad hotel network to match any scale and location.",
    "Negotiated rates, concessions, and protective clauses.",
    "Time saved for planners, admins, and busy teams.",
    "No cost to you—ever. Hotels compensate our services.",
  ];
  return (
    <section id="benefits" className="container-default py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Benefits</h2>
      <ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-5">
        {items.map((t, i) => <li key={i} className="text-gray-700">{t}</li>)}
      </ul>
    </section>
  );
}
