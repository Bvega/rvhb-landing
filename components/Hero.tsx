export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="container-default py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Room Blocks for Meetings—<span className="text-blue-900">Handled in ONE TOUCH.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Share your dates and requirements once. We source, negotiate, and present the best hotel options—at no cost to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:rvega@helmsbriscoe.com" className="rounded-2xl bg-blue-900 px-5 py-3 text-white hover:opacity-90">Email Rosa</a>
            <a href="tel:+19174842952" className="rounded-2xl border border-blue-900 px-5 py-3 text-blue-900 hover:bg-blue-50">Call Now</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Powered by HelmsBriscoe, a global leader in meetings procurement.</p>
        </div>
        <div>
          <img src="/hero-placeholder.svg" alt="Hospitality: room blocks for meetings and events" className="w-full rounded-2xl border" />
          <div className="card p-6 mt-4">
            <h2 className="text-xl font-semibold">Start with ONE TOUCH</h2>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li><strong>Email:</strong> <a className="underline" href="mailto:rvega@helmsbriscoe.com">rvega@helmsbriscoe.com</a></li>
              <li><strong>Phone:</strong> <a className="underline" href="tel:+19174842952">+1 (917) 484-2952</a></li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">We’ll reply with curated hotel options and next steps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
