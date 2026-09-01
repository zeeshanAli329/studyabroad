"use client";

import { useState, useEffect, lazy } from "react";
import Link from "next/link";
// import Image from "next/image";

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

  const [freeEducationOpen, setFreeEducationOpen] = useState(false);
  const [mobileFreeEducation, setMobileFreeEducation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visaLinks = [
    { title: "All Visa", link: "/visa" },
    { title: "Student Visa", link: "/visa/student" },
    { title: "Work Visa", link: "/visa/work" },
    { title: "Tourist Visa", link: "/visa/tourist" },
    { title: "Business Visa", link: "/visa/business" },
    { title: "Family Visa", link: "/visa/family" },
  ];

  const scholarshipLinks = [
    { title: "All Scholarships", link: "/scholarships" },
    { title: "Latest Scholarships", link: "/scholarships" },
    {
      title: "Featured Scholarships",
      link: "/scholarships?featured=true",
    },
    { title: "Scholarship Guide", link: "/scholarships" },
  ];

  const blogLinks = [
    { title: "All Blogs", link: "/blog" },
    { title: "Latest News", link: "/blog" },
    { title: "Travel Tips", link: "/blog" },
    { title: "Study Abroad", link: "/blog" },
  ];
  const FreeEducationLinks = [
    { title: "By Countries", link: "/countries" },
    { title: "By Universties", link: "/universties" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          sticky ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        {/* ================= DESKTOP HEIGHT ONLY ================= */}
        <div className="mx-auto flex h-[90px] lg:h-[100px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
          {/* ================= LOGO ================= */}
          {/* <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-[125px] h-[75px] sm:w-[145px] sm:h-[85px] lg:w-[155px]  lg:h-[72px] object-contain"
            />
          </Link> */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/ch-logo.png"
              alt="Logo"
              className="w-[125px] sm:w-[145px] lg:w-[200px] h-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden items-center gap-9 lg:flex">
            {/* HOME */}
            <Link
              href="/"
              className="text-[15px] font-serif font-bold uppercase transition text-[var(--primary-dark)] hover:text-[var(--primary)]"
            >
              Home
            </Link>

            {/* ABOUT US */}
            <Link
              href="/about"
              className="text-[15px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
            >
              About Us
            </Link>

            {/* ===== BLOG DROPDOWN ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <button className="flex text-[var(--primary-dark)] items-center gap-1.5 text-[15px] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
                Blog
                <FaChevronDown
                  className={`text-[8px] transition ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {blogOpen && (
                <div className="absolute top-full left-0 w-[220px] overflow-hidden rounded-xl bg-white shadow-xl pt-2">
                  {blogLinks.map((item) => (
                    <Link
                      href={item.link}
                      className="group relative block px-5 py-3 pl-12 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--primary)]"
                    >
                      {/* Hover Line */}
                      <span className="absolute left-5 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ===== VISA DROPDOWN ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setVisaOpen(true)}
              onMouseLeave={() => setVisaOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[15px] text-[var(--primary-dark)] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
                Visa
                <FaChevronDown
                  className={`text-[8px] transition ${
                    visaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {visaOpen && (
                <div className="absolute top-full left-0 text-[var(--primary-dark)] w-[240px] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
                  {visaLinks.map((item) => (
                    <Link
                      href={item.link}
                      className="group relative block px-5 py-3 pl-12 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--primary)]"
                    >
                      {/* Hover Line */}
                      <span className="absolute left-5 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ===== SCHOLARSHIP DROPDOWN ===== */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setScholarshipOpen(true)}
              onMouseLeave={() => setScholarshipOpen(false)}
            >
              <button className="flex text-[var(--primary-dark)] items-center gap-1.5 text-[15px] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
                Scholarships
                <FaChevronDown
                  className={`text-[8px] transition ${
                    scholarshipOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {scholarshipOpen && (
                <div className="absolute top-full left-0 w-[240px] text-[var(--primary-dark)] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
                  {scholarshipLinks.map((item) => (
                    <Link
                      href={item.link}
                      className="group relative block px-5 py-3 pl-12 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--primary)]"
                    >
                      {/* Hover Line */}
                      <span className="absolute left-5 top-1/2 h-[2px] w-0 -translate-y-1/2 bg-[var(--primary)] transition-all duration-300 group-hover:w-6" />

                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* FREE EDUCATION */}
            {/* <div
             className="relative flex items-center"
             onMouseEnter = {() => setFreeEducationOpen(true)}
             onMouseLeave={() => {setFreeEducationOpen(false)}}
             >
              <button className="flex text-[var(--primary-dark)] items-center gap-1.5 text-[15px] font-serif font-bold uppercase transition hover:text-[var(--primary)]">
                Free Education
                <FaChevronDown 
                className={`text-[8px] transition ${freeEducationOpen? "rotate-180" : " "
                }`}
                />
              </button>
              {freeEducationOpen && (
                <div className="absolute top-full left-0 w-[240px] text-[var(--primary-dark)] rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden pt-2">
                  {FreeEducationLinks.map((item) => (
                  <Link 
                  key={item.title}
                  href={item.link}
                  className="block border-b border-gray-100 px-5 py-3 text-[14px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:bg-[var(--background-light)] hover:text-[var(--primary)]"
                  >
                    {item.title}
                  </Link>
                  ))}
                </div>
              )}
            </div> */}

            <Link
              href="/free-education"
              className="text-[15px] font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
            >
              Free Education
            </Link>
          </nav>

          {/* ================= CONTACT BUTTON ================= */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-white text-[14px] font-serif font-bold uppercase transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-dark)]"
            >
              CONTACT US
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
          {/* <Image src="/logo2.png" alt="Logo" width={140} height={45} /> */}
          <img src="/logo2.svg" alt="Logo" width={140} height={45} />

          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <IoClose />
          </button>
        </div>

        <div className="flex flex-col">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 py-5 text-[var(--primary-dark)] text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="border-b px-6 text-[var(--primary-dark)] py-5 text-[16px] font-serif font-bold uppercase transition hover:bg-[var(--background-light)]"
          >
            About Us
          </Link>

          <button
            onClick={() => setMobileBlog(!mobileBlog)}
            className="flex items-center text-[var(--primary-dark)] justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
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
                  className="block px-10 py-4 font-serif font-bold uppercase transition text-[var(--primary-dark)] hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileVisa(!mobileVisa)}
            className="flex items-center text-[var(--primary-dark)] justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
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
                  className="block px-10 py-4 font-serif font-bold uppercase text-[var(--primary-dark)] transition hover:text-[var(--primary)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() => setMobileScholarship(!mobileScholarship)}
            className="flex text-[var(--primary-dark)] items-center justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
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
                  className="block px-10 py-4 font-serif font-bold uppercase text-[var(--primary-dark)] hover:text-[var(--primary)] transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/free-education"
            onClick={() => setMenuOpen(false)}
            className="flex items-center text-[var(--primary-dark)] justify-between border-b px-6 py-5 text-[16px] font-serif font-bold uppercase"
          >
            Free Education
          </Link>

          <div className="p-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-[var(--primary)] py-4 text-center text-white font-serif font-bold uppercase transition-all duration-300 hover:bg-[var(--primary-dark)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>

      {/* Desktop = 78px, Mobile = original 90px */}
      <div className="h-[90px] lg:h-[78px]"></div>
    </>
  );
};

export default NavBar;
