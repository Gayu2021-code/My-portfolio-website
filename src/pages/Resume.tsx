import { Download, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const resumeData = {
  name: "Gayatri Pacharane",
  title: "Software Developer",
  email: "pacharnegaytri06@gmail.com",
  phone: "+91 76209 74729",
  location: "Akurdi Pune, Maharastra",
  summary:
    "Passionate Software Developer and AI & Data science student with a strong foundation in web technologies , CS core Fundamental. Dedicated to creating beautiful, responsive, and user-friendly web experiences.",
  
  experience: [
    {
      title: "PHP Developer Intern",
      company: "Cipher technology",
      period: "March 2023 - April 2023",
      description: [
        "Built and maintained responsive web applications using HTML, CSS, and JavaScript for the frontend, PHP for backend logic, and MySQL for database management.",
        "Collaborated with designer to implement user-friendly UI",
        "Improved website performance by 30% through code optimization",
      ],
    },
  ],
  
  education: [
    {
      degree: "B.E. in Artificial Intelligence & Data Science",
      school: "Dr. D. Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune",
      period: "2024 - 2027",
      description: " focusing on Data Structures & Algorithms in Java and Full Stack Web Development to build a career as a Software Development Engineer.",
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "Government Polytechnique Ahilyanagar",
      period: "2021 - 2024",
      description: "Focus on software engineering and web technologies",
    },
  ],
  
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "PHP", "React", "BootStrap"],
    tools: ["Git", "GitHub", "VS Code"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"],
  },
  
  certifications: [
    { name: "DSA with JAVA", issuer: "APNA COLLEGE", year: "2026" },
  ],
};

const Resume = () => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, isInView: experienceInView } = useInView({ threshold: 0.1 });
  const { ref: educationRef, isInView: educationInView } = useInView({ threshold: 0.1 });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.1 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="section-container py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-display font-bold gradient-text">
            Portfolio
          </a>
          <div className="flex items-center gap-4">
            <a href="/#contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </a>
            <Button onClick={handleDownload} className="gap-2">
              <Download size={16} />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Resume Content */}
      <main className="section-container py-12 md:py-20">
        {/* Profile Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-3xl font-bold text-primary-foreground">
            <img src="/gayatri.jpeg"
                      alt="Gayatri Pacharane"
                      className="w-full h-full object-cover rounded-full"/>

          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
            {resumeData.name}
          </h1>
          <p className="text-xl text-primary mb-6">{resumeData.title}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              {resumeData.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              {resumeData.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {resumeData.location}
            </span>
          </div>
          
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            {resumeData.summary}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Experience */}
            <section
              ref={experienceRef}
              className={`transition-all duration-700 ${
                experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section
              ref={educationRef}
              className={`transition-all duration-700 delay-100 ${
                educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary">{edu.school}</p>
                      </div>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div
            ref={skillsRef}
            className={`space-y-8 transition-all duration-700 delay-200 ${
              skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Skills */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Code className="text-primary" size={20} />
                Skills
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Award className="text-primary" size={20} />
                Certifications
              </h2>
              <div className="space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Download Button */}
            <Button onClick={handleDownload} className="w-full gap-2" size="lg">
              <Download size={18} />
              Download Resume PDF
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="section-container text-center text-muted-foreground">
          <a href="/" className="text-primary hover:underline">
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Resume;