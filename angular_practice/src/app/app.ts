import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from './data-service';
import { A } from './a/a';
import { B } from './b/b';
import { Lifecycle } from './lifecycle/lifecycle';
import {Observable1} from "./observable/observable"
import { HttpClientModule } from '@angular/common/http';
import { RouterLink} from '@angular/router';
import { Product } from './product/product';
import { CommonModule } from '@angular/common';
import { NewCompo } from './new-compo/new-compo';
import { NgModel } from '@angular/forms';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';
@Component({
  selector: 'app-root',
  imports: [ReactiveForm,TemplateForm,NewCompo,CommonModule,RouterOutlet,A, HttpClientModule,B,Observable1,Lifecycle,RouterLink,Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practice');
   constructor(private dataService : DataService, private router : Router){
   }

   ngOnInit(){
    this.dataService.message = "msg update by app"
    console.log(this.dataService.message)
    console.log(this.dataService.getMessage)
   }

    goTpProduct(){
     this.router.navigate(['/product'],{
      queryParams : {id : 2 ,name : 'mobile'}
     })
    }
}
