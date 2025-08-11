type Testimonial = { quote: string; name?: string; org?: string };

const DATA: Testimonial[] = [
  { quote: "Rosa made the process simple and stress‑free.", name: "Association Client" },
  { quote: "We saved time and money; will use again.", name: "Corporate Events Lead" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-16">
      <div className="container-default">
        <h2 className="text-2xl md:text-3xl font-semibold">What clients say</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {DATA.map((t, i) => (
            <figure key={i} className="card p-6">
              <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
              {t.name && <figcaption className="mt-3 text-sm text-gray-600">— {t.name}{t.org ? `, ${t.org}` : ""}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
