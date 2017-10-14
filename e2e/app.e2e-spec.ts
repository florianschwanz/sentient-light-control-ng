import {Sentient Light ConsolePage} from './app.po';

describe('sentient-light-console-ng App', function () {
  let page: Sentient Light ConsolePage;

  beforeEach(() => {
    page = new Sentient Light ConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
