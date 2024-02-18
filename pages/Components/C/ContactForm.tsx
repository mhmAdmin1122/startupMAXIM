import React from "react";

const ContactForm = () => {
  return (
    <form className="ContactUs-Form px-[40px] py-12 grid gap-4 justify-items-center justify-center w-full">
      <div className="flex items-center justify-center gap-10 flex-wrap">
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Phone No." />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea cols={22} rows={7} placeholder="Message"></textarea>
      </div>
      <button type="submit" className="bg-[#ff6e4e] px-[12px] py-[8px] rounded-md w-[200px] text-[20px] font-medium text-[#fff]">Contact Us</button>
    </form>
  );
};

export default ContactForm;
