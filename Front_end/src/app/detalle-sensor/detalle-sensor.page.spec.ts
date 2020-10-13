import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleSensorPage } from './detalle-sensor.page';

describe('DetalleSensorPage', () => {
  let component: DetalleSensorPage;
  let fixture: ComponentFixture<DetalleSensorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSensorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
