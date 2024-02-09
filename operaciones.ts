class Operaciones {
    numero1:number
    numero2:number

    constructor(numero1:number, numero2:number){
        this.numero1=numero1
        this.numero2=numero2

    }

    getnumero1 (){
        return this.getnumero1
    }

    setnumero1(numero:number){
        this.numero1=numero
    }

    getnumero2(){
        return this.getnumero2
    }

    setnumero2(numeros:number){
         this.numero2=numeros
    }

    //metodos de operaciones

    suma(): number {
        return this.numero1+this.numero2

    }
   

}

const operacion = new Operaciones(10,5);

console.log("el resultado de la suma es :", operacion.suma());