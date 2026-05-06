import { useState, useMemo } from 'react'
import Icon from './Icon'
import clsx from 'clsx'

export default function DataTable({
  columns,      // [{ key, label, sortable?, render? }]
  data,
  searchable = true,
  perPage = 10,
  className = '',
}) {
  const [search, setSearch]     = useState('')
  const [page, setPage]         = useState(1)
  const [sortKey, setSortKey]   = useState(null)
  const [sortDir, setSortDir]   = useState('asc')

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter(row =>
      Object.values(row).some(v => String(v).toLowerCase().includes(q))
    )
  }, [data, search])

  const sorted = useMemo(() => {
    if (!sortKey) return filtered
    return [...filtered].sort((a, b) => {
      const av = String(a[sortKey] ?? '')
      const bv = String(b[sortKey] ?? '')
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    })
  }, [filtered, sortKey, sortDir])

  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage))
  const paginated = sorted.slice((page - 1) * perPage, page * perPage)

  const handleSort = key => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
    setPage(1)
  }

  return (
    <div className={className}>
      {searchable && (
        <div className="mb-4 flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher…"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
              className="form-input pl-9"
            />
          </div>
          <span className="text-sm text-muted ml-auto">{sorted.length} résultat{sorted.length !== 1 ? 's' : ''}</span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  className={clsx(col.sortable !== false && 'cursor-pointer select-none hover:text-gray-700 dark:hover:text-gray-200')}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {col.sortable !== false && sortKey === col.key && (
                      <Icon name={sortDir === 'asc' ? 'ChevronUp' : 'ChevronDown'} size={12} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-10 text-muted">
                  Aucun résultat trouvé
                </td>
              </tr>
            ) : (
              paginated.map((row, i) => (
                <tr key={row.id ?? i}>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm text-muted">
            Page {page} sur {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              className="btn btn-secondary btn-sm btn-icon"
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              <Icon name="ChevronLeft" size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
              .reduce((acc, p, idx, arr) => {
                if (idx > 0 && p - arr[idx - 1] > 1) acc.push('…')
                acc.push(p)
                return acc
              }, [])
              .map((p, i) =>
                p === '…' ? (
                  <span key={`dots-${i}`} className="px-2 py-1 text-sm text-muted">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={clsx('btn btn-sm', p === page ? 'btn-primary' : 'btn-secondary')}
                  >
                    {p}
                  </button>
                )
              )}
            <button
              className="btn btn-secondary btn-sm btn-icon"
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
            >
              <Icon name="ChevronRight" size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
