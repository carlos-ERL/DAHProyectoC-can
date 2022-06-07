import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyVeterinarianQuotesPage } from './my-veterinarian-quotes.page';

describe('MyVeterinarianQuotesPage', () => {
  let component: MyVeterinarianQuotesPage;
  let fixture: ComponentFixture<MyVeterinarianQuotesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVeterinarianQuotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyVeterinarianQuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
