import React from "react";

export default function Left({ nombre, img }) {
  return (
    <>
      <li className="flex gap-5">
        <div>
          <img src={img} alt={nombre} className="w-20"/>
        </div>
        <h2>{nombre}</h2>
      </li>
    </>
  );
}
