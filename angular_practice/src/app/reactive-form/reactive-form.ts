import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {
     name = new FormControl();
     password = new FormControl();
     display(){
      console.log(this.name.value , this.password.value);
     }
}
