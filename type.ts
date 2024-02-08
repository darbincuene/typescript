//let num=2
//let num3=2

// console.log(num+num3) 

//let p =234446

/*let m= 24445885

 //console.log( "el resultado es :", p+m ) 

let nota1:number= 10
let nota2:number=40
let nota3:number=40

let promedio:number= (nota1+nota2+nota3)/3 

console.log(promedio)
function resultado() {
    if (promedio>=30)
    return ("gano la materia")

    else{
        return("perdio la materia")
    }
    
}

console.log(resultado())


let num1:number=12
let num2:number=1

console.log('el resultado es :', num1+num2)*/









//tipos de datos


/*let cadenatexto:string="hola"
let numeros:number=1334
let boleano:boolean=true

console.log(`texto: ${cadenatexto} ,numeros: ${numeros}, boleano: ${boleano}`)*/


//array 
let puñetas: any[]=["Darbin", 12, true, false,]
let dato: any=puñetas.filter(e =>e== true)
//console.log(dato)


//poo


class Ventilador{
    marca:string;
    color:string;
    seMueve:boolean;
    numAspas:number;

    constructor(marca:string, color:string, seMueve:boolean, numeroAspas:number){
        //inicializar el objeto 
        this.marca=marca
        this.color=color
        this.seMueve=seMueve
        this.numAspas=numeroAspas
    }


    getmarca(){
        return this.marca

    }
    getColor(){
        return this.color

    }
    getSeMueve(){
        return this.seMueve
    }



    setmarca(marcas:string){
        this.marca=marcas
    }
    setColor(colores:string){
        this.color=colores
    }
    setSeMueve(seMuev:boolean){
        this.seMueve=seMuev
    }






    encenderVentilador(){
        return `el ventilador esta encendido  : ${this.marca} ${this.color}`+" "  +this.seMueve + " " +" "+this.numAspas
    }
}


let Ventiladorcito= new Ventilador("samuray","negro",true , 4 )

console.log(Ventiladorcito.encenderVentilador()
)


Ventiladorcito.setmarca("Often")
Ventiladorcito.setColor("morado")
Ventiladorcito.setSeMueve(false)

console.log(Ventiladorcito.encenderVentilador())


console.log("la marca del ventilador es :"+ Ventiladorcito.getmarca())

console.log("la marca del ventilador es :"+ Ventiladorcito.getmarca()+" y el color es :" + Ventiladorcito.getColor())
console.log("la marca del ventilador es :"+ Ventiladorcito.getmarca()+" el color es :" + Ventiladorcito.getColor() + "se mueve? :"+ Ventiladorcito.getSeMueve())