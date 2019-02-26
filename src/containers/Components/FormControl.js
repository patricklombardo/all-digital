import React from 'react';
import { PageSection, FormControl } from 'adc-ui-components';

const FormControls = () => (
  <PageSection>
    <h1>Form Controls</h1>
    <hr />

    <h2>Default Form Controls</h2>
    <FormControl label="Form Control Text" inputId="text">
      <input type="text" id="text" placeholder="placeholder" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl label="Form Control Select" inputId="select">
      <select name="select" id="select">
        <option>Text</option>
      </select>
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl label="Form Control Textarea" inputId="textarea">
      <textarea id="textarea" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl label="Form Control Number" inputId="number">
      <input type="number" id="number" placeholder="placeholder" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl label="Form Control Search" inputId="search">
      <input type="search" id="search" placeholder="placeholder" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl className="form-control--inline" label="Form Control Inline Textbox" inputId="inlineText">
      <input type="text" id="inlineText" placeholder="placeholder" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl className="form-control--inline" label="Form Control Inline Textarea" inputId="inlineTextarea">
      <textarea id="inlineTextarea" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl className="form-control--inline-at-768" label="Form Control Inline at 768 Textbox" inputId="inlineText768">
      <input type="text" id="inlineText768" placeholder="placeholder" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>

    <FormControl className="form-control--inline-at-768" label="Form Control Inline at 768 Textarea" inputId="inlineTextarea768">
      <textarea id="inlineTextarea768" />
      <span className="form-control__error">This is a really long error. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </FormControl>
  </PageSection>
);

export default FormControls;