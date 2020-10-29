import React, { useEffect, useState } from 'react';
import './Home.css'
import data from '../../data.json'
import Items from '../Items/Items';
import ConnnectedItems from '../ConnnectedItems/ConnnectedItems';
import { Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';

const Home = () => {
    const [items, setItems] = useState([]);
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        setItems(data)
    }, [])

    const handleFavouriteBtn = (Item) => {
        // console.log('clicked', Item)
        const newFavourite = [...favourites, Item];
        setFavourites(newFavourite);
        console.log(favourites);
    }
    return (
        <div className="Home col-md-9">
            <div className=" d-flex justify-content-between p-4 pt-3">
                <div className="pl-4">
                    <h4>Integrations</h4>
                </div>
                <div className="d-flex">
                    <Link to="/favourites"><h5 className="pr-5 text-dark">Favourites</h5></Link>

                    <small className="pr-5 pt-1 ">Category: <span className="category">All</span>
                        <svg width=".75em" height=".75em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </small>
                    <small className="pr-4 pt-1 ">Filter: <span className="filter">All</span>
                        <svg width=".75em" height=".75em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </small>
                </div>
            </div>
            <div className="pl-5 pr-5 pb-4 search">
                <input className="form-control searchInput p-4" placeholder="Search integrations" type="text" />
            </div>
            <div className="p-4">
                <p className="pl-4 item-type-text">Your integrations</p>
                <div className="d-flex justify-content-around">
                    {
                        items.filter(connectedItem => connectedItem.connection === true).map(connectedItem =>
                            <ConnnectedItems
                                handleFavouriteBtn={handleFavouriteBtn}
                                key={connectedItem.id}
                                connectedItem={connectedItem}
                            ></ConnnectedItems>
                        )
                    }
                </div>

            </div>
            <div className="p-4">
                <p className="pl-4 item-type-text">Popular integrations</p>
                <div className="d-flex justify-content-around">
                    {
                        items.filter(notConnectedItem => notConnectedItem.connection === false).map(notConnectedItem =>
                            <Items
                                handleFavouriteBtn={handleFavouriteBtn}
                                notConnectedItem={notConnectedItem}
                                key={notConnectedItem.id}
                            ></Items>
                        )
                    }
                </div>


            </div>
        </div>





    );
};

export default Home;