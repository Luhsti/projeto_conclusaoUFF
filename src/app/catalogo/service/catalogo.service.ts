import { Injectable } from '@angular/core';
import { ItemCatalogo } from '../model/itemCatalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

constructor() { }

getItem(){
  const dicionario:ItemCatalogo[] = [
    { titulo: 'Edite as formas', topico: 'Seja redundante!', rota: 'A1' },
    { titulo: 'Edite as formas', topico: 'Não repita formas para informações diferentes.', rota: 'A2' },
    { titulo: 'Edite as formas', topico: 'Mantenha a ordem natural.', rota: 'A3' },
    { titulo: 'Edite as formas', topico: 'Evite sobreposições.', rota: 'A4' },

    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Identifique os dados.', rota: 'B1' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Selecione paleta correta.', rota: 'B2' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Diferencie tons.', rota: 'B3' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Evite cores fortes para grandes áreas.', rota: 'B4' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Garanta a não sobreposição de cores.', rota: 'B5' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Mesma cor para mesma informação', rota: 'B6' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Use conotações culturais.', rota: 'B7' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Verifique acessibilidade de cores.', rota: 'B8' },
    { titulo: 'Escolha uma paleta de cores corretamente', topico: 'Use cores de marca com cuidado.', rota: 'B9' },

    { titulo: 'Altere os eixos', topico: 'Adicione título.', rota: 'C1' },
    { titulo: 'Altere os eixos', topico: 'Rotule eixos com titulo e unidade.', rota: 'C2' },
    { titulo: 'Altere os eixos', topico: 'Use mesma escala em eixos de unidades iguais.', rota: 'C3' },
    { titulo: 'Altere os eixos', topico: 'Eixo ajustado aos dados.', rota: 'C4' },
    { titulo: 'Altere os eixos', topico: 'Eixo mais proximo do intervalo.', rota: 'C5' },
    { titulo: 'Altere os eixos', topico: 'Use rótulos em poucos dados.', rota: 'C6' },

    { titulo: 'Confira a legenda', topico: 'Elimine legenda e rotule diretamente.', rota: 'D1' },
    { titulo: 'Confira a legenda', topico: 'Legenda na ordem dos dados.', rota: 'D2' },
    { titulo: 'Confira a legenda', topico: 'Legenda única com todos os elementos.', rota: 'D3' },

    { titulo: 'Complemente os detalhes', topico: 'Não sature de elementos e dados.', rota: 'E1' },
    { titulo: 'Complemente os detalhes', topico: 'Hierarquia visual.', rota: 'E2' },
    { titulo: 'Complemente os detalhes', topico: 'Aproveite espaços livres.', rota: 'E3' },
    { titulo: 'Complemente os detalhes', topico: 'Ajuste plano de fundo.', rota: 'E4' },
    { titulo: 'Complemente os detalhes', topico: 'Explique o significado das informações.', rota: 'E5' },
    { titulo: 'Complemente os detalhes', topico: 'Forneça um Resumo/dicionário dos dados.', rota: 'E6' },
    { titulo: 'Complemente os detalhes', topico: 'Não use 3D sem justificativa.', rota: 'E7' }
  ];

  return dicionario

}

}
