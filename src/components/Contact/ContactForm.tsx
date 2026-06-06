'use client'

import { useActionState } from 'react'
import contactFormAction from '@/actions/contact-form'

const initialState = {
  success: false,
  message: '',
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    contactFormAction,
    initialState,
  )

  return (
    <form
      action={formAction}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          required
          className="bg-secondary border-border focus:border-accent w-full rounded-xl border px-4 py-3 outline-none"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          required
          className="bg-secondary border-border focus:border-accent w-full rounded-xl border px-4 py-3 outline-none"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Subject
        </label>

        <input
          type="text"
          name="subject"
          required
          className="bg-secondary border-border focus:border-accent w-full rounded-xl border px-4 py-3 outline-none"
          placeholder="Project Discussion"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Message
        </label>

        <textarea
          name="message"
          required
          rows={6}
          className="bg-secondary border-border focus:border-accent w-full rounded-xl border px-4 py-3 outline-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-accent text-primary hover:bg-accent/90 w-full rounded-xl px-6 py-3 font-semibold transition"
      >
        {pending ? 'Sending...' : 'Send Message'}
      </button>

      {state?.message && (
        <div
          className={`rounded-xl p-4 text-sm ${
            state.success
              ? 'border border-green-500/20 bg-green-500/10 text-green-500'
              : 'border border-red-500/20 bg-red-500/10 text-red-500'
          }`}
        >
          {state.message}
        </div>
      )}
    </form>
  )
}