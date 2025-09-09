class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
      
 // lista oficial dos animais
    const animaisDoAbrigo = ["Rex","Mimi","Fofo","Zero","Bola","Bebe","Loco"];

    //lista oficial dos brinquedos
    const brinquedosDoAbrigo =["RATO","BOLA","LASER","CAIXA","NOVELO","SKATE"];

    // convertendo string de animais em arrays
    const ordemDosAnimaisArray = ordemAnimais.split(",");
    

    // validar se os animais existem no abrigo e se estão duplicados
    function validarAnimais(listaAnimais) {
      const animaisVistos = new Set();
      
     
      for (const animal of ordemDosAnimaisArray) {
        if (!animaisDoAbrigo.includes(animal) || animaisVistos.has(animal)) {
          return { erro: `Animal inválido` }; 
        }
        animaisVistos.add(animal);

      }
    }
    
    
    //convertendo string de brinquedos em arrays e tirando espaços extras
    const brinquedosPessoa1Array = brinquedosDoAbrigo.split(",").map(item => item.trim());
    const brinquedosPessoa2Array = brinquedosDoAbrigo.split(",").map(item => item.trim());

    //função para validar os brinquedos    
    function validarBrinquedos(listaBrinquedos) {
      const brinquedosVistos = new Set();
      for(const brinquedo of listaBrinquedos){
        if(!brinquedosDoAbrigo.includes(brinquedo || animaisVistos.has(brinquedo))){
          return false;       
        }
        brinquedosVistos.add(brinquedo);
      }
      return true;
    }

    if (!validarBrinquedos(brinquedosPessoa1Array) || !validarBrinquedos(brinquedosPessoa2Array)) {
      return { erro: "Brinquedo inválido" };
    }
  
  
  
  }
}

export { AbrigoAnimais as AbrigoAnimais };
