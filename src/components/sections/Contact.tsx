"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Replace with your EmailJS credentials
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   data,
      //   "YOUR_PUBLIC_KEY"
      // );
      
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  } as any;

  return (
    <section className="py-24 relative overflow-hidden bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold mt-4 leading-tight text-primary-dark">
                Let's Build Something <span className="text-accent-blue">Extraordinary</span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
                Ready to transform your business infrastructure? Reach out to our team for a professional consultation.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contact@enteropia.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Office", value: "123 Tech Avenue, Silicon Valley, CA" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/5 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/10 transition-colors">
                    <item.icon className="w-6 h-6 text-accent-blue transition-transform group-hover:scale-105" />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-widest">{item.label}</h4>
                    <p className="text-lg font-bold text-primary-dark mt-1 group-hover:text-accent-blue transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-8">
               <div className="p-6 bg-secondary-bg border border-border rounded-2xl group hover:border-accent-blue/20 transition-colors">
                  <h4 className="font-bold flex items-center gap-2 mb-2 text-primary-dark group-hover:text-accent-blue transition-colors">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    Free Consultation
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">Get a 30-minute infrastructure review and a custom security roadmap for your startup.</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white p-8 md:p-12 border border-border rounded-3xl shadow-xl relative overflow-hidden group"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Full Name</label>
                    <input
                      {...register("name")}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border focus:border-accent-blue focus:bg-white focus:outline-none transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Email Address</label>
                    <input
                      {...register("email")}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border focus:border-accent-blue focus:bg-white focus:outline-none transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Company Name</label>
                    <input
                      {...register("company")}
                      placeholder="Enteropia Inc."
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border focus:border-accent-blue focus:bg-white focus:outline-none transition-all"
                    />
                    {errors.company && <p className="text-xs text-red-500 font-medium">{errors.company.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600">Service Required</label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border focus:border-accent-blue focus:bg-white focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="security">Cybersecurity</option>
                      <option value="it">IT Support</option>
                      <option value="web">Web Development</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Your Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary-bg border border-border focus:border-accent-blue focus:bg-white focus:outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed py-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
