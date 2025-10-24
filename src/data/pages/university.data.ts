export interface UniversitiesPageData {
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
    ranking: string;
    studentCount: string;
    facultyCount: string;
    campusSize: string;
    avgPackage: string;
    accreditation: string[];
    facilities: string[];
}

export const universitiesPage: UniversitiesPageData[] = [
    {
        name: 'Lovely Professional University (LPU)',
        description: `One of India's top private universities known for innovation and diversity.`,
        icon: '/images/lpu/lpu_logo.webp',
        location: 'Phagwara, Punjab',
        naac: 'A++',
        programs: 'Engineering, Management, Law, Design, Agriculture, Arts, and more',
        established: '2005',
        address: 'Jalandhar-Delhi G.T. Road, Phagwara, Punjab 144411',
        highlights: '600-acre campus, 300+ programs, 200+ international tie-ups',
        image: '/images/lpu/lpu.jpg',
        ranking: '#1 Private University in India',
        studentCount: '30,000+',
        facultyCount: '2,000+',
        campusSize: '600 Acres',
        avgPackage: '₹6.5 LPA',
        accreditation: ['UGC', 'AICTE', 'NAAC A++', 'NBA'],
        facilities: ['Smart Classrooms', 'Research Labs', 'Sports Complex', 'Library', 'Hostel', 'Medical Center']
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
        image: '/images/manipal/manipal.jpg',
        ranking: 'Top 5 Deemed University',
        studentCount: '28,000+',
        facultyCount: '2,500+',
        campusSize: '313 Acres',
        avgPackage: '₹8.5 LPA',
        accreditation: ['UGC', 'NAAC A++', 'MCI', 'PCI'],
        facilities: ['Medical Hospital', 'Research Centers', 'Central Library', 'Student Hub', 'International Center']
    },
];