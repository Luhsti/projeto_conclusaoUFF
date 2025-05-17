import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  /*

  checarResposta1(){
    if(this.resposta1!=""){
      if(this.resposta1 == "Sim"){
        this.disable_resposta1 = true
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
        alert("Errou")
      } else {
        this.disable_resposta1 = true
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
        alert("Acertou")
      }
    } else {
      alert("Escolha uma opcao")
    }
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

*/
