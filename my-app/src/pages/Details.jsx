import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Details = () => {

    const params = useParams();
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(-1)}>
            Details {params.name}
        </div>
    );
};

export default Details;