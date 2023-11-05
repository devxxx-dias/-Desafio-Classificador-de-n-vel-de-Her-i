let victory = 10;
let defeat = 2;


const rankVictory = (vitorias, derrotas) =>{
let saldoVitorias;
let nivel;
if( vitorias > derrotas){
    saldoVitorias = vitorias - derrotas
}
else{
    saldoVitorias = derrotas - vitorias
}

if(saldoVitorias <= 10){
    nivel = "Ferro";        
       
}
   if(saldoVitorias >= 11 && saldoVitorias <= 20){        nivel = "Bronze";
       
  }
   if(saldoVitorias >= 21 && saldoVitorias <= 50){            nivel = "Prata";
       
}

   if(saldoVitorias >= 51 && saldoVitorias <= 80){        nivel = "Ouro";
       
}
   if(saldoVitorias >= 81 && saldoVitorias <= 90){        nivel = "Diamante";
       
}
   if(saldoVitorias >= 91 && saldoVitorias <= 100){         nivel = "Lendario";
       
}
   if(saldoVitorias >= 101){
    nivel = "Imortal";
       
   }

   while(saldoVitorias !== undefined){
    console.log(`O Heroi tem de saldo de ${saldoVitorias} esta no nivel de ${nivel}`);
    break

   }
if( saldoVitorias === undefined){
console.log("Insira o nivel de experiencia do seu heroi!")
}


}

rankVictory(10,2)