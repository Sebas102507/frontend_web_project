import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnHistoryBoxViewComponent } from './return-history-box-view.component';

describe('ReturnHistoryBoxViewComponent', () => {
  let component: ReturnHistoryBoxViewComponent;
  let fixture: ComponentFixture<ReturnHistoryBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnHistoryBoxViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnHistoryBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
