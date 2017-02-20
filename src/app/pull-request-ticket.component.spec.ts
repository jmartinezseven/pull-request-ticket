import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PullRequestTicketAppComponent } from '../app/pull-request-ticket.component';

beforeEachProviders(() => [PullRequestTicketAppComponent]);

describe('App: PullRequestTicket', () => {
  it('should create the app',
      inject([PullRequestTicketAppComponent], (app: PullRequestTicketAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pull-request-ticket works!\'',
      inject([PullRequestTicketAppComponent], (app: PullRequestTicketAppComponent) => {
    expect(app.title).toEqual('pull-request-ticket works!');
  }));
});
