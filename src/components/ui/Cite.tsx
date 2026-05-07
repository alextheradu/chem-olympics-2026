interface CiteProps {
  ids: number | number[]
}

export function Cite({ ids }: CiteProps) {
  const list = Array.isArray(ids) ? ids : [ids]

  return (
    <sup className="ml-0.5 inline-flex gap-0.5 align-super text-[0.6em] font-medium text-white/55">
      {list.map((id, i) => (
        <a
          key={id}
          href={`#cite-${id}`}
          className="hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById(`cite-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }}
        >
          [{id}]{i < list.length - 1 ? ',' : ''}
        </a>
      ))}
    </sup>
  )
}
