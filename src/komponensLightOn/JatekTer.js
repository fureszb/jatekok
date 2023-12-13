import React from "react";
import Elem from "../komponensLightOn/Elem";

export default function Jatekter(props) {
  return (
    <div className="jatekter">
      {props.lista.map((elem, index) => (
        <Elem ertek={elem} index={index} key={index} szinvaltas={props.szinvaltas} />
      ))}
    </div>
  );
}
