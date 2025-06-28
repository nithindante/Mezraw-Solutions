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
  return (
    <div className='p-10 max-w-[700px] mx-auto flex flex-col items-center justify-center gap-8'>
        <h1 className='text-center !text-[63px] !font-bold' style={{fontFamily:'Roboto'}}>Contact us</h1>
        <p className='text-[24px]'>Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.</p>
        

<form className="w-full  flex items-center flex-col gap-4" onSubmit={handleSubmit}>
      <div className="w-full">
    <label  className="block mb-2 text-sm font-medium text-black dark:text-black">Name*</label>
    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Your Name" required />
  </div>
  <div className="w-full">
    <label  className="block mb-2 text-sm font-medium text-black dark:text-black">Email*</label>
    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="Your Email" required />
  </div>
  <div className="w-full">
    <label  className="block mb-2 text-sm font-medium text-black dark:text-black">Message*</label>
   <textarea id="message" rows="4" value={message} onChange={e => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Enter your Message" required></textarea>
  </div>
  <button type="submit" className="        bg-black
        text-white
  uppercase 
  py-3 px-10 
  !rounded-3xl
  transition-all 
  duration-300 
  hover:!bg-white 
  hover:!text-black
  focus:outline-none">Submit</button>
</form>

    </div>
  )
}

export default ContactForm