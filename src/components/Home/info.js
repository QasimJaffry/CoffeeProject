import React from 'react';

import {Link} from 'gatsby';
import Title from '../globals/title'
export default function info(){
    return(
        <section className="py-5">
            <div className="container">
                <Title title="our story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        Regular Joe's coffee bar is determined to become a daily necessity for local 
                        coffee addicts, a place to dream of as you try to escape the daily stresses of life
                         and just
                         a comfortable place to meet your friends or to read a book, all in one. 
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}