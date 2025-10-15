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
    icon: string;
    university: {
        id: string;
        name: string;
        logo: string;
    };
}

// Sample data
export const programsPageData: ProgramPageData[] = [
    {
        id: '1',
        title: 'Bachelor of Computer Science',
        category: 'Engineering',
        description: 'Comprehensive program covering software development, algorithms, data structures, and modern computing technologies.',
        duration: 4,
        fees: 50000,
        mode: 'Online',
        accreditation: ['NAAC A+', 'NBA'],
        curriculum: ['Data Structures', 'Algorithms', 'Web Development', 'AI/ML'],
        eligibility: ['10+2 with 60%', 'Mathematics mandatory'],
        featured: true,
        icon: '💻',
        university: {
            id: 'mit',
            name: 'MIT University',
            logo: '🎓'
        }
    },
    {
        id: '2',
        title: 'Master of Business Administration',
        category: 'Business',
        description: 'Advanced business program focusing on leadership, strategy, finance, and entrepreneurship.',
        duration: 2,
        fees: 75000,
        mode: 'Hybrid',
        accreditation: ['AACSB', 'AMBA'],
        curriculum: ['Strategic Management', 'Finance', 'Marketing', 'Operations'],
        eligibility: ['Bachelor degree', '2 years work experience'],
        featured: true,
        icon: '📊',
        university: {
            id: 'harvard',
            name: 'Harvard Business School',
            logo: '🏛️'
        }
    },
    {
        id: '3',
        title: 'Bachelor of Arts in Psychology',
        category: 'Arts',
        description: 'Study human behavior, mental processes, and therapeutic techniques.',
        duration: 3,
        fees: 35000,
        mode: 'On-Campus',
        accreditation: ['UGC', 'NAAC'],
        curriculum: ['Clinical Psychology', 'Cognitive Science', 'Research Methods'],
        eligibility: ['10+2 with 50%'],
        featured: false,
        icon: '🧠',
        university: {
            id: 'stanford',
            name: 'Stanford University',
            logo: '🌲'
        }
    },
    {
        id: '4',
        title: 'Data Science & Analytics',
        category: 'Engineering',
        description: 'Master statistical analysis, machine learning, and big data technologies.',
        duration: 2,
        fees: 60000,
        mode: 'Online',
        accreditation: ['AICTE', 'NBA'],
        curriculum: ['Python', 'Machine Learning', 'Big Data', 'Statistics'],
        eligibility: ['Bachelor in any field', 'Basic programming knowledge'],
        featured: true,
        icon: '📈',
        university: {
            id: 'iit',
            name: 'IIT Delhi',
            logo: '🔬'
        }
    },
    {
        id: '5',
        title: 'Digital Marketing',
        category: 'Business',
        description: 'Learn modern marketing strategies, SEO, social media, and analytics.',
        duration: 1,
        fees: 25000,
        mode: 'Online',
        accreditation: ['Google Certified', 'HubSpot'],
        curriculum: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
        eligibility: ['Any graduate'],
        featured: false,
        icon: '📱',
        university: {
            id: 'upgrad',
            name: 'upGrad',
            logo: '🚀'
        }
    },
    {
        id: '6',
        title: 'Civil Engineering',
        category: 'Engineering',
        description: 'Design and build infrastructure, from roads to skyscrapers.',
        duration: 4,
        fees: 55000,
        mode: 'On-Campus',
        accreditation: ['AICTE', 'NBA', 'NAAC A'],
        curriculum: ['Structural Engineering', 'Geotechnical', 'Environmental', 'Transportation'],
        eligibility: ['10+2 with Physics, Chemistry, Maths'],
        featured: false,
        icon: '🏗️',
        university: {
            id: 'nit',
            name: 'NIT Trichy',
            logo: '⚙️'
        }
    }
];