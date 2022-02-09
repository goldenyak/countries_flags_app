import React, {useEffect, useState} from 'react';
import Search from "./Search";
import {CustomSelect} from "./CustomSelect";
import styled from "styled-components";

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search)
        // eslint-disable-next-line
    }, [search, region])

    return (
        <Wrapper>
            <Search onChange={onSearch} search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder='Filter by Region'
                          isClearable
                          isSearchable={false}
                          value={region}
                          onChange={setRegion}/>
        </Wrapper>
    );
};

export default Controls;