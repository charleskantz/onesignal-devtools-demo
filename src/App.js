import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="instructions">
        <p>Scenario:</p>
        <p>
          Your lazy Design Engineer was supposed to finish the mockup of a new card component,
          but he didn't finish the styling before he went to a coworker's farewell party and
          you haven't heard from him since.
        </p>
        <p>
          You're the responsible one and have to show the work, but you need to adjust the css 
          in the browser to match what you designed so the demo can work.
        </p>
        <p>
          Before his bender, your design engineer did show you the Chrome Dev Tools and some of
          the features, maybe you can use that to fix the design for the demo?
        </p>
        <p>
          Optional: If you want a design to work from, <a href="https://webpixels.io/img/components/screens/desktop/card_profile_1.jpg" target="_blank" rel="noopener" >check out this layout.</a>
        </p>
      </div>
      <div className="container-card">
        <div className="card">
          <div className="card-header">
            <img className="user-avatar" width="100px" height="100px"
              src="https://www.participate.nyc.gov/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"
            />
            <div className="user-name-container">
              <span className="user-name">Nelson Bighetti</span>
              <span className="user-title">Lead Time Waster</span>
            </div>
          </div>
          <div className="card-content">
            <div className="user-stat-container">
              <span className="user-stat-value">25</span>
              <span className="user-stat-label">Posts</span>
            </div>
            <div className="user-stat-container">
              <span className="user-stat-value">350</span>
              <span className="user-stat-label">Following</span>
            </div>
            <div className="user-stat-container">
              <span className="user-stat-value">1.5K</span>
              <span className="user-stat-label">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
