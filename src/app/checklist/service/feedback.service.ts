import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

constructor() { }

feedbackEscolhas(topicCounts: number[]): string {
  const feedbackBase: { array: number[], text: string }[] = [
    { array: [4,0,1,0,1], text: '🗣 Avaliação: Seu gráfico demonstra uma excelente atenção à forma e clareza estrutural. No entanto, ele pode ficar visualmente desequilibrado se não houver atenção às cores e legendas. Um gráfico bem formatado, mas com cores mal aplicadas, ainda pode confundir.<br>💡 Dica: Expanda para os tópicos 05 e 07 para enriquecer a percepção visual e a compreensão.' },
    { array: [2,4,2,1,4], text: '🗣 Avaliação: Você demonstrou uma distribuição bem equilibrada entre forma, cor, e detalhes. Ainda há espaço para um pouco mais de atenção à legenda, mas o resultado é funcional e esteticamente agradável.<br>💡 Dica: Continue explorando pequenas melhorias no tópico 07 — legendas também têm impacto na clareza final.' },
    { array: [1,2,1,1,6], text: '🗣 Avaliação: Você demonstra um ótimo entendimento de como enriquecer a experiência do usuário com detalhes e contexto. Mas o gráfico pode perder clareza estrutural sem formas bem editadas e eixos organizados.<br>💡 Dica: Invista um pouco nos tópicos 04 e 06 para estruturar melhor seu gráfico antes de complementá-lo.' },
    { array: [2,5,3,2,4], text: '🗣 Avaliação: Parabéns! Sua seleção mostra um equilíbrio saudável entre todos os elementos da visualização. Isso indica uma preocupação com clareza, acessibilidade, estética e organização.<br>💡 Dica: Continue assim!' },
    { array: [3,5,1,1,1], text: '🗣 Avaliação: Você deu bastante atenção ao uso de formas e cores — o que torna o gráfico atraente e legível. Porém, ignorar os eixos e a legenda pode comprometer a interpretação precisa dos dados.<br>💡 Dica: Não esqueça que bons dados também precisam de bons rótulos e escalas. Considere incluir pelo menos 1 item dos tópicos 06 e 07.' },
    { array: [1,8,1,1,1], text: '🗣 Avaliação: Você demonstra um domínio impressionante no uso de cores. Isso é excelente para acessibilidade e estética, mas o gráfico pode acabar visualmente confuso sem formas claras, rótulos, ou legenda adequada.<br>💡 Dica: Um gráfico colorido sem contexto vira arte abstrata. Insira ao menos 1 ou 2 itens de estrutura para equilibrar.' },
    { array: [3,6,1,1,1], text: '🗣 Avaliação: Você tem um forte foco no apelo visual, o que é ótimo para atrair atenção. No entanto, há um sério risco de que o gráfico seja bonito, mas sem clareza nos dados.<br> 💡 Dica: Bons gráficos são bonitos e informativos. Inclua dados técnicos como rótulos, escalas e legenda para completar.' },
    { array: [1,1,4,1,2], text: '🗣 Avaliação: Sua atenção aos eixos e detalhes mostra uma preocupação legítima com a clareza e orientação do usuário. Porém, a comunicação visual depende também de forma e cor — e essas áreas estão subrepresentadas.<br> 💡 Dica: Para uma experiência completa, complemente com formas bem definidas e uma paleta coerente de cores.' },
    { array: [2,3,2,2,3], text: '🗣 Avaliação: Você está no caminho certo! Sua seleção é equilibrada e cobre os principais aspectos de um bom gráfico: estrutura, estética, acessibilidade e clareza.<br> 💡 Dica: Apenas mantenha esse padrão e, se possível, adicione mais um item ao tópico 06 para as indições dos planos.' },
    { array: [2,4,2,0,4], text: '🗣 Avaliação: O gráfico está bem construído em estrutura, cor e estética, mas a falta de atenção à legenda pode causar dúvidas na identificação dos elementos.<br> 💡 Dica: Mesmo com rótulos diretos, considere uma legenda única e clara, especialmente em gráficos mais complexos.' },
    { array: [2,4,1,1,1], text: '🗣 Avaliação: Seu gráfico certamente será visualmente impactante, com formas e cores bem aplicadas. Contudo, preste atenção aos detalhes e aos eixos.<br>💡 Dica: Busque verificar as escalas, rotulações e formatações indevidas ou inesperadas.' },
    { array: [0,0,0,0,6], text: '🗣 Avaliação: Seu gráfico está muito focado nos detalhes mas não no todo.<br>💡 Dica: Utilize mais das outras etapas para uma visualização mais correta' },
    { array: [1,9,1,0,0], text: '🗣 Avaliação: Sua atenção à paleta de cores é exemplar — isso contribui para acessibilidade, consistência e estética. Porém, o gráfico pode ser visualmente agradável mas tecnicamente frágil.<br> 💡 Dica: Considere reforçar os eixos, a legenda e os detalhes para complementar o excelente trabalho com as cores.' },
    { array: [3,0,5,0,0], text: '🗣 Avaliação: Você criou uma base sólida de estrutura e forma. O gráfico tende a ser compreensível e objetivo, mas pode parecer desconexo e sem detalhamento.<br> 💡 Dica: Busque conferir as legendas e melhore nos detalhes.' },
    { array: [1,2,1,2,1], text: '🗣 Avaliação: Você tocou pontos importantes, mas de maneira pontual e desconectada. O resultado pode ser um gráfico que acerta em partes, mas deixa a desejar no todo.<br> 💡 Dica: Organize sua seleção com mais intenção. Escolha 2 ou 3 itens por tópico e verifique se eles conversam entre si.' },
    { array: [1,1,1,1,1], text: '🗣 Avaliação: Você não selecionou uma quantidade de boas praticas necessárias para o feedback' }
  ];

  let minDistance = Infinity;
  let closestFeedback = '🗣 Avaliação: Você ainda não selecionou nenhuma boa prática. Isso pode indicar que o gráfico será gerado sem considerar os principais critérios de legibilidade, acessibilidade e clareza.<br>💡 Dica: Comece escolhendo pelo menos 2 itens em cada tópico. Isso garantirá que o gráfico atenda aos padrões básicos de comunicação visual eficaz.';

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
