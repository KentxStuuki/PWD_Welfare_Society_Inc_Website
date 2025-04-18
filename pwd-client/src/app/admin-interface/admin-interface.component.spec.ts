import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterfaceComponent } from './admin-interface.component';

describe('AdminInterfaceComponent', () => {
  let component: AdminInterfaceComponent;
  let fixture: ComponentFixture<AdminInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
