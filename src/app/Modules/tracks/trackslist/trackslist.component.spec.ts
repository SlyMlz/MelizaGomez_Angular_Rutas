import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackslistComponent } from './trackslist.component';

describe('TrackslistComponent', () => {
  let component: TrackslistComponent;
  let fixture: ComponentFixture<TrackslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
