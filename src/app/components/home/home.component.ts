import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) {}
  cities: City[] = [];
  enteredCity: string = '';
  selectedCities: City[] = [];

  ngOnInit(): void {
    this.commonService.getCitiesData().subscribe(
      (data: City[]) => {
        this.cities = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.commonService.getSelectedCitiesData().subscribe(
      (data: City[]) => {
        this.selectedCities = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onClickCity(city: City) {
    const elementExists = this.selectedCities.some((el) => el.id === city.id);
    if (!elementExists) {
      this.selectedCities.push(city);
      this.commonService.postSelectedCityData(city).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('city already added');
    }
  }

  handleDelete(selectedCity: City) {
    const elementExists = this.selectedCities.some(
      (el) => el.id === selectedCity.id
    );
    if (elementExists) {
      this.selectedCities = this.selectedCities.filter(
        (data) => data.id !== selectedCity.id
      );
      this.commonService.deleteSelectedCityData(selectedCity.id).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('city does not exist');
    }
  }

  onNavigation(city: City) {
    this.commonService.selectedCity = city;
  }
}
