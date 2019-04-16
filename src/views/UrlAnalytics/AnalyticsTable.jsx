import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const headerRow = ['IP', 'Operating System', 'Last Access Date'];

const renderBodyRow = ({ ip, os, date }, i) => ({
  key: `row-${i}`,
  cells: [
    ip || "Unknown IP",
    os || "Unknown OS",
    date || "Unknown Date",
  ],
});

const AnalyticsTable = ({ info }) => (
  <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={info} />
);

export default AnalyticsTable;
