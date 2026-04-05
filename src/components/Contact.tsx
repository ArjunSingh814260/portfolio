"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible."
        });
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast.error("Failed to send message", {
          description: "Please check your credentials or try again later."
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Connection Error", {
        description: "An error occurred while sending the message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#121212] py-16 md:py-24 px-6 lg:px-12 relative z-20 w-full flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left side text/info */}
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
            >
              Let's Talk
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.05 }}
              className="text-zinc-200 text-lg md:text-2xl font-medium max-w-xl leading-relaxed mb-12"
            >
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors duration-300 font-medium">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-lg">arjunsingh814260@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-200 hover:text-white transition-colors duration-300 font-medium">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-lg">Chandigarh, India</span>
              </div>
            </motion.div>
          </div>

          {/* Right side form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.15 }}
            className="relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md p-8 md:p-12 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 blur-3xl -z-10 rounded-[2rem]" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-semibold text-zinc-200 tracking-wide uppercase">Message</label>
                <textarea 
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full font-semibold rounded-xl px-4 py-4 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group mt-4 relative overflow-hidden ${isSuccess ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-white text-black hover:bg-zinc-200 shadow-lg'}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                    {!isSubmitting && !isSuccess && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                  </span>
                </button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
