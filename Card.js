import { html } from "lit-html";
import { LitElement, css } from "lit-element";

class Card extends LitElement {
    static get properties() {
        return {
            header: {
                type: String,
            },
        };
    }

    static get styles() {
        return css`
      :host {
        display: block;
        margin: 20px;
        position: relative;
        width: 250px;
        height: 100px;
        width: 250px;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
        padding: 10px;
        border-radius: 10px;
        background: #ededed;
      }

      h2 {
        padding: 10px;
        text-transform: uppercase;
        margin: -10px;
        color: black;
        font-weight: bold;
        font-size: 13px;
        text-align: center;
      }
    `;
    }

    render() {
        return html`
      <h2>
        ${this.header}
      </h2>
      <div>
        <slot></slot>
      </div>
    `;
    }
}
customElements.define("my-card", Card);
