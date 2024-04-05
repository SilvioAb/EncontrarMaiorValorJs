
/* 3 formas no javascript de encontrar o maior valor em um Array */


/* 1 -  usando o loop for para percorrer o array e usar a condicional para fazer a comparação dos elementos */

function maior(arr) {
   
   let maior=arr[0];
         for (var i = 1; i < arr.length; i++) {
               if(arr[i]>maior){
                maior=arr[i]
             }
         }
         return maior;
      }


console.log(maior([50,500,200,3000,5000]))
 



/* 2-  usando o Math.max para encontrar o maior elemento do array com operador Spread*/

function Maior2(arr) {
   return Math.max(...arr)
}


console.log(Maior2([50,500,200,3000,6000]))





/* 3 - usando o metodo reduce com uma condicional */

function Reduzir(arr) {
   
   return arr.reduce((maior,ele)=>{
      if(ele>maior){
         maior=ele
      }
     return maior
   },0) 
   
   
}

console.log(Reduzir([50,500,200,3000,5000]))


