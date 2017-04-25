import { CodeEuropeCracowPage } from './app.po';

describe('code-europe-cracow App', () => {
  let page: CodeEuropeCracowPage;

  beforeEach(() => {
    page = new CodeEuropeCracowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
