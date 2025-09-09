class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
      
 // lista oficial dos animais
    const animaisDoAbrigo = ["Rex","Mimi","Fofo","Zero","Bola","Bebe","Loco"];

    //lista oficial dos brinquedos
    const brinquedosDoAbrigo =["RATO","BOLA","LASER","CAIXA","NOVELO","SKATE"];

    // convertendo string de animais em arrays
    const ordemDosAnimaisArray = ordemAnimais.split(",");
    

    // validar se os animais existem no abrigo e se estão duplicados
    const animaisVistos = new Set();
    for (const animal of ordemDosAnimaisArray) {
      if (!animaisDoAbrigo.includes(animal) || animaisVistos.has(animal)) {
        return { erro: `Animal inválido` }; 
      }
      animaisVistos.add(animal);
    }
    
    //convertendo string de brinquedos em arrays e tirando espaços extras
    const brinquedosPessoa1Array = brinquedosDoAbrigo.split(",").map(item => item.trim());
    const brinquedosPessoa2Array = brinquedosDoAbrigo.split(",").map(item => item.trim());

    function validarBrinquedos(listaBrinquedos) {
      const brinquedosVistos = new Set();

      for(const brinquedos of listaBrinquedos){
        if(!brinquedosDoAbrigo.includes(brinquedos || )){
          
        }
      }
      
    }

    //validar
    

  }
}

export { AbrigoAnimais as AbrigoAnimais };
