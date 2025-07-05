
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Pankaj Yadav</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#stack" className="hover:underline">Tech Stack</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#certification" className="hover:underline">Certification & Awards</a>
          <a href="#case-study" className="hover:underline">Case Study</a>
          <a href="#strengths" className="hover:underline">Strengths</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16 py-6 text-center text-sm">
      <div>© {new Date().getFullYear()} Pankaj Yadav. Built with React, Tailwind CSS, and ❤️</div>
    </footer>
  );
}

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow p-6 md:p-12 max-w-5xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-gray-800">Pankaj Yadav</h1>
          <p className="text-xl text-gray-600">
            Fullstack Developer | React.js & Node.js Specialist | 9+ Years of Experience
          </p>
          <div className="flex justify-center flex-wrap gap-1 mt-6">
            <Button variant="outline"><Phone className="mr-2 h-4 w-3" />+91 9660723222</Button>
            <Button variant="outline"><Mail className="mr-2 h-4 w-3" />Pankajthukran32@gmail.com</Button>
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-3" />https://www.linkedin.com/in/pankajyadav32/</Button>
            <Button variant="outline"><Github className="mr-2 h-4 w-3" />https://github.com/pankajthukran32</Button>
          </div>
          
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <Card>
            <CardContent className="p-6 text-gray-700 text-lg leading-relaxed">
              I am a passionate fullstack developer with over 9 years of experience designing and building scalable software products across domains. My core strengths lie in modern frontend development with React.js and robust backend architecture using Node.js. From crafting seamless user interfaces to optimizing backend APIs for performance and security, I bring holistic value to teams and products.
              <br /><br />
              I’ve worked in domains such as digital asset management, marketing automation, cybersecurity, and e-commerce integrations. I believe in continuous learning, cross-functional collaboration, and building products that make an impact.
            </CardContent>
          </Card>
        </section>

        <section id="stack" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <Card>
            <CardContent className="p-6 grid md:grid-cols-3 gap-4 text-sm text-gray-800">
              <div><strong>Frontend</strong><br />React.js, Redux, Tailwind CSS, Next.js, TypeScript</div>
              <div><strong>Backend</strong><br />Node.js, Express.js, REST APIs, GraphQL</div>
              <div><strong>Database</strong><br />MongoDB, PostgreSQL, MySQL</div>
              <div><strong>DevOps</strong><br />Docker, Jenkins, GitHub Actions, Postman</div>
              <div><strong>Cloud</strong><br />AWS, Heroku, Vercel</div>
              <div><strong>Platforms</strong><br />VTEX IO, BigCommerce, WordPress</div>
              <div><strong>Gen AI</strong><br />Prompt Engineering, ChatGPT, Ollama, LangChain, Vector Database</div>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Key Projects</h2>
          <div className="grid gap-6">
            {/* Publicis Sapient */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">Publicis Sapient – Senior Associate L1</h3>
          <p className="text-sm text-gray-500 mb-2">Gurugram, Haryana, India | Sep 2021 – Present</p>

          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
            <li>
              <strong>💳 VTEX & BigCommerce Payment Plugins:</strong> Developed PCI-compliant plugins supporting multi-gateway payments, order tracking, and seamless checkout integration.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Habile */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">Habilelabs – Associate Technical Lead</h3>
          <p className="text-sm text-gray-500 mb-2">Jaipur, India | Oct 2020 – Sep 2021</p>

          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
            <li>
              <strong>🛡️ Email Security Infrastructure:</strong> Built secure Node.js microservices to filter threats, manage email flows, and log forensic insights across enterprise communication.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Pratham Software */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">Pratham Software (PSI) – Senior Software Engineer</h3>
          <p className="text-sm text-gray-500 mb-2">Jaipur, India | Mar 2019 – Oct 2020</p>

          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
            <li>
              <strong>📊 Marketing & Digital Catalyst Suite:</strong> Engineered campaign dashboards, analytics workflows, and A/B testing features to empower digital marketing strategies.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Evolphin Software */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">Evolphin Software – Software Engineer</h3>
          <p className="text-sm text-gray-500 mb-2">Gurgaon, India | Oct 2015 – Mar 2019</p>

          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200 space-y-2">
            <li>
              <strong>🗂️ Digital Asset Management Platform:</strong> Designed a robust media library with tagging, versioning, and access control, enabling marketing teams to efficiently manage creative assets.
            </li>
          </ul>
        </CardContent>
      </Card>
          </div>
        </section>

        <section id="case-study" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Case Study</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        🧠 AI-Powered Inventory Insights Tool
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-2 italic">
        Personal Full Stack Project
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
        <li>
          Developed a full-stack dashboard using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong> to track and analyze daily inventory updates.
        </li>
        <li>
          Integrated <strong>Ollama (offline LLM)</strong> and <strong>LangChain</strong> to auto-generate reports with insights on:
          <ul className="list-disc list-inside ml-5">
            <li>Best-selling items</li>
            <li>Declining sales</li>
            <li>Smart restock alerts (based on 7-day demand)</li>
          </ul>
        </li>
        <li>
          Used a <strong>vector database</strong> to enable semantic search on product descriptions and trends.
        </li>
        <li>
          Set up cron jobs to automate daily ingestion → AI analysis → email delivery to stakeholders.
        </li>
        <li>
          Result: Learned offline LLMs integration, real-time analytics, vector search, and automated AI workflows.
        </li>
      </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="certification">
      <div>
        <h2 className="text-3xl font-semibold mb-4">📜 Certifications</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-1">
              Advanced React and GraphQL — Master Package
            </h3>
            <p className="text-sm text-gray-500">Wes Bos &nbsp;|&nbsp; Sep 2021</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-1">
              Certified XT ­ NFR Specialist L1
            </h3>
            <p className="text-sm text-gray-500">
              Publicis Sapient &nbsp;|&nbsp; Apr 2022
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              Focused on Accessibility, Security, Performance, and SEO
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Awards */}
      <div>
        <h2 className="text-3xl font-semibold mb-4 mt-10">🏆 Awards</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-1">
              Best Team Player
            </h3>
            <p className="text-sm text-gray-500">Pratham Software &nbsp;|&nbsp; Jan 2021</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-1">
              Partnering For Client Impact – Worldpay
            </h3>
            <p className="text-sm text-gray-500">Publicis Sapient &nbsp;|&nbsp; May 2023</p>
          </CardContent>
        </Card>
      </div>
        </section>

        <section id="strengths">
          <h2 className="text-3xl font-semibold mb-4 mt-10">Professional Strengths</h2>
          <Card>
            <CardContent className="p-6 space-y-2 text-gray-800">
              <div>✅ Deep understanding of scalable architecture and performance optimization</div>
              <div>🤝 Strong team collaboration and agile development experience</div>
              <div>🚀 Focused on quality, testing, and maintainable code</div>
              <div>📚 Passionate about mentoring, clean architecture, and continuous growth</div>
              <div>🌐 Believer in building with purpose, empathy, and innovation</div>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
