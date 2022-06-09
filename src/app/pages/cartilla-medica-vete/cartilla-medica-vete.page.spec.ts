import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartillaMedicaVetePage } from './cartilla-medica-vete.page';

describe('CartillaMedicaVetePage', () => {
  let component: CartillaMedicaVetePage;
  let fixture: ComponentFixture<CartillaMedicaVetePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CartillaMedicaVetePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartillaMedicaVetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
