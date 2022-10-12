import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const formRef = useRef();
  const [send, setSend] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zfip0ot",
        "template_e0bd491",
        formRef.current,
        "LUduTUFjm5GUlWz5E"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <div className="w-[90%] lg:w-[80%] mx-[auto] mt-[30px]">
        <div>
          <h2 className="text-[36px]  font-bold">
            Love to hear from you! <br />
            Get in touch with us. 👇
          </h2>
        </div>
        <div className="mt-[20px]">
        {send && (<p className="text-[20px] lg:text-[24px] text-[#0067B1] font-bold">Got it! Thank you for your message!</p>)}
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-[15px]">
              <div className="flex flex-col">
                <label>Your name</label>
                <input
                  className="border-[0.5] border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]"
                  type="text"
                  required
                  placeholder="Your name"
                  name="user_name" 
                />
              </div>
              <div className="flex flex-col">
                <label>Your email</label>
                <input
                  className="border-[0.5] border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]"
                  type="email"
                  placeholder="Your email"
                  name="user_email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-[15px]">
              <label>What are you interested</label>
              <input
                className="border-[0.5] border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]"
                type="text"
                placeholder="What are you interested?"
                name="user_subject"
                required
              />
            </div>
            <div className="flex flex-col mt-[15px] w-[100%]">
              <label>Message</label>
              <textarea placeholder="Your message" className="w-[100%] border-1 border-solid border-[#0067B1] outline-solid outline-[#0067B1]  mt-[5px] py-[10px] px-[10px]" name="user_message" required/>
            </div>

            <div className="mt-[15px]">
              <button className="w-[300px] py-[15px] bg-[#000] text-[white]" type="submit" >Just Send 👉</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
