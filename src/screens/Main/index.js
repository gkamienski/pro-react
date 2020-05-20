import React, { useState } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";

const Main = () => {
  const usersInitial = [
    { idUser: 1, firstName: "Jan", lastName: "Kowalski" },
    { idUser: 2, firstName: "Andrzej", lastName: "Malewicz" },
    { idUser: 3, firstName: "Anna", lastName: "Andrzejewicz" },
    { idUser: 4, firstName: "Marcin", lastName: "Kwiatkowski" },
    { idUser: 5, firstName: "Michał", lastName: "Kowalski" },
  ];

  const [users, setUsers] = useState(usersInitial);
  const [selectedUser, setSelectedUser] = useState({});

  const addUser = (e) => {
    setUsers([
      ...users,
      {
        idUser: users[users.length - 1].idUser + 1,
        firstName: "AAA",
        lastName: "BBB",
      },
    ]);
  };

  const deleteUser = (e) => {
    let tmp = users.filter((obj) => {
      return obj !== e;
    });

    setUsers(tmp);
  };

  const setCurrentlySelectedUser = (user) => {
    setSelectedUser(user);
  };

  const handleSortByColumn = (sorted) => {
    console.log("handleChange");
    const nextState = [...sorted];
    setUsers(nextState);
  };

  return (
    <>
      <Header />
      <div className="container">
        <br />
        <div className="row">
          <div className="col s2">
            <button type="button" onClick={addUser} className="btn">
              Dodaj użytkownika
            </button>
          </div>
          <div className="col s2">
            <button
              type="button"
              onClick={() => deleteUser(selectedUser)}
              className="btn"
            >
              Usuń użytkownika
            </button>
          </div>
        </div>

        <Table
          users={users}
          setSelectedUser={setCurrentlySelectedUser}
          selectedUser={selectedUser}
          handleSort={handleSortByColumn}
        />
      </div>
    </>
  );
};
export default Main;
