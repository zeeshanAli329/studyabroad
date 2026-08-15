"use client";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      {...props}
    />
  );
}