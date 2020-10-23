import React from 'react';

function Comment({content}) {
    return (
        <div className="media">
            <div className="media-content">
                <p>
                    <strong>Dynamo Poupre</strong>
                    <br/>
                    {content}
                    <br/>
                    <small><a>Like</a> · <a>Reply</a> · a l'instant</small>
                </p>
            </div>
        </div>
    );
}

export default Comment;