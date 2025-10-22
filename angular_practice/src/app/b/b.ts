import { Component } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
  providers : [DataService]
})
export class B {
  constructor(private dataservice : DataService){}
  ngOnInit(){
    console.log(this.dataservice.getMessage());
  }
}
