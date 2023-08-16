import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailManagmentPage } from './detail-managment.page';

describe('DetailManagmentPage', () => {
  let component: DetailManagmentPage;
  let fixture: ComponentFixture<DetailManagmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailManagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
