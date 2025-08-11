export default function Value() {
  const items = [
    { title: "Speed", text: "Get curated options fast, aligned to your budget, location, and standards." },
    { title: "Savings", text: "Competitive rates and smarter terms through expert hotel negotiations." },
    { title: "Simplicity", text: "One point of contact from sourcing to signed contract." },
  ];
  return (
    <section className="container-default py-16" aria-labelledby="value-heading">
      <h2 id="value-heading" className="text-2xl md:text-3xl font-semibold">POWER OF ONE</h2>
      <p className="mt-2 text-gray-600">One Contact. One Brief. One Solution.</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <h3 className="text-lg font-semibold text-blue-900">{it.title}</h3>
            <p className="mt-2 text-gray-700">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
