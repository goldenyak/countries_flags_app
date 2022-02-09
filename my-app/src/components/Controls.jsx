import React, {useEffect, useState} from 'react';
import Search from "./Search";
import {CustomSelect} from "./CustomSelect";
import styled from "styled-components";

const options = [
    {value: 'Africa', label: 'Африка'},
    {value: 'America', label: 'Америка'},
    {value: 'Asia', label: 'Азия'},
    {value: 'Europe', label: 'Европа'},
    {value: 'Oceania', label: 'Австралия'},
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
        onSearch(search, regionValue)

        // eslint-disable-next-line
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
                          placeholder='Фильтр по континентам'
                          isClearable
                          isSearchable={false}
                          value={region}
                          onChange={setRegion}/>
        </Wrapper>
    );
};

export default Controls;