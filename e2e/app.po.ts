export class PullRequestTicketPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pull-request-ticket-app h1')).getText();
  }
}
