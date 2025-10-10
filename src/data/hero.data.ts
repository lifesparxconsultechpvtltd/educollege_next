import { AcademicCapIcon, BeakerIcon, BriefcaseIcon, ScaleIcon, PaintBrushIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Universities', href: '/universities' },
  { name: 'Programs', href: '/programs' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Compare', href: '/compare' },
  { name: 'Contact', href: '/contact' },
]

interface Universities {
    name: string;
    description: string;
    icon: string;
    location: string;
    naac: string;
    programs: string;
    established: string;
    address: string;
    highlights: string;
    image: string;
}


export const university: Universities[] = [
    {
        name: 'Lovely Professional University (LPU)',
        description: 'One of India’s top private universities known for innovation and diversity.',
        icon: '/images/lpu_logo.png',
        location: 'Phagwara, Punjab',
        naac: 'A++',
        programs: 'Engineering, Management, Law, Design, Agriculture, Arts, and more',
        established: '2005',
        address: 'Jalandhar-Delhi G.T. Road, Phagwara, Punjab 144411',
        highlights: '600-acre campus, 300+ programs, 200+ international tie-ups',
        image: '/images/lpu.jpg'
    },
    {
        name: 'Amity University',
        description: 'Leading private research university with global campuses and strong industry ties.',
        icon: '/images/amity_logo.png',
        location: 'Noida, Uttar Pradesh',
        naac: 'A+',
        programs: 'Engineering, Business, Law, Biotechnology, Media, and more',
        established: '2005',
        address: 'Sector 125, Noida, Uttar Pradesh 201313',
        highlights: 'Modern infrastructure, innovation-driven, strong global network',
        image: '/images/amity_1.jpg'
    },
    {
        name: 'Manipal Academy of Higher Education (MAHE)',
        description: 'A Deemed University recognized internationally for excellence in education and research.',
        icon: '/images/manipal_logo.png',
        location: 'Manipal, Karnataka',
        naac: 'A++',
        programs: 'Health Sciences, Engineering, Management, Humanities, and more',
        established: '1953',
        address: 'Tiger Circle Road, Manipal, Karnataka 576104',
        highlights: 'Top-ranked globally, diverse student body, strong research culture',
        image: '/images/manipal.jpg'
    },
    {
        name: 'SRM Institute of Science and Technology',
        description: 'Premier institute fostering innovation and high-quality research in multiple disciplines.',
        icon: '/images/srm_logo.png',
        location: 'Kattankulathur, Tamil Nadu',
        naac: 'A++',
        programs: 'Engineering, Medicine, Management, Law, Science, and Humanities',
        established: '1985',
        address: 'SRM Nagar, Kattankulathur, Chengalpattu, Tamil Nadu 603203',
        highlights: 'Global collaborations, modern campus, excellent placements',
        image: '/images/srm.jpg'
    },
];


export interface Program {
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
    icon: any;
    university: {
        id: string;
        name: string;
        logo: string;
    };
}

export const programs: Program[] = [
    {
        id: '1',
        title: 'Online MSc Economics (Master of Science in Economics)',
        category: 'MSc',
        description: 'The Online Master of Science in Economics (M.Sc Economics) program at LPU Online explores economic theories and policies equipping students with the analytical tools necessary to address complex economic issues and make informed decisions. MSc Economics Program having industry-oriented curriculum comes with weekend LIVE lectures by top faculty, Master Classes by experts, Flexible Online Exams, Placement Support, and much more.',
        duration: 2,
        fees: 16400,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A++'],
        curriculum: ['Research exposure', 'In demand skill improvement', 'IT skill'],
        eligibility: [`Bachelor's degree (any discipline) or equivalent`],
        featured: true,
        icon: AcademicCapIcon,
        university: {
            id: '1',
            name: 'LPU University',
            logo: '/images/lpu_logo.png',
        },
    },
    {
        id: '2',
        title: 'B.Tech Computer Science & Engineering',
        category: 'B.Tech',
        description: 'Master cutting-edge technologies including AI, Machine Learning, Cloud Computing, and Full-Stack Development. Industry-aligned curriculum with hands-on projects and internship opportunities. Get trained by industry experts with live projects and guaranteed placement support.',
        duration: 4,
        fees: 89000,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A++', 'AICTE'],
        curriculum: ['AI & Machine Learning', 'Cloud Computing', 'Full-Stack Development', 'Data Structures', 'Cybersecurity'],
        eligibility: ['10+2 with Physics, Chemistry & Mathematics', 'Minimum 50% aggregate marks'],
        featured: true,
        icon: ComputerDesktopIcon,
        university: {
            id: '1',
            name: 'LPU University',
            logo: '/images/lpu_logo.png',
        },
    },
    {
        id: '3',
        title: 'MBA (Master of Business Administration)',
        category: 'MBA',
        description: 'Comprehensive business education covering Strategic Management, Finance, Marketing, HR, and Entrepreneurship with industry mentorship and live case studies from top companies. Weekend LIVE sessions, guest lectures by industry leaders, and 100% placement assistance.',
        duration: 2,
        fees: 125000,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A+', 'NBA'],
        curriculum: ['Strategic Management', 'Financial Analysis', 'Digital Marketing', 'Leadership Skills', 'Business Analytics'],
        eligibility: [`Bachelor's degree (any discipline)`, `Minimum 50% aggregate marks`],
        featured: true,
        icon: BriefcaseIcon,
        university: {
            id: '1',
            name: 'Amity University',
            logo: '/images/amity_logo.png',
        },
    },
    {
        id: '4',
        title: 'Online MA Psychology',
        category: 'MA',
        description: 'Explore human behavior, cognitive processes, and mental health with research-based learning. Program includes counseling techniques, psychological assessment, and clinical practice modules. Flexible learning with recorded lectures and live doubt-clearing sessions.',
        duration: 2,
        fees: 42000,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A++'],
        curriculum: ['Clinical Psychology', 'Counseling Methods', 'Research Methodology', 'Behavioral Analysis', 'Psychotherapy'],
        eligibility: [`Bachelor's degree in Psychology or related field`, `Minimum 45% aggregate marks`],
        featured: true,
        icon: AcademicCapIcon,
        university: {
            id: '1',
            name: 'Manipal University',
            logo: '/images/manipal_logo.png',
        },
    },
    {
        id: '5',
        title: 'BBA (Bachelor of Business Administration)',
        category: 'BBA',
        description: 'Foundation program in business management covering all aspects of business operations, entrepreneurship, and corporate management. Interactive learning with case studies, group projects, and industry internships included in the curriculum.',
        duration: 3,
        fees: 65000,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A+'],
        curriculum: ['Business Management', 'Marketing Fundamentals', 'Financial Accounting', 'Human Resource Management', 'Entrepreneurship'],
        eligibility: ['10+2 from recognized board', 'Minimum 50% aggregate marks'],
        featured: false,
        icon: BriefcaseIcon,
        university: {
            id: '1',
            name: 'SRM University',
            logo: '/images/srm_logo.png',
        },
    },
    {
        id: '6',
        title: 'MCA (Master of Computer Applications)',
        category: 'MCA',
        description: 'Advanced computer applications program focusing on software development, database management, and emerging technologies. Curriculum designed with input from tech giants like Google, Microsoft, and Amazon. Hands-on training with real-world projects.',
        duration: 2,
        fees: 78000,
        mode: 'online',
        accreditation: ['UGC', 'NAAC A++', 'AICTE'],
        curriculum: ['Software Engineering', 'Database Systems', 'Web Technologies', 'Mobile App Development', 'Cloud Architecture'],
        eligibility: [`Bachelor's degree with Mathematics`, `Minimum 50% aggregate marks`],
        featured: false,
        icon: ComputerDesktopIcon,
        university: {
            id: '1',
            name: 'LPU University',
            logo: '/images/lpu_logo.png',
        },
    },
];