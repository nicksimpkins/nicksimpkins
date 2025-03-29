import * as stylex from '@stylexjs/stylex';
import { tokens } from './tokens.stylex';
import EducationItem from '@/components/EducationItem';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectItem from '@/components/ProjectItem';
import SkillCategory from '@/components/SkillCategory';

const styles = stylex.create({
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: tokens.backgroundColor,
    color: tokens.textColor,
    fontFamily: tokens.fontFamily,
    lineHeight: '1.6',
  },
  header: {
    marginBottom: '2rem',
    borderBottom: `2px solid ${tokens.primaryColor}`,
    paddingBottom: '1rem',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: tokens.primaryColor,
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    color: tokens.secondaryColor,
    marginBottom: '1rem',
  },
  contact: {
    fontSize: '0.9rem',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    borderBottom: `2px solid ${tokens.primaryColor}`,
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  certItem: {
    marginBottom: '0.5rem',
  },
  interests: {
    lineHeight: '1.6',
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

  return (
    <main {...stylex.props(styles.container)}>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.name)}>Nicholas Simpkins</h1>
        <h2 {...stylex.props(styles.title)}>Illinois Institute of Technology</h2>
        <p {...stylex.props(styles.contact)}>
          Email: nicksimpkins@icloud.com, nsimpkins@hawk.iit.edu • Phone: (603)-848-6787
        </p>
      </header>

      <section {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Education</h2>
        <EducationItem
          degree="B.A.C. Information Technology & Management with a Minor in Finance"
          institution="Illinois Institute of Technology"
          dateRange="AUGUST 2021 - MAY 2026"
          location="CHICAGO, IL"
        />
        <EducationItem
          degree="M.A.S. Information Technology & Management with Specialization in Applied AI & ML"
          institution="Illinois Institute of Technology"
          dateRange="JANUARY 2023 - MAY 2026"
          location="CHICAGO, IL"
        />
      </section>

      <section {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Experience</h2>
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
        <ExperienceItem
          position="IT & Security Consultant"
          company="Freelance"
          dateRange="JUNE 2024 - PRESENT"
          location="VARIOUS"
        />
      </section>

      <section {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Open Source Projects & Startups</h2>
        <ProjectItem
          name="Centerspoke"
          description="Open source CLI with tools such as file conversion, with main functionality for interacting with cloud database systems."
          technologies="Python, SQL, AWS (RDS), MySQL"
          link="https://github.com/visionkernel/centerspoke"
        />
        <ProjectItem
          name="VisionKernel"
          description="Time-series data management and analysis platform for the financial industry."
          technologies="React, Python, SQL, AWS (RDS, EC2), Google Cloud (Cloud Run, Cloud Run functions), Firebase"
          link="https://visionkernel.co"
        />
        <ProjectItem
          name="Evoweb"
          description="An easily containerized web app that generates dynamic web content using client-side LLMs with reference from JSON data"
          technologies="Svelte, JavaScript, LLMs (Phi-2, Llama-2-7B)"
          link="https://github.com/nicksimpkins/evoweb"
        />
        <ProjectItem
          name="Soteria"
          description="University backed project aimed at creating a dynamic and intelligent saftey system for buildings."
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
        <h2 {...stylex.props(styles.sectionTitle)}>Achievements, Clubs & Challenges</h2>
        <div {...stylex.props(styles.certItem)}>Illinois Tech College of Computing Dean&apos;s List</div>
        <div {...stylex.props(styles.certItem)}>New Hampshire Scholar</div>
        <div {...stylex.props(styles.certItem)}>IIT ITM Organization</div>
        <div {...stylex.props(styles.certItem)}>Stuart School of Buisness Investment Club</div>
        <div {...stylex.props(styles.certItem)}>CME Group University Trading Challenge</div>
      </section>

      <section {...stylex.props(styles.section)}>
        <h2 {...stylex.props(styles.sectionTitle)}>Interests</h2>
        <p {...stylex.props(styles.interests)}>
          One day I hope to free myself of the chains of technology and spend my days lobstering off the coast of New England. Until then, I take special interest in the financial industry and the improvements and applications that technology can bring to it. I often find myself working with large amounts of data which I have used in various different applications. Most recently these have been machine learning and statistics based, however I pivot from time to time to explore LLMs and AI image generation technologies. I&apos;ve worked with all different types of LLMs, from a couple billion parameters like Phi-2 and Llama 2-7B which I embedded in a broswer to Deepseek R-1 which is quite massive. Furthermore, I do quite a bit of work with and on the cloud and have used most of the cloud services out there, barring repacked AWS services like Vercel and Netlify. I would say I have the most experience with Google Cloud because it was used as the entire backend for my VisionKernel startup, however I also have quite a bit of experience using AWS. I&apos;m familiar with API engineering, and have worked an incredible amount of hours splicing URLs and cleaning data from financial APIs which is never standardized and always hard to work with. I&apos;m familiar with RESTful API as well as GraphQL, but most of my work is done with REST - on top of that I&apos;ve worked with JSON and XML, and Europes awful SDMX format. I&apos;ve done some other cool things, some of them more useful than others.  
        </p>
      </section>
    </main>
  );
}