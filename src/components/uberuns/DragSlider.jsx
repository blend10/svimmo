// DragSlider.jsx
"use client";
import React, { useRef, useState, useEffect } from "react";

const images = [
  "/images/slider1.png",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider1.png",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider1.png",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
];

export default function DragSlider() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef(null);

  // Momentum glide after release
  const startMomentum = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const glide = () => {
      if (Math.abs(velocity.current) < 0.5) return;
      sliderRef.current.scrollLeft += velocity.current;
      velocity.current *= 0.92; // friction — lower = stops faster
      rafId.current = requestAnimationFrame(glide);
    };

    rafId.current = requestAnimationFrame(glide);
  };

  const stopMomentum = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
  };

  // Mouse Events
  const onMouseDown = (e) => {
    stopMomentum();
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;

    // Track velocity
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = ((lastX.current - e.pageX) / dt) * 16;
    }
    lastX.current = e.pageX;
    lastTime.current = now;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    startMomentum();
  };

  const onMouseLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    startMomentum();
  };

  // Touch Events
  const onTouchStart = (e) => {
    stopMomentum();
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    lastX.current = e.touches[0].pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
  };

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;

    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = ((lastX.current - e.touches[0].pageX) / dt) * 16;
    }
    lastX.current = e.touches[0].pageX;
    lastTime.current = now;
  };

  const onTouchEnd = () => startMomentum();

  // Cleanup on unmount
  useEffect(() => () => stopMomentum(), []);

  return (
    <section className="w-full bg-white py-10 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 px-6 md:px-16 overflow-x-scroll select-none"
        style={{
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-82 h-82 md:w-112 md:h-112 overflow-hidden rounded-sm"
            draggable="false"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none"
              draggable="false"
            />
          </div>
        ))}
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
