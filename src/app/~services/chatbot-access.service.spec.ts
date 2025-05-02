import { TestBed } from '@angular/core/testing';

import { ChatbotAccessService } from './chatbot-access.service';

describe('ChatbotAccessService', () => {
  let service: ChatbotAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbotAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
