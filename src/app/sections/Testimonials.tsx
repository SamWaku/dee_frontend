"use client";
import React from "react";
import Image from "next/image";

function Testimonials() {
  // First row of testimonials
  const testimonials1 = [
    {
      id: 1,
      name: "Emma Johnson",
      role: "Loyal Customer",
      image: "/api/placeholder/80/80",
      quote:
        "I've been shopping here for years and the quality never disappoints. Their service is exceptional!",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "First-time Buyer",
      image: "/api/placeholder/80/80",
      quote:
        "Wow! I wish I had discovered this shop sooner. The products exceeded my expectations.",
      rotation: "rotate-1",
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Regular Client",
      image: "/api/placeholder/80/80",
      quote:
        "Their attention to detail is remarkable. Each product feels uniquely crafted with care.",
      rotation: "-rotate-1",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Monthly Subscriber",
      image: "/api/placeholder/80/80",
      quote:
        "The subscription service is a game-changer. I love getting my box of goodies every month!",
      rotation: "rotate-2",
    },
  ];

  // Second row of testimonials (different people)
  const testimonials2 = [
    {
      id: 5,
      name: "Olivia Martinez",
      role: "3-Year Member",
      image: "/api/placeholder/80/80",
      quote:
        "The customer service here is unmatched. They always go above and beyond to help me.",
      rotation: "rotate-1",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Gift Shopper",
      image: "/api/placeholder/80/80",
      quote:
        "I always find the perfect gifts here. Everyone loves what I pick out from this shop!",
      rotation: "-rotate-2",
    },
    {
      id: 7,
      name: "Sophia Lee",
      role: "Weekly Visitor",
      image: "/api/placeholder/80/80",
      quote:
        "I look forward to seeing what's new every week. There's always something exciting to discover.",
      rotation: "rotate-2",
    },
    {
      id: 8,
      name: "Daniel Brown",
      role: "Satisfied Customer",
      image: "/api/placeholder/80/80",
      quote:
        "The quality-to-price ratio is excellent. I always feel like I'm getting great value here.",
      rotation: "-rotate-1",
    },
  ];

  return (
    <div className="py-10 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -skew-y-6 bg-[#f8f4e8] h -translate-y-1/4 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-center text-3xl font-bold text-[#524d41] mb-3">
            Happy Clients
          </h2>
          <p className="text-center text-lg font-light text-[#524d41] max-w-xl mx-auto">
            Here's what our dearest clients have to say about their experience
            with us
          </p>
        </div>

        {/* Moving testimonials - first row */}
        <div className="relative overflow-hidden">
          <div className="animate-marquee-slower whitespace-nowrap flex">
            {testimonials1.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`inline-flex flex-none mx-4 bg-white p-6 rounded-lg shadow-lg ${testimonial.rotation} hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 w-80`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#524d41]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#524d41] italic text-sm">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate first set to create seamless loop */}
            {testimonials1.map((testimonial) => (
              <div
                key={`dup-${testimonial.id}`}
                className={`inline-flex flex-none mx-4 bg-white p-6 rounded-lg shadow-lg ${testimonial.rotation} hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 w-80`}
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#524d41]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#524d41] italic text-sm leading-6">
                    {testimonial.quote.split(" ").map((word, index) => (
                      <>
                        {word} {(index + 1) % 5 === 0 && <br />}{" "}
                        {/* Insert line break every 5 words */}
                      </>
                    ))}
                  </p>

                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Tailwind custom animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-slower {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse-slower {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Testimonials;

// Second row - moving in opposite direction
//         <div className="relative overflow-hidden mt-8">
//           <div className="animate-marquee-reverse-slower whitespace-nowrap flex">
//             {testimonials2.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className={`inline-flex flex-none mx-4 bg-white p-6 rounded-lg shadow-lg ${testimonial.rotation} hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 w-80`}
//               >
//                 <div className="flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <div className="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
//                       <Image
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         width={80}
//                         height={80}
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg text-[#524d41]">
//                         {testimonial.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-[#524d41] italic text-sm">
//                     {testimonial.quote}
//                   </p>
//                   <div className="mt-4 flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-5 h-5 text-yellow-400 fill-current"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Duplicate second set to create seamless loop */}
//             {testimonials2.map((testimonial) => (
//               <div
//                 key={`dup-${testimonial.id}`}
//                 className={`inline-flex flex-none mx-4 bg-white p-6 rounded-lg shadow-lg ${testimonial.rotation} hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 w-80`}
//               >
//                 <div className="flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <div className="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gray-200">
//                       <Image
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         width={80}
//                         height={80}
//                         className="object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg text-[#524d41]">
//                         {testimonial.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </div>
//                   <p className="text-[#524d41] italic text-sm">
//                     {testimonial.quote}
//                   </p>
//                   <div className="mt-4 flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-5 h-5 text-yellow-400 fill-current"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
