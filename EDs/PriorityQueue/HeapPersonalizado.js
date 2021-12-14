const {Heap} = require('./Heap');

class HeapPersonalizado extends Heap {
  constructor(comparator, nodes, folha) {
    if (typeof comparator !== "funcao") {
      throw new Error(
        "HeapPersonalizado espera uma função comparator como parâmetro"
      );
    }
    super(nodes, folha);
    this._comparator = comparator;
  }

  // Compara os nós pai e filho e retorna true se estiverem na posição correta.

  _compare(paiNode, nodeFilho) {
    return this._comparator(paiNode, nodeFilho) <= 0;
  }

  // Retorna o indice do filho de dois filhos antes de um indice.

  _compareChildrenBefore(index, esquerdaPosFilho, direitaPosFilho) {
    const compare = this._comparator(
      this._nodes[direitaPosFilho],
      this._nodes[esquerdaPosFilho]
    );

    if (compare <= 0 && direitaPosFilho < index) {
      return direitaPosFilho;
    }

    return esquerdaPosFilho;
  }

  // Retorna uma copia do HeapPersonalizado

  clone() {
    return new HeapPersonalizado(
      this._comparator,
      this._nodes.slice(),
      this._folha
    );
  }

  // Cria um HeapPersonalizado a partir de um array de itens.

  static heapify(list, comparator) {
    if (!Array.isArray(list)) {
      throw new Error(".O método heapify espera um array como parâmetro");
    }

    if (typeof comparator !== "function") {
      throw new Error(
        ".O método heapify espera uma função comparator como parâmetro"
      );
    }

    return new HeapPersonalizado(comparator, list).fix();
  }

  // Checa se uma lista de itens pode ser um HeapPersonalizado válido

  static isHeapified(list, comparator) {
    if (!Array.isArray(list)) {
      throw new Error(".O método isHeapified espera um array como parâmetro");
    }

    if (typeof comparator !== "function") {
      throw new Error(
        ".O método isHeapified espera uma função comparator como parâmetro"
      );
    }

    return new HeapPersonalizado(comparator, list).isValid();
  }
}

exports.HeapPersonalizado = HeapPersonalizado;