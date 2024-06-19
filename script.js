//Obeject.defineProperty() e Object.defineProperties()

function Produto(nome,preco,estoque){
        this.nome=nome
        this.preco=preco
        Object.defineProperty(this,'estoque',{
                enumerable:true,//Mostra a chave
                value:estoque,//valor 
                writable:true,//Pode Alterar Ou não
                configurable:true //Configuravel
        })
        
        // Object.defineProperties(this,{
        //         nome:true,
        //         value:nome,
        //         writable:true,
        //         configurable:true
        // })
}
const p1=new Produto('Camiseta',20,3)
p1.estoque=8
console.log(p1)