import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

import Gallery1 from "@/assets/gallery/gallery_2.jpeg";
import Gallery2 from "@/assets/gallery/gallery_1.jpeg";


const galleryItems = [
  {
    id: 1,
    image: Gallery1,
    href: "src/assets/gallery_2.jpeg",
    alt: "Awards",
  },
  {
    id: 2,
    image: Gallery2,
    href: "src/assets/gallery_1.jpeg",
    alt: "Announcement",
  },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Milestones</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Journey in
            <br />
            <span className="gradient-text">Pictures</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10 w-full justify-center md:flex-row">
          {galleryItems.map((item, index) => (
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex group justify-between relative h-72 w-full lg:h-80 rounded-2xl overflow-hidden glass-card p-0 cursor-pointer"
              >
                <div className="flex w-full h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/5 text-secondary/20 -z-10">
                    <ImageIcon className="w-16 h-16" />
                  </div>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-1 ">

                  <div>
                    {/* <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3> */}
                    {/* <p className="text-sm text-gray-300">{item.description}</p> */}
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary/80">
                      <ImageIcon className="w-4 h-4" />
                      Open in new tab
                    </span>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};