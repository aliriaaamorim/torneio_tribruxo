class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Cria uma fila

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.tamanho = 0;
  }

  // Coloca uma pessoa na fila

  enqueue(value) {
    const node = new Node(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.tamanho++;
  }

  // Tira uma pessoa da fila

  dequeue() {
    const atual = this.head;
    this.head = this.head.next;
    this.tamanho--;

    return atual.value;
  }

  // Checa o elemento da frente da fila

  peek() {
    return this.head.value;
  }

  // Checa se esta vazio

  isEmpty() {
    return this.tamanho === 0;
  }

  // Retorna o tamanho

  size() {
    return this.tamanho;
  }
}
