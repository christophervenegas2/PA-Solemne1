import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dog } from 'src/app/classes/dog';

@Component({
  selector: 'app-green-dog',
  templateUrl: './green-dog.component.html',
  styleUrls: ['./green-dog.component.scss']
})
export class GreenDogComponent implements OnInit {

  public greenDogs: Dog[];
  
  constructor(
    private router: Router,
    private dogsService: DogsService
    ) { }

  ngOnInit(): void {
    this.dogsService.getGreenDogs().subscribe(data => {
       this.greenDogs = data; // <- *ngFor='let dog of greenDogs'
    });
  }

  public foodPage() {
    this.router.navigate(['app-food']);
  }
}

