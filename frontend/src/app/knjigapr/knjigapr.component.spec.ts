import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnjigaprComponent } from './knjigapr.component';

describe('KnjigaprComponent', () => {
  let component: KnjigaprComponent;
  let fixture: ComponentFixture<KnjigaprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnjigaprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnjigaprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
