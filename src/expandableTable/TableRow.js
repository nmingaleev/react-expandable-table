import { useState } from 'react';

export const TableRow = ({ item, columns, renderExpandedRow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(old => !old);

  const row = (
    <tr>
      <th>{item.isExpandable ? <button onClick={handleToggle}>Toggle</button> : null}</th>
      {columns.map(col => <td>{col.renderCell(item)}</td>)}
    </tr>
  )

  if (isExpanded) {
    return (
      <>
        {row}

        <tr>
          <td colSpan={columns.length + 1}>
            {renderExpandedRow?.(item)}
          </td>
        </tr>
      </>
    );
  }

  return row;
}