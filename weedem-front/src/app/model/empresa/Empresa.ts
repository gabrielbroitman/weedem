import { Localizacao } from '../localizacao';
import { BaseModel } from '../BaseModel';

export class Empresa extends BaseModel {

  localizacao: Localizacao;

  constructor() {
    super();
  }

}
