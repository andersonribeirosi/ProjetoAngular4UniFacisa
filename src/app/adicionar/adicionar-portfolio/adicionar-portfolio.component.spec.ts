import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarPortfolioComponent } from './adicionar-portfolio.component';

describe('AdicionarPortfolioComponent', () => {
  let component: AdicionarPortfolioComponent;
  let fixture: ComponentFixture<AdicionarPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
