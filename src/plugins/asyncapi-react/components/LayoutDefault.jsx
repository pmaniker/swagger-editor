import React from 'react';
import PropTypes from 'prop-types';

import UiPane from './UiPane.jsx';

const LayoutDefault = (props) => {
  const { getComponent, asyncapiActions } = props;
  const EditorPane = getComponent('EditorPane', true);
  const Topbar = getComponent('Topbar', true);
  const Container = getComponent('Container'); // accessed from swagger-ui
  const SplitPaneMode = getComponent('SplitPaneMode', true);

  return (
    <div>
      <Topbar />
      <div className="swagger-ide">
        <Container className="container">
          <SplitPaneMode split="vertical">
            <EditorPane />
            <UiPane getComponent={getComponent} asyncapiActions={asyncapiActions} />
          </SplitPaneMode>
        </Container>
      </div>
    </div>
  );
};

LayoutDefault.propTypes = {
  getComponent: PropTypes.func.isRequired,
  asyncapiActions: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // errSelectors: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // errActions: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LayoutDefault;
