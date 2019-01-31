import { BaseModel } from '../BaseModel';

export class Canabinoide extends BaseModel {


  constructor() {
    super();
  }

}


const canabinoides: string[] = [
'thc',
'thca',
'thcv',
'cbd',
'cbda',
'cbdv',
'cbn',
'cbg',
'cbgm',
'cbgv',
'cbc',
'cbcv',
'cbv',
'cbe',
'cbt',
'cbl'
];

const object = canabinoides.map( canabinoide => new Canabinoide().nome);
