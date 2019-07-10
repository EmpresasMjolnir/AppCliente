import { TestBed } from '@angular/core/testing';

import { Dados2Service } from './dados2.service';

describe('Dados2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dados2Service = TestBed.get(Dados2Service);
    expect(service).toBeTruthy();
  });
});
