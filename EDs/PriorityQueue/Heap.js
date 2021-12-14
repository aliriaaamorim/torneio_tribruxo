class Heap {
  // Cria um heap

  constructor(nodes, folha) {
    this._nodes = Array.isArray(nodes) ? nodes : [];
    this._folha = folha || null;
  }

  // Checa se o heap tem um filho a esquerda

  _temFilhoEsquerda(posPai) {
    const esquerdaposFilho = posPai * 2 + 1;
    return esquerdaposFilho < this.size();
  }

  // Checa se o heap tem um filho a direita

  _temFilhoDireita(posPai) {
    const direitaposFilho = posPai * 2 + 2;
    return direitaposFilho < this.size();
  }

  // Metodo getter pra retornar a chave pertencente ao nó desse heap

  _getKey(node) {
    if (typeof node === "object") return node.key;
    return node;
  }

  // Troca a posição de dois nós no heap.

  _trocar(i, j) {
    const temp = this._nodes[i];
    this._nodes[i] = this._nodes[j];
    this._nodes[j] = temp;
  }

  // Compara o nó do pai e do filho e retorna true se estiverem no lugar certo

  _compare(noPai, noFilho) {
    return this._compareKeys(this._getKey(noPai), this._getKey(noFilho));
  }

  // Checa se os nós do pai e do filho devem ser trocados de posição.

  _deveTrocar(posPai, posFilho) {
    if (posPai < 0 || posPai >= this.size()) return false;
    if (posFilho < 0 || posFilho >= this.size()) return false;

    return !this._compare(this._nodes[posPai], this._nodes[posFilho]);
  }

  // Faz um BubbleUP a partir de um indice inicial no heap.

  heapUp(indiceInicial) {
    let posFilho = indiceInicial;
    let posPai = Math.floor((posFilho - 1) / 2);

    while (this._deveTrocar(posPai, posFilho)) {
      this._trocar(posPai, posFilho);
      posFilho = posPai;
      posPai = Math.floor((posFilho - 1) / 2);
    }
  }

  // Compara os filhos a esquerda e a direita de um no pai.

  _compareFilhoDe(posPai) {
    if (!this._temFilhoEsquerda(posPai) && !this._temFilhoDireita(posPai)) {
      return -1;
    }

    const esquerdaPosFilho = posPai * 2 + 1;
    const direitaPosFilho = posPai * 2 + 2;

    if (!this._temFilhoEsquerda(posPai)) {
      return direitaPosFilho;
    }

    if (!this._temFilhoDireita(posPai)) {
      return esquerdaPosFilho;
    }

    const isEsquerda = this._compare(
      this._nodes[esquerdaPosFilho],
      this._nodes[direitaPosFilho]
    );

    return isEsquerda ? esquerdaPosFilho : direitaPosFilho;
  }

  // Faz um TrickleDOWN no heap a partir de um indice inicial no heap.

  _heapDown(indiceInicial) {
    let posPai = indiceInicial;
    let posFilho = this._compareFilhoDe(posPai);

    while (this._deveTrocar(posPai, posFilho)) {
      this._trocar(posPai, posFilho);
      posPai = posFilho;
      posFilho = this._compareFilhoDe(posPai);
    }
  }

  // Remove um nó do heap e retorna esse mesmo nó.

  extractRoot() {
    if (this.isEmpty()) return null;

    const root = this.root();
    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapDown(0);

    if (root === this._folha) {
      this._folha = this.root();
    }

    return root;
  }

  // Faz um heapDown até um certo indice.

  _heapDownAte(index) {
    let posPai = 0;
    let esquerdaPosFilho = 1;
    let direitaPosFilho = 2;
    let posFilho;

    while (esquerdaPosFilho < index) {
      posFilho = this._compareChildrenBefore(
        index,
        esquerdaPosFilho,
        direitaPosFilho
      );

      if (this._deveTrocar(posPai, posFilho)) {
        this._trocar(posPai, posFilho);
      }

      posPai = posFilho;
      esquerdaPosFilho = posPai * 2 + 1;
      direitaPosFilho = posPai * 2 + 2;
    }
  }

  // Retorna uma copia desse heap

  _clone(HeapType) {
    return new HeapType(this._nodes.slice(), this._folha);
  }

  // Ordena o heap trocando a raiz com todos os nós e arrumando as posições

  sort() {
    for (let i = this.size() - 1; i > 0; i -= 1) {
      this._trocar(0, i);
      this._heapDownAte(i);
    }

    return this._nodes;
  }

  // Coloca um nó a direita no heap

  insert(key, value) {
    const newNode = value !== undefined ? { key, value } : key;
    this._nodes.push(newNode);
    this.heapUp(this.size() - 1);
    if (this._folha === null || !this._compare(newNode, this._folha)) {
      this._folha = newNode;
    }
    return this;
  }

  // Arruma todas as posições dos nós no heap

  fix() {
    for (let i = 0; i < this.size(); i += 1) {
      this.heapUp(i);
    }
    return this;
  }

  // Verifica se o heap é valido

  isValid() {
    const isValidRecursive = (posPai) => {
      let isValidEsquerda = true;
      let isValidDireita = true;

      if (this._temFilhoEsquerda(posPai)) {
        const esquerdaPosFilho = posPai * 2 + 1;
        isValidEsquerda = this._compare(
          this._nodes[posPai],
          this._nodes[esquerdaPosFilho]
        );

        if (!isValidEsquerda) {
          return false;
        }

        isValidEsquerda = isValidRecursive(esquerdaPosFilho);
      }

      if (this._temFilhoDireita(posPai)) {
        const direitaPosFilho = posPai * 2 + 2;
        isValidDireita = this._compare(
          this._nodes[posPai],
          this._nodes[direitaPosFilho]
        );

        if (!isValidDireita) {
          return false;
        }

        isValidDireita = isValidRecursive(direitaPosFilho);
      }

      return isValidEsquerda && isValidDireita;
    };

    return isValidRecursive(0);
  }

  // Retorna o nó raiz no heap

  root() {
    if (this.isEmpty()) return null;
    return this._nodes[0];
  }

  // Retorna o no da folha no heap

  folha() {
    return this._folha;
  }

  // Retorna o numero de nós no heap

  size() {
    return this._nodes.length;
  }

  // Checa se o heap está vazio

  isEmpty() {
    return this.size() === 0;
  }

  // Deixa o heap vazio

  clear() {
    this._nodes = [];
    this._folha = null;
  }

  // Checa se uma lista de itens é um heap valido.

  static _isHeapified(list, HeapType) {
    return new HeapType(list).isValid();
  }

  // Converte uma lista de itens em um heap

  static _heapify(list, HeapType) {
    if (!Array.isArray(list)) {
      throw new Error(".A função heapify espera um array");
    }

    return new HeapType(list).fix();
  }
}

exports.Heap = Heap;