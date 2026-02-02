import React from "react";
type TableProps = {
  tableHeaders: string[];
  data: Record<string, any>[];
};
const Table = ({ tableHeaders, data }: TableProps) => {
  return (
    <div>
      <table className="data-table"></table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
    </div>
  );
};

export default Table;
