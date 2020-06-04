import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-green-dog',
  templateUrl: './green-dog.component.html',
  styleUrls: ['./green-dog.component.scss']
})
export class GreenDogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public catPage() {
    this.router.navigate(['app-cat']);
  }
}
