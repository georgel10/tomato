import React from 'react';
import { Calendar20 } from '@carbon/icons-react';
import { IEntry } from '../../../interface/entries';

interface ComponentProps {
  entry: IEntry;
}

const EntryItem: React.FC<ComponentProps> = ({ entry }) => {
  return (
    <>
      <div className="entry__item">
        <div className="entry__item__image">
          <img src={entry.images['Poster Art'].url} alt={entry.title} />
        </div>
        <div className="entry__item__content">
          <h3 className="entry__item__title">{entry.title}</h3>
          <p className="entry__item__year">
            <Calendar20 />
            {entry.releaseYear}
          </p>
          <p className="entry__item__description">{entry.description}</p>
        </div>
      </div>
    </>
  );
};

export default EntryItem;
