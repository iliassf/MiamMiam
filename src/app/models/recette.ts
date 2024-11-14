import { Ingredient } from './ingredient';
import { Creator } from './creator';
import { Mark } from './mark';

export class Recette {
  id: string;
  title: string;
  description: string;
  creator: Creator;
  marks: Mark[];
  average: number;
  ingredients: Ingredient[];
  steps: string[];
  image: string;
  time: number;
  numberOfShares: number;

  constructor(
    id: string = '',
    title: string = '',
    description: string = '',
    creator: Creator = new Creator(),
    marks: Mark[] = [],
    ingredients: Ingredient[] = [],
    steps: string[] = [],
    image: string = '',
    time: number = 0,
    numberOfShares: number = 1
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creator = creator;
    this.marks = marks;
    this.ingredients = ingredients;
    this.steps = steps;
    this.image = image;
    this.time = time;
    this.average = this.recetteAverage(marks);
    this.numberOfShares = numberOfShares;
  }

  recetteAverage(marks: Mark[]): number {
    return marks!
      ? Math.round(marks.reduce((a, b) => a + b.rate, 0) / marks.length)
      : 0;
  }

  toPlainObject() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      creator: { ...this.creator },
      marks: this.marks.map((mark) => {
        return { ...mark };
      }),
      average: this.average,
      ingredients: this.ingredients.map((ingredient) =>
        ingredient.toPlainObject ? ingredient.toPlainObject() : ingredient
      ),
      steps: this.steps,
      image: this.image,
      time: this.time,
      numberOfShares: this.numberOfShares,
    };
  }
}
