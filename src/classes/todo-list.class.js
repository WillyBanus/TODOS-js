import {Todo} from './todo.class';

export class TodoList {

    constructor() {

        this.todos  = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.cargarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id !=id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id){

        for(const todo of this.todos){
            console.log(id, todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }



    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo=> !todo.completado)
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage(){

       // if(localStorage.getItem('todo')){
       //     this.todos = JSON.parse(localStorage.getItem('todo'));
       //     console.log('cargarLocal:', this.todos);
       //     console.log(typeof this.todos);
       // }else{
       //     this.todos = [];

       // operador ternario siempre rey para reducir.
       this.todos = (localStorage.getItem('todo'))
                    ? JSON.parse(localStorage.getItem('todo'))
                    : [];

        // aqui tenemos un objeto que es el argumento de map y es el que estamos
        // mandando al fromJson entonces podemos eliminarlos y poner solo Todo.fromJson.
       
        // this.todos = this.todos.map( obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
        }

    


}