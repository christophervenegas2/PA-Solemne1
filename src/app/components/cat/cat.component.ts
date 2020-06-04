import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public index() {
    this.router.navigate(['']);
  }
}
