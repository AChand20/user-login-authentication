import { MatauthPage } from './app.po';

describe('matauth App', () => {
  let page: MatauthPage;

  beforeEach(() => {
    page = new MatauthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
