import React from 'react'

const Loading = () => {
    return (
        <section id="blog" className="blog-mf sect-pt4 route">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <div className="spinner-border text-info mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loading