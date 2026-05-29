interface ArticleDetailProps {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: string;
  onBack: () => void;
}

export default function ArticleDetail({
  title,
  subtitle,
  category,
  date,
  readTime,
  image,
  body,
  onBack,
}: ArticleDetailProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-white border-b border-[#DEDBD4] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="text-sm font-semibold text-[#C01D35] hover:text-[#A01728] mb-6 transition-colors"
          >
            ← Retour
          </button>
          <span className="category-badge">{category}</span>
          <h1 className="text-5xl font-bold text-[#0D1B2A] mt-4 mb-4 leading-tight">
            {title}
          </h1>
          <p className="serif-accent text-2xl text-[#4A4A4A] mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* Article Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 border-t border-b border-[#DEDBD4]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#F2F1EE]"></div>
              <div>
                <div className="font-bold text-[#0D1B2A]">Alassane Ibraima</div>
                <div className="text-xs text-[#7A7A7A]">
                  {date} · {readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <img
          src={image}
          alt={title}
          className="w-full rounded-sm object-cover h-96 mb-12"
        />
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none text-[#1A1A1A] leading-relaxed">
          <p className="text-lg mb-6">{body}</p>
          <p className="text-lg mb-6">
            L'analyse approfondie de cette situation révèle des enjeux complexes et multidimensionnels qui façonneront l'avenir de la région. Les acteurs locaux, régionaux et internationaux jouent tous un rôle crucial dans cette dynamique.
          </p>
          <p className="text-lg mb-6">
            Les experts s'accordent à dire que les solutions durables nécessitent une approche collaborative et inclusive, prenant en compte les perspectives diverses et les intérêts légitimes de toutes les parties prenantes.
          </p>
          <p className="text-lg">
            À mesure que la situation évolue, il sera essentiel de maintenir une vigilance éditoriale rigoureuse et de continuer à fournir une couverture équilibrée et bien documentée des développements futurs.
          </p>
        </div>

        {/* Related Articles Placeholder */}
        <div className="mt-16 pt-8 border-t border-[#DEDBD4]">
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-6">Articles connexes</h3>
          <p className="text-[#7A7A7A] text-sm">
            D'autres articles sur des sujets similaires seront affichés ici.
          </p>
        </div>
      </div>
    </article>
  );
}
