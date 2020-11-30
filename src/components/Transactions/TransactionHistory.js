import React from 'react';
import propTypes from 'prop-types';
import {
  Section,
  Table,
  Thead,
  Trow,
  TrowList,
  Cell,
} from './Transaction-styled.js';

export default function TransactionHistory({ items }) {
  return (
    <Section>
      <Table>
        <Thead>
          <Trow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Trow>
        </Thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TrowList key={id}>
              <Cell>{type}</Cell>
              <Cell>{amount}</Cell>
              <Cell>{currency}</Cell>
            </TrowList>
          ))}
        </tbody>
      </Table>
    </Section>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};
