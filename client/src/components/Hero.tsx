interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

interface HeroProps {
  mainArticle: Article;
  sideArticles: Article[];
  onArticleClick: (id: number) => void;
}

export default function Hero({ mainArticle, sideArticles, onArticleClick }: HeroProps) {
  return (
    <section className="bg-white border-b border-[#DEDBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article */}
          <div
            className="lg:col-span-2 cursor-pointer group"
            onClick={() => onArticleClick(mainArticle.id)}
          >
            <div className="relative overflow-hidden rounded-sm bg-gray-100 mb-4">
              <img
                src={mainArticle.image}
                alt={mainArticle.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="category-badge">{mainArticle.category}</span>
                <h2 className="text-3xl font-bold text-white mt-3 leading-tight">
                  {mainArticle.title}
                </h2>
                <p className="text-white/80 mt-3 line-clamp-2">
                  {mainArticle.subtitle}
                </p>
                <div className="article-meta text-white/70 mt-4">
                  {mainArticle.date}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onArticleClick(article.id)}
                className="flex gap-3 p-3 border border-[#DEDBD4] rounded-sm bg-[#F2F1EE] hover:bg-white hover:border-[#CCCAC3] hover:shadow-md transition-all cursor-pointer group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-16 object-cover rounded-sm flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C01D35] mb-1">
                    {article.category}
                  </div>
                  <h3 className="text-sm font-bold text-[#0D1B2A] line-clamp-3 leading-tight">
                    {article.title}
                  </h3>
                  <div className="text-xs text-[#7A7A7A] mt-1">
                    {article.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
