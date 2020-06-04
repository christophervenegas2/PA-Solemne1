import { Pet } from './pet';

export class Cat extends Pet{
  public isFurry: boolean;
  public meows: boolean;

  constructor(data: any = null) {
    super(data);
    this.isFurry = data.isMale;
    this.meows = data.meows;
  }
}