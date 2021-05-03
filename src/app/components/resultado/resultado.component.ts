import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion= '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >= 30){
      this.resultado = 'Exceso de peso. Sobrepeso'
      this.interpretacion = ' Tienes un peso corporal bastante superior. Intente hacer más ejercicio y consulte su doctor'
    }else if(this.bmi >= 25){
      this.resultado = 'Exceso de peso'
      this.interpretacion = ' Tienes un peso corporal superior al normal. Intente hacer más ejercicio';
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal'
      this.interpretacion = ' Tienes un peso corporal normal. ¡Buen Trabajo!';
    }else{
      this.resultado = 'Bajo peso'
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más e ir al nutricionista';
    }
  }

}
