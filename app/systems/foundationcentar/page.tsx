"use client"
import Link from "next/link"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SystemPage() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher)

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/systems" className="text-bone/60 hover:text-white text-sm"> Back</Link>
          <h1 className="serif text-3xl font-normal text-white">FoundationCentar</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-sm font-semibold text-bone/50 uppercase tracking-wider mb-4">Status</h3>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-green-400 text-sm font-medium">Operational</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-sm font-semibold text-bone/50 uppercase tracking-wider mb-4">API Products</h3>
            {isLoading ? <div className="text-bone/60">Loading...</div> : error ? <div className="text-red-400 text-sm">Error loading data</div> : <ul className="space-y-3 text-sm text-bone/70">{data?.products?.map((p) => <li key={p.id} className="flex justify-between"><span>{p.name}</span><span>${p.price} {p.currency}</span></li>) || <li className="text-bone/50">No products</li>}</ul>}</div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
            <h3 className="text-sm font-semibold text-bone/50 uppercase tracking-wider mb-4">Documentation</h3>
            <ul className="space-y-3 text-sm text-bone/70">
              <li><a href="/docs" className="hover:text-white">System reference</a></li>
              <li><a href="/docs/evidence" className="hover:text-white">Evidence pack</a></li>
              <li><a href="/docs/compliance" className="hover:text-white">Compliance matrix</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
