import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6"  >
                    <div className=" mx-auto p-4">
                        <img src="https://img.freepik.com/free-vector/error-404-landing-page-with-file-flat-design_249405-162.jpg?w=2000" style={{ width: "90%" }} alt="" />
                    </div>

                </div>
                <div className="col-md-6 ">
                    <div className='text-center mt-5 p-2'>
                        <h1>Opps! Sorry Page Not Found</h1>
                        <p>
                            The Page you are looking for could not be found. The link to this address maybe outdated or we may have moved the page since you last bookmarked it.<br />It may also be temporary unavailable.
                        </p>
                        <br />
                        <h3 style={{ color: "orange" }}>
                            Error code: 404
                        </h3>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NotFound;