"use client"
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    workPosition: '',
    commentary: ''
  });

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Create template params that match your EmailJS template variables
      // Build a comprehensive message with all details
      const fullMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Work Position: ${formData.workPosition || 'Not specified'}

Message:
${formData.commentary || 'No additional comments'}
      `.trim();

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        workPosition: formData.workPosition,
        message: fullMessage, // Send all details in the message field
        time: new Date().toLocaleString() // Add timestamp
      };

      // Send the email using emailjs.send instead of sendForm for better control
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        workPosition: '',
        commentary: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      const emailError = error as { text?: string };
      if (emailError.text) {
        setError(emailError.text);
      } else {
        setError("Failed to send message. Please check your email configuration.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-stone-800 rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
            <div>
              <label htmlFor="workPosition" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                Work Position
              </label>
              <input
                type="text"
                id="workPosition"
                name="workPosition"
                value={formData.workPosition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="commentary" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
              Commentary
            </label>
            <textarea
              id="commentary"
              name="commentary"
              value={formData.commentary}
              onChange={handleChange}
              rows={5}
              className="w-full px-3 py-2 border border-stone-300 dark:border-stone-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100"
              placeholder="Tell us more..."
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
              ✓ Message sent successfully!
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-orange-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;