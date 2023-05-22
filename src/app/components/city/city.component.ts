import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/model/city.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  selectedCity: City;
  currentDate = new Date();
  constructor(private commonService: CommonService) {
    this.selectedCity = this.commonService.selectedCity;
  }

  ngOnInit(): void {}
}
