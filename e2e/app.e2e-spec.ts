import { Plasticmonkey2Page } from './app.po';

describe('plasticmonkey2 App', function() {
  let page: Plasticmonkey2Page;

  beforeEach(() => {
    page = new Plasticmonkey2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
