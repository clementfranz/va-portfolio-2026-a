"use client";

import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function CoverImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: CoverImageProps) {
  return (
    <div className={`cover-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        draggable={false}
        className="object-cover"
      />
      <div className="cover-veil" aria-hidden="true" />
    </div>
  );
}
