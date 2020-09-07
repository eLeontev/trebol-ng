import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { CompanyDetails } from 'src/data/models/CompanyDetails';
import { EmployeeRole } from 'src/data/models/entities/EmployeeRole';
import { Person } from 'src/data/models/entities/Person';
import { ProductFamily } from 'src/data/models/entities/ProductFamily';
import { ProductType } from 'src/data/models/entities/ProductType';
import { PurchaseOrderType } from 'src/data/models/entities/PurchaseOrderType';
import { SellType } from 'src/data/models/entities/SellType';
import { SharedDataIService } from '../shared.data.iservice';
import { HttpService } from './http.abstract-service';

@Injectable()
export class SharedHttpDataService
  extends HttpService
  implements SharedDataIService {

  protected baseURI: string = this.baseURI + '/gestion';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
  readCompanyDetails(): Observable<CompanyDetails> {
    throw new Error("Method not implemented.");
  }
  readAllSellTypes(): Observable<SellType[]> {
    throw new Error("Method not implemented.");
  }
  readAllPurchaseOrderTypes(): Observable<PurchaseOrderType[]> {
    throw new Error("Method not implemented.");
  }

  public readAllEmployeeRoles(): Observable<EmployeeRole[]> {
    return this.http.get<EmployeeRole[]>(
      this.baseURI + '/cargos'
    ).pipe(
      retry(2)
    );
  }

  public readAllPersonas(): Observable<Person[]> {
    return this.http.get<Person[]>(
      this.baseURI + '/personas'
    ).pipe(
      retry(2)
    );
  }

  public readAllProductFamilies(): Observable<ProductFamily[]> {
    return this.http.get<ProductFamily[]>(
      this.baseURI + '/familias_producto'
    ).pipe(
      retry(2)
    );
  }

  public readAllProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(
      this.baseURI + '/tipos_producto'
    ).pipe(
      retry(2)
    );
  }

  public readAllProductTypesByFamilyId(familyId: number): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(
      this.baseURI + '/tipos_producto',
      this.parametrosHttp({
        familia: String(familyId)
      })
    ).pipe(
      retry(2)
    );
  }
}
