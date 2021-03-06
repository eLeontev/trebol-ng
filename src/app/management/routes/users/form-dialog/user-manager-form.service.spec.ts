// Copyright (c) 2020 Benjamin La Madrid
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TestBed } from '@angular/core/testing';
import { LocalMemoryDataModule } from 'src/app/data/local-memory/local-memory-data.module';
import { UserManagerFormService } from './user-manager-form.service';

describe('UserManagerFormService', () => {
  let service: UserManagerFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LocalMemoryDataModule ],
      providers: [
        UserManagerFormService
      ]
    });
    service = TestBed.inject(UserManagerFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
