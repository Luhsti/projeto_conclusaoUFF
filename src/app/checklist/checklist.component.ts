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
        'Não repita formas.',
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
        'Evite cores fortes.',
        'Não destaque sem necessidade.',
        'Mesma cor para mesma info.',
        'Use conotações culturais.',
        'Verifique daltonismo.',
        'Use cores de marca com cuidado.'
      ],
      selected: Array(9).fill(false)
    },
    {
      topic: '06. Altere os eixos',
      items: [
        'Adicione título.',
        'Escala igual.',
        'Eixo começando em zero.',
        'Eixo ajustado aos dados.',
        'Rotule com unidades.',
        'Use rótulos em poucos dados.'
      ],
      selected: Array(6).fill(false)
    },
    {
      topic: '07. Confira a legenda',
      items: [
        'Legenda na ordem dos dados.',
        'Elimine legenda e rotule direto.',
        'Legenda única com todos os elementos.'
      ],
      selected: Array(3).fill(false)
    },
    {
      topic: '08. Complemente os detalhes',
      items: [
        'Hierarquia visual.',
        'Explique o gráfico.',
        'Resumo/dicionário dos dados.',
        'Não use 3D.',
        'Ajuste plano de fundo.',
        'Evite desordem visual.',
        'Use espaços em branco.'
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
      this.feedback = 'Você ainda não selecionou nenhuma boa prática. Comece escolhendo pelo menos 2 itens em cada tópico.';
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
