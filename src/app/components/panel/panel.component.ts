import { PHRASE } from './phrase.mock';
import { phrase } from './../../shared/phrase.model';
import { Component, OnInit , Input , EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrase: phrase[] = PHRASE
  public title:string = 'Translate It  '
  public language:string = ' ptBr'
  public anwser:string = ''

  public rodada:number = 0
  public rodadafrase: phrase
  public progresso:number = 0
  public tentativa:number= 3

 @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada() }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta:Event):void{
    this.anwser = ((<HTMLInputElement>resposta.target).value)

  }

  public verificarResposta():void{
    if(this.rodadafrase.phrasePtBr == this.anwser){
        //Trocar a pergunta da rodada
        this.rodada++

        this.progresso = this.progresso + (100 / this.phrase.length)

        if(this.rodada == 4 ){
            this.encerrarJogo.emit('vitoria')  
          alert("Concluiu as Traduções com sucesso")

        }

        this.atualizaRodada()

    } else{
     
        this.tentativa --
        if(this.tentativa == -1){
          this.encerrarJogo.emit('derrota')  
            alert('Você perdeu todas as tentativas')
        }
      }


  }

  public atualizaRodada():void{
      
    //Atualiza Objeto rodadafrase
    this.rodadafrase = this.phrase[this.rodada]

    //Limpa Campo
    this.anwser = ''


  }



}
