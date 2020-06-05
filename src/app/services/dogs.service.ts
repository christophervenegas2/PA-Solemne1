import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../classes/dog';
import {Observable, observable} from 'rxjs';
import { Food } from '../classes/food';
import { stringify } from 'querystring';


@Injectable()
export class DogsService {

  public comidas: [];

  constructor(
    private http: HttpClient
  ) { }

  public getDogs(): Observable<Dog[]> {
    return new Observable<Dog[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const dogs = data.map(value => new Dog(value));
        observe.next(dogs);
        observe.complete();
      });
    });
  }

  public getGreenDogs(): Observable<Dog[]> {
    return new Observable<Dog[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const dogs = data.map(value => new Dog(value));
        const filteredDogs = dogs.filter(data => data.color === 'Green');
        observe.next(filteredDogs);
        observe.complete();
      });
    });
  }
}
