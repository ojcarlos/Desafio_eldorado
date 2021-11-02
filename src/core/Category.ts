export default class Category{
    
    #name: string;
    #id: number;

    constructor (name:string,id: number = null){
        this.#id = id;
        this.#name = name;
    }
    static vazio(){
        return new Category('')
    }
    get id() { return this.#id; }
    get name() { return this.#name; }

}