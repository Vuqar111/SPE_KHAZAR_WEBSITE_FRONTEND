import React, { useState } from "react";
const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const questions = [
    {
      question:
        "How can I become an SPE Khazar University Student Chapter officer?",
      answer:
        "For becoming an officer at SPE Khazar University Student Chapter you need to apply during recruitment. If you pass the interview stage you can become an officer. Only students of Khazar Univerity can become an officer at SPE Khazar University Studnet Chapter.",
    },
    {
      question:
        "Are events SPE Khazar University Student  Chapter eligible to only students of Khazar University?",
      answer:
        "No. Usually, students from all universities can participate in our events",
    },
    {
      question:
        "Are events SPE Khazar University Student  Chapter eligible to only students of Khazar University?",
      answer:
        "No. Usually, students from all universities can participate in our events",
    },
    {
      question: "Are events of the SPE Khazar University Student Chapter free?",
      answer: "Yes. All events that we are organizing are completely free.",
    },
  ];
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[20px] text-center font-bold text-[24px] lg:text-[40px]">
          Frequently Asked Questions
        </div>
        <p className="pt-[5px] opacity-[0.7] text-center font-bold text-[14px]">
          Have Questions? We are here to help!
        </p>
        <div className="w-[90%] lg:w-[60%] mx-[auto]  mt-[30px]">
          {questions.map((item, i) => {
            return (
              <div className="m-[20px] border-1 border-solid border-[grey]">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span className="bg-[#0067B1] rounded-[25px] py-[10px] px-[15px] text-[white]">{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "pt-[15px] font-bold opacity-[0.6]" : "hidden"}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FAQ;
