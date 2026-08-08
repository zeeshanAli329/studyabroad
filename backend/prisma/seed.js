const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@studyabroad.com' },
    update: {},
    create: {
      email: 'admin@studyabroad.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'SUPER_ADMIN'
    }
  });
  console.log('Created admin user:', admin.email);

  // Create countries
  const countries = await Promise.all([
    prisma.country.upsert({
      where: { slug: 'canada' },
      update: {},
      create: {
        name: 'Canada',
        slug: 'canada',
        description: 'Canada is known for its high-quality education system, multicultural society, and welcoming environment for international students.',
        flag: '🇨🇦',
        capital: 'Ottawa',
        currency: 'CAD',
        language: 'English, French',
        dialCode: '+1',
        status: 'PUBLISHED'
      }
    }),
    prisma.country.upsert({
      where: { slug: 'uk' },
      update: {},
      create: {
        name: 'United Kingdom',
        slug: 'uk',
        description: 'The UK offers world-class education with historic universities and a rich cultural heritage.',
        flag: '🇬🇧',
        capital: 'London',
        currency: 'GBP',
        language: 'English',
        dialCode: '+44',
        status: 'PUBLISHED'
      }
    }),
    prisma.country.upsert({
      where: { slug: 'australia' },
      update: {},
      create: {
        name: 'Australia',
        slug: 'australia',
        description: 'Australia is a popular destination for international students, offering excellent education and a high quality of life.',
        flag: '🇦🇺',
        capital: 'Canberra',
        currency: 'AUD',
        language: 'English',
        dialCode: '+61',
        status: 'PUBLISHED'
      }
    }),
    prisma.country.upsert({
      where: { slug: 'usa' },
      update: {},
      create: {
        name: 'United States',
        slug: 'usa',
        description: 'The USA is home to many of the world\'s top universities and offers diverse educational opportunities.',
        flag: '🇺🇸',
        capital: 'Washington, D.C.',
        currency: 'USD',
        language: 'English',
        dialCode: '+1',
        status: 'PUBLISHED'
      }
    }),
    prisma.country.upsert({
      where: { slug: 'germany' },
      update: {},
      create: {
        name: 'Germany',
        slug: 'germany',
        description: 'Germany offers tuition-free education at public universities and is known for its engineering and research programs.',
        flag: '🇩🇪',
        capital: 'Berlin',
        currency: 'EUR',
        language: 'German',
        dialCode: '+49',
        status: 'PUBLISHED'
      }
    }),
    prisma.country.upsert({
      where: { slug: 'new-zealand' },
      update: {},
      create: {
        name: 'New Zealand',
        slug: 'new-zealand',
        description: 'New Zealand provides excellent education in a safe and beautiful environment.',
        flag: '🇳🇿',
        capital: 'Wellington',
        currency: 'NZD',
        language: 'English, Māori',
        dialCode: '+64',
        status: 'PUBLISHED'
      }
    })
  ]);
  console.log('Created countries:', countries.length);

  // Create universities
  const universities = await Promise.all([
    prisma.university.upsert({
      where: { slug: 'university-of-toronto' },
      update: {},
      create: {
        name: 'University of Toronto',
        slug: 'university-of-toronto',
        countryId: countries[0].id,
        description: 'A top public research university in Canada.',
        ranking: 25,
        founded: 1827,
        website: 'https://www.utoronto.ca',
        location: 'Toronto, Ontario',
        status: 'PUBLISHED'
      }
    }),
    prisma.university.upsert({
      where: { slug: 'university-of-oxford' },
      update: {},
      create: {
        name: 'University of Oxford',
        slug: 'university-of-oxford',
        countryId: countries[1].id,
        description: 'The oldest university in the English-speaking world.',
        ranking: 1,
        founded: 1096,
        website: 'https://www.ox.ac.uk',
        location: 'Oxford, England',
        status: 'PUBLISHED'
      }
    }),
    prisma.university.upsert({
      where: { slug: 'university-of-melbourne' },
      update: {},
      create: {
        name: 'University of Melbourne',
        slug: 'university-of-melbourne',
        countryId: countries[2].id,
        description: 'A leading Australian research university.',
        ranking: 33,
        founded: 1853,
        website: 'https://www.unimelb.edu.au',
        location: 'Melbourne, Victoria',
        status: 'PUBLISHED'
      }
    }),
    prisma.university.upsert({
      where: { slug: 'harvard-university' },
      update: {},
      create: {
        name: 'Harvard University',
        slug: 'harvard-university',
        countryId: countries[3].id,
        description: 'An Ivy League research university in Cambridge, Massachusetts.',
        ranking: 3,
        founded: 1636,
        website: 'https://www.harvard.edu',
        location: 'Cambridge, Massachusetts',
        status: 'PUBLISHED'
      }
    }),
    prisma.university.upsert({
      where: { slug: 'technical-university-of-munich' },
      update: {},
      create: {
        name: 'Technical University of Munich',
        slug: 'technical-university-of-munich',
        countryId: countries[4].id,
        description: 'A leading technical university in Germany.',
        ranking: 50,
        founded: 1868,
        website: 'https://www.tum.de',
        location: 'Munich, Bavaria',
        status: 'PUBLISHED'
      }
    })
  ]);
  console.log('Created universities:', universities.length);

  // Create scholarships
  const scholarships = await Promise.all([
    prisma.scholarship.upsert({
      where: { slug: 'canada-graduate-scholarships' },
      update: {},
      create: {
        title: 'Canada Graduate Scholarships',
        slug: 'canada-graduate-scholarships',
        shortDescription: 'Merit-based scholarships for Canadian and international graduate students.',
        description: 'Merit-based scholarships for Canadian and international graduate students pursuing advanced degrees at Canadian universities.',
        universityId: universities[0].id,
        countryId: countries[0].id,
        degreeLevel: 'Masters, PhD',
        fieldOfStudy: 'All Fields',
        funding: 'Full tuition + stipend',
        amount: '$50,000',
        currency: 'CAD',
        deadline: new Date('2026-12-15'),
        eligibility: 'Open to Canadian and international students pursuing graduate studies.',
        requirements: 'Minimum GPA of 3.5, research proposal required.',
        benefits: 'Full tuition coverage, living stipend, research funding.',
        applicationUrl: 'https://example.com/apply',
        featured: true,
        status: 'PUBLISHED'
      }
    }),
    prisma.scholarship.upsert({
      where: { slug: 'rhodes-scholarship' },
      update: {},
      create: {
        title: 'Rhodes Scholarship',
        slug: 'rhodes-scholarship',
        shortDescription: 'One of the oldest and most prestigious international scholarship programs.',
        description: 'The Rhodes Scholarship is one of the oldest and most prestigious international scholarship programs, enabling outstanding young people from around the world to study at the University of Oxford.',
        universityId: universities[1].id,
        countryId: countries[1].id,
        degreeLevel: 'Masters, PhD',
        fieldOfStudy: 'All Fields',
        funding: 'Full tuition + stipend',
        amount: '£30,000+',
        currency: 'GBP',
        deadline: new Date('2026-10-15'),
        eligibility: 'Open to students from selected countries.',
        requirements: 'Academic excellence, leadership potential, commitment to service.',
        benefits: 'Full tuition, living stipend, airfare, health insurance.',
        applicationUrl: 'https://example.com/apply',
        featured: true,
        status: 'PUBLISHED'
      }
    }),
    prisma.scholarship.upsert({
      where: { slug: 'australia-awards-scholarships' },
      update: {},
      create: {
        title: 'Australia Awards Scholarships',
        slug: 'australia-awards-scholarships',
        shortDescription: 'Australian government scholarships for international students.',
        description: 'Australia Awards are prestigious international scholarships funded by the Australian Government that aim to contribute to the development needs of Australia\'s partner countries.',
        countryId: countries[2].id,
        degreeLevel: 'Bachelors, Masters, PhD',
        fieldOfStudy: 'All Fields',
        funding: 'Full tuition + stipend',
        amount: 'AUD 50,000+',
        currency: 'AUD',
        deadline: new Date('2026-11-30'),
        eligibility: 'Citizens of eligible countries.',
        requirements: 'Minimum age 25, English proficiency, leadership potential.',
        benefits: 'Full tuition, living expenses, airfare, health insurance.',
        applicationUrl: 'https://example.com/apply',
        featured: false,
        status: 'PUBLISHED'
      }
    }),
    prisma.scholarship.upsert({
      where: { slug: 'fulbright-foreign-student-program' },
      update: {},
      create: {
        title: 'Fulbright Foreign Student Program',
        slug: 'fulbright-foreign-student-program',
        shortDescription: 'U.S. government scholarship for international graduate students.',
        description: 'The Fulbright Foreign Student Program enables graduate students, young professionals and artists from abroad to study and conduct research in the United States.',
        countryId: countries[3].id,
        degreeLevel: 'Masters, PhD',
        fieldOfStudy: 'All Fields',
        funding: 'Full tuition + stipend',
        amount: '$40,000+',
        currency: 'USD',
        deadline: new Date('2026-10-01'),
        eligibility: 'Citizens of eligible countries.',
        requirements: 'Bachelor\'s degree, English proficiency, academic excellence.',
        benefits: 'Tuition, living stipend, health insurance, airfare.',
        applicationUrl: 'https://example.com/apply',
        featured: false,
        status: 'PUBLISHED'
      }
    })
  ]);
  console.log('Created scholarships:', scholarships.length);

  // Create blog posts
  const blogs = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: 'top-10-countries-international-students-2026' },
      update: {},
      create: {
        title: 'Top 10 Countries for International Students in 2026',
        slug: 'top-10-countries-international-students-2026',
        excerpt: 'Discover the best destinations for studying abroad this year.',
        content: 'Full article content here...',
        category: 'Study Abroad',
        author: 'Admin',
        featured: true,
        status: 'PUBLISHED',
        publishedAt: new Date()
      }
    }),
    prisma.blogPost.upsert({
      where: { slug: 'complete-guide-student-visa-applications' },
      update: {},
      create: {
        title: 'Complete Guide to Student Visa Applications',
        slug: 'complete-guide-student-visa-applications',
        excerpt: 'Everything you need to know about applying for a student visa.',
        content: 'Full article content here...',
        category: 'Visa Guide',
        author: 'Admin',
        featured: false,
        status: 'PUBLISHED',
        publishedAt: new Date()
      }
    }),
    prisma.blogPost.upsert({
      where: { slug: 'scholarship-application-tips' },
      update: {},
      create: {
        title: 'Scholarship Application Tips That Actually Work',
        slug: 'scholarship-application-tips',
        excerpt: 'Expert advice on securing scholarships for your education.',
        content: 'Full article content here...',
        category: 'Scholarships',
        author: 'Admin',
        featured: false,
        status: 'PUBLISHED',
        publishedAt: new Date()
      }
    })
  ]);
  console.log('Created blog posts:', blogs.length);

  // Create FAQs
  const faqs = await Promise.all([
    prisma.fAQ.upsert({
      where: { id: 'faq-1' },
      update: {},
      create: {
        id: 'faq-1',
        question: 'What documents do I need for a student visa?',
        answer: 'Typically you need a valid passport, acceptance letter from the university, proof of funds, visa application form, and passport-sized photos.',
        category: 'Visa',
        order: 1,
        status: 'PUBLISHED'
      }
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-2' },
      update: {},
      create: {
        id: 'faq-2',
        question: 'How do I apply for scholarships?',
        answer: 'Research available scholarships, check eligibility requirements, prepare necessary documents, and submit applications before deadlines.',
        category: 'Scholarships',
        order: 2,
        status: 'PUBLISHED'
      }
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-3' },
      update: {},
      create: {
        id: 'faq-3',
        question: 'Can I work while studying abroad?',
        answer: 'Many countries allow international students to work part-time during their studies. Check the specific regulations for your destination country.',
        category: 'General',
        order: 3,
        status: 'PUBLISHED'
      }
    })
  ]);
  console.log('Created FAQs:', faqs.length);

  // Create testimonials
  const testimonials = await Promise.all([
    prisma.testimonial.create({
      data: {
        name: 'Sarah Johnson',
        role: 'Masters Student, Canada',
        content: 'The visa application process was smooth thanks to the excellent guidance I received. I\'m now pursuing my dream degree in Toronto!',
        rating: 5
      }
    }),
    prisma.testimonial.create({
      data: {
        name: 'Michael Chen',
        role: 'PhD Student, UK',
        content: 'Found the perfect scholarship for my research. The team was incredibly helpful throughout the application process.',
        rating: 5
      }
    })
  ]);
  console.log('Created testimonials:', testimonials.length);

  // Create site settings
  const settings = await prisma.siteSettings.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      siteName: 'Study Abroad Platform',
      contactEmail: 'info@studyabroad.com',
      phone: '+1 234 567 890',
      address: '123 Education Street, Learning City, World',
      defaultSeoTitle: 'Study Abroad Platform - Visa & Education Consulting',
      defaultSeoDescription: 'Your trusted partner for study abroad, visa assistance, and international education opportunities.'
    }
  });
  console.log('Created site settings');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
