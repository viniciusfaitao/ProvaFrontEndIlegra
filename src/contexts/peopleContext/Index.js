import React, { createContext, useState, useEffect } from "react";
import { UsePeople } from "../../services/peopleApi/Api";

export const PeopleContext = createContext();

export const PeopleContextProvider = (props) => {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    const result = await UsePeople();
    setPeople(result);
  };

  useEffect(() => {
    if (people <= 0) {
      fetchData();
    }
  });

  return (
    <PeopleContext.Provider value={{ people }}>
      {props.children}
    </PeopleContext.Provider>
  );
};
