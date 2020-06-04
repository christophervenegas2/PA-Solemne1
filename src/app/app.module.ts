import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { FoodComponent } from './components/food/food.component';
import { GreenDogComponent } from './components/green-dog/green-dog.component';
@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    FoodComponent,
    GreenDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
