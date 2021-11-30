import React, {useState} from "react";
import {useDispatch} from "react-redux";
import twitterService from "../../services/twitterService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        twitterService.createTweet(dispatch, {
            "topic": "Web Development",
            "userName": "Chipmunk",
            "verified": false,
            "handle": "just_a_chip_munk",
            "time": "2h",
            tweet: whatsHappening,
            "avatar-image": "../../../images2/chipmunk.jpeg",
            "logo-image": "../../../images2/chipmunk.jpeg",
            "liked": false,
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
        })
    }
    return (
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'../../images2/chipmunk.jpeg'}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-chart-bar me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;