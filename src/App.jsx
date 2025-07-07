"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Header = () => (
  <header className="bg-gradient-to-r from-blue-700 to-black text-white shadow-md p-4 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-tight">Pankaj Yadav</h1>
      <nav className="hidden sm:flex space-x-4 text-sm font-medium">
        {[
          { href: "#about", label: "About" },
          { href: "#stack", label: "Tech Stack" },
          { href: "#projects", label: "Projects" },
          { href: "#certification", label: "Certification & Awards" },
          { href: "#case-study", label: "Case Study" },
          { href: "#strengths", label: "Strengths" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="hover:underline text-white">
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const ContactButton = ({ icon, text, url }) => (
  <Button variant="outline" asChild>
    <a
      href={url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-black"
    >
      {icon}
      {text}
    </a>
  </Button>
);

const ContactInfo = () => (
  <div className="flex justify-center flex-wrap gap-2 mt-6 text-black">
    <ContactButton icon={<Phone className="mr-2 h-4 w-4" />} text="+91 9660723222" />
    <ContactButton icon={<Mail className="mr-2 h-4 w-4" />} text="Pankajthukran32@gmail.com" />
    <ContactButton icon={<Linkedin className="mr-2 h-4 w-4" />} text="LinkedIn" url="https://www.linkedin.com/in/pankajyadav32/" />
    <ContactButton icon={<Github className="mr-2 h-4 w-4" />} text="GitHub" url="https://github.com/pankajthukran32" />
  </div>
);

const Footer = () => (
  <footer className="bg-black text-white mt-16 py-6 text-center text-sm">
    <div>© {new Date().getFullYear()} Pankaj Yadav. Built with React, Tailwind CSS, and ❤️</div>
  </footer>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-16">
    <h2 className="text-3xl font-semibold mb-4 text-black">{title}</h2>
    {children}
  </section>
);

const About = () => (
  <Section id="about" title="About Me">
    <Card>
      <CardContent className="p-6 text-black text-lg leading-relaxed">
        I am a passionate fullstack developer with over 9 years of experience designing and building scalable software products across domains. My core strengths lie in modern frontend development with React.js and robust backend architecture using Node.js. From crafting seamless user interfaces to optimizing backend APIs for performance and security, I bring holistic value to teams and products.
        <br /><br />
        I’ve worked in domains such as digital asset management, marketing automation, cybersecurity, and e-commerce integrations. I believe in continuous learning, cross-functional collaboration, and building products that make an impact.
      </CardContent>
    </Card>
  </Section>
);

const TechStack = () => (
  <Section id="stack" title="Tech Stack">
    <Card>
      <CardContent className="p-6 grid md:grid-cols-3 gap-4 text-sm text-black">
        <div><strong>Frontend</strong><br />React.js, Redux, Tailwind CSS, Next.js, TypeScript</div>
        <div><strong>Backend</strong><br />Node.js, Express.js, REST APIs, GraphQL</div>
        <div><strong>Database</strong><br />MongoDB, PostgreSQL, MySQL</div>
        <div><strong>DevOps</strong><br />Docker, Jenkins, GitHub Actions, Postman</div>
        <div><strong>Cloud</strong><br />AWS, Heroku, Vercel</div>
        <div><strong>Platforms</strong><br />VTEX IO, BigCommerce, WordPress</div>
        <div><strong>Gen AI</strong><br />Prompt Engineering, ChatGPT, Ollama, LangChain, Vector Database</div>
      </CardContent>
    </Card>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Key Projects">
    <div className="grid gap-6 text-black">
      {[{
        title: "Publicis Sapient – Senior Associate L1",
        date: "Sep 2021 – Present",
        location: "Gurugram, India",
        work: ["💳 VTEX & BigCommerce Payment Plugins: Developed PCI-compliant plugins supporting multi-gateway payments, order tracking, and seamless checkout integration."]
      }, {
        title: "Habilelabs – Associate Technical Lead",
        date: "Oct 2020 – Sep 2021",
        location: "Jaipur, India",
        work: ["🛡️ Email Security Infrastructure: Built secure Node.js microservices to filter threats, manage email flows, and log forensic insights across enterprise communication."]
      }, {
        title: "Pratham Software (PSI) – Senior Software Engineer",
        date: "Mar 2019 – Oct 2020",
        location: "Jaipur, India",
        work: ["📊 Marketing & Digital Catalyst Suite: Engineered campaign dashboards, analytics workflows, and A/B testing features to empower digital marketing strategies."]
      }, {
        title: "Evolphin Software – Software Engineer",
        date: "Oct 2015 – Mar 2019",
        location: "Gurgaon, India",
        work: ["🗂️ Digital Asset Management Platform: Designed a robust media library with tagging, versioning, and access control, enabling marketing teams to efficiently manage creative assets."]
      }].map((job, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-1">{job.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{job.location} | {job.date}</p>
            <ul className="list-disc pl-5 space-y-2">
              {job.work.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const CaseStudy = () => (
  <Section id="case-study" title="Case Study">
    <Card>
      <CardContent className="p-6 text-black">
        <h3 className="text-2xl font-bold mb-2">🧠 AI-Powered Inventory Insights Tool</h3>
        <p className="italic text-gray-700 mb-2">Personal Full Stack Project</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Developed a full-stack dashboard using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong> to track and analyze daily inventory updates.</li>
          <li>Integrated <strong>Ollama (offline LLM)</strong> and <strong>LangChain</strong> to auto-generate reports with insights on:
            <ul className="list-inside list-disc ml-4">
              <li>Best-selling items</li>
              <li>Declining sales</li>
              <li>Smart restock alerts (based on 7-day demand)</li>
            </ul>
          </li>
          <li>Used a <strong>vector database</strong> to enable semantic search on product descriptions and trends.</li>
          <li>Set up cron jobs to automate daily ingestion → AI analysis → email delivery to stakeholders.</li>
        </ul>
      </CardContent>
    </Card>
  </Section>
);

const Certifications = () => (
  <Section id="certification" title="📜 Certifications">
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-1">Advanced React and GraphQL — Master Package</h3>
        <p className="text-sm text-gray-500">Wes Bos &nbsp;|&nbsp; Sep 2021</p>
      </CardContent>
    </Card>
    <Card className="mt-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-1">Certified XT ­ NFR Specialist L1</h3>
        <p className="text-sm text-gray-500">Publicis Sapient &nbsp;|&nbsp; Apr 2022</p>
        <p className="text-sm text-gray-700 mt-1">Focused on Accessibility, Security, Performance, and SEO</p>
      </CardContent>
    </Card>
    <h2 className="text-3xl font-semibold mb-4 mt-10">🏆 Awards</h2>
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-1">Best Team Player</h3>
        <p className="text-sm text-gray-500">Pratham Software &nbsp;|&nbsp; Jan 2021</p>
      </CardContent>
    </Card>
    <Card className="mt-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-1">Partnering For Client Impact – Worldpay</h3>
        <p className="text-sm text-gray-500">Publicis Sapient &nbsp;|&nbsp; May 2023</p>
      </CardContent>
    </Card>
  </Section>
);

const Strengths = () => (
  <Section id="strengths" title="Professional Strengths">
    <Card>
      <CardContent className="p-6 space-y-2 text-black">
        <div>✅ Deep understanding of scalable architecture and performance optimization</div>
        <div>🤝 Strong team collaboration and agile development experience</div>
        <div>🚀 Focused on quality, testing, and maintainable code</div>
        <div>📚 Passionate about mentoring, clean architecture, and continuous growth</div>
        <div>🌐 Believer in building with purpose, empathy, and innovation</div>
      </CardContent>
    </Card>
  </Section>
);

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-black">
      <Header />
      <main className="flex-grow p-4 sm:p-8 md:p-12 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-black">Pankaj Yadav</h1>
          <p className="text-xl text-gray-800">
            Fullstack Developer | React.js & Node.js Specialist | 9+ Years of Experience
          </p>
          <ContactInfo />
        </section>

        <About />
        <TechStack />
        <Projects />
        <CaseStudy />
        <Certifications />
        <Strengths />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;
