import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ALL_COUNTRIES} from "../config";
import {List} from "../components/List";
import {Card} from "../components/Card";
import Controls from "../components/Controls";
import {useNavigate} from "react-router-dom";


const HomePage = ({countries, setCountries}) => {

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries]
        if (region) {
            data = data.filter(element => element.region.includes(region))
        }
        if (search) {
            data = data.filter(element => element.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
        // eslint-disable-next-line
    }, []);

    console.log(countries)
    console.log(filteredCountries)

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.length
                    ?
                    filteredCountries.map(c => {
                        const countyInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [

                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        }
                        return (
                            <Card key={c.name} {...countyInfo} onClick={() => navigate(`/country/${c.name}`)}/>
                        )
                    })
                    :
                    countries.map(c => {
                        const countyInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [

                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        }
                        return (
                            <Card key={c.name} {...countyInfo} onClick={() => navigate(`/country/${c.name}`)}/>
                        )
                    })
                }
            </List>
        </>
    );
};

export default HomePage;