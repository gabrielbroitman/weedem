import { Component, OnInit } from '@angular/core';
import { Strain } from 'src/app/model/strain/Strain';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.css']
})
export class StrainComponent implements OnInit {

  strains: Strain[];

  constructor(private strain: Strain) { }

  ngOnInit() {


  }


  createReactiveForm() {

  }

}
