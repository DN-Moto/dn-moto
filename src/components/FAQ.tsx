export default function FAQ() {
  const faqs = [
    {
      question: "What motorcycles do you work on?",
      answer:
        "DN Moto specializes in dirt bikes and off-road motorcycles under 250cc, including Yamaha, Honda, Kawasaki, Suzuki, KTM, and similar models.",
    },
    {
      question: "Do I need an appointment?",
      answer:
        "Yes. Services are by appointment so each motorcycle receives the time and attention it deserves. Use the contact form or email to schedule a visit.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Basic inspections and estimates are provided before any work begins. If additional repairs are discovered, you'll always be contacted before they're performed.",
    },
    {
      question: "Do you install customer-supplied parts?",
      answer:
        "Yes, provided the parts are appropriate for the motorcycle and are in new or serviceable condition.",
    },
    {
  question: "Do you sell parts or batteries?",
  answer:
    "DN Moto is a repair and maintenance shop. Most replacement parts can be ordered for your repair, but we generally do not stock batteries or retail inventory for walk-in purchase."
    },
    {
      question: "What services do you offer?",
      answer:
        "Oil changes, carburetor cleaning and tuning, diagnostics, brake service, chain and sprocket maintenance, general maintenance, and other repairs for small dirt bikes.",
    },
    {
      question: "How long does service usually take?",
      answer:
        "Most maintenance can be completed within a few days depending on parts availability and current workload. Larger repairs may require additional time.",
    },
    {
      question: "Can you order replacement parts?",
      answer:
        "Yes. If needed, replacement parts can be sourced and ordered with customer approval before installation.",
    },
    {
      question: "Do you guarantee your work?",
      answer:
        "DN Moto stands behind the quality of its workmanship. If a problem is directly related to an authorized repair performed by DN Moto, it will be addressed promptly.",
    },
  ];

  return (
    <section id="faq" className="bg-[#0b0d0f] py-28">
      <div className="mx-auto max-w-5xl px-8">
        <div className="text-center mb-16">
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Everything you should know before bringing your bike in.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-bold text-white">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}