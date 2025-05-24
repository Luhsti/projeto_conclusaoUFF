import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

constructor() { }

feedbackEscolhas(topicCounts: number[]): string {
  const key = topicCounts.toString();

  switch (key) {
    case '4,0,1,0,1':
      return '🗣 Avaliação: Seu gráfico demonstra uma excelente atenção à forma e clareza estrutural. No entanto, ele pode ficar visualmente desequilibrado se não houver atenção às cores e legendas. Um gráfico bem formatado, mas com cores mal aplicadas, ainda pode confundir.<br>💡 Dica: Expanda para os tópicos 05 e 07 para enriquecer a percepção visual e a compreensão.';
    case '2,3,2,1,3':
      return '🗣 Avaliação: Você demonstrou uma distribuição bem equilibrada entre forma, cor, e detalhes. Ainda há espaço para um pouco mais de atenção à legenda, mas o resultado é funcional e esteticamente agradável.<br>💡 Dica: Continue explorando pequenas melhorias no tópico 07 — legendas também têm impacto na clareza final.';
    case '1,6,2,0,1':
      return '🗣 Avaliação: Você caprichou na aplicação das cores — ótimo para atrair atenção e tornar o gráfico acessível. No entanto, a ausência de atenção à forma e legenda pode reduzir a legibilidade e o impacto das informações.<br>💡 Dica: Lembre-se: a cor complementa, mas a forma organiza. Dê mais atenção ao tópico 04 para criar estrutura.';
    case '0,1,1,0,6':
      return '🗣 Avaliação: Você demonstra um ótimo entendimento de como enriquecer a experiência do usuário com detalhes e contexto. Mas o gráfico pode perder clareza estrutural sem formas bem editadas e eixos organizados.<br>💡 Dica: Invista um pouco nos tópicos 04 e 06 para estruturar melhor seu gráfico antes de complementá-lo.';
    case '3,3,2,1,2':
      return '🗣 Avaliação: Parabéns! Sua seleção mostra um equilíbrio saudável entre todos os elementos da visualização. Isso indica uma preocupação com clareza, acessibilidade, estética e organização.<br>💡 Dica: Continue assim! Com ajustes pontuais, seu gráfico está no caminho para ser referência em boas práticas.';
    case '3,4,0,0,2':
      return '🗣 Avaliação: Você deu bastante atenção ao uso de formas e cores — o que torna o gráfico atraente e legível. Porém, ignorar os eixos e a legenda pode comprometer a interpretação precisa dos dados.<br>💡 Dica: Não esqueça que bons dados também precisam de bons rótulos e escalas. Considere incluir pelo menos 1 item dos tópicos 06 e 07.';
    case '0,0,3,2,0':
      return '🗣 Avaliação: Seu gráfico será bem estruturado e fácil de ler graças à legenda clara e eixos bem definidos. No entanto, a ausência de escolhas nos demais tópicos pode torná-lo visualmente pobre ou sem impacto.<br>💡 Dica: Formas e cores ajudam a guiar o olhar. Detalhes criam contexto. Equilibre técnica com estética.';
    case '1,1,1,1,1':
      return '🗣 Avaliação: Você tocou em todos os tópicos, o que é positivo. Porém, a seleção de apenas um item por grupo mostra que a aplicação dos conceitos pode estar superficial ou incompleta.<br>💡 Dica: Escolha pelo menos 2 ou 3 boas práticas por tópico para construir uma base sólida. A profundidade é tão importante quanto a variedade.';
    case '1,8,0,0,1':
      return '🗣 Avaliação: Você demonstra um domínio impressionante no uso de cores. Isso é excelente para acessibilidade e estética, mas o gráfico pode acabar visualmente confuso sem formas claras, rótulos, ou legenda adequada.<br>💡 Dica: Um gráfico colorido sem contexto vira arte abstrata. Insira ao menos 1 ou 2 itens de estrutura para equilibrar.';
    case '3,0,0,0,4':
      return '🗣 Avaliação: Você tem um forte foco no apelo visual, o que é ótimo para atrair atenção. No entanto, há um sério risco de que o gráfico seja bonito, mas sem clareza nos dados.<br> 💡 Dica: Bons gráficos são bonitos e informativos. Inclua dados técnicos como rótulos, escalas e legenda para completar.';
    case '0,0,0,0,0':
      return '🗣 Avaliação: Você ainda não selecionou nenhuma boa prática. Isso pode indicar que o gráfico será gerado sem considerar os principais critérios de legibilidade, acessibilidade e clareza.<br>💡 Dica: Comece escolhendo pelo menos 2 itens em cada tópico. Isso garantirá que o gráfico atenda aos padrões básicos de comunicação visual eficaz.';
    case '1,1,4,1,4':
      return '🗣 Avaliação: Sua atenção aos eixos e detalhes mostra uma preocupação legítima com a clareza e orientação do usuário. Porém, a comunicação visual depende também de forma e cor — e essas áreas estão subrepresentadas.<br> 💡 Dica: Para uma experiência completa, complemente com formas bem definidas e uma paleta coerente de cores.';
    case '2,3,2,1,2':
      return '🗣 Avaliação: Você está no caminho certo! Sua seleção é equilibrada e cobre os principais aspectos de um bom gráfico: estrutura, estética, acessibilidade e clareza.<br> 💡 Dica: Apenas mantenha esse padrão e, se possível, adicione mais um item ao tópico 07 para reforçar a comunicação.';
    case '2,3,2,0,2':
      return '🗣 Avaliação: O gráfico está bem construído em estrutura, cor e estética, mas a falta de atenção à legenda pode causar dúvidas na identificação dos elementos.<br> 💡 Dica: Mesmo com rótulos diretos, considere uma legenda única e clara, especialmente em gráficos mais complexos.';
    case '4,5,0,0,1':
      return '🗣 Avaliação: Seu gráfico certamente será visualmente impactante, com formas e cores bem aplicadas. Contudo, a ausência de dados técnicos e explicações pode dificultar a interpretação.<br>💡 Dica: Busque incluir pelo menos 1 item dos tópicos 06 e 07 para fornecer contexto e precisão ao que está sendo exibido.';
    case '4,4,4,4,0':
      return '✅ Ótimo trabalho nos primeiros quatro tópicos! Só falta completar os detalhes finais.';
    case '0,0,6,0,0':
      return '✅ Você explorou bem os eixos, mas ainda precisa cuidar da cor, forma, legenda e detalhes.';
    case '0,0,0,3,4':
      return 'ℹ️ Foco total em legenda e detalhes. Lembre-se também da estrutura e paleta.';
    case '1,2,3,1,1':
      return 'ℹ️ Boa variedade com destaque para os eixos. Pode complementar os outros tópicos.';
    case '3,3,3,3,3':
      return '✅ Excelente! Você escolheu 3 boas práticas em cada tópico. Ótimo equilíbrio.'

    default:
      return '';
  }
}


}
