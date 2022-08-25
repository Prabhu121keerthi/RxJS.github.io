import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  agents:Observable<string>;
  agentName:string;
  constructor() { }

  ngOnInit(): void {
    
    this.agents = new Observable(observer => {
      try {
        setInterval(() => {
          observer.next("John");
        },1000);
        setInterval(() => {
          observer.next("Smith");
        }, 3000);

        setInterval(() => {
          observer.next("Antony");
        }, 5000);
      }
      catch(err) {
        console.log(err);
      }
  })

  this.agents.subscribe(data => {

      this.agentName = data;
  })
   
  }

    
}
