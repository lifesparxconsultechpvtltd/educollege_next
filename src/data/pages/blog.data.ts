type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "list"; items: string[] };

export interface Blog {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: BlogBlock[];
  seo: {
    title: string;
    description: string;
  };
}

export const blogs: Blog[] = [
  {
    slug: "process-documents-using-ai",
    title: "Process Documents Using Artificial Intelligence For RPA Bots",
    date: "April 16, 2020",
    image: "/images/vgu/vgu_building.jpg",
    excerpt:
      "Earlier RPA bots had limitations, taking only structured data. With OCR and Machine Learning, bots can now extract unstructured data efficiently...",
    content: [
      {
        type: "paragraph",
        text: "In the past, Robotic Process Automation (RPA) was limited to structured data sources like Excel sheets and databases. However, the introduction of Artificial Intelligence (AI) and Optical Character Recognition (OCR) has transformed this landscape.",
      },
      {
        type: "paragraph",
        text: "AI-powered RPA bots can now read invoices, receipts, and documents, extract information intelligently, and automate repetitive workflows. This integration of AI with RPA enhances accuracy, reduces processing time, and improves scalability for enterprises.",
      },
      {
        type: "heading",
        level: 2,
        text: "Benefits of AI-driven RPA",
      },
      {
        type: "list",
        items: [
          "Automated document processing",
          "Improved accuracy and efficiency",
          "Better decision-making through data insights",
        ],
      },
      {
        type: "paragraph",
        text: "With AI, RPA continues to evolve as a critical tool in digital transformation initiatives worldwide.",
      },
    ],
    seo: {
      title: "AI-Powered RPA: Transforming Document Processing | Blog by Praveen",
      description:
        "Learn how Artificial Intelligence and OCR are revolutionizing RPA bots, enabling them to process unstructured data efficiently and drive automation at scale.",
    },
  },
  {
    slug: "future-of-online-education",
    title: "The Future of Online Education: What’s Next?",
    date: "August 8, 2024",
    image: "/images/lpu/lpu.jpg",
    excerpt:
      "Online education has evolved dramatically. In this article, we explore how AI and VR are reshaping learning experiences across the globe...",
    content: [
      {
        type: "paragraph",
        text: "Online education is entering a new era driven by immersive technologies like Virtual Reality (VR) and Artificial Intelligence (AI). These tools enable personalized learning and virtual classrooms, improving engagement and accessibility for students globally.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key Trends",
      },
      {
        type: "list",
        items: [
          "AI tutors providing adaptive feedback",
          "Gamified learning experiences",
          "Immersive VR classrooms",
        ],
      },
      {
        type: "paragraph",
        text: "The education landscape is changing rapidly — and those who adapt early will lead the future of learning innovation.",
      },
    ],
    seo: {
      title: "The Future of Online Education | AI & VR in Learning",
      description:
        "Discover how AI and VR technologies are transforming online education by creating personalized, immersive, and engaging learning experiences worldwide.",
    },
  },
];
