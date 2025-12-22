export default function GallerySection() {
  const galleryCategories = [
    { title: 'WEDDINGS', subtitle: 'YOU AND YOURS', count: '1/9' },
    { title: 'EDITORIAL', subtitle: 'CREATIVE EXPRESSIONS', count: '1/4' },
    { title: 'PUBLISHED', subtitle: 'IN PRINT', count: '1/5' },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image {index + 1}</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm tracking-widest uppercase mb-2">{category.count}</p>
                <h3 className="text-2xl md:text-3xl font-serif font-normal mb-2">
                  {category.title}
                </h3>
                <p className="text-sm tracking-widest uppercase text-gray-600">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

