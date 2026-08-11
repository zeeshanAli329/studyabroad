"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi2";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState(null);
  const [subscribeError, setSubscribeError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setSubscribeMessage(null);
    setSubscribeError(null);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(`${API_URL}/subscribers/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubscribeMessage(data.message || 'Thank you for subscribing to RouteX!');
        setEmail("");
      } else {
        setSubscribeError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeError('Failed to subscribe. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };

  const servicesLinks = [
    { title: "Student Visa", link: "/visa/student" },
    { title: "Work Visa", link: "/visa/work" },
    { title: "Tourist Visa", link: "/visa/tourist" },
    { title: "Scholarships", link: "/scholarships" },
  ];

  const usefulLinks = [
    { title: "About Us", link: "/about" },
    { title: "Scholarships", link: "/scholarships" },
    { title: "All Scholarships", link: "/scholarships" },
    { title: "Featured Scholarships", link: "/scholarships?featured=true" },
    { title: "Contact", link: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
    { icon: <FaPinterestP />, link: "https://pinterest.com" },
    { icon: <FaTiktok />, link: "https://tiktok.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--secondary,#0b3d2e)] text-white">
      {/* ================= TOP SUPPORT STRIP ================= */}

      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:px-8">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,#7bc043)] text-3xl text-white">
              <HiOutlineTicket />
            </div>
            <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
              Need Any Support For
              <br className="hidden sm:block" /> Tour And Visa?
            </h3>
          </div>

          <div className="flex items-center gap-5 sm:border-l sm:border-white/10 sm:pl-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary,#7bc043)] text-3xl text-white">
              <FiGlobe />
            </div>
            <h3 className="font-serif text-xl leading-snug font-semibold sm:text-2xl">
              Are You Ready For Get
              <br className="hidden sm:block" /> Started Travelling?
            </h3>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/footer1-bg-img.png")',
        }}
      >
        {/* location/world dotted-map decorative image */}
        {/* <Image
          src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/footer/footer1-bg-location-img.png"
          alt=""
          fill
          className="pointer-events-none object-cover opacity-60 mix-blend-screen"
          aria-hidden="true"
        /> */}

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* ===== BRAND COLUMN ===== */}

            <div>
              <Link href="/" className="mb-5 flex items-center gap-2">
                <Image
                  src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/logo.svg"
                  alt="RouteX"
                  width={140}
                  height={40}
                />
              </Link>

              <p className="mb-5 max-w-[260px] text-[15px] leading-relaxed text-white/70">
                Corporate business typically refers to large-scale mansola it
                enterprises or organizat
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[14px] transition hover:border-[var(--primary,#7bc043)] hover:bg-[var(--primary,#7bc043)]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ===== SERVICES COLUMN ===== */}

            <div>
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-[15px] text-white/80 transition hover:text-[var(--primary,#7bc043)]"
                    >
                      <FaChevronRight className="text-[10px] text-[var(--primary,#7bc043)]" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== USEFUL LINKS COLUMN ===== */}

            <div>
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Useful Link
              </h4>
              <ul className="flex flex-col gap-3">
                {usefulLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-[15px] text-white/80 transition hover:text-[var(--primary,#7bc043)]"
                    >
                      <FaChevronRight className="text-[10px] text-[var(--primary,#7bc043)]" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== NEWSLETTER COLUMN ===== */}

            <div>
              <h4 className="mb-5 font-serif text-lg font-semibold">
                Subscribe Our Newsletter
              </h4>

              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-[340px] items-center overflow-hidden rounded-full bg-white p-1.5"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full min-w-0 bg-transparent px-4 py-2 text-[14px] text-gray-800 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="shrink-0 rounded-full bg-[var(--primary,#7bc043)] px-5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-white transition hover:bg-[var(--primary-dark,#649c35)] disabled:opacity-50"
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {subscribeMessage && (
                <p className="mt-3 text-sm text-green-400">
                  {subscribeMessage}
                </p>
              )}

              {subscribeError && (
                <p className="mt-3 text-sm text-red-400">
                  {subscribeError}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-6 py-6 text-[14px] text-white/70 sm:flex-row lg:px-8">
            <p>Copyright © 2026 RRDevs. All Rights Reserved</p>

            <div className="flex items-center gap-6">
              <Link href="/terms" className="transition hover:text-white">
                Terms &amp; Condition
              </Link>
              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL TO TOP BUTTON ================= */}

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary,#7bc043)] shadow-lg transition-all duration-300 hover:bg-[var(--primary,#7bc043)] hover:text-white ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;