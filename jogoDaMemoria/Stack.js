export default class Stack {
  //  Cria uma stack

  constructor(elementos) {
    this._elementos = Array.isArray(elementos) ? elementos : [];
  }

  // Checa se a stack está vázia.

  isEmpty() {
    return this._elementos.length === 0;
  }

  // Checa o tamanho da stack.

  size() {
    return this._elementos.length;
  }

  // Retorna o elemento no topo da stack.

  peek() {
    if (this.isEmpty()) return null;

    return this._elementos[this._elementos.length - 1];
  }

  // Coloca um elemento no topo da stack.

  push(elemento) {
    this._elementos.push(elemento);
    return this;
  }

  // Remove e retorna o elemento no topo da stack.

  pop() {
    if (this.isEmpty()) return null;

    return this._elementos.pop();
  }

  // Remove todos os elementos da stack.

  clear () {
      this._elementos = [];
  }

}
