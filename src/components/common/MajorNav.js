import React, { Fragment } from 'react';
import brandLogo from '../../assets/images/GT_symbol_sml_use_blk_rgb_300.png'
import { Link }  from 'react-router-dom';

// Re-use for individual Post by id
const MajorNav = () => {

    return (
        <Fragment> 
            <nav className="navbar navbar-light bg-light static-top">
                <section className="container">
                    <Link to="/" className="navbar-brand"><img src={brandLogo} width="30" alt="GT Search Logo" /> GroundTruth Search</Link>
                    <Link to="/more-info" className="btn btn-primary">More Info on Groundtruth Search</Link>
                </section>
            </nav>
        </Fragment> 
    );
}

export default MajorNav;
