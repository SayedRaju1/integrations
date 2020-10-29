import React from 'react';
import './SideNav.css'

const SideNav = () => {
    return (
        <div className="SideNav col-md-2 mr-5">

            <div className="side-nav-item d-flex">

                <div className="label">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="icon" class="bi bi-person-plus-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                </div>
                <div className="label">
                    <h6>Account</h6>
                    <small>your account preferences</small>
                </div>
            </div>
            <div className="side-nav-item d-flex">

                <div className="label">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="icon" class="bi bi-bell-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                    </svg>
                </div>
                <div className="label">
                    <h6>Notifications</h6>
                    <small>your notification preferences</small>
                </div>
            </div>
            <div className="side-nav-item d-flex integration">

                <div className="label">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="icon" class="bi bi-plus-square-fill" fill="#1594EB" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                </div>
                <div className="label">
                    <h6 className="integration-label">Integrations</h6>
                    <small>add or remove integration</small>

                </div>
            </div>
            <div className="side-nav-item d-flex">

                <div className="label">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="icon" class="bi bi-people-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                    </svg>
                </div>
                <div className="label">
                    <h6>Calleagues</h6>
                    <small>your calleagues preferences</small>
                </div>
            </div>
            <div className="side-nav-item d-flex">

                <div className="label">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="icon" class="bi bi-tag-fill" fill="#999999" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </div>
                <div className="label">
                    <h6>Tags</h6>
                    <small>add or remove tag</small>
                </div>
            </div>

        </div>
    );
};

export default SideNav;