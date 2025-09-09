const animaisDoAbrigo = ["Rex","Mimi","Fofo","Zero","Bola","Bebe","Loco"];
const brinquedosDoAbrigo = ["RATO","BOLA","LASER","CAIXA","NOVELO","SKATE"];

class Validador {

  //Verifica se há duplicatas em um array
  static checarDuplicatas(array) {  
    return (new Set(array)).size !== array.length;
  }

  // validar se os animais existem no abrigo e se estão duplicados
  static validarAnimais(listaAnimais) {
    for (const animal of listaAnimais) {
        if (!animaisDoAbrigo.includes(animal) || Validador.checarDuplicatas(listaAnimais)) {
            return false;  
        }
    }
    return true;
  }

    
  // validar se os brinquedos existem no abrigo e se estão duplicados
  static validarBrinquedos(listaBrinquedos) {
    for (const brinquedo of listaBrinquedos) {
        if (!brinquedosDoAbrigo.includes(brinquedo) || Validador.checarDuplicatas(listaBrinquedos)) {
            return false;  
        }
    }
    return true;
  }   
}

export { Validador };