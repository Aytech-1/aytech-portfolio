'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { LoaderCircle, Send } from 'lucide-react'

import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/adeyemiayobami273@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      )

      const result = await response.json()

      if (result.success) {
        toast.success('Message sent successfully')
        form.reset()
      } else {
        toast.error('Failed to send message')
      }
    }
    catch (error) {
      toast.error('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_subject"
        value="New Portfolio Contact Message"
      />

      <input
        type="hidden"
        name="_template"
        value="table"
      />

      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        className="hidden"
      />

      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <Input
        type="email"
        name="email"
        placeholder="Your Email Address"
        required
      />

      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />

      <Textarea
        name="message"
        placeholder="Tell me about your project..."
        rows={6}
        required
      />

      <Button disabled={loading}>
        {loading ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}