import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleslistComponent } from './articleslist.component';

describe('ArticleslistComponent', () => {
  let component: ArticleslistComponent;
  let fixture: ComponentFixture<ArticleslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
