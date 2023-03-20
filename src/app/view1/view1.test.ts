import { expect } from '@open-wc/testing';
import View1 from './view1.js';

describe('View1', () => {
  it('<app-view1> is an instance of View1', async () => {
    const element = document.createElement('app-view1');
    expect(element).to.be.instanceOf(View1);
  });
});
