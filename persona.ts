class Persona{
    nombre:string
    edad:number
    telefono:number
    direccion:string
    ciudad:string

    constructor (nombre:string,edad:number,telefono:number,direccion:string,ciudad:string){
        this.nombre=nombre
        this.edad=edad
        this.telefono=telefono
        this.direccion=direccion
        this.ciudad=ciudad
    }
    getnombre(){
        return this.nombre
    }
    setnombre(nombres:string){
        this.nombre=nombres
        
    }

     getedad(){
        return this.edad
    }
    setedad(edades:number){
        this.edad=edades
        
    }

    gettelefono(){
        return this.telefono
    }

    settelefono(telefonos:number){
        this.telefono=telefonos

    }

    getdireccion(){
        return this.direccion
    }

    setdireccion (direcciones:string){

        this.direccion=direcciones

    }

    getciudad(){
        return this.ciudad
    }
    setciudad(ciudades:string){
        this.ciudad=ciudades
    }




    //estos son metodos

    Edad(edad:number){
        return (edad>= 18) ? 'eres mayor de edad' : 'eres menor de edad'

    }

    permos(){
        return `
                    el nombre de la persona es : ${this.nombre}
                    la edad es : ${this.edad} 
                    el telefono es ${this.telefono} 
                    la direccion es : ${this.direccion} 
                    la ciudad es : ${this.ciudad} `
    }
    permos2(){ return `
                     el nombre de la persona es : ${this.nombre}
                     la edad es : ${this.edad} 
                     el telefono es ${this.telefono} 
                     la direccion es : ${this.direccion} 
                     la ciudad es : ${this.ciudad} `

    }

    permos3(){ return `
                     el nombre de la persona es : ${this.nombre}
                     la edad es : ${this.edad} 
                     el telefono es ${this.telefono} 
                     la direccion es : ${this.direccion} 
                     la ciudad es : ${this.ciudad} `

    }
    permos4(){ return `
                     el nombre de la persona es : ${this.nombre}
                     la edad es : ${this.edad} 
                     el telefono es ${this.telefono} 
                     la direccion es : ${this.direccion} 
                     la ciudad es : ${this.ciudad} `

    }

    permos5(){ return `
                     el nombre de la persona es : ${this.nombre}
                     la edad es : ${this.edad} 
                     el telefono es ${this.telefono} 
                     la direccion es : ${this.direccion} 
                     la ciudad es : ${this.ciudad} `

    }


}


//y estos son los objetos

let personita = new Persona("darbin",19,3153221624,"cra4 #23n-norte","popayan")
let personita2 = new Persona("pipe",17,3152121624,"cra4 #23n-sur","popayan")
let personita3 = new Persona("manuel",16,11121624,"cra5 #15n-norte","cali")
let personita4 = new Persona("david",15,33515214,"cra2 #2n-sur","bogota")
let personita5 = new Persona("melissa",20,31521624,"cra4 #23n-norte","ibague")


//aqui llamamos para imprimir en pantalla

console.log(personita.permos());
console.log(personita.Edad(personita.getedad()));

console.log(personita2.permos2());
console.log(personita2.Edad(personita2.getedad()))


console.log(personita3.permos3())
console.log(personita3.Edad(personita3.getedad()))

console.log(personita4.permos4())
console.log(personita4.Edad(personita4.getedad()))

console.log(personita5.permos5())
console.log(personita5.Edad(personita5.getedad()))

