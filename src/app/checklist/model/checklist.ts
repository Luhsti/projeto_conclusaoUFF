export interface Pergunta {
  id: number;
  texto: string;
  resposta?: 'sim' | 'nao' | 'nao_se_aplica';
}

export interface Bloco {
  titulo: string;
  perguntas: Pergunta[];
  pontuacao?: {
    sim: number;
    naoSeAplica: number;
    total: number;
  };
}
