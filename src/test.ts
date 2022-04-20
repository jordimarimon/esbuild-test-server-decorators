import { expect, fixture, html } from '@open-wc/testing';

import type { Bar } from './bar';
import './bar';


describe('<wc-bar>', () => {
    let el: Bar;
    let prototypeDescriptors: {[key: string]: unknown};
    let instanceDescriptors: {[key: string]: unknown};

    beforeEach(async () => {
        el = await fixture<Bar>(html`<wc-bar></wc-bar>`);

        instanceDescriptors = Object.getOwnPropertyDescriptors(el);
        prototypeDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(el));
    });

    it('should have the prototype field "foo"', () => {
        expect(prototypeDescriptors).to.have.property('foo');
    });

    it('should have the instance field "__foo"', () => {
        expect(instanceDescriptors).to.have.property('__foo');
    });

    it('should NOT have the instance field "foo"', () => {
        expect(instanceDescriptors).to.not.have.property('foo');
    });

});
