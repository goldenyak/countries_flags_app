import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import styled from "styled-components";
import axios from "axios";
import {searchByCountry} from "../config";
import {Info} from "../components/Info";

const Button = styled.button`
  border: none;
  background: none;
  font-size: var(--fs-md);
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Details = () => {

    const [country, setCountry] = useState(null);

    console.log(country)

    const {name} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({data}) => {
            setCountry(data[0])
        })
    }, [name])

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBackCircleOutline style={{fontSize: "22px"}}/>
                Назад
            </Button>
            {country && (<Info {...country}/>)}
        </div>
    );
};

export default Details;