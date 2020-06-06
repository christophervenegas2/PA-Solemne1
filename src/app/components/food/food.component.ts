import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Food } from 'src/app/classes/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  public food: Food[];

  constructor(
    private router: Router,
    private dogsService: DogsService
    ) { }

  public ngOnInit(): void {
    this.dogsService.getFood().subscribe(data => {
      this.food = data.map(value => new Food(value));
    });
  }

  public catPage() {
    this.router.navigate(['app-cat']);
  }
}

