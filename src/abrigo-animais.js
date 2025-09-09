class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
      
 // lista oficial dos animais
    const animaisDoAbrigo = ["Rex","Mimi","Fofo","Zero","Bola","Bebe","Loco"];

    // transforma a string ordemAnimais (parâmetro) em um array
    const ordemDosAnimaisArray = ordemAnimais.split(",");
    
    // validar se os animais existem no abrigo e se estão duplicados
    const animaisVistos = new Set();
    for (const animal of ordemDosAnimaisArray) {
      if (!animaisDoAbrigo.includes(animal) || animaisVistos.has(animal)) {
        return { erro: `Animal inválido` }; 
      }

      animaisVistos.add(animal);
    }

    

  }
}

export { AbrigoAnimais as AbrigoAnimais };
