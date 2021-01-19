import Component from 'react';
import styled from 'styled-components';


class DemoPage extends Component {
    return (
        <div>
            <StyledMain>
                <div className="demoHeading"> 
                    <h1>Welcome to the Gaming Social Network!</h1> 
                    <br />
                    <h2>Connect Hard, Win Harder</h2>
                </div>
                <div className="demoGetStarted">
                <h3>Signup</h3> 
                <p>Upon reaching the home page, you will be prompted to log in or to create an account.</p>
                </div>
            </StyledMain>
        </div>
    );
};

const StyledMain = styled.main`

`;

export default DemoPage;