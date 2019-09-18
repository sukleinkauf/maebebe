import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GerenciadorTiposService } from './gerenciador-tipos.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioMae {

  private formDadosMaeInicial: FormGroup;
  private formDadosPessoais: FormGroup;
  private formDadosResidenciais: FormGroup;
  private formDadosOutrasInformacoes: FormGroup;



  public areas = [];
  public estados = [];
  public moradias = [];
  public escolaridades = [];
  public rendaFamiliar = [];



  constructor(private gerenciadorTipos: GerenciadorTiposService) {
    this.buscarTipos();
  }

  getFormAbaDadosMae(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosMaeInicial = builder.group({
      area: new FormControl(''),
      microarea: new FormControl(''),
   
    });

    return this.formDadosMaeInicial
  }

  getFormAbaDadosPessoais(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosPessoais = builder.group({
      inicioPrograma: new FormControl(''),
      nomeCompleto: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      rg: new FormControl(''),
      cartaoSUS: new FormControl(''),
      idade: new FormControl(''),
      endereco: new FormControl(''),
      telefone: new FormControl(''),
      telefoneApoio: new FormControl('')
    });

    return this.formDadosPessoais
  }
  
  getFormAbaDadosResidenciais(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosResidenciais = builder.group({
      cep: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
      bairro: new FormControl(''),
      endereco: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      pontoReferencia: new FormControl(''),
      moradia: new FormControl(''),

    });

    return this.formDadosResidenciais
  }

  getFormAbaDadosOutrasInformacoes(): FormGroup {
    let builder = new FormBuilder()

    this.formDadosOutrasInformacoes = builder.group({
      escolaridade: new FormControl(''),
      trabalhaFora: new FormControl(''),
      profissao: new FormControl(''),
      dataRetorno: new FormControl(''),
      rendaMensalFamiliar: new FormControl(''),
      numeroMoradores: new FormControl(''),
      estadoCivil: new FormControl(''),
      imagem: new FormControl(''),
      observacoes: new FormControl(''),
      data: new FormControl(''),
      preenchidoPor: new FormControl(''),
    });

    return this.formDadosOutrasInformacoes
  }

  async buscarTipos() {
    this.areas = await this.gerenciadorTipos.buscarTipo('area');
    this.estados = await this.gerenciadorTipos.buscarTipo('estado');
    this.moradias = await this.gerenciadorTipos.buscarTipo('moradia');
    this.escolaridades = await this.gerenciadorTipos.buscarTipo('escolaridade');
    this.rendaFamiliar = await this.gerenciadorTipos.buscarTipo('tipo_renda_mensal');

    console.log(this.estados)
  }



  salvar(): void {
    alert('Salvando dados')
  }
}
