import { TestBed, inject } from '@angular/core/testing';

import { FileClientService } from './file-client.service';

describe('FileClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileClientService]
    });
  });

  it('should be created', inject([FileClientService], (service: FileClientService) => {
    expect(service).toBeTruthy();
  }));
});
