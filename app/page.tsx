import Link from "next/link"

const systems = [
  { id: "omniguard", name: "OmniGuard", desc: "Zero-Trust AI Security Gateway & Runtime Firewall" },
  { id: "agentguard", name: "AgentGuard", desc: "Agent Execution Policy & Inspectable Audit" },
  { id: "agentvault", name: "AgentVault", desc: "Secrets Governance & Bounded Tool Access" },
  { id: "enterprise-hybrid-rag", name: "Enterprise Hybrid-RAG", desc: "NeMo Retriever + RRF with Cryptographic Proofs" },
  { id: "foundationcentar", name: "FoundationCentar", desc: "One-Click Agent Factory OS with CEO Governance" },
  { id: "pharma-intelligence-os", name: "Pharma Intelligence OS", desc: "Pharmacovigilance & Regulatory Intelligence Workspace" },
  { id: "agent-eval", name: "Agent Eval", desc: "Cryptographic Proof-of-Execution Engine" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          poster="/brand-poster.jpg"
        >
          <source src="/enterprise-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="relative z-10">
          <h1 className="serif text-5xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-6">
            Governed Autonomous AI
          </h1>
          <p className="text-bone/80 text-lg max-w-2xl mx-auto mb-10">
            Seven open engineering systems for teams that need to see what their agents do, prove why they did it, and hold the boundary while autonomy grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {systems.map((s) => (
              <Link key={s.id} href={"/systems/" + s.id} className="border border-white/10 text-white px-6 py-3 rounded hover:bg-white/5 transition">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <h2 className="serif text-3xl text-white mb-10">The Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Next.js", role: "Portal & Storefront" },
            { name: "Nitro", role: "API Layer" },
            { name: "turbo", role: "Monorepo Build" },
            { name: "PayPal + Gumroad", role: "Payments" },
            { name: "SWR", role: "Data Fetching" },
            { name: "Tailwind", role: "Styling" },
          ].map((s) => (
            <div key={s.name} className="bg-white/5 border border-white/10 p-6 rounded">
              <div className="text-white font-bold">{s.name}</div>
              <div className="text-bone/60 text-sm mt-1">{s.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
