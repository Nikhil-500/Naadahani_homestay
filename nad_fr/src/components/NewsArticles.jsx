import news from "../data/news";

export default function NewsArticles() {
  return (
    <section className="py-16 bg-light" id="news">
      <h2 className="text-4xl font-heading text-center text-primary mb-10">
        News & Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {news.map((n) => (
          <div key={n.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={n.image} alt={n.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-heading">{n.title}</h3>
              <p className="text-sm text-dark/70 mt-2">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
