import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Header } from 'semantic-ui-react';

const headerRow = ['IP', 'Operating System', 'Last Access Date'];

const footerRow = () => (
  <Table.Row>
    <Table.HeaderCell colSpan="3">
      <Button
        primary
        floated="right"
        content="Back"
        size="small"
      />
    </Table.HeaderCell>
  </Table.Row>
);

const renderBodyRow = ({ ip, os, date }, i) => ({
  key: `row-${i}`,
  cells: [
    ip || "Unknown IP",
    os || "Unknown OS",
    date || "Unknown Date",
  ],
});

const AnalyticsTable = ({ info, headerMessage }) => (
  <React.Fragment>
    { headerMessage ? <Header className="wrapped-header" content={headerMessage} /> : null }
    <Table
      celled
      headerRow={headerRow}
      footerRow={footerRow}
      renderBodyRow={renderBodyRow}
      tableData={info}
    />
  </React.Fragment>
);

export default AnalyticsTable;
