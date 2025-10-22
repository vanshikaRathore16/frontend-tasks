import { Component } from '@angular/core';
import { DataService } from '../data-service';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.html',
  styleUrl: './a.css'
})
export class A {
  constructor(private dataservice : DataService){}
  ngOnInit(){
    console.log(this.dataservice.message);
    // const product = this.dataservice.getProduct().subscribe(item => console.log(item));
    // console.log(product);
    // msg update by App
  }
}
