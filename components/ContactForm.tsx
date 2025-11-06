'use client'

import { FormEvent } from 'react'
import { trackFormSubmit } from '@/lib/analytics'

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    trackFormSubmit('contact_form')
    
    // You can add your form submission logic here
    // For now, we'll just track the event
    alert('Thank you for your message! We will get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message..."
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-vertical text-gray-900 placeholder-gray-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>
    </form>
  )
}

