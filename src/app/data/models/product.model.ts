
export class Product{
    public category: string;
    public id: string;
    public name: string;
    public imageUrl: string;
    public code: string;
    public description: string;
    public price: number;

    constructor(category: string, id: string, name: string, desc: string, imageUrl: string, price: number, code: string){
        this.category = category;
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.code = code;
        this.price = price;
    }
}