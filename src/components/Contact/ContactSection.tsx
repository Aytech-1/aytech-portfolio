import {
  MsgIcon,
  PhoneIcon,
  WhatsApp,
  LinkedIn,
  GithubIcon,
} from '@/utils/icons'
import ContactForm from './ContactForm'
import SectionHeading from '../SectionHeading/SectionHeading'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="my-20"
    >
      <SectionHeading
        title="Contact Me"
        subtitle="Let's discuss your project, software idea, business solution, or collaboration opportunity."
      />

      <div className="bg-secondary border-border mt-12 grid grid-cols-1 gap-10 rounded-[32px] border p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:p-16">

        {/* LEFT */}
        <div className="flex flex-col justify-between">

          <div>
            <div className="bg-accent/10 text-accent mb-6 inline-flex rounded-full px-4 py-2 text-sm font-medium">
              Available for Freelance & Full-Time Opportunities
            </div>

            <h2 className="text-neutral text-4xl font-bold leading-tight">
              Let's Build Something Amazing Together
            </h2>

            <p className="text-neutral/70 mt-6 max-w-lg leading-relaxed">
              Whether you're looking for a Full Stack Developer,
              Laravel Specialist, Next.js Developer, or Software Engineer,
              I'm ready to help transform your ideas into scalable digital
              products and business solutions.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-primary rounded-2xl p-4 text-center">
              <h4 className="text-accent text-xl font-bold">15+</h4>
              <p className="text-primary-content text-xs">
                Projects
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-4 text-center">
              <h4 className="text-accent text-xl font-bold">2+</h4>
              <p className="text-primary-content text-xs">
                Years Exp.
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-4 text-center">
              <h4 className="text-accent text-xl font-bold">24hrs</h4>
              <p className="text-primary-content text-xs">
                Response
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="mt-8 space-y-4">

            <a
              href="mailto:adeyemiayobami273@gmail.com"
              className="bg-primary border-border hover:border-accent flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300"
            >
              <div className="text-accent">
                <MsgIcon />
              </div>

              <div>
                <p className="text-neutral text-sm font-medium">
                  Email Address
                </p>

                <p className="text-neutral/70 text-xs font-medium">
                  adeyemiayobami273@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+2349030019355"
              className="bg-primary border-border hover:border-accent flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300"
            >
              <div className="text-accent">
                <PhoneIcon />
              </div>

              <div>
                <p className="text-neutral text-sm font-medium">
                  Phone Number
                </p>

                <p className="text-neutral/70 text-sm">
                  +234 903 001 9355
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/2349030019355"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border-border hover:border-accent flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300"
            >
              <div className="text-accent">
                <WhatsApp />
              </div>

              <div>
                <p className="text-neutral text-sm font-medium">
                  WhatsApp
                </p>

                <p className="text-neutral/70 text-sm">
                  Chat Instantly
                </p>
              </div>
            </a>

            <div className="bg-primary border-border rounded-2xl border p-4">
              <p className="text-neutral text-sm font-medium">
                Location
              </p>

              <p className="text-neutral/70 text-sm">
                Ogun State, Nigeria
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8">
            <p className="text-neutral mb-4 font-medium">
              Connect With Me
            </p>

            <div className="flex gap-4">

              <a
                href="https://www.linkedin.com/in/adeyemi-ayobami-650200325"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-border hover:border-accent rounded-xl border p-3 transition"
              >
                <LinkedIn className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/Aytech-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary border-border hover:border-accent rounded-xl border p-3 transition"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-primary border-border rounded-3xl border p-6 md:p-8">
          <h3 className="text-neutral mb-2 text-2xl font-bold">
            Start a Conversation
          </h3>

          <p className="text-neutral/70 mb-8">
            Have a project, business idea, or collaboration in mind? Send a message and I'll get back to you within 24 hours.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection