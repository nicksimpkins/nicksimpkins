'use client';

import * as stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';
import React from 'react';
import EducationItem from '@/components/EducationItem';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import SkillCategory from '@/components/SkillCategory';

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
});

export default function Home() {
  // Your existing skill arrays
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

  const [linkedInHover, setLinkedInHover] = React.useState(false);
  const [githubHover, setGithubHover] = React.useState(false);

  return (
    <div {...stylex.props(styles.mainWrapper)}>
      <main {...stylex.props(styles.container)}>
        <header {...stylex.props(styles.header)}>
          <h1 {...stylex.props(styles.name)}>Nicholas Simpkins</h1>
          <h2 {...stylex.props(styles.title)}>IT - Data Science - AI & ML - Big Data - Fintech - Cloud Architecture</h2>
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
              minor="Specialization in Applied AI & ML"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 45 45">
                <path d="M22.5,45 C34.9264069,45 45,34.9264069 45,22.5 C45,10.0735931 34.9264069,0 22.5,0 C10.0735931,0 0,10.0735931 0,22.5 C0,34.9264069 10.0735931,45 22.5,45 Z" fill="#30AEFF" />
                <path d="M36.6666667,25 L36.6666667,18.3333333 L30,18.3333333 L30,15 L40,15 L40,25 L36.6666667,25 Z M5,30 L5,20 L8.33333333,20 L8.33333333,26.6666667 L15,26.6666667 L15,30 L5,30 Z" fill="#FFFFFF" />
                <path d="M21.6666667,26.6666667 L21.6666667,18.3333333 L25,18.3333333 L25,26.6666667 L21.6666667,26.6666667 Z" fill="#FFFFFF" />
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