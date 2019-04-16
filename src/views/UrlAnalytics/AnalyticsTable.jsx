import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Header, Label } from 'semantic-ui-react';

const headerRow = ['IP', 'Operating System', 'Last Access Date'];

const renderBodyRow = ({ ip, os, date }, i) => ({
  key: `row-${i}`,
  cells: [
    ip || "Unknown IP",
    os || "Unknown OS",
    date || "Unknown Date",
  ],
});

const AnalyticsTable = ({ info, headerMessage, onClearUrl }) => (
  <React.Fragment>
    { headerMessage ? <Header className="wrapped-header" content={headerMessage} /> : null }
    <Label
      as="a"
      basic
      content="Fetch data from a different URL"
      onClick={onClearUrl}
    />
    <Table
      celled
      headerRow={headerRow}
      renderBodyRow={renderBodyRow}
      tableData={info}
    />
  </React.Fragment>
);

AnalyticsTable.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerMessage: PropTypes.string,
  onClearUrl: PropTypes.func.isRequired,
};

AnalyticsTable.defaultProps = {
  headerMessage: undefined,
};

export default AnalyticsTable;
