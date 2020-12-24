import React from "react";
import { UsePeoples } from "../../../services/peoplesApi/Api";
import { useParams, Link } from "react-router-dom";

export const PeopleDescription = () => {
  const peoples = UsePeoples();
  const { name } = useParams();

  return (
    <div>
      {peoples
        .filter((people) => people.name === name)
        .map((people, index) => (
          <div key={index}>
            <Link to={`/peoples`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{people.name}</div>
            <div>{people.gender}</div>
          </div>
        ))}
    </div>
  );
};
