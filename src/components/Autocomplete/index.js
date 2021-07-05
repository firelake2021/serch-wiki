import React, {useState, useEffect} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import axios  from 'axios';
import {useSearch, useDebounce, useSearchForm} from "../../hooks"
import Input from '../../components/input';

function Autocomplete() {
  // const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const {searchValue, onSearchChange} =useSearchForm();
  const {  articles } = useSearch(useDebounce(searchValue));

  return (
    <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{placeholder: 'Input search terms:'}}
        // shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderMenu={(children, value, style) => {
          return articles && articles.length ?
              (<div style={{...style}} className="input-suggestions">
                      {children}
                      <a href={`/search?query=${value}`} className="search-link">
                          See all results
                      </a>
                  </div>
              ) : <></>;
        }}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={searchValue}
        onChange={onSearchChange}
        // onSelect={value => setValue( value )}
    />
  )
}

export default Autocomplete;
