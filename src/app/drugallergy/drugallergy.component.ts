import { Component, OnInit } from '@angular/core';
import { DrugAllergyService } from '../api/drugallergy.service';
import { DrugAllergy } from '../models/drugallergy.model';


@Component({
  selector: 'app-drugallergy',
  templateUrl: './drugallergy.component.html',
  styleUrls: ['./drugallergy.component.css']
})
export class DrugallergyComponent implements OnInit {

  drugAllergy: any = [];

  constructor(private productAllergyService: DrugAllergyService) { }
  ngOnInit() {

    this.productAllergyService.getDrugAllergy().subscribe(
      (drugAllergy) => {
        console.log(drugAllergy);
        var rs: any = drugAllergy;
        this.drugAllergy = rs.result;
      }

    );
  }

}
