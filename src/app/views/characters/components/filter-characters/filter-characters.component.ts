import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, tap } from 'rxjs/operators';
import { CharacterSearch } from 'src/app/store/characters/characters.action';

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
      tap(value => this.store.dispatch(new CharacterSearch({ name: value.name, status: value.status, location: value.location, gender: value.gender }))),
    ).subscribe();
  }

}
