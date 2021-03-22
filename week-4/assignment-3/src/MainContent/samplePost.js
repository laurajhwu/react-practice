import React from 'react';
import PropTypes from 'prop-types';

const samplePost = props =>

    <figure className="post">
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.caption}</figcaption>
    </figure>

samplePost.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}

export default samplePost;