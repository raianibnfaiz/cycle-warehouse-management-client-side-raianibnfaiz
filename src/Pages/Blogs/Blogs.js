import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className="blogs w-75 mx-auto mt-3">


            <div className='  mb-5'>
                <div className=" first-question  p-20 ">
                    <h2 className='text-center'>What is the difference between JavaScript and Node.js?</h2>
                    <p className='text-justify mt-5'><span className="text-primary">Answer:</span>JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.
                        JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. </p>
                </div>
                <div className=" second-question p-20 mb-4">
                    <h2 className='text-center'>What is the differences between sql and nosql databases?</h2>
                    <p className='text-justify mt-5'><span className="text-primary">Answer:</span>SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>

                </div>
                <div className=" third-question p-20 mb-4">
                    <h2 className='text-center'>What is the purpose of jwt and how does it work?</h2>
                    <p className='text-justify mt-5'><span className="text-primary">Answer:</span>JSON Web Token-JWT, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. </p>

                </div>

            </div>

        </div>
    );
};

export default Blogs;