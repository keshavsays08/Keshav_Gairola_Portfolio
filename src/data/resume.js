// src/data/resume.js
// Central data store — edit this file to update your portfolio content

export const personal = {
  name: "Keshav Gairola",
  tagline: "ML & Data Science Practitioner",
  quote: "Finding Optimal Solutions, One Gradient at a Time",
  email: "keshavsays08@gmail.com",
  phone: "+91 8755553908",
  location: "Rishikesh, Dehradun, Uttarakhand, India",
  cvPath: "/Keshav_Gairola_Resume.pdf", // put your CV in /public/
  profileImage: "/profile.jpg",          // put your photo in /public/
  typingRoles: [
    "Machine Learning",
    "Data Science",
    "Data Analysis",
    "Problem Solving",
    "Statistics",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/keshav-gairola/",
    github: "https://github.com/keshavsays08",
    twitter: "",
    medium: "",
  },
};

export const education = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "G. B. Pant University Of Agriculture & Technology, Pantnagar",
    year: "2022 – 2026",
    score: "6.860 CGPA",
    image: "/edu/gbpuat.jpg",
  },
  {
    degree: "Foundation Level Certificate in Data Science and Applications",
    institution: "Indian Institute of Technology, Madras",
    year: "2023 – 2025",
    score: "6.85 CGPA",
    image: "/edu/iitm.jpg",   // add image to /public/edu/
  },
  {
    degree: "Grade XII, CBSE",
    institution: "Nirmal Ashram Deepmala Public School, Rishikesh",
    year: "2021",
    score: "86.4%",
    image: "/edu/school.jpg",
  },
  {
    degree: "Grade X, CBSE",
    institution: "Nirmal Ashram Deepmala Public School, Rishikesh",
    year: "2019",
    score: "88.8%",
    image: "/edu/school.jpg",
  },
];

export const experience = [
  {
    role: "Product Analyst Intern",
    company: "Interviewkit.ai",
    period: "Apr 2026 – Jun 2026",
    bullets: [
      "Collaborated directly with the founder on Product Development, Sales Operations, and Strategy; took end-to-end ownership of key product features from ideation to deployment.",
      "Designed and implemented a REST API-based editor and built a job description suggestion module leveraging keyword extraction to match user profiles with relevant roles.",
      "Built a resume-based Q&A system producing personalized interview questions and model answers, directly strengthening the platform's core value proposition; also built data visualization dashboards using Excel.",
    ],
  },
  {
    role: "ML Analytics Intern",
    company: "Sapienplus AI Research and Analytics LLP",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Designed and implemented a Python-based ETL pipeline for time-series data, enabling efficient extraction, transformation, and structured storage of financial datasets.",
      "Created comprehensive Jupyter notebooks covering Python fundamentals and statistics, with progressive complexity tailored to practical data science workflows.",
      "Built self-contained learning modules for NumPy, SciPy, Pandas, Matplotlib, Seaborn, Statsmodels, and Scikit-learn, focused on financial time-series applications.",
    ],
  },
];

export const projects = [
  {
    title: "Automated Insect Detection & Counting System",
    period: "Mar 2026 – Apr 2026",
    summary:
      "End-to-end computer vision pipeline using YOLOv8 trained on 520 annotated images, deployed on Raspberry Pi 4 for real-time fruit fly detection at 5–10 FPS with automated CSV logging.",
    tags: ["YOLOv8", "PyTorch", "Raspberry Pi", "Computer Vision"],
    github: "https://github.com/keshavsays08/Automated-Insect-Detection-Counting-System-Fruit-Fly-Insect",
  },
  {
    title: "Real Estate Analytics",
    period: "Dec 2025 – Jan 2026",
    summary:
      "End-to-end ML pipeline benchmarking 10+ algorithms, Random Forest achieving 0.91 R² via K-Fold CV. Multi-page Streamlit dashboard with Price Prediction, Analytics, Insights, and Recommender modules. Deployed on AWS EC2 + S3.",
    tags: ["Random Forest", "Streamlit", "AWS", "Scikit-learn"],
    github: "https://github.com/keshavsays08/Real-Estate-Web-Analytics-Project-Public",
  },
  {
    title: "Financial Transaction Analytics",
    period: "Jan 2026 – Feb 2026",
    summary:
      "Star Schema data model with a central Transaction fact table and 7 dimension tables. End-to-end analytics workflow using SQL/Snowflake for data warehousing and Power BI for KPI dashboards with dynamic cross-filtering.",
    tags: ["SQL", "Snowflake", "Power BI", "Data Warehousing"],
    github: "https://github.com/keshavsays08/Financial-Transaction-Analytics-System-Power-BI",
  },
];

export const skills = [
  "Python", "Microsoft Excel","Java", "SQL", "Machine Learning",
  "Power BI", "Looker Studio", "YOLOv8 / PyTorch", "Streamlit", "AWS",
  "Snowflake", "Scikit-learn", "Pandas / NumPy", "Statsmodel", "Plotly / Matplotlib / Seaborn"
];

export const achievements = [
  {
    title: "Runner-up (2nd Place)",
    desc: "Ranbhoomi — national-level robotics competition at Colosseum, College of Technology, Pantnagar",
    year: "2024",
  },
  {
    title: "Third Place",
    desc: "Inbotics — autonomous robotics competition and workshop",
    year: "2022",
  },
  {
    title: "City Rank 5th",
    desc: "SOF International English Olympiad (IEO), Class XI",
    year: "2020",
  },
];
