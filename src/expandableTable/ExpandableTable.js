import { TableRow } from "./TableRow";

import './styles.css';

export const ExpandableTable = ({ columns, items, renderExpandedRow }) => {
  return (
    <table className="table">
      <thead>
        <th></th>

        {columns.map(col => <th>{col.title}</th>)}
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow
            item={item}
            columns={columns}
            renderExpandedRow={renderExpandedRow}
          />
        ))}
      </tbody>
    </table>
  );
}