import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
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
            Get in touch with us.
          </h2>
        </div>
        <div className="mt-[20px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-[15px]">
              <div className="flex flex-col">
                <label>Your name</label>
                <input
                  className="border-[0.5] border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]"
                  type="text"
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
                />
              </div>
            </div>

            <div className="flex flex-col mt-[15px]">
              <label>What are you interested</label>
              <input
                className="border-[0.5] border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]"
                type="text"
                placeholder="What are you interested?"
                name="user_topic"
              />
            </div>
            <div className="flex flex-col mt-[15px] w-[100%]">
              <label>Message</label>
              <textarea placeholder="Your message" className="w-[100%] border-1 border-solid border-[#0067B1] mt-[5px] py-[10px] px-[10px]" name="message" />
            </div>

            <div className="mt-[15px]">
              <button className="w-[300px] bg-[#000] text-[white]" type="submit" value="Send">Just Send</button>
            </div>
          </form>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};
