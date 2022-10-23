import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://dragon-server-nahid-07.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>
                All categories {categories.length}
            </h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Leftside;