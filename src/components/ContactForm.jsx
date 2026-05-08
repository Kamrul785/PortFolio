import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./shared/ScrollReveal";
import ContactCard from "./shared/ContactCard";
import { Mail, Phone, MapPin, Github, User, Mail as MailIcon, MessageSquare, Send, CheckCircle } from "lucide-react";

const ContactForm = ({ darkMode }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    // initialize EmailJS if key is present
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_EMAIL_TO || "kamrulkhan526785@gmail.com",
          from_name: name,
          from_email: email,
          message: message,
          reply_to: email,
        }
      );

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";

      setFormStatus("success");
      setTimeout(() => setFormStatus(""), 3000);
    } catch (err) {
      console.error("Contact form error", err);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's connect and create something amazing together!
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ScrollReveal delay={100}>
            <ContactCard icon={Mail} title="Email" content="kamrulkhan526785@gmail.com" href="mailto:kamrulkhan526785@gmail.com" color="blue" delay={0} darkMode={darkMode} />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <ContactCard icon={Phone} title="Phone" content="+88 01747333257" href="tel:+8801747333257" color="green" delay={0.5} darkMode={darkMode} />
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <ContactCard icon={MapPin} title="Location" content="Chattogram, Bangladesh" href="https://maps.google.com/?q=Chattogram,Bangladesh" color="purple" delay={1} darkMode={darkMode} />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <ContactCard icon={Github} title="GitHub" content="github.com/Kamrul785" href="https://github.com/Kamrul785" color="blue" delay={1.5} darkMode={darkMode} />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={500}>
          <div className="max-w-2xl mx-auto">
            <div className={`p-8 rounded-2xl shadow-2xl backdrop-blur-sm border ${darkMode ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input type="text" name="name" ref={nameRef} required className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`} placeholder="Your Name" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input type="email" name="email" ref={emailRef} required className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`} placeholder="your.email@example.com" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                    <textarea name="message" ref={messageRef} required rows={6} className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`} placeholder="Tell me about your project or just say hello!" />
                  </div>
                </div>

                <button type="submit" disabled={formStatus === "sending"} className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {formStatus === "success" && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <p className="text-green-400">Thank you for your message! I'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
