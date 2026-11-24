"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/ui/Icons";

/** Galería con miniaturas, flechas y navegación con teclado. */
export default function Gallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const go = (i) => setIndex((i + total) % total);

  return (
    <div
      className="gallery"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      aria-label={`Galería de fotos de ${title}`}
    >
      <div className="gallery__main">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${title} - foto ${index + 1} de ${total}`}
          fill
          sizes="(max-width: 1000px) 100vw, 800px"
          priority={index === 0}
        />
        {total > 1 && (
          <>
            <button type="button" className="gallery__nav gallery__nav--prev" onClick={() => go(index - 1)} aria-label="Foto anterior">
              <Icon name="chevL" />
            </button>
            <button type="button" className="gallery__nav gallery__nav--next" onClick={() => go(index + 1)} aria-label="Foto siguiente">
              <Icon name="chevR" />
            </button>
            <span className="gallery__count">{index + 1} / {total}</span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="gallery__thumbs">
          {images.map((src, i) => (
            <button
              type="button"
              key={src + i}
              className="gallery__thumb"
              aria-current={i === index}
              aria-label={`Ver foto ${i + 1}`}
              onClick={() => setIndex(i)}
            >
              <Image src={src} alt="" width={92} height={69} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
