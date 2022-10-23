import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummuryCard from '../../shared/NewSmmuryCard/NewSummuryCard';

const Category = () => {
    const category = useLoaderData()
    return (
        <div>
            <h1>This category has {category.length}</h1>
            {
                category.map(news => <NewSummuryCard news={news} key={news._id}></NewSummuryCard>)
            }
        </div>
    );
};

export default Category;