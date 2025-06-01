import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

constructor() { }

feedbackEscolhas(topicCounts: number[]): string {
  const feedbackBase = [
    {
      array: [0,4,6,1,2],
      text: '🗣 Avaliação: Mais do que o visual, para um bom grafico em Linguagem Simples, deve ser prezado a forma de como as informações são apresentadas.<br><br> 💡 Dica: Complemente mais os detalhes e as formas do seu gráfico para uma melhor demostração'
    },
    {
      array: [4,0,1,0,1],
      text: '🗣 Avaliação: Seu gráfico demonstra uma excelente atenção à forma e clareza estrutural. No entanto, ele pode ficar visualmente desequilibrado se não houver atenção às cores e legendas. Um gráfico bem formatado, mas com cores mal aplicadas, ainda pode confundir.<br><br>💡 Dica: Dê um pouco mais de atenção a escolha de cores e as legendas do seu gráfico.'
    },
    {
      array: [2,4,2,1,4],
      text: '🗣 Avaliação: Você demonstrou uma distribuição bem equilibrada entre forma, cor, e detalhes. Ainda há espaço para um pouco mais de atenção à legenda, mas o resultado é funcional e esteticamente agradável.<br><br>💡 Dica: Continue explorando pequenas melhorias nas legendas pois elas também têm impacto na clareza final.'
    },
    {
      array: [1,2,1,1,6],
      text: '🗣 Avaliação: Você demonstra um ótimo entendimento de como enriquecer a experiência do usuário com detalhes e contexto. Mas o gráfico pode perder clareza estrutural sem formas bem editadas e eixos organizados.<br><br>💡 Dica: Invista um pouco nas formas e eixos do seu grafico para estrutura-lo melhor antes de complementá-lo.'
    },
    {
      array: [2,5,3,2,4],
      text: '🗣 Avaliação: Parabéns! Sua seleção mostra um equilíbrio saudável entre todos os elementos da visualização. Isso indica uma preocupação com clareza, acessibilidade, estética e organização. Continue assim!'
    },
    {
      array: [3,5,1,1,1],
      text: '🗣 Avaliação: Você deu bastante atenção ao uso de formas e cores — o que torna o gráfico atraente e legível. Porém, ignorar os eixos e a legenda pode comprometer a interpretação precisa dos dados.<br><br>💡 Dica: Não esqueça que bons dados também precisam de bons rótulos e escalas. Considere adicionar mais informações de eixos e legendas.'
    },
    {
      array: [1,8,1,1,1],
      text: '🗣 Avaliação: Você demonstra um domínio impressionante no uso de cores. Isso é excelente para acessibilidade e estética, mas o gráfico pode acabar visualmente confuso sem formas claras, rótulos, ou legenda adequada.<br><br>💡 Dica: Um gráfico colorido sem contexto vira arte abstrata. Dê atenção para os eixos, legendas e detalhes do seu gráfico.'
    },
    {
      array: [1,1,4,1,4],
      text: '🗣 Avaliação: Sua atenção aos eixos e detalhes mostra uma preocupação legítima com a clareza e orientação do usuário. Porém, a comunicação visual depende também de forma e cor — e essas áreas estão subrepresentadas.<br><br> 💡 Dica: Para uma experiência completa, complemente com formas bem definidas e uma paleta coerente de cores.'
    },
    {
      array: [2,3,2,2,3],
      text: '🗣 Avaliação: Você está no caminho certo! Sua seleção é equilibrada e cobre os principais aspectos de um bom gráfico: estrutura, estética, acessibilidade e clareza. Mas ainda há espaços para melhoria<br><br> 💡 Dica: Dê mais atenção aos eixos e aos detalhes para uma visualização mais rica.'
    },
    {
      array: [0,0,0,0,6],
      text: '🗣 Avaliação: Seu gráfico está muito focado nos detalhes mas não no todo.<br><br>💡 Dica: Utilize mais das outras etapas para uma visualização mais correta'
    },
    {
      array: [1,9,1,0,0],
      text: '🗣 Avaliação: Sua atenção à paleta de cores é exemplar — isso contribui para acessibilidade, consistência e estética. Porém, o gráfico pode ser visualmente agradável mas tecnicamente frágil.<br><br> 💡 Dica: Considere reforçar os eixos, a legenda e os detalhes para complementar o excelente trabalho com as cores.'
    },
    {
      array: [3,0,5,0,0],
      text: '🗣 Avaliação: Você criou uma base sólida de estrutura e forma. O gráfico tende a ser compreensível e objetivo, mas pode parecer desconexo e sem detalhamento.<br><br> 💡 Dica: Busque conferir as legendas e melhore nos detalhes.'
    },
    {
      array: [1,2,1,2,1],
      text: '🗣 Avaliação: Você tocou pontos importantes, mas não esta atento aos detalhes.<br><br> 💡 Dica: Dê um pouco mais de foco aos detalhes para uma demonstração mais coesa e rica.'
    },
    {
      array: [1,1,1,1,1],
      text: '🗣 Avaliação: Você não selecionou uma quantidade de boas praticas necessárias para o feedback'
    },
    {
      array: [2,5,1,0,6],
      text: '🗣 Avaliação: Você absorveu bem a ideia de demonstração visual no seu gráfico, contanto, as informações podem ser mal interpretadas.<br><br> 💡 Dica: Dê mais atenção aos eixos e legendas do seu gráfico a fim de manter a proporção e deixa-lo mais legível.'
    }
  ];

  let minDistance = Infinity;
  let closestFeedback = '🗣 Avaliação: Você ainda não selecionou nenhuma boa prática. Isso pode indicar que o gráfico será gerado sem considerar os principais critérios de legibilidade, acessibilidade e clareza.<br><br>💡 Dica: Comece escolhendo pelo menos 2 itens em cada tópico. Isso garantirá que o gráfico atenda aos padrões básicos de comunicação visual eficaz.';

  for (const entry of feedbackBase) {
    const distance = Math.sqrt(
      entry.array.reduce((sum, val, idx) => sum + Math.pow(val - topicCounts[idx], 2), 0)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closestFeedback = entry.text;
      console.log(distance, "<",minDistance,".",closestFeedback)
    }
  }

  return closestFeedback;
}


}
