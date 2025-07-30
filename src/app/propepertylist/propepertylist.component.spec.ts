import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropepertylistComponent } from './propepertylist.component';

describe('PropepertylistComponent', () => {
  let component: PropepertylistComponent;
  let fixture: ComponentFixture<PropepertylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropepertylistComponent]
    });
    fixture = TestBed.createComponent(PropepertylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
