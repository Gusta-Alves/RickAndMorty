import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  searchInput = new FormControl;
  results = this.searchInput.valueChanges
    .pipe(
      debounceTime(500),
      tap((value: string) => this.store.dispatch(searchCharactersName({charactersName: value}))),
    ).subscribe();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
