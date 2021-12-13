const {HeapPersonalizado} = require('./HeapPersonalizado');

class PriorityQueue {
  // Metodo construtor pra construir a priorityqueue

  constructor(opcoes = {}) {
    const { priority, compare } = opcoes;
    if (compare) {
      if (typeof compare !== "function") {
        throw new Error(
          ".É necessário o uso de uma função de comparação válida"
        );
      }
      this._compare = compare;
      this._heap = new this._compare();
    } else {
      if (priority !== undefined && typeof priority !== "function") {
        throw new Error(
          ".É necessário o uso de uma função de prioridade válida"
        );
      }

      this._priority = priority || ((el) => +el);
    }
  }

  // 

  _getElementWithPriority(node) {
    return {
      priority: node.key,
      element: node.value,
    };
  }

  // Retorna o tamanho do heap.

  size() {
    return this._heap.size();
  }

  // Retorna se o heap está vazio ou não.

  isEmpty() {
    return this._heap.isEmpty();
  }

  //  Retorna o elemento da frente que é o com maior prioridade na fila.

  front() {
    if (this.isEmpty()) {
      return null;
    }

    if (this._compare) {
      return this._heap.root();
    }

    return this._getElementWithPriority(this._heap.root());
  }

  // Retorna o elemento de trás que é o com menor prioridade na fila.

  back() {
    if (this.isEmpty()) {
      return null;
    }
    if (this._compare) {
      return this._heap.folha();
    }

    return this._getElementWithPriority(this._heap.folha());
  }

  // Coloca um elemento na fila.

  enqueue(element, p) {
    if (this._compare) {
      this._heap.insert(element);
      return this;
    }

    if (p && Number.isNaN(+p)) {
      throw new Error(".a função enqueue espera uma prioridade em numero");
    }

    if (Number.isNaN(+p) && Number.isNaN(this._priority(element))) {
      throw new Error(
        ".a função enqueue espera uma prioridade em numero " +
          "ou um construtor de callback que retorna um numero"
      );
    }

    const priority = !Number.isNaN(+p) ? p : this._priority(element); // Se for true retorna p se for false retorna a prioridade desse elemento.
    this._heap.insert(+priority, element);
    return this;
  }

  // Remove e retorna o elemento com maior prioridade na fila

  dequeue() {
    if (this.isEmpty()) return null;

    if (this._compare) {
      return this._heap.extractRoot();
    }

    return this._getElementWithPriority(this._heap.extractRoot());
  }

  // Retorna uma lista de elementos ordenada da maior pra menor prioridade

  toArray() {
    if (this._compare) {
      return this._heap.clone().sort().reverse();
    }

    return this._heap
      .clone()
      .sort()
      .map((n) => this._getElementWithPriority(n))
      .reverse();
  }

  // Limpa a fila

  clear() {
    this._heap.clear();
  }
}

exports.PriorityQueue = PriorityQueue;