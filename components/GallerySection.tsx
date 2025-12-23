import Image from 'next/image'

export default function GallerySection() {
  const galleryCategories = [
    {
      title: 'WEDDINGS',
      subtitle: 'YOU AND YOURS',
      count: '1/9',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    },
    {
      title: 'EDITORIAL',
      subtitle: 'CREATIVE EXPRESSIONS',
      count: '1/4',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    },
    {
      title: 'PUBLISHED',
      subtitle: 'IN PRINT',
      count: '1/5',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
