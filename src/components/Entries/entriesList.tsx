import { Column, Grid, Row } from 'carbon-components-react';
import React from 'react';
import { IEntry } from '../../interface/entries';
import EntryItem from './EntryItem/entry';

interface ComponentProps {
  entries: IEntry[];
}

const EntriesList: React.FC<ComponentProps> = ({ entries }) => {
  return (
    <>
      <Grid>
        <Row condensed>
          {entries.map((entry: IEntry, i) => (
            <Column key={i}>
              <EntryItem entry={entry} />
            </Column>
          ))}
        </Row>
      </Grid>
    </>
  );
};

export default EntriesList;
