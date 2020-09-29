import { NgModule } from '@angular/core';
import { DATA_INJECTION_TOKENS } from '../data-injection-tokens';
import { ClientsHttpCrudService } from './clients.http-crud.service';
import { SellersHttpCrudService } from './sellers.http-crud.service';
import { ProductsHttpCrudService } from './products.http-crud.service';
import { SalesHttpCrudService } from './sales.http-crud.service';
import { SharedHttpDataService } from './shared.http-data.service';
import { UsersHttpCrudService } from './users.http-crud.service';
import { StoreCatalogHttpDataService } from './store-catalog.http-data.service';

/**
 * Provides services that read and write data using an external HTTP server (defined in the environment files)
 */
@NgModule({
  providers: [
    { provide: DATA_INJECTION_TOKENS.clients, useClass: ClientsHttpCrudService },
    { provide: DATA_INJECTION_TOKENS.sellers, useClass: SellersHttpCrudService },
    { provide: DATA_INJECTION_TOKENS.products, useClass: ProductsHttpCrudService },
    { provide: DATA_INJECTION_TOKENS.shared, useClass: SharedHttpDataService },
    { provide: DATA_INJECTION_TOKENS.users, useClass: UsersHttpCrudService },
    { provide: DATA_INJECTION_TOKENS.sales, useClass: SalesHttpCrudService },
    { provide: DATA_INJECTION_TOKENS.storeCatalog, useClass: StoreCatalogHttpDataService }
  ]
})
export class HttpDataModule { }
