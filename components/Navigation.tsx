'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div
          className={`flex items-center h-20 transition-colors duration-300 relative ${
            scrolled ? 'text-black' : 'text-white'
          }`}
        >
          {/* Navigation Items on Left */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo Centered */}
          <Link
            href="/"
            className={`absolute left-1/2 transform -translate-x-1/2 text-[1.25rem] font-serif font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-black opacity-100' : 'text-white opacity-100'
            }`}
          >
            THAT GODDESS GLOW
          </Link>

          {/* Right side - empty for now, can add icons later */}
          <div className="ml-auto"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1.5 ml-auto"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px transition-all duration-300 ${
                scrolled ? 'bg-black' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 ${
                scrolled ? 'bg-black' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-px transition-all duration-300 ${
                scrolled ? 'bg-black' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-white border-t">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
