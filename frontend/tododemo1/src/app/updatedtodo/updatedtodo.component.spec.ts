
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedtodoComponent } from './updatedtodo.component';

describe('UpdatedtodoComponent', () => {
  let component: UpdatedtodoComponent;
  let fixture: ComponentFixture<UpdatedtodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedtodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
