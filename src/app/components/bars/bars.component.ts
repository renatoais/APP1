import { Component, OnInit , Input ,OnChanges } from '@angular/core';
import { Coracao } from './../../shared/coracao.model'


@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit ,OnChanges{

  @Input() public tentativas:number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]


  constructor() { }

  ngOnChanges() {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio =false
    }

  }


  ngOnInit(): void {
  }

}
