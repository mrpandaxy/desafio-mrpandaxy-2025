import { Validador as validador } from './validador.js';

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // Lista de brinquedos preferidos por cada animal

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

    if (validador.validarAnimais(ordemDosAnimaisArray) !== true) {
      return { erro: 'Animal inválido' };
    }

    if (validador.validarBrinquedos(brinquedosPessoa1Array) !== true || validador.validarBrinquedos(brinquedosPessoa2Array) !== true) {
      return { erro: 'Brinquedo inválido' };
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
