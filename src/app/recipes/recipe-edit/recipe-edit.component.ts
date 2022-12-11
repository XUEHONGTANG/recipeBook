import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.paramMap.subscribe(
      paramMap => {
        this.id = +paramMap.get('id')
        this.editMode = paramMap.get('id') != null
      }
    )
  }
}
