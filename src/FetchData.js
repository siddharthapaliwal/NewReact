// src/FetchData.js
import React, { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);  // Empty array means this effect runs once when the component mounts

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Fetched Data:</h2>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;
