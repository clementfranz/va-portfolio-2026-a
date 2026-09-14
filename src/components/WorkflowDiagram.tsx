export function WorkflowDiagram({ stages }: { stages: string[] }) {
  return (
    <div className="overflow-hidden rounded-none bg-[#14080b] p-6 text-white md:p-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#e8b4bb]/80">
        Shipment stages
      </p>
      <h3 className="display mt-2 text-xl font-semibold">Shipment visibility</h3>
      <p className="mt-2 text-sm text-white/65">
        The stages I mapped for this workflow.
      </p>
      <ol className="mt-6 space-y-3">
        {stages.map((stage, index) => (
          <li key={stage} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs font-semibold text-[#f4e8ea]">
              {index + 1}
            </span>
            <span className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm">
              {stage}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
