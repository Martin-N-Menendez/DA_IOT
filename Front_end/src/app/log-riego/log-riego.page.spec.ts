import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogRiegoPage } from './log-riego.page';

describe('LogRiegoPage', () => {
  let component: LogRiegoPage;
  let fixture: ComponentFixture<LogRiegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRiegoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogRiegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
