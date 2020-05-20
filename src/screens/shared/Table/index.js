import React from "react";
import PropTypes from "prop-types";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

export default function Table({
  users,
  setSelectedUser,
  selectedUser,
  handleSort,
}) {
  const sortSelectedColumn = (name) => {
    if (name === "id user") {
      let sorted = users.sort((a, b) => {
        return a.idUser - b.idUser;
      });

      return handleSort(sorted);
    }

    if (name === "first name") {
      let sorted = users.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
      return handleSort(sorted);
    }

    if (name === "last name") {
      let sorted = users.sort((a, b) => {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      });
      return handleSort(sorted);
    }
  };
  return (
    <table>
      <TableHeader
        columnsNames={["id user", "first name", "last name"]}
        sort={sortSelectedColumn}
      />
      <tbody>
        {users.map((u) => (
          <TableRow
            key={u.idUser}
            user={u}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
