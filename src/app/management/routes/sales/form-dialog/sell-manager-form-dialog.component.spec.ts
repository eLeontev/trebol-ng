import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { MATERIAL_MODULES } from 'src/app/shared/angular-material.module';
import { SellManagerFormDialogComponent } from './sell-manager-form-dialog.component';
import { SellManagerFormService } from './sell-manager-form.service';

describe('SellManagerFormDialogComponent', () => {
  let component: SellManagerFormDialogComponent;
  let fixture: ComponentFixture<SellManagerFormDialogComponent>;
  let service: Partial<SellManagerFormService>;

  beforeEach(async(() => {
    service = {
      saving$: of(false),
      refreshSellDetailsFromId(i) {},
      getAllSellTypes() { return of([]); },
      getAllEmployees() { return of([]); },
      getAllClients() { return of([]); },
      sellDetails$: of([]),
      sellSubtotalValue$: of(0),
      sellTotalValue$: of(0),
      addProducts(p) {},
      increaseDetailProductQuantityAtIndex(i) {},
      decreaseDetailProductQuantityAtIndex(i) {},
      removeDetailAtIndex(i) {},
      submit(i) { return of(true) }
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ...MATERIAL_MODULES
      ],
      declarations: [ SellManagerFormDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: null },
        { provide: SellManagerFormService, useValue: service }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellManagerFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
