import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Clock,
} from "lucide-react";

function Contact() {
  const [inputfield, setinputfield] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleinput = (e) => {
    const { name, value } = e.target;
   setinputfield((prev) => ({ ...prev, [name]: value }));
  };

const onSubmit = async (event) => {
    event.preventDefault();
    const { email, name, message } = inputfield;
    if (!email || !name || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8888c6f9-191a-4a8c-ac3d-1f1931abf1d7");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
      if (res.success) {
        toast.success("Your message has been sent!");
        setinputfield({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#060610] relative overflow-hidden font-serif">
      {/* Animated background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,60,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,60,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tight"
              style={{ textShadow: "0 0 60px rgba(255,0,60,0.4)" }}
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-white/60 text-lg font-mono max-w-2xl mx-auto tracking-wide">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Email Card */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center">
                <Mail className="text-red-500" size={24} />
              </div>
              <h1 className="text-white text-2xl font-bold">Email Us</h1>
              <p className="text-gray-400 text-sm">Drop us a line anytime</p>
              <a href="mailto:support@Zaptro.com" className="text-red-500 hover:text-red-400 transition-colors block">
                support@Zaptro.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center">
                <Phone className="text-red-500" size={24} />
              </div>
              <h1 className="text-white text-2xl font-bold">Call Us</h1>
              <p className="text-gray-400 text-sm">Mon-Fri 8AM-6PM</p>
              <a href="tel:+911234678910" className="text-red-500 hover:text-red-400 transition-colors block">
                +91 123 467 8910
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center">
                <MapPin className="text-red-500" size={24} />
              </div>
              <h1 className="text-white text-2xl font-bold">Visit Us</h1>
              <p className="text-gray-400 text-sm">
                Come say hello at our office
              </p>
              <p className="text-red-500">123 Tech Street, San Francisco</p>
            </div>

            {/* Hours Card */}
            <div className="bg-[#0a0b14] border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center">
                <Clock className="text-red-500" size={24} />
              </div>
              <h1 className="text-white text-2xl font-bold">Business Hours</h1>
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">Monday - Friday</p>
                <p className="text-sm text-red-500">8AM - 6PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">Saturday</p>
                <p className="text-sm text-red-500">10AM - 4PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 text-sm">Sunday</p>
                <p className="text-sm text-gray-600">Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={onSubmit}
            className="flex mt-10 flex-col mx-auto bg-[#0a0b14] border border-white/5 rounded-2xl p-8 space-y-6 md:w-[70%]"
          >
            <div className="text-center">
              <h1 className="font-bold text-3xl text-white">
                Send us a <span className="text-red-500">Message</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Name Input */}
            <div className="group/input w-full">
              <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
                Your Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-red-400 transition-colors"
                  size={18}
                />
                <input
                  name="name"
                  value={inputfield.name}
                  onChange={handleinput}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group/input w-full">
              <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
                Your Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-red-400 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  value={inputfield.email}
                  onChange={handleinput}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
                  required
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="group/input w-full">
              <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
                Subject
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/input:text-red-400 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  name="subject"
                  value={inputfield.subject}
                  onChange={handleinput}
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all font-mono"
                  required
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="group/input w-full">
              <label className="block text-white/80 text-sm font-bold mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={inputfield.message}
                onChange={handleinput}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:border-red-500/50 focus:bg-white/10 outline-none transition-all resize-none font-mono"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-bold uppercase tracking-wider transition-all ${
                loading 
                  ? "bg-gray-500 cursor-not-allowed" 
                  : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:scale-95 shadow-lg shadow-red-500/30"
              }`}
            >
              <Send size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-[1px] mb-8"></div>
            <p className="text-white/60 font-mono text-sm">
              Need immediate assistance? Check out our{" "}
              
             <a   href="#"
                className="text-red-400 hover:text-red-300 transition-colors font-bold"
              >
                FAQ section
              </a>{" "}
              or{" "}
              
             <a   href="#"
                className="text-red-400 hover:text-red-300 transition-colors font-bold"
              >
                live chat
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;