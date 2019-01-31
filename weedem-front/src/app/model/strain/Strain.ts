import { Terpeno } from './Terpeno';
import { Efeito } from './Efeito';
import { Enfermidade } from './Enfermidade';
import { Sabor } from './Sabor';
import { Tipo } from './Tipo';
import { Canabinoide } from './Canabinoide';
import { Empresa } from '../empresa/Empresa';
import { Localizacao } from '../localizacao';
import { BaseModel } from '../BaseModel';



export class Strain extends BaseModel {

  descricao: string;

  tipo: Tipo;

  efeitos: Efeito[];

  enfermidades: Enfermidade[];

  sabores: Sabor[];

  terpenos: Terpeno[];

  canabinoides: Canabinoide[];

  cultivador: Empresa;

  localizacao: Localizacao;

  constructor() {
    super();
  }

}

