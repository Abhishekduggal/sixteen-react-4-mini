import React from "react";
import { Link } from "react-router-dom";
export default function Route2(props) {
  return (
    <div>
      {props.products.map(c => {
        return (
          <Link key={c.id} to={`/route3/${c.id}`}>
            {c.title}
          </Link>
        );
      })}
    </div>
  );
}
