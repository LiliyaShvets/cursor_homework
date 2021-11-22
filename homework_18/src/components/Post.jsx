import React from "react";
import './Post.css';

const Post = (props) => {

    return (
        <div className="PostItem">
            <div className="PostTitle">
                <img src={props.photo} alt={props.name} className="PostPhoto"/>
                <div className="PostName">
                    <p>{props.name}</p>
                    <p>{props.nickname}</p>
                </div>
            </div>
            <div className="PostContent">
                <p className="PostSubtitle">
                    <span>{props.content}</span>
                    <span>{props.date}</span>
                </p>
                <img src={props.image} className="PostImage" />
            </div>
        </div>
    );
};

export default Post;