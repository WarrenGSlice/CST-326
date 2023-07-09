import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

//npm install materialize-css@next

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
  
    useEffect(() => {
      checkLogIn();
    }, []);

    async function checkLogIn() {
        try {
            const accessToken = localStorage.getItem('user');
            if(accessToken){
                // Parsed to Object
                const accessTokenParsed = JSON.parse(accessToken);
                // Check if logged in with x-access-token from JWT in localStorage
                const response = await fetch('/api/test/admin', {
                    headers: {
                        'x-access-token': accessTokenParsed.accessToken
                    }
                })

                if (response.ok) {
                    setIsAdmin(true);
                    console.log('Admin Access Granted');
                  } else if(!response.ok){
                    setIsAdmin(false);
                    console.log('Not an Admin')
                  }
            } else{
                console.log('Access token not found in localStorage')
            }
            } catch (error) {
                console.log('Error: ', error);
            }
        }

    checkLogIn();
    const TITLE = "Admin Dashboard";
    if (isAdmin){
    return (
    <><>
        <Helmet>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" media='screen,projection'/>
            <title>{TITLE}</title>
        </Helmet>
        </> 
        <script type="text/javascript" src="js/materialize.min.js"></script>
        

            <main>
                <div class="row">
                    <div class="col s6">
                        <div style={{padding: '35px'}} align="center" class="card">
                            <div class="row">
                                <div class="left card-title">
                                    <b>Menu Management</b>
                                </div>
                            </div>

                            <div className="row">
                                <a href="/Menu">
                                    <div style={{padding: '30px'}} className="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">assignment</i>
                                        <span class="indigo-text text-lighten-1"><h5>Menu</h5></span>
                                    </div>
                                </a>
                                <div className="col s1">&nbsp;</div>
                                <div className="col s1">&nbsp;</div>

                                <a href="/Admin">
                                    <div style={{padding: '30px'}} className="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">people</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                        
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col s6">
                        <div style={{padding: '35px'}} align="center" class="card">
                            <div class="row">
                                <div class="left card-title">
                                    <b>Product Management</b>
                                </div>
                            </div>
                            <div class="row">
                                <a href="/Admin">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">store</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>

                                <div class="col s1">&nbsp;</div>
                                <div class="col s1">&nbsp;</div>

                                <a href="#!">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">assignment</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col s6">
                        <div style={{padding: '35px'}} align="center" class="card">
                            <div class="row">
                                <div class="left card-title">
                                    <b>Brand Management</b>
                                </div>
                            </div>

                            <div class="row">
                                <a href="/Admin">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">local_offer</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>

                                <div class="col s1">&nbsp;</div>
                                <div class="col s1">&nbsp;</div>

                                <a href="/Admin">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">loyalty</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col s6">
                        <div style={{padding: '35px'}} align="center" class="card">
                            <div class="row">
                                <div class="left card-title">
                                    <b>Category Management</b>
                                </div>
                            </div>
                            <div class="row">
                                <a href="/Admin">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">view_list</i>
                                        <span class="indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>
                                <div class="col s1">&nbsp;</div>
                                <div class="col s1">&nbsp;</div>

                                <a href="/Admin">
                                    <div style={{padding: '30px'}} class="grey lighten-3 col s5 waves-effect">
                                        <i class="indigo-text text-lighten-1 large material-icons">view_list</i>
                                        <span class="truncate indigo-text text-lighten-1"><h5>Coming...</h5></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed-action-btn click-to-toggle" style={{bottom: '45px', right: '24px'}}>
                    <a href="#!" className="btn-floating btn-large pink waves-effect waves-light">
                        <i className="large material-icons">add</i>
                    </a>

                    <ul>
                        <li>
                            <a href="#!" className="btn-floating red"><i className="material-icons">note_add</i></a>
                            <a href="#!" class="btn-floating fab-tip">Add a note</a>
                        </li>

                        <li>
                            <a href="#!" class="btn-floating yellow darken-1"><i class="material-icons">add_a_photo</i></a>
                            <a href="#!" class="btn-floating fab-tip">Add a photo</a>
                        </li>

                        <li>
                            <a href="#!" class="btn-floating green"><i class="material-icons">alarm_add</i></a>
                            <a href="#!" class="btn-floating fab-tip">Add an alarm</a>
                        </li>

                        <li>
                            <a href="#!" class="btn-floating blue"><i class="material-icons">vpn_key</i></a>
                            <a href="#!" class="btn-floating fab-tip">Add a master password</a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
  )} else {
    return (
        <div>
        <h1>Error: You are not authorized to access this page!</h1>
      </div>
    )
}
}

export default Admin
