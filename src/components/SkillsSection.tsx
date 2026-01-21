import { useInView } from "@/hooks/useInView";
import { Code2, Wrench, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 60 },
      { name: "Bootstrap", level: 50 },
    ],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "JAVA", level: 50 },
      { name: "Python", level: 50 },
      { name: "PHP", level: 60 },
      { name: "SQL", level: 50 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 70 },
      { name: "GitHub", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "XAMPP", level: 50 },
    ],
  },
  {
    icon: Database,
    title: "Learning Next",
    skills: [
      { name: "Node.js", level: 0 },
      { name: "MongoDB", level: 15 },
      { name: "REST APIs", level: 5 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  delay,
  isVisible,
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-primary">{level}%</span>
    </div>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: isVisible ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 card-glow ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 100 + skillIndex * 100}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Responsive Design",
              "CSS Grid",
              "Tailwind CSS",
              "Bootstrap",
              "CS Core Fundamental",
              "Database Management",
              "Computer Network",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-full bg-secondary border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
