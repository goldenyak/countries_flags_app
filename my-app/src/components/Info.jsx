import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  gap: 50px;
`;

const InfoImage = styled.img`
  width: 50%;
`;

const InfoTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

const ListGroup = styled.div`
  margin-top: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 5px;

  b {
    font-weight: bold;
  }
`;

const Meta = styled.div`
  margin-top: 20px;

  b {
    font-weight: bold;
  }
`;

const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.5rem 0.5rem;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  border: 1px solid black;
  cursor: pointer;
`;


export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
    } = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>{name}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Название:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Население:</b> {population} чел.
                        </ListItem>
                        <ListItem>
                            <b>Континент:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Регион:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Столица:</b> {capital}
                        </ListItem>
                    </List>
                    <ListGroup>
                        <ListItem>
                            <b>Доменная зона:</b> {topLevelDomain.map(d => (<span key={d}>{d}</span>))}
                        </ListItem>
                        <ListItem>
                            <b>Валюта:</b> {currencies.map(c => (<span key={c.code}>{c.name}, </span>))}
                        </ListItem>
                        <ListItem>
                            <b>Язык:</b> {languages.map(l => (<span key={l.name}>{l.name}, </span>))}
                        </ListItem>
                    </ListGroup>
                </ListGroup>
                <Meta>
                    <b>Соседние страны:</b>
                    {!borders.length
                        ?
                        (<span>Соседних стран не существует.</span>)
                        :
                        (<TagsGroup>
                            {borders.map(b => (<Tag key={b}>{b}</Tag>))}
                        </TagsGroup>)}
                </Meta>
            </div>
        </Wrapper>
    )
}