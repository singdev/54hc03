import React, { useState } from 'react';
import Comment from './Comment';

function App() {

    const [value, setValue] = useState('');
    const [comments, setComments] = useState([]);

    const handleChange = e => {
        setValue(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();
        const previousComments = [...comments];
        previousComments.push({user: 'Dynamo', question: value});
        setComments(previousComments);
        setValue('');
    }


    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" value={value} onChange={handleChange} type="text" placeholder="Posez votre question ?" />
                    </div>
                    <div className="control">
                        <button className="button is-info" type="submit">
                            Soumettre
                        </button>
                    </div>
                </div>
            </form>

            <div className="media mt-5"> 
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong>Barbara Middleton</strong>
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                        <br/>
                        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                    </p>

                    <article className="media">
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>Sean Brown</strong>
                                    <br/>
                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                    <br/>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                            </div>
                        </div>
                    </article>
                    
                    </div>
                    {comments.map(comment => <Comment content={comment.question} />)}
                </div>
            </div>
        </div>
    );
}

export default App;