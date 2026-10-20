import React, { useState } from 'react'
import '../styles/ContactForm.css'
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Message sent! Preview: ' + data.previewUrl);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Error: ' + data.error);
    }
  };
  const field = "block w-full min-h-13 rounded-lg bg-paper px-4 py-3 text-base text-ink placeholder-neutral-500 transition-shadow duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-ink";
  const notch = "absolute size-7 rounded-full bg-paper";
  return (
    <section className='mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20'>
      {/* Coupon: notches and a dotted perforation split the card into heading and form */}
      <div className='relative overflow-hidden rounded-2xl bg-brand text-white md:grid md:grid-cols-[46fr_54fr]'>
        <span aria-hidden='true' className={`${notch} -top-3.5 left-[46%] hidden -translate-x-1/2 md:block`} />
        <span aria-hidden='true' className={`${notch} -bottom-3.5 left-[46%] hidden -translate-x-1/2 md:block`} />

        <div className='flex flex-col justify-between gap-8 p-6 sm:p-10 md:p-12'>
          <h1 className='text-section font-bold'>Contact us</h1>
          <p className='text-base leading-relaxed sm:text-lg'>Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.</p>
        </div>

        <form
          className='relative flex flex-col gap-3 border-t-[5px] border-dotted border-paper p-6 sm:p-10 md:border-l-[5px] md:border-t-0 md:p-12'
          onSubmit={handleSubmit}
        >
          <span aria-hidden='true' className={`${notch} -left-3.5 -top-[17px] md:hidden`} />
          <span aria-hidden='true' className={`${notch} -right-3.5 -top-[17px] md:hidden`} />
          <label htmlFor="name" className="sr-only">Name</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className={field} placeholder="Your Name*" required />
          <label htmlFor="email" className="sr-only">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className={field} placeholder="Your Email*" required />
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" rows="4" value={message} onChange={e => setMessage(e.target.value)} className={field} placeholder="Enter your Message*" required></textarea>
          <button
            type="submit"
            className="mt-2 min-h-14 w-full cursor-pointer rounded-lg bg-ink text-sm font-semibold uppercase text-white transition-[transform,background-color] duration-150 ease-out-strong active:scale-[0.98] [@media(hover:hover)]:hover:bg-black"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
