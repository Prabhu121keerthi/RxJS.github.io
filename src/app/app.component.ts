import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { distinct, filter, from , skip, count, Observable, max, min} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Operators';

  categories = ["tv", "radio", "phone", "tv", "charger", "radio"];
  category$ = from(this.categories);

  ranks = [2,1,54,33,25,67,23,78,90];
  rank$:Observable<number> = from(this.ranks);

  searchForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      name: new FormControl('Start search')
    });

    this.searchForm.get('name')?.valueChanges
    .pipe(
      filter((v) => this.checkCharCount(v))
     ).subscribe(data => {
      console.log(data);

      this.rank$.pipe(
       // max()
       min()
      ).subscribe(
        data => { console.log(data)}
      )

      this.category$.pipe(
        //distinct(),
        //skip(2)
        count()
      )
      .subscribe(data => {
        console.log(data);
      })
  });

 }
  checkCharCount(value:any) {
    return value.length < 5 ? true:false;
  }

  readValue() {
    
  }

}
