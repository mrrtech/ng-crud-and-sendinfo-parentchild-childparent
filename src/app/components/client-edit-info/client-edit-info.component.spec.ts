import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditInfoComponent } from './client-edit-info.component';

describe('ClientEditInfoComponent', () => {
  let component: ClientEditInfoComponent;
  let fixture: ComponentFixture<ClientEditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEditInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
