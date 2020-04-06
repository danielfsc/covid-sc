import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPopulationComponent } from './config-population.component';

describe('ConfigPopulationComponent', () => {
  let component: ConfigPopulationComponent;
  let fixture: ComponentFixture<ConfigPopulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPopulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPopulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
