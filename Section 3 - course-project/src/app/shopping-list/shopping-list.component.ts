import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('pepperoni', 10),
    new Ingredient('tomatoes', 5),
    new Ingredient('olives', 7),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
