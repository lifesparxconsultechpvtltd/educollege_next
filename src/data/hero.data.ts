import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/24/outline"

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Universities', href: '/universities' },
  { name: 'Programs', href: '/programs' },
  { name: 'Blog', href: '/blogs' },
  { name: 'Compare', href: '/compare' },
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


export const programs = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
];