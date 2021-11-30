const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../../../a5/twitter/explore/images/reactjs.png"

                             }
}) => {
    return(
        <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-md-10">
                    <div className="wd-under-text-color">{post.topic}</div>
                    <div>
                        <span className="fw-bold">
                            {post.userName}
                        </span>
                        <span>
                          <i className="fas fa-check-circle fa-inverse ps-2 pe-2"></i>
                        </span>
                        <span className="wd-under-text-color">
                          - {post.time}
                        </span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                </div>
                <div className="col-3 col-md-2">
                    <img src={post.image}
                         width="85"
                         height="85"
                         className="float-end"
                         style={{"border-radius": "10px"}}/>
                </div>
            </div>
        </li>
        </>
    );
}

export default PostSummaryItem;