import TypingText from "@/components/TypingText";
import { TiltSpotlight } from "@/components/TiltSpotlight";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import MagneticDock from "@/components/ui/magnetic-dock";
import { BGPattern } from "@/components/ui/bg-pattern";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Next.js", "Redux", "Tailwind", "RxJS", "React Query"],
  },
  {
    category: "Backend",
    items: ["Node.js", "AWS Lambda", "Step Functions", "API Gateway", "Cognito", "SNS", "REST APIs", "GraphQL"],
  },
  {
    category: "AI",
    items: ["OpenAI API", "Multi-Agent Systems", "Pydantic", "OCR (Mistral)", "RAG", "LangChain", "LangGraph", "MCP"],
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
    images: ["/jpmorgan-mobile.png", "/jpmorgan-platform.png"],
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
              A Software Engineer passionate about building products 0 → 1. Every phase of the process excites me: develop the frontend, wire up the AI agents, deploy the infrastructure, and iterate until it actually works.
              Most recently, I built AI-EP, an agentic AI platform that takes dense, jargon-heavy education plans and makes them genuinely accessible for parents of children with special needs. 
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
            Before my Master's at Northeastern, I spent three years at J.P. Morgan, where I learned to write code that handles millions in FX trades without flinching.             
            Enterprise taught me rigor and reliability. Building from zero I applied these learning to engineer products that move people.
            </p>
            
            {/* Interactive Tilt Card */}
            <div className="mt-12">
              <TiltSpotlight />
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
            I promised myself I'd see 2001: A Space Odyssey for the first time in a theatre. When I finally did, right after my AI Engineering class, Dave and HAL's conversations hit different. I was already building agents of my own. As an engineer eternally experimenting with AI, I'm on my own odyssey, harnessing agentic AI to build products that move the world forward.            </p>
          </div>
        </section>
      </BeamsBackground>

      {/* Programming Skills Section */}
      <section id="skills" className="relative px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <BGPattern variant="grid" mask="fade-edges" />
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
          <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-gray-800">
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
                {/* Work images */}
                {job.images ? (
                  <div className="grid grid-cols-2 gap-4">
                    {job.images.map((image, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full">
                        <img 
                          src={image} 
                          alt={`${job.company} work screenshot ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-800/50 h-20 md:h-44 lg:h-60 w-full border border-gray-700 flex items-center justify-center text-gray-500 text-sm">
                      Image placeholder
                    </div>
                    <div className="rounded-lg bg-gray-800/50 h-20 md:h-44 lg:h-60 w-full border border-gray-700 flex items-center justify-center text-gray-500 text-sm">
                      Image placeholder
                    </div>
                  </div>
                )}
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
          <div className="flex items-center justify-center">
            <MagneticDock />
          </div>
        </div>
      </section>
    </>
  );
}
