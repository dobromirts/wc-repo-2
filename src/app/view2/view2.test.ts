import { expect } from '@open-wc/testing';
import View2 from './view2.js';

describe('View2', () => {
  it('<app-view2> is an instance of View2', async () => {
    const element = document.createElement('app-view2');
    expect(element).to.be.instanceOf(View2);
  });
});
