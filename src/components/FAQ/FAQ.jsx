'use client'

// components/FAQ.js
import { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { faqData } from '../constants';

const FAQ = () => {
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto container pb-20 h-full lg:w-4/5 px-2 md:px-10">
      <h2 className="font-bold md:text-3xl text-xl mb-8">Frequently Asked Questions</h2>
      <div >
        {faqData.map((item, index) => (
          <div key={index} className="bg-white py-2 rounded-lg ">
          <div className="flex items-center gap-5 cursor-pointer" onClick={() => toggleAnswer(index)}>
          {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            <h3 className="md:text-xl text-lg font-semibold mb-2 hover:underline">
              {item.question}
            </h3>
           
          </div>
          {openIndex === index && (
            <p className="text-gray-700">{item.answer}</p>
          )}
          <hr />
        </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
