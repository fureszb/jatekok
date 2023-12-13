import React from "react";
import LightOnModel from '../model/Lmodel.js';
import Jatekter from "../komponensLightOn/JatekTer";

const lightOnModel = new LightOnModel();

export default function LightOnApp() {
  const lista = lightOnModel.getList();

  function szinvaltas(index) {
    lightOnModel.toggleColor(index);
    console.log(lightOnModel.getList())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article className="ligth">
        <Jatekter lista={lista} szinvaltas={szinvaltas} />
      </article>
    </div>
  );
}
