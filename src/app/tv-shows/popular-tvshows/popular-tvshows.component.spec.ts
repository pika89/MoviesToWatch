import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvshowsComponent } from './popular-tvshows.component';

describe('PopularTvshowsComponent', () => {
  let component: PopularTvshowsComponent;
  let fixture: ComponentFixture<PopularTvshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTvshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
