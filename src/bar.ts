import { customElement, property } from 'lit/decorators.js';
import { html, HTMLTemplateResult, LitElement } from 'lit';


@customElement('wc-bar')
export class Bar extends LitElement {

    @property() foo = 'Hello';

    constructor() {
        super();

        console.log('INSTANCE PROPERTY DESCRIPTORS: ', Object.getOwnPropertyDescriptors(this));
        console.log('PROTOTYPE PROPERTY DESCRIPTORS: ', Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this)));
    }

    protected override render(): HTMLTemplateResult {
        // We're triggering the "getter" of the prototype field "foo" which should add the instance property "__foo"
        // See: https://github.com/lit/lit/blob/main/packages/reactive-element/src/reactive-element.ts#L648
        // See: https://github.com/lit/lit/blob/3fec73e669bc01660747668e2f173508e2a2a006/packages/reactive-element/src/reactive-element.ts#L707

        return html`<h1>${this.foo}</h1>`;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'wc-bar': Bar;
    }
}
