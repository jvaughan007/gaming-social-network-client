<h1>Gaming Social Network</h1>

<a href="https://gaming-social-network-client.vercel.app/">Link to live App</a>
<a href="https://github.com/domcodesjs/gaming-social-network-server">Link to server code</a>

<p>Users are able to create a profile where they can create a bio about themselves, upload images, find new games, find new friends, and find groups to play with.</p>
<br/>
<p>Users can also post their current activity and like and comment on other user's posts.</p>
<br/>

<h1>Who uses Gaming Social Network</h1>
<ul>
<li>People who play games</li>
<li>People looking to start playing games</li>
<li>People looking for friends, groups or a place to hangout</li>
</ul>

<h1>Routes</h1>

<h3><i>'/'</i> the Landing page route</h3>
<span>This is the first page users will land on. Where they can see a demo of our site, sign up, and log in</span>
<br/>
<p align="center"><img width="460" height="300" src="src/ReadMeAssets/GSN-Home.png"/></p>

<h3><i>'/login'</i> login page route && <i>'/signup'</i> sign up page route</h3>
<span>This is where users can sign up or login in order to get an authenticated JWT to access the entire website, if they try access another route without an authenticated JWT they would be redirected to login page</span>

| Login                                                                | Sign Up                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| <img width="460" height="300" src="src/ReadMeAssets/GSN-Login.png"/> | <img width="460" height="300" src="src/ReadMeAssets/GSN-SignUp.png"/> |

<h3><i>'/dashboard'</i> the dashboard route is private route for signed up users</h3>
<span>This is where users are directed after sign up and login. Users now have full access to finding games, friends, groups, and creating their own profile</span>
<p align="center"><img width="460" height="300" src="src/ReadMeAssets/GSN-Dashboard.png"/></p>

<h3><i>'/:username'</i> the profile route</h3>
<span>This is where users can see and edit their bios, see their favorited games, upload personal images, see friend request, and find new friends</span>
<p align="center"><img width="460" height="300" src="src/ReadMeAssets/GSN-Profile.png"/></p>

<h3><i>'/groups'</i> finding groups route && <i>'/games'</i> finding games route</h3>
<span>These routes are where users can search for new groups to join and search for new games to play and favorite</span>

| Groups                                                                   | Games                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| <img width="460" height="300" src="src/ReadMeAssets/GSN-FindGroup.png"/> | <img width="460" height="300" src="src/ReadMeAssets/GSN-FindGames.png"/> |
