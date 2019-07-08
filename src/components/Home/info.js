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
                            When she opened and heaved and birthed our daughter onto our mattress,
                            I knew we’d never be rid of that bed—the one my dad offered to us,
                            newlywed and broke, because “wouldn’t it be nice to have your old bed?”
                            and my bride blurted out a grateful, “Sure!”
                            But I never told them how another man had cornered a younger me on that bed
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