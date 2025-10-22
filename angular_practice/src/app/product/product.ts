import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
   id : any;
   name : any;
   constructor(private router : ActivatedRoute){}
   ngOnInit(){
    this.router.queryParams.subscribe(params=>{
      this.id = params["id"],
      this.name = params["name"]
      console.log(params["id"],params["name"]);
    })
   }
}
