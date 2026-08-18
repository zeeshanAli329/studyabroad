// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { api } from "@/lib/api";
// // import { Mail, Phone, MapPin, Clock, Send, ChevronRight } from "lucide-react";

// // export default function ContactPage() {
// //   const [submitting, setSubmitting] = useState(false);
// //   const [successMessage, setSuccessMessage] = useState(null);
// //   const [errorMessage, setErrorMessage] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     setSuccessMessage(null);
// //     setErrorMessage(null);

// //     const formData = new FormData(e.target);
// //     const data = {
// //       name: formData.get('name'),
// //       email: formData.get('email'),
// //       phone: formData.get('phone'),
// //       subject: formData.get('subject'),
// //       message: formData.get('message'),
// //     };

// //     try {
// //       await api.submitContact(data);
// //       setSuccessMessage('Thank you! Your message has been sent successfully.');
// //       e.target.reset();
// //     } catch (error) {
// //       setErrorMessage('Failed to send message. Please try again.');
// //       console.error(error);
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const contactInfo = [
// //     {
// //       icon: Mail,
// //       title: "Email Us",
// //       details: ["info@routex.com", "support@routex.com"],
// //       color: "bg-lime-500"
// //     },
// //     {
// //       icon: Phone,
// //       title: "Call Us",
// //       details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
// //       color: "bg-emerald-600"
// //     },
// //     {
// //       icon: MapPin,
// //       title: "Visit Us",
// //       details: ["123 Education Avenue", "New York, NY 10001", "USA"],
// //       color: "bg-teal-500"
// //     },
// //     {
// //       icon: Clock,
// //       title: "Working Hours",
// //       details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
// //       color: "bg-cyan-500"
// //     }
// //   ];

// //   return (
// //     <div className="w-full bg-white font-sans">
// //       {/* Hero Section */}
// //       <section
// //         className="relative w-full overflow-hidden"
// //         style={{
// //           backgroundImage: "linear-gradient(120deg, rgba(15,58,45,0.92), rgba(15,58,45,0.75)), url('https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/breadcrumb.png')",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
// //           <h1 className="text-white text-4xl sm:text-5xl font-serif font-semibold tracking-tight mb-4">
// //             Contact Us
// //           </h1>
// //           <p className="text-white/90 text-lg sm:text-xl max-w-2xl">
// //             Have questions about studying abroad? Our expert team is here to help you every step of the way.
// //           </p>
// //           <div className="flex items-center gap-2 text-white/80 text-sm mt-6">
// //             <span>STUDYABROAD</span>
// //             <ChevronRight className="w-4 h-4" />
// //             <span className="text-lime-400">Contact</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Information */}
// //       <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {contactInfo.map((info, index) => (
// //             <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
// //               <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
// //                 <info.icon className="w-6 h-6 text-white" />
// //               </div>
// //               <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-3">{info.title}</h3>
// //               <div className="space-y-1">
// //                 {info.details.map((detail, i) => (
// //                   <p key={i} className="text-gray-600 text-sm">{detail}</p>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* Contact Form & Map */}
// //       <section className="bg-[#fafbf9] py-16 sm:py-24">
// //         <div className="max-w-7xl mx-auto px-6 sm:px-10">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //             {/* Contact Form */}
// //             <div className="bg-white rounded-2xl shadow-md p-8">
// //               <h2 className="font-serif text-2xl text-emerald-900 mb-2">Send Us a Message</h2>
// //               <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
// //               <form onSubmit={handleSubmit} className="space-y-5">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Full Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="name"
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
// //                       placeholder="John Doe"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Email Address *
// //                     </label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
// //                       placeholder="john@example.com"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Phone Number
// //                     </label>
// //                     <input
// //                       type="tel"
// //                       name="phone"
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
// //                       placeholder="+1 234 567 890"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-2">
// //                       Subject *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="subject"
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
// //                       placeholder="How can we help?"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Message *
// //                   </label>
// //                   <textarea
// //                     name="message"
// //                     required
// //                     rows={5}
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent resize-none"
// //                     placeholder="Tell us about your study abroad goals..."
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   disabled={submitting}
// //                   className="w-full py-4 bg-lime-500 text-white rounded-lg font-medium hover:bg-lime-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// //                 >
// //                   {submitting ? 'Sending...' : (
// //                     <>
// //                       Send Message <Send className="w-4 h-4" />
// //                     </>
// //                   )}
// //                 </button>
// //                 {successMessage && (
// //                   <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium">
// //                     {successMessage}
// //                   </div>
// //                 )}
// //                 {errorMessage && (
// //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium">
// //                     {errorMessage}
// //                   </div>
// //                 )}
// //               </form>
// //             </div>

// //             {/* Map & Additional Info */}
// //             <div className="space-y-6">
// //               {/* Map Placeholder */}
// //               <div className="bg-emerald-900 rounded-3xl overflow-hidden h-64 relative">
// //                 <div className="absolute inset-0 flex items-center justify-center text-white/80">
// //                   <div className="text-center">
// //                     <MapPin className="w-12 h-12 mx-auto mb-2" />
// //                     <p className="font-medium">123 Education Avenue</p>
// //                     <p className="text-sm">New York, NY 10001</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Quick Links */}
// //               <div className="bg-white rounded-2xl shadow-md p-6">
// //                 <h3 className="font-serif font-semibold text-emerald-900 text-lg mb-4">Quick Links</h3>
// //                 <div className="space-y-3">
// //                   <Link href="/appointment" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
// //                     <span>Book an Appointment</span>
// //                     <ChevronRight className="w-4 h-4" />
// //                   </Link>
// //                   <Link href="/scholarships" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
// //                     <span>Explore Scholarships</span>
// //                     <ChevronRight className="w-4 h-4" />
// //                   </Link>
// //                   <Link href="/visa" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
// //                     <span>Visa Information</span>
// //                     <ChevronRight className="w-4 h-4" />
// //                   </Link>
// //                   <Link href="/about" className="flex items-center justify-between text-gray-600 hover:text-lime-600 transition-colors">
// //                     <span>Learn About RouteX</span>
// //                     <ChevronRight className="w-4 h-4" />
// //                   </Link>
// //                 </div>
// //               </div>

// //               {/* CTA */}
// //               <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-6 text-white">
// //                 <h3 className="font-serif font-semibold text-xl mb-2">Prefer to Talk?</h3>
// //                 <p className="text-white/80 text-sm mb-4">
// //                   Schedule a free consultation with one of our expert counselors.
// //                 </p>
// //                 <Link
// //                   href="/appointment"
// //                   className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
// //                 >
// //                   Book Now <ChevronRight className="w-4 h-4" />
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ */}
// //       <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
// //         <div className="text-center mb-12">
// //           <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl font-semibold">
// //             Frequently Asked Questions
// //           </h2>
// //         </div>

// //         <div className="space-y-4">
// //           {[
// //             {
// //               q: "How quickly will you respond to my inquiry?",
// //               a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
// //             },
// //             {
// //               q: "Do you charge for initial consultations?",
// //               a: "Our initial consultation is completely free. We'll discuss your goals and provide guidance on the best path forward."
// //             },
// //             {
// //               q: "Can I visit your office in person?",
// //               a: "Yes! We welcome in-person visits during our business hours. Please book an appointment to ensure a counselor is available."
// //             },
// //             {
// //               q: "What information should I prepare before contacting you?",
// //               a: "It's helpful to have your academic records, preferred study destinations, and any specific questions ready. This helps us provide more targeted assistance."
// //             }
// //           ].map((faq, index) => (
// //             <div key={index} className="bg-white rounded-xl shadow-md p-6">
// //               <h3 className="font-semibold text-emerald-900 mb-2">{faq.q}</h3>
// //               <p className="text-gray-600 text-sm">{faq.a}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }






















// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Clock,
//   Send,
//   ChevronRight,
//   CheckCircle2,
//   ArrowUpRight,
//   GraduationCap,
//   MessageCircle,
// } from "lucide-react";
// import { api } from "@/lib/api";

// export default function ContactPage() {
//   const [submitting, setSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setSubmitting(true);
//     setSuccessMessage(null);
//     setErrorMessage(null);

//     const formData = new FormData(e.target);

//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       phone: formData.get("phone"),
//       subject: formData.get("subject"),
//       message: formData.get("message"),
//     };

//     try {
//       await api.submitContact(data);

//       setSuccessMessage(
//         "Thank you! Your message has been sent successfully."
//       );

//       e.target.reset();
//     } catch (error) {
//       setErrorMessage(
//         "Failed to send message. Please try again."
//       );

//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       details: ["info@routex.com", "support@routex.com"],
//       color: "bg-[var(--primary)]",
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
//       color: "bg-[var(--secondary)]",
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       details: [
//         "123 Education Avenue",
//         "New York, NY 10001",
//         "USA",
//       ],
//       color: "bg-[#176b5b]",
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       details: [
//         "Mon - Fri: 9:00 AM - 6:00 PM",
//         "Saturday: 10:00 AM - 4:00 PM",
//         "Sunday: Closed",
//       ],
//       color: "bg-[#487d70]",
//     },
//   ];

//   const faqs = [
//     {
//       q: "How quickly will you respond to my inquiry?",
//       a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
//     },
//     {
//       q: "Do you charge for initial consultations?",
//       a: "Our initial consultation is completely free. We'll discuss your goals and provide guidance on the best path forward.",
//     },
//     {
//       q: "Can I visit your office in person?",
//       a: "Yes! We welcome in-person visits during our business hours. Please book an appointment to ensure a counselor is available.",
//     },
//     {
//       q: "What information should I prepare before contacting you?",
//       a: "It's helpful to have your academic records, preferred study destinations, and any specific questions ready. This helps us provide more targeted assistance.",
//     },
//   ];

//   return (
//     <main className="w-full bg-white text-[var(--text-primary)]">

//       {/* =====================================================
//           HERO
//           ===================================================== */}

//       <section className="relative mx-4 overflow-hidden rounded-[24px] lg:mx-8">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2200&auto=format&fit=crop&q=85"
//             alt="Free Study Abroad Consultation"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Theme Overlay */}
//         <div className="absolute inset-0 bg-[#003c2f]/90" />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#003c2f]/95 via-[#003c2f]/90 to-[#003c2f]/70" />

//         {/* Decorative circles */}
//         <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[var(--primary)]/20 lg:h-96 lg:w-96" />

//         <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full border border-[var(--primary)]/15 lg:h-[430px] lg:w-[430px]" />

//         <div className="relative mx-auto flex min-h-[500px] max-w-[1320px] items-center px-6 py-20 sm:px-10 lg:min-h-[540px] lg:px-12">
//           <div className="max-w-3xl">

//             {/* Label */}
//             <div className="mb-7 inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
//               <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

//               <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
//                 Free Consultation
//               </span>
//             </div>

//             {/* H1 */}
//             <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
//               Get Free Study Abroad
//               <br />
//               <span className="text-[var(--primary)]">
//                 Guidance
//               </span>
//             </h1>

//             {/* Body Copy */}
//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
//               Not sure which country, university, or scholarship
//               fits your profile? Our consultants offer a free
//               initial consultation to help you identify the right
//               path — based on your academics, budget, and career
//               goals.
//             </p>

//             {/* Breadcrumb */}
//             <div className="mt-7 flex items-center gap-3 text-xs">
//               <Link
//                 href="/"
//                 className="text-white/55 transition-colors hover:text-white"
//               >
//                 Studyabroad
//               </Link>

//               <ChevronRight className="h-3.5 w-3.5 text-white/40" />

//               <span className="text-[var(--primary)]">
//                 Contact Us
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO / TRUST STRIP
//           ===================================================== */}

//       <section className="border-b border-[var(--border)] bg-white">
//         <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-12 sm:px-10 md:grid-cols-3 lg:px-8">

//           <div className="flex items-start gap-4">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
//               <GraduationCap className="h-5 w-5 text-[var(--primary)]" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-[var(--text-primary)]">
//                 Personalized Guidance
//               </h3>

//               <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
//                 Advice based on your academics, budget and
//                 career goals.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
//               <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-[var(--text-primary)]">
//                 Free Initial Consultation
//               </h3>

//               <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
//                 Start your study abroad journey without an
//                 initial consultation fee.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
//               <MessageCircle className="h-5 w-5 text-[var(--primary)]" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-[var(--text-primary)]">
//                 Response Within 24 Hours
//               </h3>

//               <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
//                 Fill out the form and our team will get back to
//                 you within 24 hours.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =====================================================
//           CONTACT INFORMATION
//           ===================================================== */}

//       <section className="bg-[var(--background-light)] py-16 sm:py-20">
//         <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">

//           <div className="mb-10 max-w-2xl">
//             <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
//               Contact Information
//             </span>

//             <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)] sm:text-4xl">
//               We&apos;re Here to Help
//             </h2>

//             <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
//               Have questions about scholarships, free education,
//               student visas or studying abroad? Reach out to our
//               team.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {contactInfo.map((info, index) => {
//               const Icon = info.icon;

//               return (
//                 <div
//                   key={index}
//                   className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   <div
//                     className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${info.color} shadow-sm`}
//                   >
//                     <Icon className="h-5 w-5 text-white" />
//                   </div>

//                   <h3 className="font-serif text-lg font-semibold text-[var(--secondary)]">
//                     {info.title}
//                   </h3>

//                   <div className="mt-3 space-y-1">
//                     {info.details.map((detail, i) => (
//                       <p
//                         key={i}
//                         className="text-sm leading-6 text-[var(--text-secondary)]"
//                       >
//                         {detail}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FORM + SIDE CONTENT
//           ===================================================== */}

//       <section className="bg-white py-20 sm:py-24">
//         <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">

//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">

//             {/* FORM */}
//             <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">

//               <div className="mb-8">
//                 <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
//                   Start Your Journey
//                 </span>

//                 <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)]">
//                   Book Your Free Consultation
//                 </h2>

//                 <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
//                   Fill out the form below and our team will get
//                   back to you within 24 hours.
//                 </p>
//               </div>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 {/* Name + Email */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
//                       Full Name *
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       placeholder="Your full name"
//                       className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
//                       Email Address *
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       placeholder="you@example.com"
//                       className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
//                     />
//                   </div>

//                 </div>

//                 {/* Phone + Subject */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
//                       Phone Number
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="+92 XXX XXXXXXX"
//                       className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
//                       Subject *
//                     </label>

//                     <input
//                       type="text"
//                       name="subject"
//                       required
//                       placeholder="How can we help?"
//                       className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
//                     />
//                   </div>

//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
//                     Message *
//                   </label>

//                   <textarea
//                     name="message"
//                     required
//                     rows={6}
//                     placeholder="Tell us about your study abroad goals..."
//                     className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-4 font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {submitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       Book Your Free Consultation
//                       <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                     </>
//                   )}
//                 </button>

//                 {/* Success */}
//                 {successMessage && (
//                   <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-sm font-medium text-green-700">
//                     <CheckCircle2 className="h-5 w-5 shrink-0" />

//                     <span>{successMessage}</span>
//                   </div>
//                 )}

//                 {/* Error */}
//                 {errorMessage && (
//                   <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center text-sm font-medium text-red-700">
//                     {errorMessage}
//                   </div>
//                 )}
//               </form>
//             </div>

//             {/* SIDE */}
//             <div className="space-y-6">

//               {/* Consultation CTA */}
//               <div className="relative overflow-hidden rounded-[24px] bg-[#003c2f] p-8 text-white sm:p-9">

//                 <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[var(--primary)]/20" />

//                 <div className="relative">
//                   <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/15">
//                     <GraduationCap className="h-6 w-6 text-[var(--primary)]" />
//                   </div>

//                   <h3 className="font-serif text-2xl font-semibold">
//                     Not Sure Where to Start?
//                   </h3>

//                   <p className="mt-4 text-sm leading-7 text-white/75">
//                     Our consultants can help you identify the
//                     right country, university and scholarship
//                     based on your academics, budget and career
//                     goals.
//                   </p>

//                   <Link
//                     href="/appointment"
//                     className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]"
//                   >
//                     Book Your Free Consultation
//                     <ArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Map / Location */}
//               <div className="relative h-64 overflow-hidden rounded-[24px] bg-[#edf3f0]">
//                 <div className="absolute inset-0 opacity-40">
//                   <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,60,47,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="rounded-2xl border border-white bg-white/95 px-7 py-5 text-center shadow-lg backdrop-blur">
//                     <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]">
//                       <MapPin className="h-5 w-5 text-white" />
//                     </div>

//                     <p className="font-semibold text-[var(--secondary)]">
//                       123 Education Avenue
//                     </p>

//                     <p className="mt-1 text-sm text-[var(--text-secondary)]">
//                       New York, NY 10001
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Links */}
//               <div className="rounded-[24px] border border-[var(--border)] bg-white p-7 shadow-sm">

//                 <div className="mb-5">
//                   <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
//                     Explore
//                   </span>

//                   <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--secondary)]">
//                     Quick Links
//                   </h3>
//                 </div>

//                 <div className="divide-y divide-[var(--border)]">
//                   <Link
//                     href="/appointment"
//                     className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
//                   >
//                     <span>Book an Appointment</span>

//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>

//                   <Link
//                     href="/scholarships"
//                     className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
//                   >
//                     <span>Explore Scholarships</span>

//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>

//                   <Link
//                     href="/visa"
//                     className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
//                   >
//                     <span>Visa Information</span>

//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>

//                   <Link
//                     href="/about"
//                     className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
//                   >
//                     <span>About StudyAbroad</span>

//                     <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }











"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { api } from "@/lib/api";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await api.submitContact(data);

      setSuccessMessage(
        "Thank you! Your message has been sent successfully."
      );

      e.target.reset();
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@routex.com", "support@routex.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Education Avenue",
        "New York, NY 10001",
        "USA",
      ],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <main className="w-full bg-white text-[var(--text-primary)]">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative mx-4 overflow-hidden rounded-[24px] lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2200&auto=format&fit=crop&q=85"
            alt="Free Study Abroad Consultation"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#003c2f]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#003c2f]/95 via-[#003c2f]/90 to-[#003c2f]/70" />

        <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[var(--primary)]/20 lg:h-96 lg:w-96" />

        <div className="absolute -bottom-40 right-20 h-80 w-80 rounded-full border border-[var(--primary)]/15 lg:h-[430px] lg:w-[430px]" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1320px] items-center px-6 py-20 sm:px-10 lg:min-h-[540px] lg:px-12">
          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-2">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                Free Consultation
              </span>
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
              Get Free Study Abroad
              <br />
              <span className="text-[var(--primary)]">
                Guidance
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Not sure which country, university, or scholarship
              fits your profile? Our consultants offer a free
              initial consultation to help you identify the right
              path — based on your academics, budget, and career
              goals. Fill out the form below and our team will get
              back to you within 24 hours.
            </p>

            <div className="mt-7 flex items-center gap-3 text-xs">
              <Link
                href="/"
                className="text-white/55 transition-colors hover:text-white"
              >
                Studyabroad
              </Link>

              <ChevronRight className="h-3.5 w-3.5 text-white/40" />

              <span className="text-[var(--primary)]">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / TRUST STRIP
          ===================================================== */}

      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 py-12 sm:px-10 md:grid-cols-3 lg:px-8">

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white">
              <GraduationCap className="h-5 w-5 text-[var(--secondary)]" />
            </div>

            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Personalized Guidance
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                Advice based on your academics, budget and career
                goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white">
              <CheckCircle2 className="h-5 w-5 text-[var(--secondary)]" />
            </div>

            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Free Initial Consultation
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                Start your study abroad journey without an initial
                consultation fee.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--primary)]/30 bg-white">
              <MessageCircle className="h-5 w-5 text-[var(--secondary)]" />
            </div>

            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Response Within 24 Hours
              </h3>

              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                Fill out the form and our team will get back to you
                within 24 hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
          ===================================================== */}

      <section className="bg-[var(--background-light)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">

          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Contact Information
            </span>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)] sm:text-4xl">
              We&apos;re Here to Help
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
              Have questions about scholarships, free education,
              student visas or studying abroad? Reach out to our
              team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="
                    group relative overflow-hidden
                    rounded-[18px]
                    border border-[#dfe7e3]
                    bg-white
                    p-7
                    shadow-[0_4px_20px_rgba(0,0,0,0.035)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[var(--primary)]/40
                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* Small top accent */}
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />

                  {/* Outline Icon */}
                  <div
                    className="
                      mb-6
                      flex h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[#d8e2dd]
                      bg-[#fafcfb]
                      transition-all duration-300
                      group-hover:border-[var(--primary)]/50
                      group-hover:bg-[var(--primary)]/5
                    "
                  >
                    <Icon
                      className="h-[19px] w-[19px] text-[var(--secondary)] transition-colors duration-300 group-hover:text-[var(--primary)]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3 className="font-serif text-[19px] font-semibold text-[var(--secondary)]">
                    {info.title}
                  </h3>

                  <div className="mt-4 space-y-1.5">
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-[13px] leading-6 text-[var(--text-secondary)]"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + MAP + QUICK LINKS
          ===================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =================================================
                FORM
                ================================================= */}

            <div className="rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">

              <div className="mb-8">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Start Your Journey
                </span>

                <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--secondary)]">
                  Book Your Free Consultation
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                  Fill out the form below and our team will get
                  back to you within 24 hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Subject *
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your study abroad goals..."
                    className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background-light)] px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition-all placeholder:text-gray-400 focus:border-[var(--primary)] focus:bg-white focus:ring-4 focus:ring-[var(--primary)]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    group flex w-full items-center justify-center gap-2
                    rounded-xl
                    bg-[var(--primary)]
                    px-6 py-4
                    font-semibold text-white
                    shadow-lg shadow-[var(--primary)]/20
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[var(--primary-dark)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Book Your Free Consultation
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Success */}
                {successMessage && (
                  <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-sm font-medium text-green-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* Error */}
                {errorMessage && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-center text-sm font-medium text-red-700">
                    {errorMessage}
                  </div>
                )}

              </form>
            </div>

            {/* =================================================
                RIGHT SIDE
                ================================================= */}

            <div className="space-y-6">

              {/* =================================================
                  REAL MAP
                  ================================================= */}

              <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)]">

                <div className="relative h-[330px] w-full">

                  {/* <iframe
                    title="London House:، 8-A Lawrence Road, Mozang Chungi, Lahore, 54000, Pakistan"
                    src="https://www.google.com/maps/place/UNI-GUIDE+Consultancy+Services+Pvt.+Ltd./@31.5577007,74.3198984,17z/data=!3m1!4b1!4m6!3m5!1s0x391904ad0d1e3b7d:0xbef65ea33032c594!8m2!3d31.5576962!4d74.3224733!16s%2Fg%2F11c6y_w182?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                  <div className="relative h-[350px] overflow-hidden rounded-[24px] border border-[var(--border)] shadow-sm">
  <iframe
    title="UNI-GUIDE Consultancy Services"
    src="https://maps.google.com/maps?q=UNI-GUIDE%20Consultancy%20Services%20Pvt.%20Ltd,%20Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed"
    className="absolute inset-0 h-full w-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-cross-origin"
  />
</div>

                </div>

                {/* Address underneath map */}
                <div className="flex items-start gap-4 border-t border-[var(--border)] bg-white p-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d8e2dd] bg-[#fafcfb]">
                    <MapPin
                      className="h-[19px] w-[19px] text-[var(--secondary)]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="font-serif text-lg font-semibold text-[var(--secondary)]">
                      London House:، 8-A Lawrence Road, Mozang Chungi, Lahore, 54000, Pakistan
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      H85C+3X Lahore
                    </p>

                    <p className="text-sm text-[var(--text-secondary)]">
                      Pakistan
                    </p>
                  </div>

                </div>
              </div>

              {/* =================================================
                  QUICK LINKS
                  ================================================= */}

              <div className="rounded-[24px] border border-[var(--border)] bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">

                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                    Explore
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--secondary)]">
                    Quick Links
                  </h3>
                </div>

                <div className="divide-y divide-[var(--border)]">

                  <Link
                    href="/appointment"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Book an Appointment</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/scholarships"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Explore Scholarships</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/visa"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>Visa Information</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/about"
                    className="group flex items-center justify-between py-4 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)]"
                  >
                    <span>About StudyAbroad</span>

                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}