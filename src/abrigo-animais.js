class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // Listas oficiais
    const animaisDoAbrigo = ["Rex","Mimi","Fofo","Zero","Bola","Bebe","Loco"];
    const brinquedosDoAbrigo = ["RATO","BOLA","LASER","CAIXA","NOVELO","SKATE"];
    const brinquedosDoAnimal = {
      Rex: ["RATO","BOLA"],
      Mimi: ["BOLA","LASER"],
      Fofo: ["BOLA","RATO","LASER"],
      Zero: ["RATO","BOLA"],
      Bola: ["CAIXA","NOVELO"],
      Bebe: ["LASER","RATO","BOLA"],
      Loco: ["SKATE","RATO"]
    };
    const gatos = ['Mimi', 'Fofo', 'Zero'];

    // Converte as strings de entrada em arrays
    const ordemDosAnimaisArray = ordemAnimais.split(",").map(item => item.trim());
    const brinquedosPessoa1Array = brinquedosPessoa1.split(",").map(item => item.trim());
    const brinquedosPessoa2Array = brinquedosPessoa2.split(",").map(item => item.trim());

    
    // validar se os animais existem no abrigo e se estão duplicados
    function validarAnimais(listaAnimais) {
      for (const animal of listaAnimais) {
        if (!animaisDoAbrigo.includes(animal)) {
          return false;  
        }
      }
      return true;
    }


    // Função para verificar se subsequência está presente na sequência (ordem importa, elementos extras permitidos)
    function isSubsequence(subseq, seq) {
      let i = 0;
      for (const item of seq) {
        if (item === subseq[i]) {
          i++;
          if (i === subseq.length) return true;
        }
      }
      return i === subseq.length;
    }

    // Captura o retorno da validação
    const resultadoValidacaoAnimal = validarAnimais(ordemDosAnimaisArray);
    if (resultadoValidacaoAnimal !== true) {
      return { erro: 'Animal inválido' };
    }

    // Contador para limitar 3 animais por pessoa
    let countPessoa1 = 0;
    let countPessoa2 = 0;

    const resultado = [];
    for (const animal of ordemDosAnimaisArray) {
      const brinquedosPreferidos = brinquedosDoAnimal[animal];
      const Pessoa1TemB = isSubsequence(brinquedosPreferidos, brinquedosPessoa1Array);
      const Pessoa2TemB = isSubsequence(brinquedosPreferidos, brinquedosPessoa2Array);

      if (animal === 'Loco') {
        const Pessoa1TemBComplete = brinquedosPreferidos.every(b => brinquedosPessoa1Array.includes(b));
        const Pessoa2TemBComplete = brinquedosPreferidos.every(b => brinquedosPessoa2Array.includes(b));

        if (Pessoa1TemBComplete && countPessoa1 > 0 && countPessoa1 < 3) {
          resultado.push(`${animal} - pessoa 1`);
          countPessoa1++;
        } else if (Pessoa2TemBComplete && countPessoa2 > 0 && countPessoa2 < 3) {
          resultado.push(`${animal} - pessoa 2`);
          countPessoa2++;
        } else {
          resultado.push(`${animal} - abrigo`);
        }
      } else if (gatos.includes(animal)) {
        if (Pessoa1TemB && Pessoa2TemB) {
          resultado.push(`${animal} - abrigo`);
        } else if (Pessoa1TemB && countPessoa1 < 3) {
          resultado.push(`${animal} - pessoa 1`);
          countPessoa1++;
        } else if (Pessoa2TemB && countPessoa2 < 3) {
          resultado.push(`${animal} - pessoa 2`);
          countPessoa2++;
        } else {
          resultado.push(`${animal} - abrigo`);
        }
      } else {
        // CORREÇÃO AQUI no operador lógico e nome da variável
        if (Pessoa1TemB && !Pessoa2TemB && countPessoa1 < 3) {
          resultado.push(`${animal} - pessoa 1`);
          countPessoa1++;
        } else if (Pessoa2TemB && !Pessoa1TemB && countPessoa2 < 3) {
          resultado.push(`${animal} - pessoa 2`);
          countPessoa2++;
        } else {
          resultado.push(`${animal} - abrigo`);
        }
      }
    }


    resultado.sort();
    return { lista: resultado };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
