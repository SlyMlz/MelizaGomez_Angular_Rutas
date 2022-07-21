import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadoresviewsComponent } from './marcadoresviews.component';

describe('MarcadoresviewsComponent', () => {
  let component: MarcadoresviewsComponent;
  let fixture: ComponentFixture<MarcadoresviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcadoresviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcadoresviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
