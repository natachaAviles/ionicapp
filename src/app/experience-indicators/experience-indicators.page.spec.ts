import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceIndicatorsPage } from './experience-indicators.page';

describe('ExperienceIndicatorsPage', () => {
  let component: ExperienceIndicatorsPage;
  let fixture: ComponentFixture<ExperienceIndicatorsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExperienceIndicatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
