export default function CTABand() {
  return (
    <section id="cta" className="bg-blue-900 text-white">
      <div className="container-default py-12 flex flex-col md:flex-row items-center gap-4 justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Start with ONE TOUCH</h2>
          <p className="text-blue-100">Reach out by email or phone—fastest way to get curated options.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:rvega@helmsbriscoe.com" className="rounded-2xl bg-white text-blue-900 px-5 py-3 hover:opacity-90">Email Rosa</a>
          <a href="tel:+19174842952" className="rounded-2xl border border-white px-5 py-3">Call Now</a>
        </div>
      </div>
    </section>
  );
}
