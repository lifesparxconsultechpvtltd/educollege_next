
export interface ProgramPageData {
    id: string;
    title: string;
    category: string;
    description: string;
    duration: number;
    fees: number;
    mode: string;
    accreditation: string[];
    curriculum: string[];
    eligibility: string[];
    featured: boolean;
    university: {
        id: string;
        name: string;
    };
}

// Sample data
export const programsPageData: ProgramPageData[] = [
     // ==================== LPU ONLINE PROGRAMS ====================
  {
    id: "lpu-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-entitled online MBA program with multiple specializations in Finance, Marketing, HR, Operations, and more. Industry-aligned curriculum with placement support.",
    duration: 24,
    fees: 72800,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++", "AICTE Approved"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations Management",
      "Business Analytics",
      "Entrepreneurship Development",
      "Project Management"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Work experience preferred but not mandatory"
    ],
    featured: true,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Two-year online MCA program focusing on advanced computing, programming, and software development. Mathematics at 10+2 or graduation level required.",
    duration: 24,
    fees: 74000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++", "AICTE Approved"],
    curriculum: [
      "Advanced Data Structures",
      "Database Management Systems",
      "Software Engineering",
      "Web Technologies",
      "Machine Learning",
      "Cloud Computing",
      "Mobile Application Development",
      "Cyber Security"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Mathematics at 10+2 level or graduation level",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-mcom",
    title: "M.Com (Master of Commerce)",
    category: "Commerce",
    description: "Online postgraduate program in Commerce covering advanced topics in accounting, finance, taxation, and business management.",
    duration: 24,
    fees: 70100,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "Advanced Accounting",
      "Corporate Finance",
      "Income Tax & GST",
      "Business Statistics",
      "Financial Markets",
      "International Business",
      "E-Commerce",
      "Research Methodology"
    ],
    eligibility: [
      "Bachelor's degree in Commerce or related field",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-ma-english",
    title: "MA English",
    category: "Arts",
    description: "Master of Arts in English covering literature, linguistics, and communication skills with flexible online learning.",
    duration: 24,
    fees: 80000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "British Literature",
      "American Literature",
      "Indian Writing in English",
      "Literary Criticism",
      "Linguistics",
      "Communication Skills",
      "Cultural Studies",
      "Research Methodology"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-msc-mathematics",
    title: "M.Sc Mathematics",
    category: "Science",
    description: "Online Master of Science in Mathematics focusing on advanced mathematical topics and their applications.",
    duration: 24,
    fees: 56600,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "Real Analysis",
      "Complex Analysis",
      "Abstract Algebra",
      "Differential Equations",
      "Numerical Methods",
      "Operations Research",
      "Mathematical Modeling",
      "Discrete Mathematics"
    ],
    eligibility: [
      "Bachelor's degree with Mathematics as a subject",
      "Engineering degree or equivalent",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Three-year online undergraduate program in business administration with specializations in Marketing, Finance, HR, and International Business.",
    duration: 36,
    fees: 84900,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "Business Communication",
      "Principles of Management",
      "Marketing Management",
      "Financial Accounting",
      "Human Resource Management",
      "Business Law",
      "Entrepreneurship",
      "Digital Marketing"
    ],
    eligibility: [
      "10+2 from a recognized board",
      "Any stream (Commerce/Science/Arts)",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Three-year online BCA program covering programming, web development, database management, and software engineering.",
    duration: 36,
    fees: 125400,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "Programming in C",
      "Data Structures",
      "Database Management Systems",
      "Web Development",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Python Programming"
    ],
    eligibility: [
      "10+2 from a recognized board",
      "Mathematics/Computer Science preferred",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-bcom",
    title: "B.Com (Bachelor of Commerce)",
    category: "Commerce",
    description: "Online undergraduate commerce degree covering accounting, finance, taxation, and business studies.",
    duration: 36,
    fees: 84900,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "Financial Accounting",
      "Business Economics",
      "Corporate Accounting",
      "Income Tax",
      "Business Law",
      "Cost Accounting",
      "Banking & Insurance",
      "E-Commerce"
    ],
    eligibility: [
      "10+2 from a recognized board",
      "Commerce stream preferred",
      "Minimum 45% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },
  {
    id: "lpu-online-ba",
    title: "BA (Bachelor of Arts)",
    category: "Arts",
    description: "Online Bachelor of Arts program with various specializations in humanities and social sciences.",
    duration: 36,
    fees: 84900,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++"],
    curriculum: [
      "English Literature",
      "History",
      "Political Science",
      "Sociology",
      "Psychology",
      "Economics",
      "Communication Skills",
      "Environmental Studies"
    ],
    eligibility: [
      "10+2 from a recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "lpu",
      name: "Lovely Professional University (LPU)"
    }
  },

  // ==================== CHANDIGARH UNIVERSITY ONLINE PROGRAMS ====================
  {
    id: "cu-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-approved online MBA with 23 specializations including Harvard Business Publishing case studies and simulation-based learning.",
    duration: 24,
    fees: 158000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations Management",
      "Business Analytics",
      "Harvard Case Studies",
      "Business Simulations"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Work experience beneficial"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-mba-business-analytics",
    title: "MBA in Business Analytics",
    category: "Management",
    description: "Specialized MBA program focusing on data-driven decision making, analytics, and business intelligence with industry tools.",
    duration: 24,
    fees: 158000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Business Analytics Fundamentals",
      "Predictive Analytics",
      "Data Mining",
      "Big Data Technologies",
      "Statistical Analysis",
      "Business Intelligence Tools",
      "Machine Learning for Business",
      "Analytics-Driven Marketing"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Basic knowledge of statistics preferred"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Online MCA program with focus on software development, AI, and emerging technologies with practical learning approach.",
    duration: 24,
    fees: 120000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Advanced Programming",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Mobile Application Development",
      "Cyber Security",
      "Big Data Analytics"
    ],
    eligibility: [
      "BCA/B.Tech or any graduation with Mathematics at 10+2 level",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-msc-data-science",
    title: "M.Sc Data Science",
    category: "Science",
    description: "Comprehensive data science program covering machine learning, AI, statistical analysis, and big data technologies.",
    duration: 24,
    fees: 100000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Statistical Methods",
      "Machine Learning",
      "Deep Learning",
      "Data Mining",
      "Big Data Analytics",
      "Python for Data Science",
      "R Programming",
      "Data Visualization"
    ],
    eligibility: [
      "Bachelor's degree in Science/IT/Computer Applications",
      "Mathematics/Statistics background preferred",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-ma-english",
    title: "MA English",
    category: "Arts",
    description: "Master of Arts in English with focus on literature, linguistics, and communication in digital age.",
    duration: 24,
    fees: 75000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "British Literature",
      "American Literature",
      "Indian Writing in English",
      "Literary Theory",
      "Linguistics",
      "Communication Studies",
      "Digital Humanities",
      "Creative Writing"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-ma-jmc",
    title: "MA Journalism & Mass Communication",
    category: "Arts",
    description: "Postgraduate program in journalism covering digital media, reporting, and communication strategies for modern media landscape.",
    duration: 24,
    fees: 75000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Digital Journalism",
      "Media Management",
      "Communication Research",
      "Media Laws & Ethics",
      "Advertising & PR",
      "Social Media Journalism",
      "Documentary Production",
      "News Reporting"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Online BBA with specializations in Marketing, HR, Finance, and more. Includes Harvard certifications and KPMG modules.",
    duration: 36,
    fees: 123750,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Business Management",
      "Marketing Principles",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Economics",
      "Business Law",
      "Entrepreneurship",
      "Digital Marketing"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-bba-business-analytics",
    title: "BBA in Business Analytics",
    category: "Management",
    description: "Undergraduate program combining business management with data analytics and business intelligence skills.",
    duration: 36,
    fees: 123750,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Business Fundamentals",
      "Data Analytics",
      "Statistical Methods",
      "Business Intelligence",
      "Excel for Analytics",
      "Data Visualization",
      "Marketing Analytics",
      "Financial Analytics"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Online BCA program covering IT fundamentals, programming, and application development with practical labs.",
    duration: 36,
    fees: 123750,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Programming in C/C++",
      "Data Structures",
      "Database Management",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Java Programming",
      "Mobile App Development"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },
  {
    id: "cu-online-ba-jmc",
    title: "BA Journalism & Mass Communication",
    category: "Arts",
    description: "Undergraduate program in journalism covering digital media, reporting, and communication for modern media industry.",
    duration: 36,
    fees: 123750,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Introduction to Journalism",
      "Media Writing",
      "Digital Media",
      "Broadcast Journalism",
      "Public Relations",
      "Media Laws",
      "Photography & Videography",
      "Social Media Marketing"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "cu",
      name: "Chandigarh University"
    }
  },

  // ==================== MANIPAL UNIVERSITY ONLINE PROGRAMS ====================
  {
    id: "manipal-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-approved online MBA from prestigious Manipal University with specializations and access to 10K+ courses from global universities.",
    duration: 24,
    fees: 200000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Operations Management",
      "Human Resource Management",
      "Business Analytics",
      "International Business",
      "Project Management"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Work experience preferred"
    ],
    featured: true,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Two-year online MCA program with focus on programming, AI, data systems, and emerging technologies.",
    duration: 24,
    fees: 120000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Advanced Programming",
      "Software Engineering",
      "Database Management",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Cyber Security",
      "Mobile Computing"
    ],
    eligibility: [
      "BCA/B.Tech or graduation with Mathematics at 10+2 level",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-mcom",
    title: "M.Com (Master of Commerce)",
    category: "Commerce",
    description: "Online postgraduate commerce program covering advanced accounting, finance, and business practices.",
    duration: 24,
    fees: 130000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Advanced Accounting",
      "Corporate Finance",
      "Taxation",
      "Business Economics",
      "Financial Markets",
      "International Finance",
      "Auditing",
      "Business Research"
    ],
    eligibility: [
      "Bachelor's degree in Commerce or related field",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-ma-jmc",
    title: "MA Journalism & Mass Communication",
    category: "Arts",
    description: "Master program in journalism covering media, digital storytelling, and communication strategies.",
    duration: 24,
    fees: 100000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Media Studies",
      "Digital Journalism",
      "Communication Theory",
      "Media Management",
      "Broadcast Journalism",
      "Media Laws & Ethics",
      "Public Relations",
      "Content Creation"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-msc-data-science",
    title: "M.Sc Data Science",
    category: "Science",
    description: "Comprehensive data science program with virtual lab experience covering Python, SQL, and advanced analytics.",
    duration: 24,
    fees: 100000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Statistical Analysis",
      "Machine Learning",
      "Deep Learning",
      "Big Data Technologies",
      "Python Programming",
      "R Programming",
      "Data Visualization",
      "Natural Language Processing"
    ],
    eligibility: [
      "Bachelor's degree in Science/IT/Computer Applications",
      "Mathematics/Statistics background preferred",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Online BBA program from Manipal with focus on core business concepts, entrepreneurship, and managerial skills.",
    duration: 36,
    fees: 160000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Business Management",
      "Marketing Management",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Economics",
      "Business Communication",
      "Entrepreneurship Development",
      "Business Law"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Three-year BCA program with specializations in Data Science, Cloud Computing, and Cyber Security.",
    duration: 36,
    fees: 135000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Programming Fundamentals",
      "Data Structures",
      "Database Management",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Machine Learning Basics",
      "Cloud Computing"
    ],
    eligibility: [
      "10+2 or 10+3 Diploma from recognized board",
      "Minimum 45% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },
  {
    id: "manipal-online-bcom",
    title: "B.Com (Bachelor of Commerce)",
    category: "Commerce",
    description: "Online undergraduate commerce degree covering finance, accounting, and business laws from Manipal campuses.",
    duration: 36,
    fees: 99000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Financial Accounting",
      "Business Economics",
      "Corporate Accounting",
      "Income Tax",
      "Business Law",
      "Cost Accounting",
      "Banking & Finance",
      "Business Communication"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 45% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "manipal",
      name: "Manipal University"
    }
  },

  // ==================== DY PATIL UNIVERSITY ONLINE PROGRAMS ====================
  {
    id: "dypatil-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-DEB approved online MBA program with 11 specializations including Healthcare Management, Marketing, Finance, and HR. Industry partnerships with American Express, HDFC, Bajaj, and more.",
    duration: 24,
    fees: 189400,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved", "AIU", "WES"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Healthcare Management",
      "Operations Management",
      "Business Analytics",
      "Project Management",
      "Investment Banking",
      "Retail Operations",
      "Logistics & Supply Chain"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Work experience beneficial but not mandatory"
    ],
    featured: true,
    university: {
      id: "dypatil",
      name: "DY Patil University"
    }
  },
  {
    id: "dypatil-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Three-year online BBA with 8 specializations including General, Logistics, Marketing, Event Management, HR, Retail Operations, Hospital Management, and Investment Banking.",
    duration: 36,
    fees: 90000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved"],
    curriculum: [
      "Business Management Fundamentals",
      "Marketing Management",
      "Financial Accounting",
      "Human Resource Management",
      "Organizational Behavior",
      "Business Economics",
      "Business Communication",
      "Entrepreneurship",
      "Digital Marketing",
      "Supply Chain Management"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 35% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "dypatil",
      name: "DY Patil University"
    }
  },
  {
    id: "dypatil-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Online BCA program covering programming, software development, and IT fundamentals with 24x7 learning support and digital library access.",
    duration: 36,
    fees: 90000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Programming in C/C++",
      "Data Structures",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Java Programming",
      "Python Programming",
      "Mobile Application Development"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 35% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "dypatil",
      name: "DY Patil University"
    }
  },
  {
    id: "dypatil-certificate-digital-marketing",
    title: "Certificate in Digital Marketing",
    category: "Certificate",
    description: "Professional certificate program covering SEO, SEM, social media marketing, content strategy, and digital analytics for career enhancement.",
    duration: 6,
    fees: 28000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "Digital Advertising"
    ],
    eligibility: [
      "10+2 or equivalent from recognized board"
    ],
    featured: false,
    university: {
      id: "dypatil",
      name: "DY Patil University"
    }
  },
  {
    id: "dypatil-certificate-healthcare-management",
    title: "Certificate in Healthcare Management",
    category: "Certificate",
    description: "Specialized certificate program for healthcare professionals covering hospital administration, healthcare quality, and medical services management.",
    duration: 6,
    fees: 28000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Healthcare System Overview",
      "Hospital Administration",
      "Healthcare Quality Management",
      "Medical Records Management",
      "Healthcare Laws & Ethics",
      "Patient Care Management",
      "Healthcare Finance",
      "Health Information Systems"
    ],
    eligibility: [
      "10+2 or equivalent from recognized board"
    ],
    featured: false,
    university: {
      id: "dypatil",
      name: "DY Patil University"
    }
  },

  // ==================== VIT ONLINE (VITOL) PROGRAMS ====================
  {
    id: "vit-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-approved online MBA from VIT with specializations in Marketing, Finance, HR, Operations, and more. Access to VIT's global network and industry connections.",
    duration: 24,
    fees: 180000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++", "NIRF Ranked"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations Management",
      "Business Analytics",
      "International Business",
      "Entrepreneurship Development",
      "Supply Chain Management",
      "Digital Transformation"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation",
      "Work experience preferred"
    ],
    featured: true,
    university: {
      id: "vit",
      name: "Vellore Institute of Technology (VIT)",
    }
  },
  {
    id: "vit-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Two-year online MCA program from prestigious VIT focusing on advanced computing, AI, machine learning, and software development.",
    duration: 24,
    fees: 150000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++", "NIRF Ranked"],
    curriculum: [
      "Advanced Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Cyber Security",
      "Mobile Application Development",
      "Big Data Analytics"
    ],
    eligibility: [
      "BCA/B.Tech or graduation with Mathematics at 10+2 level",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "vit",
      name: "Vellore Institute of Technology (VIT)"
    }
  },
  {
    id: "vit-online-msc-data-science",
    title: "M.Sc Data Science",
    category: "Science",
    description: "Comprehensive data science program from VIT covering statistical analysis, machine learning, AI, and big data technologies with hands-on projects.",
    duration: 24,
    fees: 140000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A++", "NIRF Ranked"],
    curriculum: [
      "Statistical Methods",
      "Machine Learning",
      "Deep Learning",
      "Data Mining & Warehousing",
      "Big Data Analytics",
      "Python for Data Science",
      "R Programming",
      "Data Visualization",
      "Natural Language Processing",
      "Business Intelligence"
    ],
    eligibility: [
      "Bachelor's degree in Science/IT/Computer Applications",
      "Mathematics/Statistics background preferred",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "vit",
      name: "Vellore Institute of Technology (VIT)"
    }
  },

  // ==================== NMIMS ONLINE PROGRAMS ====================
  {
    id: "nmims-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "Premium online MBA from NMIMS (NIRF Rank 24 in Management) with 5 specializations. UGC-DEB approved with A+ NAAC accreditation and Category I Autonomy status.",
    duration: 24,
    fees: 220000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "UGC Category I Autonomy", "NIRF Ranked 24"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations & Data Science",
      "Business Analytics",
      "Corporate Finance",
      "Consumer Behavior",
      "Supply Chain Management",
      "Business Intelligence"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation (45% for reserved categories)"
    ],
    featured: true,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)",
    }
  },
  {
    id: "nmims-online-mba-wx",
    title: "MBA (Working Executive)",
    category: "Management",
    description: "Exclusive MBA program for experienced working professionals with 3+ years of work experience. Designed for mid to senior-level managers.",
    duration: 24,
    fees: 400000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "UGC Category I Autonomy", "NIRF Ranked 24"],
    curriculum: [
      "Leadership & Strategic Management",
      "Financial Management",
      "Marketing Strategy",
      "Operations Excellence",
      "Supply Chain Management",
      "Business Analytics",
      "Organizational Behavior",
      "Corporate Governance",
      "Innovation Management",
      "Change Management"
    ],
    eligibility: [
      "Bachelor's degree with 55% marks",
      "Minimum 3 years of work experience",
      "Personal interview required"
    ],
    featured: true,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)"
    }
  },
  {
    id: "nmims-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Undergraduate business management program from India's premier management institute with focus on entrepreneurship and innovation.",
    duration: 36,
    fees: 165000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "UGC Category I Autonomy"],
    curriculum: [
      "Business Management Principles",
      "Marketing Fundamentals",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Economics",
      "Business Statistics",
      "Business Communication",
      "Entrepreneurship",
      "Digital Marketing",
      "Business Law"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)",
    }
  },
  {
    id: "nmims-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Online BCA program from NMIMS covering programming, web development, databases, and emerging technologies with practical assignments.",
    duration: 36,
    fees: 135000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Programming Fundamentals",
      "Data Structures",
      "Database Management",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Java Programming",
      "Python Programming",
      "Mobile App Development"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)",
    }
  },
  {
    id: "nmims-certificate-business-management",
    title: "Certificate in Business Management",
    category: "Certificate",
    description: "6-month certification program providing foundational knowledge in business concepts, management principles, and entrepreneurship.",
    duration: 6,
    fees: 55000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Business Management Basics",
      "Marketing Principles",
      "Financial Concepts",
      "HR Fundamentals",
      "Operations Overview",
      "Business Communication",
      "Entrepreneurship Basics",
      "Business Ethics"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream"
    ],
    featured: false,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)"
    }
  },
  {
    id: "nmims-online-ma-public-policy",
    title: "MA Public Policy",
    category: "Arts",
    description: "Master of Arts in Public Policy focusing on policy analysis, governance, and public administration for aspiring policy makers and civil servants.",
    duration: 24,
    fees: 150000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Public Policy Analysis",
      "Governance & Administration",
      "Policy Research Methods",
      "Economic Policy",
      "Social Policy",
      "Environmental Policy",
      "Public Finance",
      "International Relations"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "nmims",
      name: "Narsee Monjee Institute of Management Studies (NMIMS)"
    }
  },

  // ==================== VIVEKANANDA GLOBAL UNIVERSITY (VGU) ONLINE PROGRAMS ====================
  {
    id: "vgu-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-entitled online MBA from NAAC A+ accredited VGU with 7 specializations. Features 100% placement assistance, 500+ hiring partners, and industry certifications from EXIN, AWS, Redhat, and Neo4j.",
    duration: 24,
    fees: 100000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+", "AICTE Approved", "AIU"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations Management",
      "Information Technology Management",
      "Agri-Business Management",
      "Healthcare Management",
      "International Business Management"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "vgu",
      name: "Vivekananda Global University (VGU)"
    }
  },
  {
    id: "vgu-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Two-year online MCA program with focus on advanced computing, AI, machine learning, and software development. Industry-led dynamic curriculum.",
    duration: 24,
    fees: 90000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Advanced Accounting",
      "Corporate Finance",
      "Taxation & GST",
      "Business Economics",
      "Financial Markets",
      "International Finance",
      "Auditing & Assurance",
      "Business Research Methods"
    ],
    eligibility: [
      "Bachelor's degree in Commerce or related field",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "muj",
      name: "Manipal University Jaipur"
    }
  },
  {
    id: "muj-online-ma-english",
    title: "MA English",
    category: "Arts",
    description: "Master of Arts in English covering literature, linguistics, and communication with focus on critical analysis and creative expression.",
    duration: 24,
    fees: 80000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "British Literature",
      "American Literature",
      "Indian English Literature",
      "Literary Criticism",
      "Linguistics & Phonetics",
      "Communication Skills",
      "Comparative Literature",
      "Research Methodology"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "muj",
      name: "Manipal University Jaipur"
    }
  },
  {
    id: "muj-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Three-year online BBA from Manipal University Jaipur with focus on entrepreneurship, digital business, and management fundamentals.",
    duration: 36,
    fees: 135000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Business Management",
      "Marketing Management",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Economics",
      "Business Communication",
      "Entrepreneurship Development",
      "Digital Marketing",
      "Business Law",
      "Business Analytics"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "muj",
      name: "Manipal University Jaipur"
    }
  },
  {
    id: "muj-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Online BCA program with specializations and comprehensive IT curriculum covering programming, databases, and web technologies.",
    duration: 36,
    fees: 108000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Programming Fundamentals",
      "Data Structures",
      "Database Management",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Java Programming",
      "Python Programming",
      "Cloud Computing Basics"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "muj",
      name: "Manipal University Jaipur"
    }
  },
  {
    id: "muj-online-bcom",
    title: "B.Com (Bachelor of Commerce)",
    category: "Commerce",
    description: "Online undergraduate commerce degree covering accounting, finance, taxation, and business studies from Manipal University Jaipur.",
    duration: 36,
    fees: 81000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A+"],
    curriculum: [
      "Financial Accounting",
      "Business Economics",
      "Corporate Accounting",
      "Income Tax & GST",
      "Business Law",
      "Cost Accounting",
      "Banking & Insurance",
      "Business Communication",
      "E-Commerce",
      "Financial Management"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "muj",
      name: "Manipal University Jaipur"
    }
  },

  // ==================== SIKKIM MANIPAL UNIVERSITY ONLINE PROGRAMS ====================
  {
    id: "smu-online-mba",
    title: "MBA (Master of Business Administration)",
    category: "Management",
    description: "UGC-DEB approved online MBA from Sikkim Manipal University with 12 specializations. Pioneer in online education with 18+ years of experience and 3.5 lakh+ alumni.",
    duration: 24,
    fees: 144000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A", "AICTE Approved", "WES Approved"],
    curriculum: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations Management",
      "Business Analytics",
      "International Business",
      "Healthcare Management",
      "Banking & Finance",
      "Retail Management",
      "Supply Chain Management",
      "Information Technology Management"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "smu",
      name: "Sikkim Manipal University"
    }
  },
  {
    id: "smu-online-mca",
    title: "MCA (Master of Computer Applications)",
    category: "Computer Applications",
    description: "Two-year online MCA program with focus on advanced programming, software development, AI, and emerging technologies with virtual labs.",
    duration: 24,
    fees: 105000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A", "AICTE Approved"],
    curriculum: [
      "Advanced Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Cyber Security",
      "Web Technologies",
      "Mobile Application Development"
    ],
    eligibility: [
      "BCA/B.Tech or graduation with Mathematics at 10+2 level",
      "Minimum 50% marks in graduation"
    ],
    featured: true,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-msc-it",
    title: "M.Sc Information Technology",
    category: "Science",
    description: "Master of Science in IT covering advanced IT concepts, software systems, networking, and security with practical implementation.",
    duration: 24,
    fees: 95000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Advanced Software Engineering",
      "Database Systems",
      "Network Security",
      "Cloud Computing",
      "Data Mining & Warehousing",
      "Distributed Systems",
      "Information Security",
      "IoT & Applications"
    ],
    eligibility: [
      "Bachelor's degree in Science/IT/Computer Applications",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-ma-journalism",
    title: "MA Journalism & Mass Communication",
    category: "Arts",
    description: "Postgraduate program in journalism covering print, electronic, and digital media with focus on contemporary media practices.",
    duration: 24,
    fees: 70000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Media & Communication Theories",
      "Print Journalism",
      "Electronic Media",
      "Digital Journalism",
      "Media Management",
      "Media Laws & Ethics",
      "Public Relations",
      "Advertising & Marketing Communication"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University"
    }
  },
  {
    id: "smu-online-bba",
    title: "BBA (Bachelor of Business Administration)",
    category: "Management",
    description: "Three-year online BBA covering business fundamentals, entrepreneurship, and management skills with flexible learning options.",
    duration: 36,
    fees: 108000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Business Management",
      "Marketing Management",
      "Financial Accounting",
      "Organizational Behavior",
      "Business Economics",
      "Business Communication",
      "Entrepreneurship",
      "Business Law",
      "Human Resource Management",
      "Operations Management"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Computer Applications",
    description: "Online BCA program with comprehensive IT curriculum covering programming, databases, web development, and software engineering.",
    duration: 36,
    fees: 94500,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Programming in C/C++",
      "Data Structures",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Java Programming",
      "Python Programming",
      "E-Commerce"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: true,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-bcom",
    title: "B.Com (Bachelor of Commerce)",
    category: "Commerce",
    description: "Online undergraduate commerce degree covering accounting, finance, taxation, and business studies with flexible learning.",
    duration: 36,
    fees: 81000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Financial Accounting",
      "Business Economics",
      "Corporate Accounting",
      "Income Tax",
      "Business Law",
      "Cost Accounting",
      "Banking & Insurance",
      "E-Commerce",
      "Business Communication",
      "Company Law"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-ba",
    title: "BA (Bachelor of Arts)",
    category: "Arts",
    description: "Online Bachelor of Arts covering humanities and social sciences with flexible specialization options.",
    duration: 36,
    fees: 54000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "English",
      "History",
      "Political Science",
      "Sociology",
      "Economics",
      "Psychology",
      "Communication Skills",
      "Environmental Studies"
    ],
    eligibility: [
      "10+2 from recognized board",
      "Any stream",
      "Minimum 50% marks in 10+2"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-mcom",
    title: "M.Com (Master of Commerce)",
    category: "Commerce",
    description: "Online postgraduate commerce program covering advanced topics in accounting, finance, and business management.",
    duration: 24,
    fees: 72000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Advanced Accounting",
      "Corporate Finance",
      "Taxation & GST",
      "Business Economics",
      "Financial Markets",
      "International Business",
      "Auditing",
      "Research Methodology"
    ],
    eligibility: [
      "Bachelor's degree in Commerce or related field",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University",
    }
  },
  {
    id: "smu-online-ma-education",
    title: "MA Education",
    category: "Arts",
    description: "Master of Arts in Education focusing on educational theories, pedagogies, and contemporary teaching methodologies.",
    duration: 24,
    fees: 54000,
    mode: "Online",
    accreditation: ["UGC-DEB", "NAAC A"],
    curriculum: [
      "Educational Psychology",
      "Curriculum Development",
      "Educational Technology",
      "Educational Assessment",
      "Inclusive Education",
      "Educational Research",
      "Teaching Methodologies",
      "Educational Management"
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Minimum 50% marks in graduation"
    ],
    featured: false,
    university: {
      id: "smu",
      name: "Sikkim Manipal University"
    }
  }
];



/*
LPU University,
Chandigarh University,
Manipal University,
DY Patil University,
Vellore Institute of Technology (VIT),
Narsee Monjee Institute of Management Studies (NMIMS),
Vivekananda Global University (VGU),
Manipal University Sikim,
Manipal University Jaipur
*/