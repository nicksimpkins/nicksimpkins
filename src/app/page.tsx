'use client';

import * as stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';
import React from 'react';
import EducationItem from '@/components/EducationItem';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import SkillCategory from '@/components/SkillCategory';
import CourseCategory from '@/components/CourseCategory';

const styles = stylex.create({
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: {
      default: tokens.spacingXl,
      '@media (max-width: 768px)': tokens.spacingMd,
    },
    backgroundColor: tokens.backgroundColor,
    color: tokens.textPrimary,
    fontFamily: tokens.fontFamily,
    lineHeight: '1.6',
    boxShadow: tokens.boxShadowMd,
    borderRadius: tokens.borderRadius,
  },
  mainWrapper: {
    backgroundColor: tokens.backgroundAlt,
    minHeight: '100vh',
    paddingTop: tokens.spacing2xl,
    paddingBottom: tokens.spacing2xl,
  },
  header: {
    marginBottom: tokens.spacing2xl,
    borderBottom: `1px solid ${tokens.borderColor}`,
    paddingBottom: tokens.spacingLg,
  },
  name: {
    fontSize: {
      default: '2.75rem',
      '@media (max-width: 768px)': '2.25rem',
    },
    fontWeight: '700',
    color: tokens.primaryColor,
    marginBottom: tokens.spacingSm,
    letterSpacing: '-0.025em',
    lineHeight: '1.2',
  },
  title: {
    fontSize: {
      default: '1.25rem',
      '@media (max-width: 768px)': '1rem',
    },
    color: tokens.secondaryColor,
    marginBottom: tokens.spacingMd,
    fontWeight: '500',
  },
  contact: {
    fontSize: '0.9rem',
    color: tokens.textSecondary,
    display: 'flex',
    gap: tokens.spacingMd,
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
  },
  socialLinks: {
    display: 'flex',
    gap: tokens.spacingMd,
    marginTop: tokens.spacingSm,
  },
  socialIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.backgroundAlt,
    transition: tokens.transition,
  },
  socialIconHover: {
    backgroundColor: tokens.primaryColor,
  },
  socialSVG: {
    fill: '#333',
    transition: tokens.transition,
  },
  socialSVGHover: {
    fill: 'white',
  },
  section: {
    marginBottom: tokens.spacing2xl,
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: tokens.textPrimary,
    borderBottom: `2px solid ${tokens.primaryColor}`,
    paddingBottom: tokens.spacingSm,
    marginBottom: tokens.spacingLg,
    display: 'inline-block',
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: tokens.spacingMd,
  },
  certItem: {
    marginBottom: tokens.spacingMd,
    padding: tokens.spacingMd,
    backgroundColor: tokens.cardBackground,
    borderRadius: tokens.borderRadius,
    boxShadow: tokens.boxShadow,
    transition: tokens.transition,
  },
  interests: {
    lineHeight: '1.8',
    color: tokens.textSecondary,
    fontSize: '1rem',
    maxWidth: '100%',
  },
  gridLayout: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, 1fr)',
      '@media (max-width: 768px)': '1fr',
    },
    gap: tokens.spacingMd,
  },
  footer: {
    marginTop: tokens.spacing2xl,
    paddingTop: tokens.spacingLg,
    borderTop: `1px solid ${tokens.borderColor}`,
    textAlign: 'center',
    color: tokens.textLight,
    fontSize: '0.85rem',
  },
  builtWith: {
    marginTop: tokens.spacingSm,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: tokens.spacingMd,
  },
  techItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
  },
  techLogo: {
    width: '20px',
    height: '20px',
  },
  expertiseBadges: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingSm,
    marginBottom: tokens.spacingMd,
  },
  expertiseBadge: {
    backgroundColor: tokens.backgroundAlt,
    color: tokens.primaryColor,
    padding: `${tokens.spacingXs} ${tokens.spacingMd}`,
    borderRadius: '9999px',
    fontSize: '0.85rem',
    fontWeight: '500',
    border: `1px solid ${tokens.borderColor}`,
    transition: tokens.transition,
    cursor: 'default',
    ':hover': {
      backgroundColor: tokens.primaryColor,
      color: 'white',
      transform: 'translateY(-2px)',
    },
  },
});

export default function Home() {
  const languageSkills = [
    { name: 'HTML & CSS', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'JavaScript', level: 4 },
    { name: 'PHP', level: 3 },
    { name: 'SQL', level: 5 },
    { name: 'R', level: 4 },
    { name: 'Scala', level: 3 },
    { name: 'Java', level: 3 },
  ];

  const frameworkSkills = [
    { name: 'React', level: 4 },
    { name: 'Flask', level: 4 },
    { name: 'Django', level: 4 },
    { name: 'NextJS', level: 3 },
    { name: 'TypeScript', level: 4 },
    { name: 'Tailwind CSS', level: 4 },
    { name: 'StyleX', level: 3 },
    { name: 'Svelte', level: 3 },
    { name: 'Express', level: 4 },
    { name: 'jQuery', level: 3 },
    { name: 'Spark', level: 3 },
  ];

  const cloudSkills = [
    { name: 'AWS', level: 3 },
    { name: 'GCP', level: 4 },
    { name: 'Firebase', level: 5 },
    { name: 'Kubernetes', level: 2 },
    { name: 'Docker', level: 3 },
    { name: 'Azure', level: 3 },
  ];

  const databaseSkills = [
    { name: 'MySQL', level: 5 },
    { name: 'PostgreSQL', level: 4 },
    { name: 'MongoDB', level: 3 },
    { name: 'SQLite', level: 4 },
    { name: 'Firebase', level: 5 },
    { name: 'DynamoDB', level: 3 },
    { name: 'Minio', level: 3 },
    { name: 'AWS RDS', level: 5 },
  ];

  const devServiceSkills = [
    { name: 'GitHub', level: 5 },
    { name: 'Google Drive', level: 5 },
    { name: 'Microsoft Office', level: 4 },
    { name: 'VS Code', level: 5 },
    { name: 'Slack', level: 5 },
    { name: 'Trello', level: 4 },
    { name: 'Basecamp', level: 5 },
    { name: 'Figma', level: 3 },
    { name: 'OneDrive', level: 5 },
    { name: 'PyCharm', level: 4 },
    { name: 'Postman', level: 3 },
    { name: 'Eclipse', level: 4 },
    { name: 'RStudio', level: 4 },
    { name: 'VirtualBox', level: 5 },
    { name: 'VMWare', level: 3 },
    { name: 'Jupyter', level: 5 },
    { name: 'Terraform', level: 4 },
    { name: 'Vagrant', level: 4 },
    { name: 'Vault', level: 3 },
    { name: 'Wireshark', level: 3 },
    { name: 'Fiddler', level: 3 },
    { name: 'Discord', level: 5 },
    { name: 'WebEx', level: 5 },
    { name: 'OpenAI ChatGPT', level: 5 },
    { name: 'Anthropic Claude', level: 5 },
    { name: 'GitHub Co-Pilot', level: 5 },
  ];

  const techCourses = [
    {
      name: "Applied AI & Deep Learning",
      topics: "Game Theory, Deep Learning, Reinforcement Learning, Generative AI, NLP, Neural Networks",
      date: "SPRING 2025"
    },
    {
      name: "Cloud Computing Technologies",
      topics: "AWS, Terraform, Vagrant, Virtualization",
      date: "FALL 2023"
    },
    {
      name: "Data Mining & Machine Learning",
      topics: "R, Python, Jupyter, Web Scraping, Preprocessing, Classifications",
      date: "FALL 2024"
    },
    {
      name: "Programming for Data Analytics",
      topics: "R, Python, Data Visualization, Data Analysis, Pandas, NumPy, Scikit-learn",
      date: "SPRING 2024"
    },
    {
      name: "Advanced Topics in Data Management",
      topics: "SQL, Normalization, Data Warehousing, ETL Processes, Data Lakes, Data Governance",
      date: "FALL 2024"
    },
    {
      name: "Database Security",
      topics: "SQL Injection, Access Control, Encryption, Backup and Recovery, Database Auditing, NIST",
      date: "FALL 2024"
    },
    {
      name: "Web Application Foundations",
      topics: "HTML, CSS, JavaScript, Responsive Design, SEO, Human-Computer Interaction",
      date: "SPRING 2024"
    },
    {
      name: "Big Data Infrastructure",
      topics: "Python, Scala, Spark, Minio, Jupyter",
      date: "SPRING 2025"
    },
    {
      name: "Cybersecurity Technologies",
      topics: "Encryption, Network Security, Firewalls, Intrusion Detection, Incident Response, Risk Management",
      date: "FALL 2023"
    },
    {
      name: "System Integration",
      topics: "Project Management, React, SQL, Terraform, Vagrant, Vault, OAuth, Proxmox",
      date: "SPRING 2025"
    },
    {
      name: "Open-Source Programming",
      topics: "Python, I/O, Data Analysis, Pandas, NumPy, Seaborn, Object-Oriented Programming",
      date: "SPRING 2024"
    },
    {
      name: "Undergraduate Research",
      topics: "Cybersecurity, Raspberry Pi, Ubuntu, Tornado, NMAP",
      date: "FALL 2024"
    },
    {
      name: "Data Warehousing",
      topics: "ETL Processes, Data Modeling, Pentaho DI, OLAP, Data Lakes, SQL",
      date: "FALL 2025"
    },
    {
      name: "Service-Oriented Architectures",
      topics: "RESTful APIs, SOAP, Microservices, JSON, XML, SDMX, API Security, Postman",
      date: "FALL 2025"
    },
    {
      name: "Intermediate Software Development",
      topics: "Java, JDBC, Object-Oriented Programming, Design Patterns",
      date: "SPRING 2023"
    },
    {
      name: "Project Management for ITM",
      topics: "Project Management, Agile Methodologies, Scrum, Waterfall Model, Risk Management, Stakeholder Analysis, Scope Management",
      date: "FALL 2023"
    },
  ];

  const financeCourses = [
    {
      name: "Economic Analysis of Capital Investments",
      topics: "Net Present Value (NPV), Internal Rate of Return (IRR), Equivalent Uniform Befefit/Cost, Taxes, Inflation, Risk",
      date: "FALL 2023"
    },
    {
      name: "Machine Learning for Finance",
      topics: "Linear & Non-Linear Regression, Ensemble Algorithms, Neural Networks (RNN, LSTM), NLP, Sentiment Analysis, Time-Series Forecasting",
      date: "FALL 2025"
    },
    {
      name: "Investments",
      topics: "Portfolio Theory, Asset Pricing Models (CAPM & APT), Diversification, Efficient Market Hypothesis, Behavioral Finance",
      date: "FALL 2024"
    },
    {
      name: "Financial Derivatives",
      topics: "Options, Futures, Forwards, Swaps, Hedging Strategies, Pricing Models (Black-Scholes, Binomial Tree), Greeks",
      date: "SPRING 2024"
    },
    {
      name: "Buisness Economics",
      topics: "Microeconomics, Market Structures, Pricing Strategies, Game Theory, Market Failures, Externalities, Buisness Cycles",
      date: "SPRING 2025"
    },
    {
      name: "Buisness Statistics",
      topics: "Modeling, Hypothesis Testing, Regression Analysis, Time Series Analysis, Forecasting, Decision Trees, ANOVA",
      date: "SPRING 2025"
    },
    {
      name: "Principles of Economics",
      topics: "Macroeconomics, Microeconomics, Supply and Demand, Fiscal and Monetary Policy, Economic Indicators",
      date: "FALL 2022"
    },
    {
      name: "Financial and Managerial Accounting",
      topics: "GAAP, IFRS, Financial Statements (Balance Sheet, Income Statement, Cash Flow Statement), Accrual & Cash Accounting, Cost Systems",
      date: "SPRING 2023"
    },
    {
      name: "Rise of Global Economy",
      topics: "Colonialism, Mercantilism, Industrial Revolution, Bretton Woods System, Globalization, Trade Wars, Emerging Markets",
      date: "SPRING 2022"
    },
  ];

  const [linkedInHover, setLinkedInHover] = React.useState(false);
  const [githubHover, setGithubHover] = React.useState(false);

  return (
    <div {...stylex.props(styles.mainWrapper)}>
      <main {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.name)}>Nicholas Simpkins</h1>
          <h2 {...stylex.props(styles.title)}>
            <div {...stylex.props(styles.expertiseBadges)}>
              <span {...stylex.props(styles.expertiseBadge)}>IT</span>
              <span {...stylex.props(styles.expertiseBadge)}>Data Science</span>
              <span {...stylex.props(styles.expertiseBadge)}>AI & ML</span>
              <span {...stylex.props(styles.expertiseBadge)}>Big Data</span>
              <span {...stylex.props(styles.expertiseBadge)}>Fintech</span>
              <span {...stylex.props(styles.expertiseBadge)}>Cloud Architecture</span>
            </div>
          </h2>
          <div {...stylex.props(styles.contact)}>
            <span {...stylex.props(styles.contactItem)}>
              📧 nicksimpkins@icloud.com, nsimpkins@hawk.iit.edu
            </span>
            <span {...stylex.props(styles.contactItem)}>
              📱 (603)-848-6787
            </span>
            <span {...stylex.props(styles.contactItem)}>
              📍 Chicago, IL
            </span>
          </div>
          
          <div {...stylex.props(styles.socialLinks)}>
            <a 
              href="https://www.linkedin.com/in/nicholas-simpkins/" 
              target="_blank" 
              rel="noopener noreferrer"
              {...stylex.props(styles.socialIcon)}
              onMouseEnter={() => setLinkedInHover(true)}
              onMouseLeave={() => setLinkedInHover(false)}
              style={{
                backgroundColor: linkedInHover ? '#2563eb' : '#f8fafc'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                style={{
                  fill: linkedInHover ? 'white' : '#0072b1'
                }}
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/nicksimpkins" 
              target="_blank" 
              rel="noopener noreferrer"
              {...stylex.props(styles.socialIcon)}
              onMouseEnter={() => setGithubHover(true)}
              onMouseLeave={() => setGithubHover(false)}
              style={{
                backgroundColor: githubHover ? '#2563eb' : '#f8fafc'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                style={{
                  fill: githubHover ? 'white' : '#333'
                }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </header>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Education</h2>
          <div {...stylex.props(styles.gridLayout)}>
            <EducationItem
              degree="B.A.C. Information Technology & Management"
              institution="Illinois Institute of Technology"
              dateRange="AUGUST 2021 - MAY 2026"
              location="CHICAGO, IL"
              minor="Minor in Finance"
            />
            <EducationItem
              degree="M.A.S. Information Technology & Management"
              institution="Illinois Institute of Technology"
              dateRange="JANUARY 2023 - MAY 2026"
              location="CHICAGO, IL"
              minor="Specialization in Applied Data Science & AI"
            />
          </div>
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Experience</h2>
          <ExperienceItem
            position="IT & Security Consultant"
            company="Freelance"
            dateRange="JUNE 2024 - PRESENT"
            location="VARIOUS"
          />
          <ExperienceItem
            position="Bank Teller (Seasonal)"
            company="Merrimack County Savings Bank"
            dateRange="JUNE 2023 - AUGUST 2023"
            location="CONCORD, NH"
          />
          <ExperienceItem
            position="Bank Teller (Seasonal)"
            company="Franklin Savings Bank"
            dateRange="MAY 2022 - AUGUST 2022"
            location="FRANKLIN, NH"
          />
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Projects & Startups</h2>
          <ProjectItem
            name="VisionKernel"
            description="Time-series data management and analysis platform for the financial industry."
            technologies="React, Python, SQL, AWS (RDS, EC2), Google Cloud (Cloud Run, Cloud Run functions), Firebase"
            link="https://visionkernel.co"
          />
          <ProjectItem
            name="VisionCharts"
            description="Modern and high performance open source charting library for financial data visualization and analysis."
            technologies="JavaScript, TypeScript"
            link="https://visionkernel.co/visioncharts"
          />
          <ProjectItem
            name="Centerspoke"
            description="Open source CLI with tools such as file conversion, with main functionality for interacting with cloud database systems."
            technologies="Python, SQL, AWS (RDS), MySQL"
            link="https://github.com/visionkernel/centerspoke"
          />
          <ProjectItem
            name="Evoweb"
            description="An easily containerized web app that generates dynamic web content using client-side LLMs with reference from JSON data"
            technologies="Svelte, JavaScript, LLMs (Phi-2, Llama-2-7B)"
            link="https://github.com/nicksimpkins/evoweb"
          />
          <ProjectItem
            name="Soteria"
            description="University backed project aimed at creating a dynamic and intelligent safety system for buildings."
            technologies="Python, Raspberry Pi, Ubuntu, Arduino, Breadboards, Sensors, LEDs"
            link="https://www.facebook.com/100064282262283/about/?_rdr"
          />  
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Skills</h2>
          <SkillCategory title="Languages" skills={languageSkills} />
          <SkillCategory title="Frameworks & Libraries" skills={frameworkSkills} />
          <SkillCategory title="Cloud Services" skills={cloudSkills} />
          <SkillCategory title="Databases" skills={databaseSkills} />
          <SkillCategory title="Development Tools" skills={devServiceSkills} />
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Courses</h2>
          <CourseCategory title="Technology Courses" courses={techCourses} />
          <CourseCategory title="Finance Courses" courses={financeCourses} />
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Certifications</h2>
          <div {...stylex.props(styles.certItem)}>FINRA SIE (Securities Industry Essentials)</div>
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Achievements & Involvements</h2>
          <div {...stylex.props(styles.gridLayout)}>
            <div {...stylex.props(styles.certItem)}>Illinois Tech College of Computing Dean&apos;s List</div>
            <div {...stylex.props(styles.certItem)}>New Hampshire Scholar</div>
            <div {...stylex.props(styles.certItem)}>IIT ITM Organization</div>
            <div {...stylex.props(styles.certItem)}>Stuart School of Business Investment Club</div>
            <div {...stylex.props(styles.certItem)}>CME Group University Trading Challenge</div>
          </div>
        </section>

        <section {...stylex.props(styles.section)}>
          <h2 {...stylex.props(styles.sectionTitle)}>Interests & Expertise</h2>
          <p {...stylex.props(styles.interests)}>
            I focus on the intersection of technology and finance, working with large datasets for machine learning and statistical analysis. Recently, I've explored LLMs and AI image generation technologies, from lightweight models like Phi-2 to more robust systems like Deepseek R-1. I have extensive experience with cloud services, particularly Google Cloud and AWS, developing the backend infrastructure for my VisionKernel startup. My expertise includes API engineering for financial data, working with RESTful APIs and GraphQL, and handling various data formats including JSON, XML, and SDMX.
          </p>
        </section>
        
        <footer {...stylex.props(styles.footer)}>
          <p>Built and served with these technologies</p>
          <div {...stylex.props(styles.builtWith)}>
            <span {...stylex.props(styles.techItem)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 180 180" fill="#000000">
                <mask id="mask0" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                  <circle cx="90" cy="90" r="90" fill="black"/>
                </mask>
                <g mask="url(#mask0)">
                  <circle cx="90" cy="90" r="90" fill="black"/>
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white"/>
                  <rect x="115" y="54" width="12" height="72" fill="white"/>
                </g>
              </svg>
              Next.js
            </span>
            <span {...stylex.props(styles.techItem)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178c6"/>
            <path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" fill="#ffffff"/>
            </svg>
            TypeScript
          </span>
          <span {...stylex.props(styles.techItem)}>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="20" 
              height="18" 
              viewBox="0 0 312 287"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,287.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M0 1435 l0 -1435 1560 0 1560 0 0 1435 0 1435 -1560 0 -1560 0 0
                -1435z m1878 777 c227 -87 498 -428 626 -789 l25 -71 -26 -7 c-14 -3 -27 -5
                -28 -3 -2 2 -19 44 -40 93 -104 252 -226 447 -369 591 -109 109 -170 149 -284
                187 -41 14 -68 27 -61 29 21 7 99 -8 157 -30z m683 -221 c40 -107 22 -285 -46
                -436 l-27 -60 -12 30 c-11 26 -9 39 15 105 54 151 62 301 19 397 -26 60 -25
                71 5 43 14 -13 34 -48 46 -79z m-911 -371 l0 -370 -25 0 -25 0 0 370 0 370 25
                0 25 0 0 -370z m-682 118 c61 -3 67 -5 70 -25 3 -22 0 -23 -68 -23 l-72 0 3
                -186 c4 -171 6 -187 24 -201 20 -15 90 -14 128 2 13 6 17 2 17 -18 0 -19 -7
                -28 -31 -36 -42 -14 -102 -14 -134 1 -49 22 -55 50 -55 253 l0 185 -66 0 c-62
                0 -65 1 -62 23 3 20 9 22 66 25 l62 3 0 56 c0 45 5 62 23 81 l22 24 3 -81 3
                -80 67 -3z m-318 -14 c34 -14 40 -21 40 -45 l0 -29 -41 21 c-79 40 -167 22
                -190 -38 -8 -21 -6 -32 9 -52 21 -28 22 -29 123 -76 46 -21 83 -45 94 -61 64
                -97 -13 -204 -145 -204 -77 1 -140 30 -140 66 0 21 3 25 18 19 98 -42 177 -45
                215 -7 24 24 27 73 6 98 -8 9 -55 36 -106 59 -96 45 -120 69 -129 126 -6 42
                22 91 68 119 41 25 121 26 178 4z m551 -126 c41 -79 80 -156 88 -171 7 -15 17
                -25 20 -22 3 3 42 79 86 168 65 131 84 163 103 165 12 2 22 -1 22 -7 0 -6 -80
                -173 -177 -371 -170 -347 -177 -360 -205 -360 l-28 0 85 170 85 170 -56 108
                c-31 59 -76 144 -100 189 -24 45 -44 87 -44 92 0 6 11 11 24 11 20 0 34 -20
                97 -142z m875 110 c56 -38 94 -103 94 -160 l0 -38 -191 0 -192 0 6 -52 c7 -58
                25 -87 79 -130 61 -50 175 -49 250 3 37 26 50 24 46 -8 -7 -63 -184 -106 -283
                -69 -49 19 -109 80 -132 135 -20 46 -21 165 -1 211 39 92 109 139 209 140 59
                0 72 -4 115 -32z m348 -274 c12 -30 6 -46 -46 -122 -113 -164 -353 -381 -502
                -452 -113 -53 -211 -75 -281 -62 -36 7 -33 9 40 14 127 9 241 65 395 193 135
                113 282 281 351 402 26 47 34 51 43 27z m131 -139 c0 -30 -39 -27 -43 3 -3 20
                0 23 20 20 15 -2 23 -10 23 -23z m8 -131 c10 -130 -19 -250 -72 -298 -26 -24
                -27 -11 -1 42 32 67 41 135 30 226 -8 62 -7 82 3 88 27 17 34 6 40 -58z
                m-1200 -146 c6 -19 -3 -38 -18 -38 -18 0 -28 17 -21 35 7 18 33 20 39 3z"/>
                <path d="M1879 1668 c-34 -19 -79 -81 -79 -107 0 -8 48 -11 155 -11 101 0 155
                4 155 10 0 26 -44 93 -73 110 -43 26 -111 26 -158 -2z"/>
              </g>
            </svg>
            StyleX
          </span>
            <span {...stylex.props(styles.techItem)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#333">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Pages
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}