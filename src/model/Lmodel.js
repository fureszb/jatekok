class LightOnModel {
    #lista;
  
    constructor() {
      this.#lista = ["white", "white", "white", "white", "white", "white", "white", "white", "white"];
    }
  
    getList() {
      return [...this.#lista];
    }
  
    toggleColor(index) {
      if (index >= 0 && index < this.#lista.length) {
        this.#lista[index] = this.#lista[index] === "white" ? "yellow" : "white";
      }
    }
  }
  
  export default LightOnModel;
  