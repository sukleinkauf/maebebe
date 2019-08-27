import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GerenciadorTiposService } from './gerenciador-tipos.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioMae {

  private formDadosMae: FormGroup;
  //private formDadosPlanejamento: FormGroup;
  //private formDadosPreNatal: FormGroup;


  public areas = []



  constructor(private gerenciadorTipos: GerenciadorTiposService) {
    this.buscarTipos()
  }

  getFormAbaDadosMae(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosMae = builder.group({
      area: new FormControl('')
   
    });

    return this.formDadosMae
  }
  async buscarTipos() {
    this.areas = await this.gerenciadorTipos.buscarTipo('area')
    console.log(this.areas)
  }



  salvar(): void {
    alert('Salvando dados')
  }
}
