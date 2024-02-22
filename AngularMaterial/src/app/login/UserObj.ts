
export class User{

    id: number = 0;
    email : string = "";
    password : string ="";
    age : number = 0;
    city : string = "";
    role : string = "";

    constructor(id: number, email: string,password : string, age : number, city: string, role: string)
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.age = age;
        this.city = city;
        this.role = role;
    }
    
}