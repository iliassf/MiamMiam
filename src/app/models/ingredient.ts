export class Ingredient {
  name: string;
  quantity: string;
  unity: string;

  constructor(name: string = '', quantity: string = '', unity: string = '') {
    this.name = name;
    this.quantity = quantity;
    this.unity = unity;
  }

  toPlainObject() {
    return {
      name: this.name,
      quantity: this.quantity,
      unity: this.unity,
    };
  }
}
