import { cn } from '@/lib/utils/cn';

interface Column<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  emptyMessage?: string;
  className?: string;
}

export default function Table<T>({ columns, data, keyField, emptyMessage = 'Aucun résultat', className }: TableProps<T>) {
  return (
    <div className={cn('w-full overflow-x-auto rounded-xl border border-[#E3EDF7]', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E3EDF7] bg-[#FAFCFF]">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cn('px-4 py-3 text-left text-xs font-semibold text-[#6E7C91] uppercase tracking-wide', col.className)}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-[#6E7C91]">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={String(row[keyField])}
                className="border-b border-[#E3EDF7] last:border-0 hover:bg-[#FAFCFF] transition-colors"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className={cn('px-4 py-3 text-[#0E1B2A]', col.className)}>
                    {col.render ? col.render(row) : String(row[col.key as keyof T] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
