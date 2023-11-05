let hero = ["Callypso", 500];
let nome = hero[0];
let XP = hero[1];
let nivel;

    if(XP <= 1000){
     nivel = "Ferro";        
        
}
    if(XP >= 1001 && XP <= 2000){        nivel = "Bronze";
        
   }
    if(XP >= 2001 && XP <= 5000){            nivel = "Prata";
        
}
    if(XP >= 5001 && XP <= 6000){
     nivel = "Bruto"
    }

    if(XP >= 6001 && XP <= 7000){        nivel = "Ouro";
        
}

    if(XP >= 7001 && XP <= 8000){        nivel = "Platina";
        
}
    if(XP >= 8001 && XP <= 9000){        nivel = "Ascedente";
        
}
    if(XP >= 9001 && XP <= 10000){         nivel = "Imortal";
        
}
    if(XP >= 10001){
     nivel = "Radiante";
        
    }


while(nivel !== undefined){
     console.log(`O Heroi de nome ${nome} esta no nivel de ${nivel}`);
     break
}

if( nivel === undefined){
console.log("Insira o nivel de experiencia do seu heroi!")}
