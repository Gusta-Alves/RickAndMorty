import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { props, Store } from '@ngrx/store';
import { asyncScheduler, merge, Observable, of, scheduled } from 'rxjs';
import { concatAll, debounceTime, filter, mergeAll, tap } from 'rxjs/operators';
import { searchCharactersName } from 'src/app/store/characters/characters.action';

@Component({
  selector: 'app-filter-characters',
  templateUrl: './filter-characters.component.html',
  styleUrls: ['./filter-characters.component.scss']
})
export class FilterCharactersComponent implements OnInit {

  public filterGroup: FormGroup = {} as FormGroup;

  constructor(private store: Store,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.onBuildForm();
    this.onChangeValue();
  }

  onBuildForm(){
    this.filterGroup = this.formBuilder.group({
      name: [null],
      location: [null],
      status: [null],
      gender: [null],
    })
  }

  onChangeValue(){
    this.filterGroup.valueChanges
    .pipe(
      debounceTime(500),
      tap(value => this.store.dispatch(searchCharactersName({ name: value.name, status: value.status, location: value.location, gender: value.gender }))),
    ).subscribe();
  }

}
