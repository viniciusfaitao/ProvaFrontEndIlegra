import React from "react";
import { UsePeoples } from "../../services/peoplesApi/Api";
import { Link } from "react-router-dom";

export const Peoples = () => {
  const peoples = UsePeoples();

  return (
    <div>
      <h1>Pessoas</h1>
      {peoples.map((people) => (
        <div key={people.url}>
          <h2>{people.name}</h2>
          <Link to={`/people/${people.name}`}>
            <button>Description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
