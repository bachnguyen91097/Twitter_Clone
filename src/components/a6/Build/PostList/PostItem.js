import React from "react";

const PostItem = ({post}) => {
    if (post.postheadline) {
        return (
            <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                      <img src={post.image} className = "rounded-circle"
                        width="50"
                        height="50"
                      />
                </div>
                <div className="col-11 ps-4">
                      <span className = "fw-bold float-start">
                        {post.username}
                      </span>
                      <span className="ps-2">
                        <i className="fas fa-check-circle fa-inverse"></i>
                      </span>
                      <span className="wd-under-text-color ps-1">
                        @{post.handle}  {'\u00B7'} {post.time}
                      </span>
                      <span className="float-end">
                        <i className="fas fa-ellipsis-h fa-inverse"></i>
                      </span>
                      <div>
                        <div dangerouslySetInnerHTML={{__html:post.caption}} />
                      </div>

                      <div className="mt-2 wd-tweet-and-image">
                        <div className="wd-thumbnail">
                            <img className = "wd-tweet-pic" src={post.postimage}
                           />
                        </div>
                        <div className="pt-2 ps-3 pe-3">
                            {post.postheadline}
                        </div>
                        <div className="wd-under-text-color ps-3 pe-3 ">
                            {post.postcontent}
                        </div>
                        <div className = "wd-under-text-color pb-2 ps-3 pe-3">
                            <i className="fas fa-link"></i> {post.postlink}
                        </div>
                      </div>
                      <div className="row mt-3 mb-2">
                        <div className="col-3 wd-under-text-color">
                            <i className = "far fa-comment me-2"></i> {post.numcomments}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = " fas fa-retweet me-2"></i> {post.numretweets}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = "far fa-heart me-2"></i> {post.numlikes}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = "fas fa-upload"></i>
                        </div>
                      </div>
                   
                </div>
            </div>
        </li>
            </>
    );
    }
    else {
        return (
            <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                      <img src={post.image} className = "rounded-circle"
                        width="50"
                        height="50"
                      />
                </div>
                <div className="col-11 ps-4">
                      <span className = "fw-bold float-start">
                        {post.username}
                      </span>
                      <span className="ps-2">
                        <i className="fas fa-check-circle fa-inverse"></i>
                      </span>
                      <span className="wd-under-text-color ps-1">
                        @{post.handle} {'\u00B7'} {post.time}
                      </span>
                      <span className="float-end">
                        <i className="fas fa-ellipsis-h fa-inverse"></i>
                      </span>
                      <div>
                          <div dangerouslySetInnerHTML={{__html:post.caption}} />
                      </div>
                    
                      <div className="mt-2 wd-tweet-and-image">
                        <div className="wd-thumbnail">
                            <img className = "wd-tweet-pic-only" src={post.postimage}
                           />
                        </div>
                      </div>
                      <div className="row mt-3 mb-2">
                        <div className="col-3 wd-under-text-color">
                            <i className = "far fa-comment me-2"></i> {post.numcomments}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = " fas fa-retweet me-2"></i> {post.numretweets}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = "far fa-heart me-2"></i> {post.numlikes}
                        </div>
                        <div className="col-3 wd-under-text-color">
                            <i className = "fas fa-upload"></i>
                        </div>
                      </div>
                   
                </div>
            </div>
        </li>
            </>
    );
    }
}

export default PostItem;