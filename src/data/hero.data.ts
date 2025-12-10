import { AcademicCapIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { FC, SVGProps } from 'react';

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
        icon: '/images/lpu/lpu_logo.webp',
        location: 'Phagwara, Punjab',
        naac: 'A++',
        programs: 'Engineering, Management, Law, Design, Agriculture, Arts, and more',
        established: '2005',
        address: 'Jalandhar-Delhi G.T. Road, Phagwara, Punjab 144411',
        highlights: '600-acre campus, 300+ programs, 200+ international tie-ups',
        image: '/images/lpu/lpu.jpg'
    },
    {
        name: 'Vivekananda Global University (VGU)',
        description: 'A leading private university in Rajasthan known for innovation, research, and holistic education.',
        icon: '/images/vgu/vgu_logo.webp',
        location: 'Jaipur, Rajasthan',
        naac: 'A+',
        programs: 'Engineering, Management, Law, Agriculture, Design, Science, and more',
        established: '2012',
        address: 'Sector 36, NRI Road, Jagatpura, Jaipur, Rajasthan 303012',
        highlights: 'Industry-oriented curriculum, modern campus, strong placement record, international collaborations',
        image: '/images/vgu/vgu_building.jpg'
    },
    {
        name: 'Manipal Academy of Higher Education (MAHE)',
        description: 'A Deemed University recognized internationally for excellence in education and research.',
        icon: '/images/manipal/manipal_logo.png',
        location: 'Manipal, Karnataka',
        naac: 'A++',
        programs: 'Health Sciences, Engineering, Management, Humanities, and more',
        established: '1953',
        address: 'Tiger Circle Road, Manipal, Karnataka 576104',
        highlights: 'Top-ranked globally, diverse student body, strong research culture',
        image: '/images/manipal/manipal.jpg'
    },
    {
        name: 'Chandigarh University',
        description: 'A leading private university in North India, renowned for academic excellence, innovation, and global exposure.',
        icon: '/images/cu/cu_log.jpeg',
        location: 'Mohali, Punjab',
        naac: 'A+',
        programs: 'Engineering, Management, Law, Sciences, Arts, Pharmacy, Hotel Management, and more',
        established: '2012',
        address: 'NH-95, Chandigarh-Ludhiana Highway, Mohali, Punjab 140413',
        highlights: 'World-class infrastructure, 30+ international collaborations, strong placement record, diverse student community',
        image: '/images/cu/cu_building.jpg'
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
    icon: string | FC<SVGProps<SVGSVGElement>>;
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
            logo: '/images/lpu/lpu_logo.webp',
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
            logo: '/images/lpu/lpu_logo.webp',
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
            logo: '/images/manipal/manipal_logo.png',
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
            logo: '/images/lpu/lpu_logo.webp',
        },
    },
];