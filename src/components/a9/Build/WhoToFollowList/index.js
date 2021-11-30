import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {findAllWho} from "../../services/who-service";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    const dispatch = useDispatch();
    useEffect(() => findAllWho(dispatch), [dispatch])
    return (
        <ul className="list-group">
            <li className="list-group-item fw-bold">
                Who to follow
            </li>
                {who.map(who => {
                return(
                    <WhoToFollowListItem who = {who}/>
                );
            })
        }
        </ul>

    );
}

export default WhoToFollowList;