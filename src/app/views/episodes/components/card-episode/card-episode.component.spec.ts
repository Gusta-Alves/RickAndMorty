import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpisodeComponent } from './card-episode.component';

describe('CardEpisodeComponent', () => {
  let component: CardEpisodeComponent;
  let fixture: ComponentFixture<CardEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
