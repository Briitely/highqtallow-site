import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_ITEMS } from '../data/faq';

function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[10px] overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 bg-deep-plum px-6 py-5 text-left transition-colors duration-200 hover:bg-deep-plum-light"
      >
        <span className="font-display text-base md:text-lg italic font-semibold text-white">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-white/80 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white px-6 py-5 border-x border-b border-gray-100">
            <p className="font-body text-sm md:text-base text-midnight/75 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>(0.05);

  return (
    <section className="bg-warm py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={titleRef} className="scroll-reveal text-center mb-12">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-olive-earth/60">
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div ref={listRef} className="scroll-reveal flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => (
            <FAQAccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
