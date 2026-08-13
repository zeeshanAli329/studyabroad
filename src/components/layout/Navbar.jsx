"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const [visaOpen, setVisaOpen] = useState(false);
  const [scholarshipOpen, setScholarshipOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const [mobileVisa, setMobileVisa] = useState(false);
  const [mobileScholarship, setMobileScholarship] = useState(false);
  const [mobileBlog, setMobileBlog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visaLinks = [
    { title: "Student Visa", link: "/visa/student" },
    { title: "Work Visa", link: "/visa/work" },
    { title: "Tourist Visa", link: "/visa/tourist" },
    { title: "Business Visa", link: "/visa/business" },
    { title: "Family Visa", link: "/visa/family" },
  ];

  const scholarshipLinks = [
    { title: "All Scholarships", link: "/scholarships" },
    { title: "Latest Scholarships", link: "/scholarships" },
    { title: "Featured Scholarships", link: "/scholarships?featured=true" },
    { title: "Scholarship Guide", link: "/scholarships" },
  ];

  const blogLinks = [
    { title: "All Blogs", link: "/blog" },
    { title: "Latest News", link: "/blog" },
    { title: "Travel Tips", link: "/blog" },
    { title: "Study Abroad", link: "/blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          sticky ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[90px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          <Link href="/">
            <Image
              // src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/logo/logo.svg"
              src="/logo2.png"
              alt="Logo"
              width={200}
              height={200}
              priority
              loading="eager"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden items-center gap-9 lg:flex">
            <Link
              href="/"
              className="text-[17px] font-medium transition hover:text-[var(--primary)]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[17px] font-medium transition hover:text-[var(--primary)]"
            >
              About Us
            </Link>

            {/* ===== VISA DROPDOWN START ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setVisaOpen(true)}
              onMouseLeave={() => setVisaOpen(false)}
            >
              <button className="flex items-center gap-2 text-[17px] font-medium transition hover:text-[var(--primary)]">
                Visa
                <FaChevronDown
                  className={`text-[10px] transition ${
                    visaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {visaOpen && (
                <div className="absolute top-full left-0 w-[260px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
                  {visaLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      className="block border-b border-gray-100 px-6 py-4 text-[15px] transition hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* ===== VISA DROPDOWN END ===== */}

            {/* ===== SCHOLARSHIP DROPDOWN START ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setScholarshipOpen(true)}
              onMouseLeave={() => setScholarshipOpen(false)}
            >
              <button className="flex items-center gap-2 text-[17px] font-medium transition hover:text-[var(--primary)]">
                Scholarships
                <FaChevronDown
                  className={`text-[10px] transition ${
                    scholarshipOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {scholarshipOpen && (
                <div className="absolute top-full left-0 w-[260px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
                  {scholarshipLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      className="block border-b border-gray-100 px-6 py-4 text-[15px] transition hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* ===== SCHOLARSHIP DROPDOWN END ===== */}

            {/* ===== BLOG DROPDOWN START ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <button className="flex items-center gap-2 text-[17px] font-medium transition hover:text-[var(--primary)]">
                Blog
                <FaChevronDown
                  className={`text-[10px] transition ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {blogOpen && (
                <div className="absolute top-full left-0 w-[240px] overflow-hidden rounded-xl bg-white shadow-xl pt-2">
                  {blogLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      className="block border-b border-gray-100 px-6 py-4 text-[15px] transition hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* ===== BLOG DROPDOWN END ===== */}

            <Link
              href="/contact"
              className="text-[17px] font-medium transition hover:text-[var(--primary)]"
            >
              Contact
            </Link>
          </nav>

          {/* ================= APPOINTMENT BUTTON ================= */}
          <div className="hidden lg:block">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--primary)] px-7 py-3.5 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-dark)]"
            >
              Get Appointment
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-4xl text-[var(--secondary)] lg:hidden"
          >
            <HiBars3 />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-[100] h-screen w-[330px] bg-white transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <Image
            src="https://wp.rrdevs.net/routex/wp-content/themes/routex/assets/imgs/logo/logo.svg"
            alt="Logo"
            width={140}
            height={45}
          />

          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 py-5 text-[16px] font-medium transition hover:bg-[var(--background-light)]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 py-5 text-[16px] font-medium transition hover:bg-[var(--background-light)]"
          >
            About Us
          </Link>

          <button
            onClick={() => setMobileVisa(!mobileVisa)}
            className="flex items-center justify-between border-b px-6 py-5 text-[16px] font-medium"
          >
            Visa
            <FaChevronDown
              className={`transition duration-300 ${
                mobileVisa ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileVisa && (
            <div className="bg-[var(--background-light)]">
              {visaLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-10 py-4 transition hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileScholarship(!mobileScholarship)}
            className="flex items-center justify-between border-b px-6 py-5 text-[16px] font-medium"
          >
            Scholarships
            <FaChevronDown
              className={`transition duration-300 ${
                mobileScholarship ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileScholarship && (
            <div className="bg-[var(--background-light)]">
              {scholarshipLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-10 py-4 transition hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileBlog(!mobileBlog)}
            className="flex items-center justify-between border-b px-6 py-5 text-[16px] font-medium"
          >
            Blog
            <FaChevronDown
              className={`transition duration-300 ${
                mobileBlog ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileBlog && (
            <div className="bg-[var(--background-light)]">
              {blogLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-10 py-4 transition hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileScholarship(!mobileScholarship)}
            className="flex items-center justify-between border-b px-6 py-5 text-[16px] font-medium"
          >
            Scholarships
            <FaChevronDown
              className={`transition duration-300 ${
                mobileScholarship ? "rotate-180" : ""
              }`}
            />
          </button>

          {mobileScholarship && (
            <div className="bg-[var(--background-light)]">
              {scholarshipLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-10 py-4 transition hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 py-5 text-[16px] font-medium transition hover:bg-[var(--background-light)]"
          >
            Contact
          </Link>

          <div className="p-6">
            <Link
              href="/appointment"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-[var(--primary)] py-4 text-center text-white font-semibold transition-all duration-300 hover:bg-[var(--primary-dark)]"
            >
              Get Appointment
            </Link>
          </div>
        </div>
      </aside>

      <div className="h-[90px]"></div>
    </>
  );
};

export default NavBar;