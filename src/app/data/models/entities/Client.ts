// Copyright (c) 2020 Benjamin
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { AbstractEntity } from '../AbstractEntity';
import { Person } from './Person';

export class Client
  implements AbstractEntity {

  public id: number;
  public person?: Person;
}
