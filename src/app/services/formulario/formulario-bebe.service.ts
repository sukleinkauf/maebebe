import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { GerenciadorTiposService } from './gerenciador-tipos.service';
import { Router } from '@angular/router';
import { API } from '../http/api';

@Injectable({
    providedIn: 'root'
})
export class FormularioBebe {
    
    public formDadosBebe: FormGroup
    public formDadosParto: FormGroup
    public formDadosTestes: FormGroup
    public formDadosIntercorrencias: FormGroup

    public listaTipoDesfecho = [
        {descricao: 'Nativivo', id: '0'},
        {descricao: 'Natimorto', id: '1'},
    ]
    public listaProblemaParto = [
        {descricao: 'Sim', id: '1'},
        {descricao: 'Não', id: '0'},
    ]

    constructor(
        private gerenciadorTipos: GerenciadorTiposService, 
        private api: API,
        private router: Router
    ) {
        this.buscarTipos();
    }

    getFormAbaDadosBebe(): FormGroup {
        let builder = new FormBuilder()

        this.formDadosBebe = builder.group({
            id_tipo_desfecho_bebe: new FormControl(''),
            id_genero: new FormControl(''),
            dt_nascimento: new FormControl(''),
            local_nascimento: new FormControl(''),
            nome: new FormControl(''),
            numero: new FormControl(''),
            cpf: new FormControl(''),
            rg: new FormControl(''),
            cartao_sus: new FormControl(''),
            pediatra: new FormControl(''),
            numero_consultas_pre_natal: new FormControl(''),
            numero_consultas_pre_natal_obs: new FormControl(''),
        });

        return this.formDadosBebe
    }

    getFormAbaDadosParto(): FormGroup {
        let builder = new FormBuilder()

        this.formDadosParto = builder.group({
            id_tipo_parto: new FormControl(''),
            problema_parto: new FormControl(''),
            peso_nascimento: new FormControl(''),
            comprimento_nascimento: new FormControl(''),
            idade_gestacional_semanas_parto: new FormControl(''),
            idade_gestacional_dias_parto: new FormControl(''),
            id_escala: new FormControl(''),
            apgar_1_min: new FormControl(''),
            apgar_5_min: new FormControl(''),
            perimetro_cefalico_nascimento: new FormControl(''),
            perimetro_abdominal_nascimento: new FormControl(''),
        })
        
        return this.formDadosParto
    }

    getFormAbaDadosTestes(): FormGroup {
        let builder = new FormBuilder()

        this.formDadosTestes = builder.group({
            id_tipo_triagem_neonatal_reflexo_olho_vermelho: new FormControl(''),
            id_tipo_triagem_neonatal_orelhinha: new FormControl(''),
            id_tipo_triagem_neonatal_coracaozinho: new FormControl(''),
            id_tipo_triagem_neonatal_pezinho: new FormControl(''),
            id_tipo_triagem_neonatal_linguinha: new FormControl(''),
            anormalidade_triagem_neonatal_obs: new FormControl(''),
            id_denver_6_mes: new FormControl(''),
            id_denver_12_mes: new FormControl(''),

        })
        
        return this.formDadosTestes
    }

    getFormAbaDadosIntercorrencias(): FormGroup {
        let builder = new FormBuilder()
        
        this.formDadosIntercorrencias = builder.group({
            ref_bebe_intercorrencia_peri_neonatal: new FormControl(''),
            intercorrencia_peri_neonatal_obs: new FormControl(''),
            ref_bebe_intercorrencia_primeiro_ano_vida: new FormControl(''),
            intercorrencia_primeiro_ano_vida_obs: new FormControl(''),
            id_estado: new FormControl(''),
            id_cidade: new FormControl(''),
            id_bairro: new FormControl(''),
            obs: new FormControl('')
        })
        
        return this.formDadosIntercorrencias
    }

    abrirFormAbaDadosBebe(id_mae, id_gestacao) {
        let url = "mae/:id_mae/gestacao/:id_gestacao/bebe/cadastro/dados-bebe"
                        .replace(":id_mae", id_mae)
                        .replace(":id_gestacao", id_gestacao)
        
        this.router.navigateByUrl(url)
    }

    abrirFormAbaDadosParto(id_mae, id_gestacao) {
        let url = "mae/:id_mae/gestacao/:id_gestacao/bebe/cadastro/dados-parto"
                        .replace(":id_mae", id_mae)
                        .replace(":id_gestacao", id_gestacao)
        
        this.router.navigateByUrl(url)
    }

    abrirFormAbaDadosTestes(id_mae, id_gestacao) {
        let url = "mae/:id_mae/gestacao/:id_gestacao/bebe/cadastro/dados-testes"
                        .replace(":id_mae", id_mae)
                        .replace(":id_gestacao", id_gestacao)
        
        this.router.navigateByUrl(url)
    }

    abrirFormAbaDadosIntercorrencias(id_mae, id_gestacao) {
        let url = "mae/:id_mae/gestacao/:id_gestacao/bebe/cadastro/dados-intercorrencias"
                        .replace(":id_mae", id_mae)
                        .replace("id_gestacao", id_gestacao)
        
        this.router.navigateByUrl(url)
    }

    async buscarTipos() {
        // this.listaMotivoDesfecho = await this.gerenciadorTipos.buscarTipo('tipo_motivo_desfecho')
    }
}