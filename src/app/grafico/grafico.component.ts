import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent implements OnInit {

  data: Object;
  home: any;

  constructor() { 

    
  }

  ngOnInit() {

    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };

  }

}
