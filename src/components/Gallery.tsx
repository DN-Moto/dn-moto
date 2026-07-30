"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/images/gallery/ttr-full-right.jpeg",
    title: "2015 Yamaha TTR125LE",
    subtitle: "Right Side Profile",
  },
  {
    src: "/images/gallery/ttr-left.jpeg",
    title: "Trail Ready",
    subtitle: "Left Side View",
  },
  {
    src: "/images/gallery/ttr-front.jpeg",
    title: "Front End",
    subtitle: "Clean & Ready",
  },
  {
    src: "/images/gallery/ttr-back.jpeg",
    title: "FMF Exhaust",
    subtitle: "Rear View",
  },
  {
    src: "/images/gallery/ttr-right.jpeg",
    title: "Right Side",
    subtitle: "Ride Ready",
  },
  {
    src: "/images/gallery/ttr-right-zoom.jpeg",
    title: "Detail",
    subtitle: "Closer Look",
  },
];

function GalleryImage({
  image,
  height,
  index,
  onClick,
}: {
  image: (typeof images)[0];
  height: string;
  index: number;
  onClick: (index: number) => void;
}) {
  return (
    <motion.div
  onClick={() => onClick(index)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl ${height}`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition group-hover:opacity-100" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white">
          {image.title}
        </h3>

        <p className="text-blue-400">
          {image.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      setSelectedImage(null);
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
  return (
    <section
      id="Gallery"
      className="bg-[#0d0f11] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            GALLERY
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Built. Maintained. Ready to Ride.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
            Every motorcycle tells a story. Here&apos;s the bike that started DN Moto.
          </p>

        </div>

        <div className="space-y-6">

          <GalleryImage
  image={images[0]}
  height="h-[520px]"
  index={0}
  onClick={setSelectedImage}
/>

          <div className="grid gap-6 md:grid-cols-2">
            <GalleryImage
  image={images[1]}
  height="h-[520px]"
  index={1}
  onClick={setSelectedImage}
/>
            <GalleryImage
  image={images[2]}
  height="h-[520px]"
  index={2}
  onClick={setSelectedImage}
/>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <GalleryImage
  image={images[3]}
  height="h-[520px]"
  index={3}
  onClick={setSelectedImage}
/>
            <GalleryImage
  image={images[4]}
  height="h-[520px]"
  index={4}
  onClick={setSelectedImage}
/>
          </div>

          <GalleryImage
  image={images[5]}
  height="h-[520px]"
  index={5}
  onClick={setSelectedImage}
/>

        </div>

<AnimatePresence>

{selectedImage !== null && (

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
  onClick={() => setSelectedImage(null)}
>

<motion.div
  initial={{ scale: .92 }}
  animate={{ scale: 1 }}
  exit={{ scale: .92 }}
  transition={{ duration: .25 }}
  onClick={(e)=>e.stopPropagation()}
  className="relative h-[80vh] w-[90vw] max-w-6xl"
>

<Image
  src={images[selectedImage].src}
  alt={images[selectedImage].title}
  fill
  className="object-contain rounded-xl"
/>

<button
  onClick={() =>
    setSelectedImage(
      (selectedImage - 1 + images.length) % images.length
    )
  }
  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl text-white backdrop-blur-lg transition hover:bg-white/20"
>
←
</button>

<button
  onClick={() =>
    setSelectedImage(
      (selectedImage + 1) % images.length
    )
  }
  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-5 py-3 text-3xl text-white backdrop-blur-lg transition hover:bg-white/20"
>
→
</button>

<button
  onClick={() => setSelectedImage(null)}
  className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-2xl text-white backdrop-blur-lg hover:bg-white/20"
>
✕
</button>

</motion.div>

</motion.div>

)}

</AnimatePresence>

      </div>
    </section>
  );
}