import React from 'react';
import './wallpage.css';
import BackHomeButtons from './Components/BackHomeButtons';

const WallPage = () => {
    
  return (
    <div id="wallpage">
        <div>
        <BackHomeButtons/>
    </div>
      <div id="notifications">
        <h3>Notifications</h3>
        {/* Notifications go here */}
      </div>
      
      <div id="postfeed">
        <CreatePost />
        <PostFeed />
      </div>
      
      <div id="chat">
        <button id='add-new-chat'>+</button>
        <h3> Chat</h3>
        {/* Chat contacts go here */}
      </div>
    </div>
  );
};

const CreatePost = () => (
  <div id="create-post">
    <img id='profile' src="7.jpg" alt="profile" />
    <input id='type-text' type="text" placeholder="What's on your mind?" />
    <button id='post-button'>Post</button>
    <button id='game-area-button'>Game Area</button>
  </div>
);

const PostFeed = () => (
  <div id="post-feed">
    {/* Map over posts and display them */}
    <div id="post">Sample Post #1</div>
    <div id="post">Sample Post #2</div>
  </div>
);

export default WallPage;
