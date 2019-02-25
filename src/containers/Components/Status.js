import React from 'react';
import { PageSection } from 'adc-ui-components';

const Card = () => (
  <PageSection>
    <h1>Status</h1>
    <hr />

    <span className="status">Default Status</span>
    <br />
    <span className="status status--success">Sucess Status</span>
    <br />
    <span className="status status--warning">Warning Status</span>
    <br />
    <span className="status status--danger">Danger Status</span>
    <br />
    <span className="status status--none">No Status</span>
  </PageSection>
);

export default Card;
