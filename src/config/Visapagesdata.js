// Central content for every Student Visa sub-page.
// Each page.jsx just imports its key from here and renders <VisaPageTemplate data={...} />

export const visaPagesData = {
  visaConsultation: {
    slug: "visaConsultation",
    badge: "Student Visa",
    title: "Visa Consultation",
    subtitle:
      "One-on-one guidance to map out the right visa pathway for your study abroad goals — before you spend a single rupee on an application.",
    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    subServices: [
      "Student Visa Consultation",
      "Spouse and Dependent Consultation",
      "Pathway Consultation",
      "Course and Country Selection Consultation",
    ],
    intro: {
      heading: "Start With Clarity, Not Guesswork",
      paragraph:
        "Every student's situation is different — your academic background, budget, and target country all shape which visa route makes sense. Our consultants review your profile and lay out a realistic, step-by-step plan before you commit to any university or country.",
    },
    features: [
      { icon: "FaUserTie", title: "Personalized Assessment", desc: "A one-on-one session reviewing your academic record, finances, and goals." },
      { icon: "FaGlobeAmericas", title: "Country Comparison", desc: "Honest comparison of visa difficulty, cost, and success rates across destinations." },
      { icon: "FaClipboardCheck", title: "Eligibility Check", desc: "We flag any gaps in your profile early, before they become rejection reasons." },
      { icon: "FaRoute", title: "Custom Roadmap", desc: "A clear timeline from consultation to visa stamping, tailored to your intake." },
    ],
    checklist: [
      "Valid passport (minimum 6 months validity)",
      "Academic transcripts and certificates",
      "Proof of English proficiency (if available)",
      "Bank statements or sponsor financial documents",
      "CV or statement of purpose draft",
      "List of target countries or universities (if decided)",
    ],

  },

  universitySelection: {
    slug: "universitySelection",
    badge: "Student Visa",
    title: "University Selection",
    subtitle:
      "Find universities that actually match your grades, budget, and career goals — not just the ones that show up first on Google.",
    heroImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    subServices: [
      "Universities in the UK",
      "Universities in Canada",
      "Universities in Australia",
      "Universities in the USA",
      "Universities in Germany",
      "Universities in Ireland",
    ],
    intro: {
      heading: "The Right Fit Matters More Than Rankings",
      paragraph:
        "A university that's a great fit for one student can be the wrong choice for another. We weigh admission requirements, tuition, scholarship availability, and post-study work rules together, so the shortlist we give you is realistic and worth applying to.",
    },
    features: [
      { icon: "FaUniversity", title: "Shortlisting Support", desc: "A curated list of universities matched to your grades and budget." },
      { icon: "FaMoneyBillWave", title: "Cost Comparison", desc: "Tuition, living costs, and scholarship opportunities compared side by side." },
      { icon: "FaGraduationCap", title: "Program Matching", desc: "We align your intended major with programs that have strong outcomes." },
      { icon: "FaBriefcase", title: "Career Pathway Fit", desc: "Universities chosen with post-study work and PR pathways in mind." },
    ],
    checklist: [
      "Academic transcripts (O/A Level, Bachelor's, etc.)",
      "Preferred field of study or major",
      "Budget range for tuition and living costs",
      "English test scores (IELTS/TOEFL/PTE), if available",
      "Preferred countries or regions",
      "Career goals after graduation",
    ],

  },

  pathwayPrograms: {
    slug: "pathwayPrograms",
    badge: "Student Visa",
    title: "Pathway Programs",
    subtitle:
      "Don't meet direct-entry requirements yet? Pathway and foundation programs can bridge the gap into your target degree.",
    heroImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
    subServices: [
      "Foundation Programs",
      "Diploma Pathways",
      "Pre-Masters Programs",
      "English Language Pathways",
    ],
    intro: {
      heading: "A Practical Route When Direct Entry Isn't Possible",
      paragraph:
        "Foundation years, diploma pathways, and pre-masters programs exist for exactly this reason — to help students whose grades, English scores, or academic background don't yet match a university's direct-entry criteria. We help you pick a pathway that leads somewhere, not a dead end.",
    },
    features: [
      { icon: "FaLayerGroup", title: "Foundation & Diploma Routes", desc: "Options for undergraduate and postgraduate pathway entry." },
      { icon: "FaLanguage", title: "English Bridging Programs", desc: "Combined language and academic pathway courses where needed." },
      { icon: "FaExchangeAlt", title: "Guaranteed Progression", desc: "We prioritize pathways with confirmed progression into degree programs." },
      { icon: "FaClock", title: "Time-Efficient Planning", desc: "Pathway lengths and intakes mapped against your ideal graduation timeline." },
    ],
    checklist: [
      "Latest academic transcripts",
      "English proficiency scores (if taken)",
      "Reason for not meeting direct-entry requirements",
      "Target degree program and university",
      "Budget for the pathway plus the main degree",
      "Passport copy",
    ],

  },

  applicationAndDocumentation: {
    slug: "applicationAndDocumentation",
    badge: "Student Visa",
    title: "Application and Documentation",
    subtitle:
      "Application errors and missing documents are the single biggest cause of delays and rejections — we make sure yours is right the first time.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    subServices: [
      "Statement of Purpose Writing",
      "Letters of Recommendation",
      "Financial Documentation",
      "Transcript and Credential Evaluation",
    ],
    intro: {
      heading: "Precision Matters at This Stage",
      paragraph:
        "From your statement of purpose to financial evidence, every document has to meet the exact format and standard your target country's immigration office expects. Our team reviews each piece before submission, so you're not finding out about a mistake after the fact.",
    },
    features: [
      { icon: "FaFileAlt", title: "Document Review", desc: "Line-by-line checking of transcripts, SOPs, and financial evidence." },
      { icon: "FaStamp", title: "Attestation Guidance", desc: "Support with document attestation and notarization requirements." },
      { icon: "FaPenFancy", title: "SOP & Essay Support", desc: "Feedback on your statement of purpose to strengthen your case." },
      { icon: "FaShieldAlt", title: "Compliance Check", desc: "Every document checked against the destination country's exact checklist." },
    ],
    checklist: [
      "Passport and previous visa copies (if any)",
      "Academic transcripts and degree certificates",
      "Statement of purpose / personal statement",
      "Financial documents (bank statements, sponsorship letters)",
      "Offer letter or letter of acceptance",
      "Passport-sized photographs meeting country specifications",
    ],
    faqs: [
      { q: "What's the most common reason applications get rejected?", a: "Inconsistent or insufficient financial documentation, followed closely by weak or generic statements of purpose." },
      { q: "Do you help with document translation and attestation?", a: "Yes, we guide you through translation and attestation requirements specific to your destination country." },
      { q: "Can you review documents I've already prepared?", a: "Yes — many students come to us with documents ready and just want a professional review before submission." },
      { q: "How long does document preparation usually take?", a: "Typically 1–3 weeks depending on how quickly financial and academic documents can be gathered and attested." },
    ],
  },

  IELTSPreparation: {
    slug: "IELTSPreparation",
    badge: "Student Visa",
    title: "IELTS Preparation",
    subtitle:
      "Structured coaching to help you hit the band score your university and visa application actually require.",
    heroImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    subServices: [
      "IELTS Coaching",
      "PTE Coaching",
      "TOEFL Coaching",
      "Duolingo English Test Prep",
      "MOI (Medium of Instruction) Certificate Guidance",
    ],
    intro: {
      heading: "Your Band Score Can Make or Break Your Application",
      paragraph:
        "Universities and visa offices both check your English score against fixed thresholds — missing it by even half a band can mean reapplying or losing an intake. Our coaching focuses on the exact band you need, not just general English improvement.",
    },
    features: [
      { icon: "FaBookReader", title: "Skill-Focused Coaching", desc: "Targeted practice across Listening, Reading, Writing, and Speaking." },
      { icon: "FaChalkboardTeacher", title: "Mock Tests", desc: "Timed, examiner-style mock tests with detailed band-score feedback." },
      { icon: "FaCommentDots", title: "Speaking Practice", desc: "One-on-one speaking sessions to build fluency and confidence." },
      { icon: "FaChartLine", title: "Progress Tracking", desc: "Regular assessments so you know exactly where you stand before test day." },
    ],
    checklist: [
      "Target band score (per your university's requirement)",
      "Preferred test date or intake deadline",
      "Any previous IELTS attempt results",
      "CNIC or passport for test registration",
      "Availability for coaching sessions (weekday/weekend)",
      "Weak areas you've already identified, if any",
    ],
    faqs: [
      { q: "What band score do most universities require?", a: "It varies by program, but most undergraduate programs ask for 6.0–6.5 overall, while postgraduate and competitive programs often require 6.5–7.5." },
      { q: "How long does it take to prepare for IELTS?", a: "On average, 4–8 weeks of focused preparation, depending on your starting English level and target score." },
      { q: "Do you offer both Academic and General Training IELTS prep?", a: "Yes, coaching is tailored to whichever module your visa or university application requires." },
      { q: "Can I retake mock tests if I don't hit my target?", a: "Yes, we schedule additional mock tests and targeted practice until you're consistently hitting your required band." },
    ],
  },

  spouseandDependentVisa: {
    slug: "spouseandDependentVisa",
    badge: "Student Visa",
    title: "Spouse and Dependent Visa",
    subtitle:
      "Planning to bring your spouse or children with you? We help you understand eligibility and prepare a compliant dependent visa application.",
    heroImage:
      "https://images.unsplash.com/photo-1602231981490-6a3d09b6c2c2?w=1200&q=80",
    subServices: [
      "Spouse Visa UK",
      "Spouse Visa Canada",
      "Spouse Visa Australia",
      "Dependent Children Visa",
    ],
    intro: {
      heading: "Bringing Your Family Along Takes Extra Planning",
      paragraph:
        "Not every study visa allows dependents, and the countries that do usually set strict financial and documentation requirements. We help you check eligibility early — before you finalize a university — so there are no surprises later.",
    },
    features: [
      { icon: "FaUsers", title: "Eligibility Check", desc: "Confirming whether your visa category and country allow dependents." },
      { icon: "FaFileInvoiceDollar", title: "Financial Requirements", desc: "Guidance on the extra funds required to sponsor a spouse or child." },
      { icon: "FaHome", title: "Accommodation Planning", desc: "Support in planning family-suitable housing at your destination." },
      { icon: "FaChild", title: "Children's Schooling", desc: "Information on dependent children's school enrollment where applicable." },
    ],
    checklist: [
      "Marriage certificate (for spouse dependents)",
      "Children's birth certificates (if applicable)",
      "Proof of relationship documentation",
      "Additional financial evidence for dependents",
      "Dependent passport copies",
      "Accommodation details at destination",
    ],
    faqs: [
      { q: "Do all study-abroad countries allow dependent visas?", a: "No — policies vary widely and have tightened in several countries recently. We check current rules for your specific destination before you apply." },
      { q: "How much extra money is usually required for a dependent?", a: "This depends on the country and visa type, but most require proof of additional funds per dependent, on top of the student's own financial requirement." },
      { q: "Can my spouse work while I study?", a: "This depends entirely on the destination country's current policy — we'll confirm the latest rules for your chosen country." },
      { q: "Can dependents be added after I've already started my visa process?", a: "In some cases yes, but it's usually smoother to apply together. We can advise based on your specific timeline." },
    ],
  },

  visaInterviewPreparation: {
    slug: "visaInterviewPreparation",
    badge: "Student Visa",
    title: "Visa Interview Preparation",
    subtitle:
      "Confident, well-prepared answers matter as much as your paperwork. We run mock interviews so you're ready for the real one.",
    heroImage:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&q=80",
    subServices: [
      "US F1 Interview Prep",
      "UK Visa Interview Prep",
      "Canada Visa Interview Prep",
    ],
    intro: {
      heading: "Most Rejections Happen in the Interview, Not the Paperwork",
      paragraph:
        "Visa officers are trained to spot inconsistencies between your documents and your answers. We run realistic mock interviews covering the questions students are actually asked, so you walk in prepared instead of nervous.",
    },
    features: [
      { icon: "FaComments", title: "Mock Interviews", desc: "Realistic, one-on-one practice sessions with instant feedback." },
      { icon: "FaQuestionCircle", title: "Common Question Bank", desc: "Preparation around the questions visa officers ask most often." },
      { icon: "FaTheaterMasks", title: "Body Language Coaching", desc: "Guidance on tone, confidence, and presentation during the interview." },
      { icon: "FaClipboardList", title: "Document Consistency Check", desc: "Making sure your spoken answers match your submitted paperwork." },
    ],
    checklist: [
      "Copy of your visa application form",
      "All submitted supporting documents",
      "Offer letter and financial documents",
      "Clear explanation of your study plan and career goals",
      "Reasons for choosing your specific university and country",
      "Proof of ties to Pakistan (family, assets, career plans)",
    ],
    faqs: [
      { q: "What kind of questions are usually asked?", a: "Common questions cover why you chose your course and university, how you'll fund your studies, and your plans after graduation." },
      { q: "How many mock sessions do you recommend?", a: "Most students benefit from 2–3 mock sessions in the week leading up to their actual interview." },
      { q: "What if I get nervous and blank out during the real interview?", a: "Our mock sessions specifically simulate interview pressure so the real thing feels familiar rather than overwhelming." },
      { q: "Do interview questions differ by country?", a: "Yes — we tailor mock questions to the specific consulate or visa office style for your destination country." },
    ],
  },

  postStudyWorkVisa: {
    slug: "postStudyWorkVisa",
    badge: "Student Visa",
    title: "Post Study Work Visa",
    subtitle:
      "Understand your options for staying on to work after graduation — and how to plan for it before you even start your degree.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    subServices: [
      "UK Graduate Route",
      "Canada PGWP (Post Graduation Work Permit)",
      "Australia Temporary Graduate Visa",
    ],
    intro: {
      heading: "Plan Your Post-Graduation Path Early",
      paragraph:
        "Post-study work rights vary hugely by country and change often. We help you understand current policies before you choose a destination, so your degree actually sets up the career and immigration path you want.",
    },
    features: [
      { icon: "FaBriefcase", title: "Policy Breakdown", desc: "Up-to-date explanation of post-study work visa rules by country." },
      { icon: "FaCalendarAlt", title: "Timeline Planning", desc: "Understanding how long you can stay and work after graduation." },
      { icon: "FaBuilding", title: "Employer Sponsorship Guidance", desc: "Information on transitioning from a post-study visa to employer sponsorship." },
      { icon: "FaGlobe", title: "Country Comparison", desc: "Comparing work-visa strength across your shortlisted destinations." },
    ],
    checklist: [
      "Degree completion certificate (or expected completion date)",
      "Passport and current visa status",
      "CV updated with study and any work experience",
      "Target industry or job role after graduation",
      "Proof of funds to support the work-visa period",
      "Understanding of destination country's current PSW policy",
    ],
    faqs: [
      { q: "Which countries currently offer the strongest post-study work options?", a: "This changes frequently as governments update immigration policy — we check the latest rules for your specific destination before you commit to a university." },
      { q: "Do I need a job offer to apply for a post-study work visa?", a: "Usually not for the initial post-study visa itself, though a job offer helps significantly for later work-visa transitions." },
      { q: "How long can I typically stay and work after graduating?", a: "This varies by country and degree level, typically ranging from 1 to 3 years — we'll give you exact figures for your target country." },
      { q: "Can a post-study work visa lead to permanent residency?", a: "In several countries, yes — see our PR Destinations page for details on which pathways can lead toward permanent residency." },
    ],
  },

  countryRequirements: {
    slug: "countryRequirements",
    badge: "Student Visa",
    title: "Country Requirements",
    subtitle:
      "Every destination has its own visa rules, financial thresholds, and documentation standards. Know exactly what your target country expects.",
    heroImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80",
    subServices: [
      "UK Requirements",
      "Canada Requirements",
      "Australia Requirements",
      "USA Requirements",
      "Germany Requirements",
      "Ireland Requirements",
    ],
    intro: {
      heading: "Requirements Differ More Than Students Expect",
      paragraph:
        "Financial proof, health checks, English score thresholds, and processing times can vary significantly even between similar countries. We break down exactly what your chosen destination requires, so nothing catches you off guard mid-application.",
    },
    features: [
      { icon: "FaFlag", title: "Country-Specific Breakdown", desc: "Clear requirements laid out per destination country." },
      { icon: "FaMoneyCheckAlt", title: "Financial Thresholds", desc: "Exact funds you'll need to show for your chosen country." },
      { icon: "FaNotesMedical", title: "Health & Medical Checks", desc: "Guidance on medical exams required by certain destinations." },
      { icon: "FaHourglassHalf", title: "Processing Timelines", desc: "Realistic visa processing windows so you can plan your intake." },
    ],
    checklist: [
      "Shortlisted destination country or countries",
      "Passport with sufficient validity",
      "Proof of funds matching country-specific thresholds",
      "Health/medical exam booking, if required",
      "Police clearance certificate, if required",
      "Academic and English test documents",
    ],
    faqs: [
      { q: "Do requirements change often?", a: "Yes — immigration policies are reviewed and updated periodically, so we always confirm current requirements before you apply, not just what applied last year." },
      { q: "Is a medical exam required for every country?", a: "No, it depends on the destination and sometimes the length of your intended stay — we'll confirm this for your specific case." },
      { q: "How far in advance should I check requirements?", a: "Ideally 6–9 months before your intended intake, since some requirements (like medical exams or police clearances) take time to arrange." },
      { q: "Can requirements differ by visa subclass within the same country?", a: "Yes, and we make sure you're looking at the requirements for the exact visa subclass relevant to your study plan." },
    ],
  },

  PRDestinations: {
    slug: "PRDestinations",
    badge: "Student Visa",
    title: "PR Destinations (Permanent Residency Pathways)",
    subtitle:
      "If long-term settlement is part of your plan, some study destinations offer a clearer route to permanent residency than others.",
    heroImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&q=80",
    subServices: [
      "Canada PR Pathway",
      "Australia PR Pathway",
      "Germany PR Pathway",
      "New Zealand PR Pathway",
    ],
    intro: {
      heading: "Study With the Long Game in Mind",
      paragraph:
        "Not every country ties a study visa to a path toward permanent residency. If settling abroad long-term matters to you, that should shape your choice of country and university from the very beginning — not something you look into after you've already started.",
    },
    features: [
      { icon: "FaMapMarkedAlt", title: "PR-Friendly Countries", desc: "A comparison of destinations with clearer study-to-PR pathways." },
      { icon: "FaListOl", title: "Points-Based System Guidance", desc: "Understanding how study, work, and language scores count toward PR." },
      { icon: "FaUserCheck", title: "Eligibility Assessment", desc: "An honest look at how close your profile is to PR requirements." },
      { icon: "FaSitemap", title: "Long-Term Roadmap", desc: "A staged plan from student visa through work visa to PR application." },
    ],
    checklist: [
      "Target country for eventual permanent residency",
      "Field of study relevant to in-demand occupation lists",
      "Current English test scores",
      "Academic qualifications and work experience (if any)",
      "Understanding of the country's points-based or provincial system",
      "Long-term budget for the full study-to-PR journey",
    ],
    faqs: [
      { q: "Which countries currently have the clearest PR pathways?", a: "This shifts as immigration policy changes, so we assess current points systems and occupation lists for your target countries before recommending one." },
      { q: "Does my field of study affect my PR chances?", a: "Significantly — some countries prioritize graduates in fields on their skilled-occupation lists, which can add meaningful points toward PR eligibility." },
      { q: "How long does the full journey from student visa to PR usually take?", a: "It varies by country and pathway, but many routes span 3–6 years from starting your degree to PR eligibility." },
      { q: "Can I still apply for PR-track programs if I'm undecided on staying long-term?", a: "Yes — choosing a PR-friendly country keeps that option open without obligating you to stay if your plans change." },
    ],
  },
};