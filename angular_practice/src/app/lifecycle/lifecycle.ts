import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css'
})
export class Lifecycle {
   msg = "hello world"

   constructor(){
    console.log("con run");
   }
   ngOnInit(){
    console.log("ngOnInit")
   }
   ngDoCheck(){
    console.log("check change")
   }
   ngAfterViewInit(){
    console.log("ngAfterViweinit");
   }
    ngAfterViewChecked(){
    console.log("ngAfterViweChecked");
   }
   ngOnDestroy(){
    console.log("destroy")
   }
   changeName(){
    this.msg = "new msg";
    console.log("msg changed");
   }
   
}
