// 'use client'
// import next from "next"
// import Link from "next/link"
// import {
//   ChevronRight,
//   ShieldCheck,
//   FileText,
//   Clock,
//   CheckCircle,
//   Globe,
//   MessageCircle,
//   DollarSign,
//   XCircle,
//   PlaneTakeoff,
// } from "lucide-react";
// export default function VisaSupportCard(){
//     return(
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//         <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f8fbf7] via-white to-[#eef5ef] shadow-[0_20px_60px_rgba(15,58,45,0.10)]">
//           <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-lime-200/30 blur-3xl pointer-events-none" />
//           <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

//           <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10">
//             {/* Content */}
//             <div className="lg:pr-4">
//               <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-white px-3.5 py-2 text-lime-700 font-semibold text-xs uppercase tracking-[0.14em] shadow-sm mb-5">
//                 <ShieldCheck className="w-4 h-4" />
//                 Student Visa Support
//               </div>

//               <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold leading-[1.1] tracking-tight mb-5">
//                 Your Student Visa Journey,
//                 <span className="block text-lime-700">Guided With Confidence</span>
//               </h2>

//               <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-2xl mb-7">
//                 Getting a student visa is often the most stressful part of studying abroad. Our consultants guide Pakistani students through every step — from document preparation to visa interviews — so nothing stands between you and your offer letter.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 {[
//                   {
//                     icon: FileText,
//                     title: "Documents",
//                     desc: "Prepare the right documents",
//                   },
//                   {
//                     icon: MessageCircle,
//                     title: "Interview",
//                     desc: "Build interview confidence",
//                   },
//                   {
//                     icon: DollarSign,
//                     title: "Finances",
//                     desc: "Organize proof of funds",
//                   },
//                 ].map((item) => (
//                   <div
//                     key={item.title}
//                     className="rounded-2xl bg-white border border-gray-100 p-4 shadow-sm"
//                   >
//                     <div className="w-9 h-9 rounded-xl bg-emerald-900 flex items-center justify-center mb-3">
//                       <item.icon className="w-4 h-4 text-lime-400" />
//                     </div>
//                     <h3 className="font-semibold text-emerald-900 text-sm mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-500 text-xs leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex flex-wrap items-center gap-4 mt-7 pt-6 border-t border-emerald-900/10">
//                 <div className="flex items-center gap-2 text-sm text-gray-600">
//                   <Globe className="w-4 h-4 text-lime-600" />
//                   <span>
//                     <strong className="text-emerald-900">7+ destinations</strong>{" "}
//                     covered
//                   </span>
//                 </div>
//                 <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
//                 <span className="text-sm text-gray-500">
//                   From Europe to the Gulf
//                 </span>
//               </div>
//             </div>

//             {/* Professional Image Card */}
//             <div className="relative">
//               <div className="relative rounded-[1.75rem] overflow-hidden bg-emerald-900 shadow-2xl">
//                 <img
//                   src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png"
//                   alt="Student visa consultation"
//                   className="w-full h-[360px] sm:h-[430px] lg:h-[500px] object-cover"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />

//                 <div className="absolute left-5 right-5 bottom-5">
//                   <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 px-5 py-4 shadow-xl">
//                     <div>
//                       <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-700 mb-1">
//                         Visa Guidance
//                       </p>
//                       <p className="font-serif text-emerald-900 text-lg font-semibold">
//                         From application to interview
//                       </p>
//                     </div>

//                     <div className="w-11 h-11 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0">
//                       <ChevronRight className="w-5 h-5 text-lime-400" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 rounded-2xl bg-emerald-900 text-white px-4 py-3 shadow-xl border-4 border-white">
//                 <p className="text-lime-400 text-lg font-bold leading-none">7+</p>
//                 <p className="text-white/70 text-[10px] mt-1 uppercase tracking-wide">
//                   Study Destinations
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
// )
// }




'use client';

import React from 'react';
import {
  ShieldCheck,
  Globe,
  ChevronRight,
  FileText,
  MessageCircle,
  DollarSign,
} from 'lucide-react';

export default function VisaSupportCard({
  badgeText = 'Student Visa Support',
  badgeIcon: BadgeIcon = ShieldCheck,
  title = 'Your Student Visa Journey,',
  highlightTitle = 'Guided With Confidence',
  description = 'Getting a student visa is often the most stressful part of studying abroad. Our consultants guide Pakistani students through every step.',
  features = [
    {
      icon: FileText,
      title: 'Documents',
      desc: 'Prepare the right documents',
    },
    {
      icon: MessageCircle,
      title: 'Interview',
      desc: 'Build interview confidence',
    },
    {
      icon: DollarSign,
      title: 'Finances',
      desc: 'Organize proof of funds',
    },
  ],
  footerMainStat = '7+ destinations',
  footerSubStat = 'covered',
  footerNote = 'From Europe to the Gulf',
  imageSrc = 'https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/choose-us-left-img.png',
  imageAlt = 'Visa consultation',
  cardSubTitle = 'Visa Guidance',
  cardMainTitle = 'From application to interview',
  badgeStatNumber = '7+',
  badgeStatLabel = 'Study Destinations',
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-gradient-to-br from-[#f8fbf7] via-white to-[#eef5ef] shadow-[0_20px_60px_rgba(15,58,45,0.10)]">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-lime-200/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10">
          {/* Content */}
          <div className="lg:pr-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-600/20 bg-white px-3.5 py-2 text-lime-700 font-semibold text-xs uppercase tracking-[0.14em] shadow-sm mb-5">
              <BadgeIcon className="w-4 h-4" />
              {badgeText}
            </div>

            <h2 className="font-serif text-emerald-900 text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold leading-[1.1] tracking-tight mb-5">
              {title}
              {highlightTitle && (
                <span className="block text-lime-700">{highlightTitle}</span>
              )}
            </h2>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-2xl mb-7">
              {description}
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-gray-100 p-4 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-900 flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4 text-lime-400" />
                    </div>
                    <h3 className="font-semibold text-emerald-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Footer Stats */}
            <div className="flex flex-wrap items-center gap-4 mt-7 pt-6 border-t border-emerald-900/10">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="w-4 h-4 text-lime-600" />
                <span>
                  <strong className="text-emerald-900">
                    {footerMainStat}
                  </strong>{' '}
                  {footerSubStat}
                </span>
              </div>
              {footerNote && (
                <>
                  <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-sm text-gray-500">{footerNote}</span>
                </>
              )}
            </div>
          </div>

          {/* Image Card */}
          <div className="relative">
            <div className="relative rounded-[1.75rem] overflow-hidden bg-emerald-900 shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[360px] sm:h-[430px] lg:h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-transparent to-transparent" />

              <div className="absolute left-5 right-5 bottom-5">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 px-5 py-4 shadow-xl">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lime-700 mb-1">
                      {cardSubTitle}
                    </p>
                    <p className="font-serif text-emerald-900 text-lg font-semibold">
                      {cardMainTitle}
                    </p>
                  </div>

                  <div className="w-11 h-11 rounded-full bg-emerald-900 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-lime-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 rounded-2xl bg-emerald-900 text-white px-4 py-3 shadow-xl border-4 border-white">
              <p className="text-lime-400 text-lg font-bold leading-none">
                {badgeStatNumber}
              </p>
              <p className="text-white/70 text-[10px] mt-1 uppercase tracking-wide">
                {badgeStatLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}