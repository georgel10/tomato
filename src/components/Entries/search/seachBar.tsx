import React from 'react';
import { TextInput } from 'carbon-components-react';

interface ComponentProps {
  changeSearch: (value: string) => void;
}

const SearchBar: React.FC<ComponentProps> = ({ changeSearch }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeSearch(e.target.value);

  return (
    <div className="search__bar">
      <div className="search__textinput">
        <TextInput
          onChange={onChange}
          labelText=""
          id="name"
          placeholder="Name"
        />
      </div>
    </div>
  );
};

export default SearchBar;
