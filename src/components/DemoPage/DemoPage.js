import styled from 'styled-components';
import { Link } from 'react-router-dom';
import dashboard from './images/dashboard.jpg';
import find_friends from './images/find_friends.jpg';
import games from './images/games.jpg';
import groups from './images/groups.jpg';
import homepage from './images/homepage.jpg';
import login from './images/login.jpg';
import profile from './images/profile.jpg';
import register from './images/register.jpg';



const DemoPage = () => {
    return (
        <div>
            <StyledMain>
                <div className="demoHeading">
                    <div className="demoDescription">
                        <h1>Welcome to the Gaming Social Network!</h1>
                        <h2>Connect Hard, Win Harder</h2>
                    </div>
                </div>





                <div className="demoSectionContainer">

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={homepage} alt='Homepage' />
                        </div>
                        <div className="demoDescription">
                            <div className="descElements">                         
                            <h2>Landing Page</h2>
                            <p>Welcome to Gaming Social Network!
                            Click the "Demo" Button to see how it works!
                            Click "Sign Up" to create an account,
                            or if you already have an account,
                            click "Login" to sign in!</p>
                            </div>                           
                        </div>
                    </div>

                    <div className="demoSection">
                            <div className="demoImage">
                                <img src={register} alt='SignupForm' />
                            </div>
                        <div className="demoDescription">
                            <div className="descElements">
                            <h2>Signup</h2>
                            <p>
                                Upon reaching the home page, you will be prompted
                                to log in or to create an account. Here, you will input
                                all the required fields and, on submission, be
                                redirected to your dashboard!
                            </p>
                            </div>
                        </div>
                    </div>



                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={login} alt='Login' />
                        </div>
                        <div className="demoDescription">
                            <div className="descElements">
                            <h2>Login</h2>
                            <p>
                                If you already have an account, simply enter your email
                                and password to be redirected to your dashboard upon
                                submission!
                            </p>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={profile} alt='Profile' />
                        </div>
                        <div className="demoDescription">
                        <div className="descElements">
                            <h2>Dashboard</h2>
                            <p>Once you have reached your dashboard, you can...
                               Edit your profile! (i.e. - avatar, about, banner, 
                               friends list, preferred hardware, etc.)</p>
                        </div>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={games} alt='Games' />
                        </div>
                        <div className="demoDescription">
                        <div className="descElements">
                            <h2>Games</h2>
                            <p>Search for any games and heart your favorite games. 
                                Create and add to a list of your favorite games!</p>
                        </div>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={groups} alt='Groups' />
                        </div>
                        <div className="demoDescription">
                        <div className="descElements">
                            <h2>Groups</h2>
                            <p>Find and connect with game groups!</p>
                        </div>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={find_friends} alt='Find Friends' />
                        </div>
                        <div className="demoDescription">
                        <div className="descElements">
                            <h2>Friends</h2>
                            <p>Add other gamers as friends!</p>
                        </div>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={dashboard} alt='Dashboard' />
                        </div>
                        <div className="demoDescription">
                        <div className="descElements">
                            <h2>Dashboard</h2>
                            <p>Share your accomplishments with others!</p>
                            <p>Create, share and read posts to the community!</p>
                        </div>
                        </div>
                    </div>

                    <div className="letsGo">
                        <p>Ready to get your game on?</p><Link to="/"><button>Let's Go!</button></Link>
                    </div>
                </div>

            </StyledMain>
        </div >

    );
};


const StyledMain = styled.main`
    

    .main {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

    }

    .demoHeading {
        background-color: aliceblue;
        font-size: small;
        text-align: center;
    }

    .demoSectionContainer {
        margin: 1rem .5rem 0 .5rem;
        background-color: aliceblue;
        padding: 1rem;
        margin-bottom: 2rem;

    }

    .demoSection {
        background-color: aliceblue;
        display: flex;
        margin-bottom: 2rem;
        justify-content: space-evenly;

    }

    .demoImage {
        display: flex;
        flex-direction: row;
        margin-left: 3rem;

    }

    .demoDescription {
        margin: 0;
        font-size: small;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        -webkit-box-align: center;
    }

    .descElements {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 45%;

        h2, p {
            width: -webkit-fill-available;
        }

        p {
            font-size: medium;
        }
    }
   
   .letsGo {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       p {
           margin-top: 2rem;
           font-size: 32px;
           font-weight: bold;
       }

       button {
           margin-top: 1.5rem;
           color: white;
           background-color: #9d4ada;
           font-size: x-large;
           font-weight: bold;
       }
   }

    @media all and (max-width:767px) {

    .main {
        width: 100%;
    }

    .demoHeading {
        width: 100%;
        margin: 2rem .5rem;
        display: flex;
    }

    .demoSectionContainer {
        width: fit-content;
        display: flex;
        flex-direction: column;
        margin: 0 -1rem;
    }
    
    .demoSection {
        flex-direction: column;
        margin-top: 1rem;
        margin-bottom: 5rem;
    }

    .demoDescription {
        margin-top: 2rem;
        align-items: center;
    }

    .demoImage {
        display: contents;
        margin-bottom: 2rem;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .letsGo p {
        text-align: center;
    }

   }
    
   
`;

export default DemoPage;