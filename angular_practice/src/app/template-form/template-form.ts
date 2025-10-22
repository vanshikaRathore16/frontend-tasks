import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {
  userDetails : any;
   getDetail(value : any){
    console.log(value)
    this.userDetails = value;
   }
}
