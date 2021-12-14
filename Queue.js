class Queue {
    
    // Cria uma fila

    constructor(elemento) {
        this._size = 0;
        
        if (elemento === undefined){
            this._primeiro = null;
            this._ultimo = null;
        }
        else {
            this.enqueue(elemento);
        }
    }

    // Checa se a fila está vazia.
    
    empty () {
        return this._size === 0;
    }

    // Checa o tamanho da fila.

    size () {
        return this._size;
    }

    // Coloca um elemento no final da fila.

    enqueue (elemento) {
        let newNode = new QueueNode(elemento);
        if (this.empty){
            this._primeiro =  newNode;
        }
        else {
            this._ultimo.next = newNode;
        }
        this.ultimo = newNode;
        this._size++;
    }

    // Remove o elemento que está na frente da fila.

    dequeue () {
        if (this.size === 0)
            throw new Error ('A Queue ja está vazia');
        let objetoRemovido = this._primeiro;
        this._primeiro = objetoRemovido.next;
        this._size--;
        return objetoRemovido.elemento;
    }

    // Retorna o valor de quem está em primeiro na fila.

    peek () {
        return this._primeiro.elemento;
    }

    // Retorna o primeiro e o ultimo da fila.

    headTail(){
        return [this.dequeue(), this];
    }
}

exports.Queue = Queue;