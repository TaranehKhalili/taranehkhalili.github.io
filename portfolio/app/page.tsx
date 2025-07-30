'use client';

export default function Home() {
  
  return (
    <main className="relative flex flex-col items-center justify-center px-6 py-16 space-y-20 overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Hero Background Effect */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-indigo-100 via-white to-purple-100 opacity-50 z-0" />

      {/* Floating Particles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-300 rounded-full opacity-20 animate-float"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* SVG Background Shape */}
      <svg
        className="absolute top-0 left-0 w-full z-0 opacity-20"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#c4b5fd"
          d="M0,192L40,202.7C80,213,160,235,240,240C320,245,400,235,480,208C560,181,640,139,720,112C800,85,880,75,960,101.3C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
      </svg>
    {/* Hero Section */}
    <section className="relative w-full text-center py-20 z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Taraneh Khalili</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Senior Front-End Developer crafting performant, intelligent frontends for next-gen healthtech.
          </p>
          <div className="space-x-4">
            <a href="/Taraneh_Khalili_Resume.pdf" className="btn-primary">Download Resume</a>
            <a href="https://www.linkedin.com/in/taraneh-khalili" className="btn-secondary">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full bg-white py-16 shadow-inner z-10">
        <div className="max-w-3xl mx-auto space-y-6 px-4">
          <h2 className="text-2xl font-semibold text-center">About Me</h2>
          <p className="text-gray-700 text-center">
            I’m a front-end developer with 6+ years of experience building scalable, modular, and accessible web
            applications. Currently, I combine AI and React to create smarter healthcare platforms across Europe. I care
            deeply about clean code, accessibility, and user-centered design.
          </p>
        </div>
      </section>


    {/* Experience Section */}
    <section id="experience" className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="flex flex-col space-y-6">
          {[
            {
              company: "Noah Labs GmbH",
              period: "Jan 2024 – Present",
              location: "Berlin, Germany",
              url: "https://www.noah-labs.com",
              items: [
                "React 18, TypeScript, Vite, MUI, Emotion, Jotai, TanStack Router",
                "Developed AI-powered, voice-driven UI under medical compliance standards",
                "Interactive patient data visualization with Visx",
                "Internationalization with Tolgee, testing with Vitest"
              ]
            },
            {
              company: "Namo Company",
              period: "Jun 2019 – Aug 2023",
              location: "Oslo, Norway",
              url: "https://www.namo.no",
              items: [
                "React, TypeScript, Redux, Bootstrap, Webpack",
                "Led migration to Next.js for improved SEO and performance",
                "Built advanced dashboards with ECharts & booking calendar UI",
                "CI/CD with AWS, collaborated with UI/UX team"
              ]
            },
            {
              company: "PayamPardaz Company",
              period: "Jan 2017 – Mar 2020",
              location: "Isfahan, Iran",
              url: "#",
              items: [
                "Developed NGFW web application using React, Python, Django Rest Framework",
                "Built high availability and traffic shaping modules",
                "CI/CD with Azure, agile team collaboration"
              ]
            },
            {
              company: "IT Deputy of Isfahan Municipality",
              period: "Jan 2016 – Jan 2017",
              location: "Isfahan, Iran",
              url: "#",
              items: [
                "Frontend development for e-services using React.js, HTML, CSS",
                "Implemented interactive features and components",
                "Participated in cross-functional teams and code reviews"
              ]
            },
            {
              company: "Jahad Daneshgahi Isfahan Institute",
              period: "Jan 2016 – Jan 2017",
              location: "Isfahan, Iran",
              url: "#",
              items: [
                "Taught fundamentals of JavaScript programming"
              ]
            }
          ].map((exp, idx) => (
            <a
              key={idx}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:-translate-y-1 hover:shadow-2xl shadow-md rounded-xl p-6 bg-white border border-gray-200 hover:border-blue-500"
            >
              <h3 className="text-xl font-bold text-blue-700">{exp.company}</h3>
              <p className="text-gray-500 text-sm">{exp.period} | {exp.location}</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                {exp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

    {/* Skills Section */}
    <section id="skills" className="max-w-4xl w-full">
      <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div><strong>Languages:</strong> TypeScript, JavaScript</div>
        <div><strong>Frameworks:</strong> React.js, Next.js, React Native</div>
        <div><strong>Styling:</strong> CSS, Emotion, MUI, Bootstrap</div>
        <div><strong>Testing:</strong> Vitest, Jest</div>
        <div><strong>State Mgmt:</strong> Redux, Jotai, React Query</div>
        <div><strong>DevOps:</strong> GitLab CI/CD, AWS</div>
        <div><strong>AI Tools:</strong> Prompt Engineering, Copilot</div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Let’s Connect</h2>
      <p>I’m open to freelance or full-time roles in forward-thinking companies building meaningful products.</p>
      <p>Email me at <a className="text-blue-600 underline" href="mailto:taraneh69.k@gmail.com">taraneh69.k@gmail.com</a></p>
    </section>
  </main>
  );
}
