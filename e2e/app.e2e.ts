import { PullRequestTicketPage } from './app.po';

describe('pull-request-ticket App', function() {
  let page: PullRequestTicketPage;

  beforeEach(() => {
    page = new PullRequestTicketPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pull-request-ticket works!');
  });
});
