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
                    <h1>Welcome to the Gaming Social Network!</h1>
                    <br />
                    <h2>Connect Hard, Win Harder</h2>
                    <img src={homepage} />

                </div>



                <div className="demoSectionContainer">

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={register} />
                        </div>

                        <div className="demoDescription">
                            <h2>Signup</h2>
                            <p>
                                Upon reaching the home page, you will be prompted
                                to log in or to create an account. Here, you will input
                                all the required fields and, on submission, be
                                redirected to your dashboard!

                            </p>
                        </div>
                    </div>



                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={login} />
                        </div>
                        <div className="demoDescription">
                            <h2>Login</h2>
                            <p>
                                If you already have an account, simply enter your email
                                and password to be redirected to your dashboard upon
                                submission!
                            </p>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={profile} />
                        </div>
                        <div className="demoDescription">

                            <h2>Dashboard</h2>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={profile} />
                        </div>
                        <div className="demoDescription">
                            <h3>Once you have reached your dashboard, you can...</h3>

                            <p>Edit your profile! (i.e. - avatar, about, banner, etc.)</p>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={games} />
                        </div>
                        <div className="demoDescription">
                            <p>Create and add to a list of your favorite games!</p>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                            <img src={groups} />
                        </div>
                        <div className="demoDescription">
                        <p>Find and connect with game groups!</p>
                        </div>
                    </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                        <img src={find_friends} />
                        </div>
                        <div className="demoDescription">
                            <p>Add other gamers as friends!</p>
                        </div>
                        </div>

                    <br />

                    <div className="demoSection">
                        <div className="demoImage">
                        <img src={dashboard} />
                        </div>
                        <div className="demoDescription">
                    <p>Share your accomplishments with others!</p>
                    <p>Create, share and read posts to the community!</p>
                    </div>
                    </div>

                    <div>
                        <Link to="/"><button>Let's Go!</button></Link>
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
        background - color: aliceblue;
        font-size: small;
        text-align: center;
    }

    .demoSectionContainer {
        margin: 1rem .5rem 0 .5rem;
        background-color: aliceblue;
        padding: 1rem;
        margin-bottom: 2rem;

    .demoSection {

    }

    .demoImage {

    }

    .demoDescription {

    }


    }
   
    
   
`;

export default DemoPage;