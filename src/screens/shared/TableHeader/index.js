import React from "react";

function TableHeader({ columnsNames, sort }) {
  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c} onClick={() => sort(c)}>
            {c}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
