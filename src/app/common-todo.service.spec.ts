import { TestBed } from '@angular/core/testing';

import { CommonTodoService } from './common-todo.service';

describe('CommonTodoService', () => {
  let service: CommonTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
