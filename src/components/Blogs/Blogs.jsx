import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='flex flex-col items-center w-full p-3 lg:p-8 gap-3'>
        <h1 className='text-2xl text-sky-600'>Question & Answer</h1>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Ans: Access Token and Refresh Token: Tokens used for authentication and authorization. Access token grants short-term access, refresh token enables long-term access. Store securely on the client-side using methods like HTTP-only cookies or secure local storage.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>Ans: SQL vs. NoSQL: SQL databases have fixed schemas, use structured queries, and are ideal for complex relationships. NoSQL databases provide flexibility, scalability, and schema-less data storage.</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Ans: Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. And Nest is a progressive framework for building server-side applications and APIs with Node.js.
</p>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>Ans: MongoDB Aggregate: A pipeline-based framework for advanced querying and data manipulation in MongoDB, allowing for complex data processing and analysis.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;