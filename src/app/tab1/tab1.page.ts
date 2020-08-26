import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Monto: number;
  iva: number;
  it: number;
  Utilidad: number;
  cifraiva: any;
  cifrait: any;
  cifraut: any;

  inputiva: number;
  inputit: number;
  aux: any;

  isTermsAccepted = true;
  constructor() {}

  changeCheckBox(){this.isTermsAccepted = !this.isTermsAccepted; }
  imagen = ['https://31.media.tumblr.com/5a462857e78f95b405006eb4844e548b/tumblr_nj7opsdKX21u9hax9o1_400.gif'];
  
  calcular(){
    if(this.isTermsAccepted == false){
      this.iva = this.Monto * this.inputiva / 100;
      this.cifraiva = this.iva.toFixed(2);    

      this.it = this.Monto * this.inputit / 100;
      this.cifrait = this.it.toFixed(2);    

      this.Utilidad = this.Monto - this.iva - this.it;
      this.cifraut = this.Utilidad.toFixed(2);   
    }
    else{
      this.iva = this.Monto * 13 / 100;
      this.cifraiva = this.iva.toFixed(2);    
  
      this.it = this.Monto * 3 / 100;
      this.cifrait = this.it.toFixed(2);    
  
      this.Utilidad = this.Monto - this.iva - this.it;
      this.cifraut = this.Utilidad.toFixed(2);    
    }


  }

}
