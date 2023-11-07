import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikprComponent } from './korisnikpr.component';

describe('KorisnikprComponent', () => {
  let component: KorisnikprComponent;
  let fixture: ComponentFixture<KorisnikprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
