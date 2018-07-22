import { TestBed, inject } from '@angular/core/testing';

import { ProgressDemoService } from './progress-demo.service';

describe('ProgressDemoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProgressDemoService]
        });
    });

    it('should be created', inject([ProgressDemoService], (service: ProgressDemoService) => {
        expect(service).toBeTruthy();
    }));
});
