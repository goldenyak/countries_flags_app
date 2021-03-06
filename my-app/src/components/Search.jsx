import React from 'react';
import styled from "styled-components";
import {IoSearchOutline} from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  border: none;
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
    type: "search",
    placeholder: "Найти страну..."
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({search, setSearch}) => {

    return (
        <InputContainer>
            <IoSearchOutline/>
            <Input onChange={(e) => setSearch(e.target.value)} value={search}/>

        </InputContainer>
    );
};

export default Search;