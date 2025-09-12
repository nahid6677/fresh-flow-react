import React from 'react';
import { Helmet } from 'react-helmet-async';

const FreshHelmet = ({ title, metaName = 'description', metaContent = 'Learn more fresh flow' }) => {
    return (
        <Helmet>
            <title>{title} | Fresh Flow</title>
            <meta name={metaName} content={metaContent} />
        </Helmet>
    );
};

export default FreshHelmet;