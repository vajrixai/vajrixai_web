import {
  Bot,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  Code2,
  RefreshCw,
  Workflow,
} from "lucide-react";

export const expertise = [
  { title: "Artificial Intelligence (AI)", desc: "Applied intelligence designed around measurable business outcomes.", icon: BrainCircuit },
  { title: "AI Agents & Autonomous Systems", desc: "Goal-driven systems that reason, coordinate, and act with control.", icon: Bot },
  { title: "Intelligent Automation", desc: "Adaptive workflows that eliminate friction across operations.", icon: Workflow },
  { title: "Digital Transformation", desc: "Technology modernization aligned to how your business actually works.", icon: RefreshCw },
  { title: "Enterprise Solutions", desc: "Secure, governed platforms for complex organizational demands.", icon: Building2 },
  { title: "Software Development", desc: "Purpose-built software engineered for clarity and longevity.", icon: Code2 },
  { title: "Data & Analytics", desc: "Connected data foundations that turn information into action.", icon: ChartNoAxesCombined },
  { title: "Cloud Solutions", desc: "Flexible cloud systems designed for performance and control.", icon: CloudCog },
] as const;

export const industries = [
  { name: "Healthcare", code: "01", line: "Connected care. Safer decisions." },
  { name: "Finance", code: "02", line: "Trust at transactional scale." },
  { name: "Manufacturing", code: "03", line: "Intelligence across the floor." },
  { name: "Retail", code: "04", line: "Every signal, closer to demand." },
  { name: "Logistics", code: "05", line: "Complex movement, made visible." },
  { name: "Education", code: "06", line: "Systems built around progress." },
  { name: "Real Estate", code: "07", line: "Sharper assets and operations." },
  { name: "Technology", code: "08", line: "Build the platform behind growth." },
] as const;

export const capabilities = [
  ["01", "Build AI-powered products", "From embedded intelligence to entirely new product categories."],
  ["02", "Develop enterprise software", "High-integrity systems designed for complex work and real adoption."],
  ["03", "Automate business workflows", "Connect decisions, systems, and people in one intelligent flow."],
  ["04", "Modernize legacy systems", "Evolve the core without putting business continuity at risk."],
  ["05", "Deliver digital transformation", "Turn strategy into durable changes in technology and operation."],
  ["06", "Create scalable cloud-native platforms", "Elastic foundations built for velocity, security, and scale."],
  ["07", "Integrate intelligent technologies", "Make intelligence a useful layer across the enterprise."],
  ["08", "Build future-ready digital ecosystems", "Composable platforms that keep creating new possibilities."],
] as const;

export const process = [
  ["01", "Discover", "Frame the opportunity, constraints, and measure of success."],
  ["02", "Research", "Replace assumptions with evidence and technical clarity."],
  ["03", "Design", "Shape the experience, system, and path to value."],
  ["04", "Build", "Engineer with rigor, transparency, and continuous validation."],
  ["05", "Deploy", "Release safely into the environments that matter."],
  ["06", "Optimize", "Observe real use and improve performance relentlessly."],
  ["07", "Scale", "Extend capability without compromising the foundation."],
] as const;

export const strengths = [
  ["Innovation", "We pursue useful originality—not novelty for its own sake."],
  ["Engineering Excellence", "Quality is designed into the system, not inspected at the end."],
  ["Reliability", "Resilient technology and clear ownership from day one."],
  ["Scalability", "Architectures that expand with demand, data, and ambition."],
  ["Enterprise Architecture", "Coherent foundations across systems, security, and governance."],
  ["Intelligent Automation", "Automation that improves judgment as well as speed."],
  ["Research-Driven Development", "Decisions grounded in evidence, prototypes, and learning."],
  ["Long-Term Technology Partnership", "Senior thinking that stays accountable beyond launch."],
] as const;

export const technologies = {
  Intelligence: ["OpenAI", "PyTorch", "TensorFlow", "LangChain", "Hugging Face"],
  Frontend: ["Next.js", "React", "TypeScript", "Three.js", "WebGL"],
  Platform: ["Node.js", "Python", "Go", "Java", ".NET"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Databricks"],
  Cloud: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform"],
  Enterprise: ["SAP", "Salesforce", "ServiceNow", "Microsoft 365", "Oracle"],
} as const;
