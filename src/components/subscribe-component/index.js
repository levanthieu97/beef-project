import React from 'react';

const SubscribeComponent = (props) => {
    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe__content">
                    <h4>Subscribe to our newsletter and receive exclusive offers every week</h4>
                    <form className="subscribe__form">
                        <input type="email" placeholder="Email address" />
                        <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default React.memo(SubscribeComponent);