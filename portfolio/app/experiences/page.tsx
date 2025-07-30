'use client';

export default function Experiences() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="text-center max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-2 tracking-tight font-sans">Professional Experiences</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-400 rounded mb-10 mx-auto" />
        <div className="space-y-10 text-left">
          {/* Experience Card 1 */}
          <div className="relative bg-gradient-to-r from-blue-100/60 to-white border-l-4 border-blue-500 shadow-lg rounded-xl p-6 transition-transform duration-200 hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">Senior Front-End Developer</h2>
            <p className="text-sm text-gray-500 mb-2">Noah Labs GmbH — Berlin, Germany (Jan 2024 – Present)</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Built a scalable, AI-powered healthcare web app using React 18, TypeScript, and Vite.</li>
              <li>Implemented accessible, modular interfaces with MUI and Emotion.</li>
              <li>Integrated advanced features such as real-time data visualization (Visx), dynamic translation (Tolgee), and robust validation (Zod).</li>
              <li>Boosted productivity through AI-assisted development and prompt engineering.</li>
            </ul>
          </div>
          {/* Experience Card 2 */}
          <div className="relative bg-gradient-to-r from-blue-100/60 to-white border-l-4 border-blue-400 shadow-lg rounded-xl p-6 transition-transform duration-200 hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">Front-End Developer</h2>
            <p className="text-sm text-gray-500 mb-2">Namo Company — Oslo, Norway (Jun 2019 – Aug 2023)</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Led the development of an online business platform using React, Redux, and WebPack.</li>
              <li>Created a reusable design system and component documentation with Storybook.</li>
              <li>Optimized SEO by migrating the mobile app to Next.js and built analytics dashboards using Echarts.</li>
              <li>Managed CI/CD pipelines and AWS infrastructure (EC2, RDS, Route 53).</li>
            </ul>
          </div>
          {/* Experience Card 3 */}
          <div className="relative bg-gradient-to-r from-blue-100/60 to-white border-l-4 border-indigo-400 shadow-lg rounded-xl p-6 transition-transform duration-200 hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">Full Stack Developer</h2>
            <p className="text-sm text-gray-500 mb-2">PayamPardaz — Isfahan, Iran (Jan 2017 – Mar 2020)</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Developed a Next-Gen Firewall UI and core modules with React, Python, and Django REST.</li>
              <li>Automated deployment with Azure CI/CD and collaborated across agile teams.</li>
            </ul>
          </div>
          {/* Experience Card 4 */}
          <div className="relative bg-gradient-to-r from-blue-100/60 to-white border-l-4 border-indigo-300 shadow-lg rounded-xl p-6 transition-transform duration-200 hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">Front-End Developer (Internship)</h2>
            <p className="text-sm text-gray-500 mb-2">IT Deputy of Isfahan Municipality — Isfahan, Iran (Jan 2016 – Jan 2017)</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
              <li>Built interactive UI components and services using React, HTML, and CSS.</li>
              <li>Collaborated in agile teams to enhance project delivery and quality.</li>
            </ul>
          </div>
          {/* Experience Card 5 */}
          <div className="relative bg-gradient-to-r from-blue-100/60 to-white border-l-4 border-blue-300 shadow-lg rounded-xl p-6 transition-transform duration-200 hover:scale-105 animate-fade-in">
            <h2 className="text-2xl font-bold text-indigo-700 flex items-center gap-2">Programming Tutor</h2>
            <p className="text-sm text-gray-500 mb-2">Jahad Daneshgahi Institute — Isfahan, Iran (2016)</p>
            <p className="mt-2 text-gray-700">Instructed students in the fundamentals of JavaScript programming.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </main>
  );
}