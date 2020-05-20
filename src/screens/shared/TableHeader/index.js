import React from "react";
import PropTypes from "prop-types";

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
TableHeader.protoTypes = {
  columnsNames: protoTypes.arrayOf(String).isRequired,
  sort: PropTypes.func.isRequired,
};
