
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Pankaj Yadav</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#stack" className="hover:underline">Tech Stack</a>
          <a href="#projects" className="hover:underline">Projects</a>
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
          <div className="flex justify-center flex-wrap gap-4 mt-6">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> your.email@example.com</Button>
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
            <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
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
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Key Projects</h2>
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">🗂️ Digital Asset Management Platform</h3>
                Designed a robust media library with tagging, versioning, and access control, enabling marketing teams to efficiently manage creative assets.
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">📊 Marketing & Digital Catalyst Suite</h3>
                Engineered campaign dashboards, analytics workflows, and A/B testing features to empower digital marketing strategies.
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">🛡️ Email Security Infrastructure</h3>
                Built secure Node.js microservices to filter threats, manage email flows, and log forensic insights across enterprise communication.
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">💳 VTEX & BigCommerce Payment Plugins</h3>
                Developed PCI-compliant plugins supporting multi-gateway payments, order tracking, and seamless checkout integration.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="strengths">
          <h2 className="text-3xl font-semibold mb-4">Professional Strengths</h2>
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
