export default class Device{
    #id: number;
    #category:string;
    #color:string;
    #partNumber:number;

    constructor (category:string, color:string, partNumber:number, id: number = null){
        this.#id = id;
        this.#category = category;
        this.#color = color;
        this.#partNumber = partNumber;
    }
    static vazio(){
        return new Device('','',0)
    }
    get id() { return this.#id; }
    get category() { return this.#category; }
    get color() { return this.#color; }
    get partNumber() { return this.#partNumber; }


}