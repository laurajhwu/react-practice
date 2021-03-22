import React from 'react';
import PropTypes from 'prop-types';
import SamplePost from './samplePost'
import PostData from '../data/postData.json'

const MainContent = props =>
    <main>
        <section className="intro">
            <h2 onClick={props.changeMessage}>
                {props.newMessage ? props.newMessage : "Welcome to NightGram!"} </h2>
            <h3>A place to share your night life</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam maiores illum ex veritatis
            labore
            sequi distinctio minus cumque, possimus quos repudiandae adipisci aliquam, voluptatibus vitae dolor,
            itaque
            ipsam nemo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rem unde ut rerum eos,
            ex
        hic in culpa non numquam tempora ullam ducimus quas distinctio at officiis magni. Dolorem, officiis.</p>
        </section>

        <div className="container">
            <h3>The Night is Still Young!</h3>
            <section className="sample">
                {/* only display 4 visible posts */}
                {props.assignId(PostData.slice(0, 4))
                    .map(post =>
                        <SamplePost
                            key={post.id}
                            src={post.image}
                            alt={post.alt}
                            caption={post.caption} />
                    )
                }

            </section>

            <div className="see-more">
                <button className="more-btn">See More</button>
                <div className="style-arrow">></div>
            </div>

            <section className="sample no-display" id="hidden-sample">

                {props.assignId(PostData.slice(4))
                    .map(post =>
                        <SamplePost
                            key={post.id}
                            src={post.image}
                            alt={post.alt}
                            caption={post.caption} />
                    )
                }

            </section>


            <footer className="action">
                <button>Post Now!</button>
            </footer>
        </div>
    </main>

MainContent.propTypes = {
    assignId: PropTypes.func.isRequired,
    changeMessage: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired
}

export default MainContent;