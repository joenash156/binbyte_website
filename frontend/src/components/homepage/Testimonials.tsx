import { useRef } from "react";
import SedemImg from "../../assets/hero-images/homepage-hero-img1.jpg";
import LutherImg from "../../assets/hero-images/luther.jpg";
import JoshuaImg from "../../assets/hero-images/homepage-hero-img3.jpg";
import SeyramImg from "../../assets/hero-images/homepage-hero-img4.jpg";
import EnochImg from "../../assets/hero-images/enoch-img.jpg";
import LimbworksImg from "../../assets/other-images/3d_limbworks-img.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | null;
  testimonial: string;
  rating: number;
}

function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Joshua Adjei",
      role: "Backend Developer",
      image: JoshuaImg,
      testimonial: "The journey was quite challenging at first, but thanks to the excellent guidance and teaching from BinByte, I was able to gain a strong understanding of relevant concepts. This experience has greatly improved my confidence, and I am willing to continue learning and expanding my skills in this field.",
      rating: 5
    },
    {
      id: 2,
      name: "Sedem Kporvi",
      role: "Backend Developer & Mobile Developer",
      image: SedemImg,
      testimonial: "When I joined BinByte, I doubted myself as a beginner, but now I confidently build backend APIs with core concepts. This journey has grown both my skills and belief in what I can achieve. I am now eager to dive into advanced concepts and apply them on real projects.",
      rating: 5
    },
    {
      id: 3,
      name: "Seyram Letsu",
      role: "Backend & Mobile Developer",
      image: SeyramImg,
      testimonial: "Joining Binbyte was a decision I didn't have to think twice to make. I needed to build my coding skills, and this opportunity proved to be worthwhile. Meeting to discuss progress did not only keep me motivated, but it also taught me me consistency. I am so glad to be part of this wonderful community.",
      rating: 5
    },
    {
      id: 4,
      name: "John Maxwell Luther",
      role: "Backend Developer",
      image: LutherImg,
      testimonial: "Opportunities are the most interesting formalities I always want to grab and this was nothing short of awe-inspiring. Cracking codes and learning from mistakes contributed to creating a thriving environment for where I continue to support, collaborate and work with my team going forward. Thanks to BinByte Technologies.",
      rating: 5
    },
    {
      id: 5,
      name: "3D Limbworks",
      role: "3D Prosthetics Designers",
      image: LimbworksImg || null,
      testimonial: "BinByte Technologies delivered exactly what we needed for our startup. Their team built a robust, scalable platform that has been instrumental in our growth. Professional, reliable, and innovative!",
      rating: 5
    },
    {
      id: 6,
      name: "Enoch Tetteh Nartey",
      role: "Backend Developer",
      image: EnochImg || null,
      testimonial: "When I joined BinByte, I was eager to turn my passion for coding into something tangible. What I found was more than just projects. It was mentorship, collaboration, and a culture of excellence. Each challenge became a lesson, and each success, a reminder of how far I have come.",
      rating: 5
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Learners & Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from those who have experienced the BinByte difference firsthand.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left text-xl group-hover:scale-110 transition-transform duration-200"></i>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-600 text-gray-800 hover:text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right text-xl group-hover:scale-110 transition-transform duration-200"></i>
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 py-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 md:w-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 snap-start"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <i className="fas fa-quote-left text-4xl text-blue-600 opacity-50"></i>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 min-h-[120px]">
                  "{testimonial.testimonial}"
                </p>

                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <i key={index} className="fas fa-star text-yellow-400 text-lg"></i>
                  ))}
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-4 border-t border-gray-200 pt-6">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-4 border-white shadow-md">
                      <i className="fas fa-user text-white text-2xl"></i>
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to start your own success story?
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-rocket"></i>
            <span>Get Started Today</span>
          </a>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
