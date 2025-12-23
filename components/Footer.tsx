import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#gallery', label: 'Galleries' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-white border-t border-black/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">THAT GODDESS GLOW</h3>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">Menu</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:opacity-70 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">Info</h4>
            <p className="text-sm mb-2">INFO@THATGODDESSGLOW.COM</p>
            <p className="text-sm text-gray-600">Based in Los Angeles</p>
            <p className="text-sm text-gray-600">Serving California + Destinations</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Pinterest"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c5.302 0 9.917-3.104 11.963-7.551-.163-.687-.694-3.633-.694-3.633s.174-.348.174-.86c0-.82-.477-1.434-1.071-1.434-.845 0-1.243.635-1.243 1.402 0 .825.525 2.058.796 3.2.226.958.454 1.92.454 2.585 0 .78-.232 1.467-.91 1.467-.72 0-1.314-.744-1.314-1.812 0-1.554 1.062-3.262 1.062-4.92 0-1.28-.688-2.098-1.674-2.098-1.36 0-2.192.999-2.192 2.324 0 .852.29 1.425.29 1.425l-1.16 4.925c-.345 1.468-.052 3.266-.026 3.453.016.12.167.149.235.055.096-.137 1.336-1.655 1.757-3.18.12-.445.69-2.73.69-2.73.348.664 1.365 1.247 2.446 1.247 3.214 0 5.392-3.001 5.392-7.01 0-2.916-2.508-5.59-6.084-5.59-4.14 0-6.573 3.102-6.573 5.9 0 2.098.802 3.956 2.015 4.65.225.131.256.073.295-.165l.24-.95c.017-.07.011-.131-.05-.21-.331-.395-.543-.893-.543-1.607 0-2.08 1.514-3.988 3.93-3.988 2.156 0 3.73 1.57 3.73 3.67 0 2.32-1.464 4.28-3.63 4.28-.709 0-1.378-.368-1.606-.81l-.436 1.66c-.158.612-.585 1.38-.87 1.85 1.664.513 3.432.788 5.256.788 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-black/10 text-center">
          <p className="text-xs text-gray-600">© THAT GODDESS GLOW {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
