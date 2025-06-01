import { FeedbackService } from './service/feedback.service';
import { Component, OnInit } from "@angular/core";
import { ChecklistTopic } from "../models/checklistTopic";

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  logo = "./assets/banner.JPG"
  grafico = "./assets/graficoLS.JPG"

  constructor(
    private service: FeedbackService
  ){}

  ngOnInit(): void {
    this.onCheckboxChange()
  }

  checklist: ChecklistTopic[] = [
    {
      topic: '04. Edite as formas',
      items: [
        'Seja redundante!',
        'Não repita formas para informações diferentes.',
        'Mantenha a ordem natural.',
        'Evite sobreposições.'
      ],
      selected: Array(4).fill(false)
    },
    {
      topic: '05. Escolha uma paleta de cores corretamente',
      items: [
        'Identifique os dados.',
        'Selecione paleta correta.',
        'Diferencie tons.',
        'Evite cores fortes para grandes áreas.',
        'Garanta a não sobreposição de cores.',
        'Mesma cor para mesma info.',
        'Use conotações culturais.',
        'Verifique acessibilidade de cores.',
        'Use cores de marca com cuidado.'
      ],
      selected: Array(9).fill(false)
    },
    {
      topic: '06. Altere os eixos',
      items: [
        'Adicione título.',
        'Rotule eixos com titulo e unidade.',
        'Use mesma escala em eixos de unidades iguais.',
        'Eixo ajustado aos dados.',
        'Eixo mais proximo do intervalo.',
        'Use rótulos em poucos dados.'
      ],
      selected: Array(6).fill(false)
    },
    {
      topic: '07. Confira a legenda',
      items: [
        'Elimine legenda e rotule diretamente.',
        'Legenda na ordem dos dados.',
        'Legenda única com todos os elementos.'
      ],
      selected: Array(3).fill(false)
    },
    {
      topic: '08. Complemente os detalhes',
      items: [
        'Não sature de elementos e dados.',
        'Hierarquia visual.',
        'Aproveite espaços livres.',
        'Ajuste plano de fundo.',
        'Explique o significado das informações.',
        'Forneça um Resumo/dicionário dos dados.',
        'Não use 3D sem justificativa.'
      ],
      selected: Array(7).fill(false)
    }
  ];

  feedback: string = '';

  onCheckboxChange() {
    setTimeout(() => this.generateFeedback(), 0);
  }

  generateFeedback() {
    const topicCounts = this.checklist.map(c => c.selected.filter(Boolean).length);
    console.log("tc", topicCounts)
    const total = topicCounts.reduce((a, b) => a + b, 0);
    console.log("total", total)

    if (total === 0) {
      this.feedback = 'Selecione os itens que você aprendeu no catalogo e aplicou em seus gráficos para receber um feedback';
      return;
    }

    const feedbackParts: number[] = [];
    topicCounts.forEach((count, i) => {
      feedbackParts.push(count)
    });

    console.log(feedbackParts)

    this.feedback = this.service.feedbackEscolhas(topicCounts)
  }


}
