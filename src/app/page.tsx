import TypingText from "@/components/TypingText";
import { TiltSpotlight } from "@/components/TiltSpotlight";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java"],
  },
  {
    category: "Frontend Libraries",
    items: ["React", "Vue.js", "Next.js", "Redux", "Tailwind", "Vuex", "RxJS", "React Query"],
  },
  {
    category: "Design Systems & Data Viz",
    items: ["Material UI", "Storybook", "Responsive Design", "Accessibility", "D3.js", "Chart.js", "Recharts"],
  },
  {
    category: "API Integration",
    items: ["RESTful APIs", "GraphQL", "Node.js"],
  },
  {
    category: "Cloud & Databases",
    items: ["AWS (S3, Lambda, CloudFront, DynamoDB)", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Testing & Build Tools",
    items: ["Jest", "Cypress", "Webpack", "Babel", "Vite", "Jenkins", "CI/CD"],
  },
];

const workExperience = [
  {
    company: "Burnes Center @ Northeastern University",
    role: "Software Engineer",
    location: "Boston",
    period: "Jan 2025 - Present",
    summary:
      "Leading frontend development for AI-EP, a Chan Zuckerberg-backed application that helps non-English-speaking parents access government services for special needs children. Transformed the MVP into a production-ready app serving 100+ users, implementing RESTful client architecture with real-time polling, a Node.js OTP login flow that eliminated authentication issues across 10+ UX focus groups, and SSG rendering with Next.js. Also developed a serverless PDF microservice for offline access and built scalable WebSocket architecture for MassGov's AI Sandbox serving 100+ government officials.",
    technologies: ["React", "TypeScript", "Redux", "AWS CDK", "Next.js", "Node.js", "React Query", "Lambda"],
  },
  {
    company: "SV Agri Solutions",
    role: "Software Engineering Consultant",
    location: "Pune",
    period: "April 2022 - February 2023",
    summary:
      "Consulted on frontend architecture and modernization initiatives, leading the migration of legacy JavaScript codebases to TypeScript to reduce runtime errors and improve maintainability. Created a centralized component library using Storybook and Material UI through webpack module federation, promoting reusability across 5+ micro frontends. Prototyped Apollo Client caching patterns to consolidate multiple REST calls into single GraphQL queries.",
    technologies: ["TypeScript", "Storybook", "Material UI", "GraphQL", "Webpack", "Apollo Client"],
  },
  {
    company: "J.P. Morgan Chase & Co.",
    role: "Associate Software Engineer",
    location: "Mumbai",
    period: "July 2018 - Aug 2021",
    summary:
      "Developed end-to-end flows for FX Orders in Execute, an award-winning Macro Trading Platform processing transactions of $1M-$10M. Introduced Swap product types using advanced TypeScript patterns, engineered reusable UI components in an enterprise monorepo driving consistency across 5+ FX products, and optimized React rendering through selective Redux subscriptions and memoized selectors. Implemented 15+ custom validators reducing order errors by 73%, enhanced async workflows with Redux-Observable epics, and built an efficient Protobuf data marshalling layer achieving 200ms order execution.",
    technologies: ["React", "TypeScript", "RxJS", "Redux", "Final Form", "Protobuf", "Jenkins"],
  },
];

export default function Home() {
  return (
    <>
      {/* About Me Section */}
      <BeamsBackground className="min-h-[600px]" intensity="medium">
        <section id="about" className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
              style={{
                fontFamily: '"Space Mono", monospace',
                fontWeight: 400,
              }}
            >
              <TypingText text="Hello! I am Ayush" speed={80} />
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              A Software Engineer with 4 years of experience building products that are as technically powerful as they are deeply human. From architecting enterprise trading platforms at JPMorgan Chase to leading frontend development on a Chan Zuckerberg-backed AI app that helps non-English-speaking parents navigate critical services—I bring engineering rigor to mission-driven work.
            </p>
            
            {/* Interactive Tilt Card */}
            <div className="mt-12">
              <TiltSpotlight />
            </div>
          </div>
        </section>
      </BeamsBackground>

      {/* Programming Skills Section */}
      <section id="skills" className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12 text-white"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 400,
            }}
          >
            Programming Skills
          </h2>
          <div className="divide-y divide-gray-700">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5 first:pt-0 last:pb-0">
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider sm:w-48 sm:flex-shrink-0">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl text-white"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 400,
            }}
          >
            Work Experience
          </h2>
        </div>
        <Timeline
          data={workExperience.map((job) => ({
            title: job.period.split(" - ")[0].replace("Jan ", "").replace("April ", "").replace("July ", ""),
            content: (
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-1">
                  {job.company}
                </h4>
                <p className="text-sm md:text-base text-gray-400 mb-4">
                  {job.role} • {job.location}
                </p>
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                  {job.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Placeholder for images - you can add them later */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-800/50 h-20 md:h-44 lg:h-60 w-full border border-gray-700 flex items-center justify-center text-gray-500 text-sm">
                    Image placeholder
                  </div>
                  <div className="rounded-lg bg-gray-800/50 h-20 md:h-44 lg:h-60 w-full border border-gray-700 flex items-center justify-center text-gray-500 text-sm">
                    Image placeholder
                  </div>
                </div>
              </div>
            ),
          }))}
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-6 text-white"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 400,
            }}
          >
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a conversation about technology and its potential to make a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
              <a href="mailto:ayush@example.com">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <a href="https://linkedin.com/in/ayush" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <a href="https://github.com/ayush" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
