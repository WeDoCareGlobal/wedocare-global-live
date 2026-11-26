import Link from "next/link"

const systems = [
  { id: "omniguard", name: "OmniGuard", desc: "Zero-Trust AI Security Gateway" },
  { id: "agentguard", name: "AgentGuard", desc: "Agent Execution Policy & Audit" },
  { id: "agentvault", name: "AgentVault", desc: "Secrets Governance & Bounded Access" },
  { id: "enterprise-hybrid-rag", name: "Enterprise Hybrid-RAG", desc: "Grounded Knowledge Retrieval" },
  { id: "foundationcentar", name: "FoundationCentar", desc: "Agent Orchestration OS" },
  { id: "pharma-intelligence-os", name: "Pharma Intelligence OS", desc: "Regulatory Intelligence Workspace" },
  { id: "agent-eval", name: "Agent Eval", desc: "Proof-of-Execution Engine" },
]

export default function SystemsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="serif text-4xl font-normal text-white mb-2">Seven Systems</h1>
        <p className="text-bone/60 mb-12">Inspect, control, evaluate, and govern autonomous AI agents.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((s) => (
            <Link key={s.id} href={"/systems/" + s.id} className="block border border-white/10 bg-white/5 p-8 rounded-lg hover:border-brass-500/50 hover:bg-white/10 transition">
              <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
              <p className="text-bone/70">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
