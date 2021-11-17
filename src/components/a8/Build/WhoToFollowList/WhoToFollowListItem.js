const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',

                                 }
}) => {
    return(
        <>
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={who.avatarIcon} width="50" className="rounded-circle float-start"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}
                        <span>
                            <i className="fas fa-check-circle fa-inverse ps-2"></i>
                        </span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
        </>
    );
}

export default WhoToFollowListItem;