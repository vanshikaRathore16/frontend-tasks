import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data-service';
import { A } from './a/a';
import { B } from './b/b';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,A, HttpClientModule,B],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_practice');
   constructor(private dataService : DataService){
   }

   ngOnInit(){
    this.dataService.message = "msg update by app"
    console.log(this.dataService.message)
    console.log(this.dataService.getMessage)
   }
}
