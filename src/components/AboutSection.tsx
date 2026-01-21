import { useState } from "react";
import { GraduationCap, Code, Target, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const timelineItems = [
  {
    year: "2024 - 2027",
    title: "B.E. in Artificial Intelligence & Data Science",
    description: "Dr. D. Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune. while focusing on Data Structures & Algorithms in Java and Full Stack Web Development to build a career as a Software Development Engineer.",
  },
   {
    year: "2021 - 2024",
    title: "Diploma in Computer Engineering",
    description: "Government Polytechnic, Ahilyanagar. Passed with 89.26%. Learned programming fundamentals.",
  },
  {
    year: "2021",
    title: "High School Graduation",
    description: "Shri Honaji Kondaji Dhome Madhyamik Vidyalaya Dhotre Bk. Passed with 94.80%. Graduated with a focus on mathematics and science.",
  }
];

const interests = [
  { icon: Code, label: "Coding" },
  { icon: Target, label: "Problem Solving" },
  { icon: Heart, label: "UI Design" },
  { icon: GraduationCap, label: "Learning" },
];

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* About Content */}
          <div>
            <h3 className="text-xl md:text-2xl font-display font-semibold mb-4">
              AI & Data Science Student
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I have completed my Diploma in Computer Engineering from
Government Polytechnic, Ahmednagar, and I am currently pursuing my
B.E. in Artificial Intelligence and Data Science at
Dr. D. Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune.</p>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I have a strong foundation in Python, C, C++, SQL, PHP, and Data Structures & Algorithms (Java).
At present, I am exploring MERN Stack Web Development to build modern, full-stack applications.
I believe in continuous learning and staying updated with the
                latest technologies and best practices. My goal is to build
                applications that not only look great but also provide excellent
                user experiences.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or learning about UI/UX
                design principles to enhance my development skills.
              </p>
            </div>

            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 hover:bg-primary/10 -ml-4"
            >
              {isExpanded ? (
                <>
                  Read Less <ChevronUp className="ml-1" size={16} />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="ml-1" size={16} />
                </>
              )}
            </Button>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="font-display font-semibold mb-4">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors"
                  >
                    <Icon size={16} className="text-primary" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h4 className="font-display font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education Timeline
            </h4>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
  <div key={item.year} className="relative pl-12">
    {/* Timeline Dot */}
    <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </div>

    {/* Timeline Line (only if not last item) */}
    {index !== timelineItems.length - 1 && (
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
    )}

    {/* Content */}
    <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors">
      <span className="text-primary text-sm font-medium">{item.year}</span>
      <h5 className="font-display font-semibold mt-1">{item.title}</h5>
      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
    </div>
  </div>
))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
