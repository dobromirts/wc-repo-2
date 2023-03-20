import { expect } from '@open-wc/testing';
import View3 from './view3.js';

describe('View3', () => {
  it('<app-view3> is an instance of View3', async () => {
    const element = document.createElement('app-view3');
    expect(element).to.be.instanceOf(View3);
  });
});
