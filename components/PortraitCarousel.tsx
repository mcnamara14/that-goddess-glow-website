'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function PortraitCarousel() {
  const images = [
    {
      src: '/slider-1.jpeg',
      alt: 'Portrait 1',
    },
    {
      src: '/slider-2.jpg',
      alt: 'Portrait 2',
    },
    {
      src: '/slider-3.jpg',
      alt: 'Portrait 3',
    },
    {
      src: '/slider-4.jpeg',
      alt: 'Portrait 4',
    },
    {
      src: '/slider-5.jpg',
      alt: 'Portrait 5',
    },
    {
      src: '/slider-6.jpg',
      alt: 'Portrait 6',
    },
  ]

  const settings = {
    infinite: true,
    slidesToShow: 4.5, // 4 full slides + 0.5 on each side (50% peek)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    dots: false,
    centerMode: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  }

  return (
    <section className="bg-white overflow-hidden py-16 md:py-4">
      <Slider {...settings} className="portrait-carousel">
        {images.map((image, index) => (
          <div key={index} className="px-[5px]">
            <div className="relative w-full" style={{ height: '400px' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={100}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
