import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRouteTestingProvider } from '../../test-mockers/ActivatedRouteTestingProvider';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamComponent, HttpClientTestingModule],
      providers: [ActivatedRouteTestingProvider],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
