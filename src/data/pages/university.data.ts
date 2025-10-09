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
        icon: 'https://s3-alpha.figma.com/hub/file/2747156395/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png',
        location: 'Phagwara, Punjab',
        naac: 'A++',
        programs: 'Engineering, Management, Law, Design, Agriculture, Arts, and more',
        established: '2005',
        address: 'Jalandhar-Delhi G.T. Road, Phagwara, Punjab 144411',
        highlights: '600-acre campus, 300+ programs, 200+ international tie-ups',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR7aVT5kP1HKTbeijHy77_pPpSF9ozOgmcnQ&s',
        ranking: '#1 Private University in India',
        studentCount: '30,000+',
        facultyCount: '2,000+',
        campusSize: '600 Acres',
        avgPackage: '₹6.5 LPA',
        accreditation: ['UGC', 'AICTE', 'NAAC A++', 'NBA'],
        facilities: ['Smart Classrooms', 'Research Labs', 'Sports Complex', 'Library', 'Hostel', 'Medical Center']
    },
    {
        name: 'Amity University',
        description: 'Leading private research university with global campuses and strong industry ties.',
        icon: 'https://s3-alpha.figma.com/hub/file/2747156395/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png',
        location: 'Noida, Uttar Pradesh',
        naac: 'A+',
        programs: 'Engineering, Business, Law, Biotechnology, Media, and more',
        established: '2005',
        address: 'Sector 125, Noida, Uttar Pradesh 201313',
        highlights: 'Modern infrastructure, innovation-driven, strong global network',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop',
        ranking: 'Top 10 Private University',
        studentCount: '35,000+',
        facultyCount: '1,800+',
        campusSize: '450 Acres',
        avgPackage: '₹7.2 LPA',
        accreditation: ['UGC', 'AICTE', 'NAAC A+', 'ABET'],
        facilities: ['Innovation Labs', 'Incubation Center', 'Auditorium', 'Sports Arena', 'Food Court', 'Health Care']
    },
    {
        name: 'Manipal Academy of Higher Education (MAHE)',
        description: 'A Deemed University recognized internationally for excellence in education and research.',
        icon: 'https://s3-alpha.figma.com/hub/file/2747156395/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png',
        location: 'Manipal, Karnataka',
        naac: 'A++',
        programs: 'Health Sciences, Engineering, Management, Humanities, and more',
        established: '1953',
        address: 'Tiger Circle Road, Manipal, Karnataka 576104',
        highlights: 'Top-ranked globally, diverse student body, strong research culture',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=400&fit=crop',
        ranking: 'Top 5 Deemed University',
        studentCount: '28,000+',
        facultyCount: '2,500+',
        campusSize: '313 Acres',
        avgPackage: '₹8.5 LPA',
        accreditation: ['UGC', 'NAAC A++', 'MCI', 'PCI'],
        facilities: ['Medical Hospital', 'Research Centers', 'Central Library', 'Student Hub', 'International Center']
    },
    {
        name: 'SRM Institute of Science and Technology',
        description: 'Premier institute fostering innovation and high-quality research in multiple disciplines.',
        icon: 'https://s3-alpha.figma.com/hub/file/2747156395/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png',
        location: 'Kattankulathur, Tamil Nadu',
        naac: 'A++',
        programs: 'Engineering, Medicine, Management, Law, Science, and Humanities',
        established: '1985',
        address: 'SRM Nagar, Kattankulathur, Chengalpattu, Tamil Nadu 603203',
        highlights: 'Global collaborations, modern campus, excellent placements',
        image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=400&fit=crop',
        ranking: 'Top 15 Engineering Institute',
        studentCount: '40,000+',
        facultyCount: '2,200+',
        campusSize: '250 Acres',
        avgPackage: '₹7.8 LPA',
        accreditation: ['UGC', 'AICTE', 'NAAC A++', 'NBA'],
        facilities: ['Tech Park', 'E-Learning Center', 'Convention Center', 'Gym', 'Swimming Pool', 'Cafeteria']
    },
    {
        name: 'VIT University',
        description: 'Innovative university committed to excellence in teaching, research, and community engagement.',
        icon: 'https://s3-alpha.figma.com/hub/file/2747156395/33996b80-ff35-4d84-b296-230aa5ac11a5-cover.png',
        location: 'Vellore, Tamil Nadu',
        naac: 'A++',
        programs: 'Engineering, Computer Science, Business, Design, Applied Sciences',
        established: '1984',
        address: 'VIT University, Vellore, Tamil Nadu 632014',
        highlights: 'NIRF ranked, international collaborations, startup ecosystem',
        image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=400&fit=crop',
        ranking: 'NIRF Rank #11',
        studentCount: '38,000+',
        facultyCount: '1,900+',
        campusSize: '350 Acres',
        avgPackage: '₹7.5 LPA',
        accreditation: ['UGC', 'AICTE', 'NAAC A++', 'ABET'],
        facilities: ['Innovation Center', 'Digital Library', 'Cultural Center', 'Medical Facility', 'Transport']
    }
];