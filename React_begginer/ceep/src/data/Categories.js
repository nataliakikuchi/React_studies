export default class Categories {
    constructor() {
        this.categories = [];
        this._subscribers = [];
    }

    subscribe(func) {
        this._subscribers.push(func);
    }

    unsubscribe(func) {
        this._subscribers = this._subscribers.filter(functionn => functionn !== func);
    }

    notify() {
        this._subscribers.forEach(func => { //para cada inscrito, forEach estou passando essa função anônima, que é a função que recebe como parâmetro uma função a executa
            func(this.categories);
        }); 
    }
    
    addCategory(newCategory) {
        this.categories.push(newCategory);
        this.notify();
    }
}

//A categoria precisa notificar o form toda vez que uma mudança acontecer. E o form muda quando for notificado. O form observa as mudanças da categoria