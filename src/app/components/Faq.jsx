"use client";
import * as Accordion from "@radix-ui/react-accordion";
import PlusIcon from "../../../public/assets/Plus.svg";
import Image from "next/image";
import Minus from "../../../public/assets/Minus.svg";
import { useState } from "react";
const items = [
  {
    question: "What makes your services unique?",
  },
  {
    question: "How do you ensure quality?",
    answer:
      "Quality assurance is at the core of our operations. We employ rigorous testing and feedback loops to refine our services, ensuring they consistently meet our high standards.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We proudly serve a diverse range of industries including finance, technology, healthcare, and education, providing customized solutions for each sector's unique challenges.",
  },
  {
    question: "Can you provide client testimonials?",
    answer:
      "Absolutely! We have numerous testimonials from satisfied clients who can attest to the effectiveness and quality of our services. We are happy to share their experiences.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is competitive and transparent, with options tailored to fit various budgets without compromising on the quality of service delivered.",
  },
  {
    question: "How can we get in touch?",
    answer:
      "Getting in touch is easy! You can reach us through our website's contact form, email, or by calling our dedicated support line.",
  },
];
const Faq = () => {
  const [value, setValue] = useState("item-1");

  const handleTrigger = (item) => {
    const itemVal = `item-${item}`;
    if (itemVal === value) {
      setValue("");
    } else {
      setValue(itemVal);
    }
  };

  return (
    <div className="bg-[#FCFCFC] text-center text-black py-14 sm:pt-32" id="faq">
      <div className="flex flex-col container lg:gap-x-6">
        <div className="">
          <h1 className="text-medium text-[30px] lg:text-[42px] mb-4">
            Trusted by Industry Leaders
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#36485C] mb-6">
            Your Questions Answered
          </p>
        </div>
        <div className="">
          <Accordion.Root
            collapsible
            defaultValue="item-1"
            type="single"
            className="flex flex-col gap-y-4"
          >
            {items?.map((item, index) => (
              <div key={index} className="border border-1 p-4 rounded-lg">
                <Accordion.Item value={`item-${index + 1}`}>
                  <Accordion.Header onClick={() => handleTrigger(index + 1)}>
                    <Accordion.Trigger className="flex justify-between w-full items-center font-medium text-[16px] lg:text-[18px]">
                      <p className="text-left">{item.question}</p>
                      <span className="font-medium">
                        <Image
                          className="h-6 w-6"
                          src={value === `item-${index + 1}` ? Minus : PlusIcon}
                          alt="puls icon"
                        />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <p className="mt-2 text-[16px] lg:text-[18px] text-[#36485C]">
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
};

export default Faq;
