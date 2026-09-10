import { Section } from "./Section";
import { AnimatedContent } from "./AnimatedContent";

const PROJECTS = [
  {
    title: "NewsBiasDetect",
    roleLabel: "Research — IEEE-format paper",
    period: "2023–2024",
    summary:
      "Political bias detection across Pakistani news. A 1,000-article dataset annotated with expert journalists, and four fine-tuned transformers compared; RoBERTa best at 0.796 accuracy, 0.767 F1.",
    tags: ["PyTorch", "RoBERTa", "Hugging Face", "LDA"],
    figure: "0.796",
    figureLabel: "RoBERTa accuracy",
  },
  {
    title: "Semantic Similarity in English Sentences",
    roleLabel: "Research — SemEval 2024 Task 1",
    period: "2024",
    summary:
      "BERT-based system for English Semantic Textual Relatedness, evaluated on the SemEval 2024 Task 1 dataset.",
    tags: ["BERT", "PyTorch", "NLP"],
    figure: "SemEval",
    figureLabel: "2024 Task 1",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--hair)]">
        {PROJECTS.map((project, i) => (
          <AnimatedContent
            key={project.title}
            direction="vertical"
            distance={24}
            duration={0.5}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.15}
            delay={i * 0.06}
          >
            <div
              className={`p-6 lg:p-8 flex flex-col gap-4 border-b sm:border-b-0 ${
                i % 2 === 0 ? "sm:border-r" : ""
              } ${i < PROJECTS.length - 2 ? "border-b border-[var(--hair)] sm:border-b" : ""} ${
                i === 1 ? "sm:border-b-0" : ""
              }`}
            >
              <div>
                <p
                  className="font-display font-bold text-[var(--type)] text-[1.4rem] leading-[1.1] tracking-[-0.014em] mb-1"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {project.figure}
                </p>
                <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--dim)]">
                  {project.figureLabel}
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-[var(--type)] text-[1.1rem] leading-[1.1] tracking-[-0.014em] mb-1">
                  {project.title}
                </p>
                <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[var(--dim)]">
                  {project.roleLabel} — {project.period}
                </p>
              </div>
              <p className="text-[1rem] leading-[1.72] tracking-[0.005em] text-[var(--prose)]">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.16em] uppercase text-[var(--dim)] border border-[var(--hair)] px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </Section>
  );
}
