import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounce, debounceTime, from, fromEvent, interval, Observable, of, take, takeLast, takeWhile , first, last, elementAt} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OfOperator';

  @ViewChild('validate') validate?:ElementRef;

  searchForm:FormGroup;

  category = ['radio', 'phone', 'charger', 'TV'];
  categories$: Observable<string> = from(this.category);

  studentList = ["keerthi", "ram", "antony", "smith"];
  studentObj = {
    name : 'kavya',
    age : 27
  }

  orders = ["mobile", "laptop", "snacks", "shirts"];
  
  
  students$:Observable<string[]> = of(this.studentList);
  studentName$:Observable<string> = of('Rakshith');
  student$:Observable<any> = of(this.studentObj);

  order$:Observable<string> = from(this.orders);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.students$.subscribe(data => {
      console.log(data);
    })

    this.studentName$.subscribe(data => {
      console.log(data);
    })

    this.student$.subscribe(data => {
      console.log(data);
    })

    this.order$.subscribe(data => {
      const seqNum$ = interval(3000);

      seqNum$.subscribe(num => {
        if(num < 5) {
          console.log(data + num);
        }

      })
    })

    this.searchForm = new FormGroup({
      name: new FormControl('Start search')
    });

    this.searchForm.get('name')?.valueChanges
    .pipe(
      //take(4),
      takeWhile((v) => this.checkCondition(v)),
      debounceTime(5000)).subscribe(data => {
      console.log(data);

      this.categories$.pipe(
        //takeLast(2))
        //first())
        //last())
        elementAt(1))
      .subscribe(data1 => {

          console.log(data1);
      } )
    })  
  }

  checkCondition(value:any) {
    return value > 4? false:true;
  }
  
  

  readValue() {
    
  }
   

  rxjsEventObservable() {
    const obs = fromEvent(this.validate?.nativeElement, 'click');
    obs.subscribe(data => {
      console.log(data);
    })
  }
}
