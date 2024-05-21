'use client';

import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import { toast } from "sonner";
import axios from "axios";

type Contact = {
  email: string;
  subject: string;
  message: string;
}

const EmailSection = () => {
  const [isPending, startTransition] = useTransition();
  const [contactData, setContactData] = useState<Contact>({ email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    startTransition(() => {
      axios.post('/api/send', contactData)
        .then(() => toast.success("Thank you for reaching out! Your message has been sent successfully.'"))
        .catch(() => toast.error("Oops! Something went wrong, and we couldn't send your message. Please try again later."));
    })

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
    setContactData(prev => ({ ...prev, [type]: e.target.value }));
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&#39;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&#39;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&#39;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/AbhiiVops">
            <Image src='/github-icon.svg' height={32} width={32} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/abhishek-bhattacharjee-0747331a3/">
            <Image src='/linkedin-icon.svg' height={32} width={32} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              value={contactData.email}
              onChange={e => handleChange(e, "email")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={contactData.subject}
              onChange={e => handleChange(e, "subject")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let&#39;s talk about..."
              value={contactData.message}
              onChange={e => handleChange(e, "message")}
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;