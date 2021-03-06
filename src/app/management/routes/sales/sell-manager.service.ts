// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Inject, Injectable } from '@angular/core';
import { Sell } from 'src/app/data/models/entities/Sell';
import { SellDetail } from 'src/app/data/models/entities/SellDetail';
import { CompositeEntityCrudIService } from 'src/app/data/composite-entity.crud.iservice';
import { DATA_INJECTION_TOKENS } from 'src/app/data/data-injection-tokens';
import { DataManagerService } from '../data-manager.aservice';

@Injectable()
export class SellManagerService
  extends DataManagerService<Sell> {

  constructor(
    @Inject(DATA_INJECTION_TOKENS.salesCrud) protected dataService: CompositeEntityCrudIService<Sell, SellDetail>
  ) {
    super();
  }
}
