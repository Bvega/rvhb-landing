export default function HowItWorks() {
  const steps = [
    { n: 1, title: "Tell us about your meeting", text: "Dates, city, rooms, budget, must‑haves." },
    { n: 2, title: "We source & negotiate", text: "We engage hotels on your behalf for options and concessions." },
    { n: 3, title: "You choose; we finalize", text: "Select your best fit. We handle details through signature." },
  ];
  return (
    <section id="how" className="bg-gray-50 py-16">
      <div className="container-default">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card p-6">
              <div className="text-3xl font-bold text-blue-900">0{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
