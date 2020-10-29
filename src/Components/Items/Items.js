import React from 'react';
import './Items.css'

const Items = (props) => {
    const { name, status, about, image } = props.notConnectedItem;
    return (
        <div className="item-div p-3 d-flex flex-column justify-content-between bg-white">
            <div className="d-flex justify-content-center">
                <img src={image} alt="" />
            </div>
            <h6 className="text-dark">{name}</h6>
            <p className="about">{about}</p>
            <div className="d-flex justify-content-between">
                <p className="font-weight-bold " style={{ color: "#1594EB" }}>{status}</p>
                <div className="d-flex">
                    <div onClick={() => props.handleFavouriteBtn(props.notConnectedItem)} className="p-1">
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Items;