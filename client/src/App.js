import './scss/main.scss';
import profilePhoto from './media/profilePhoto.png';
import photo1 from './media/photo1.png';
import photo2 from './media/photo2.png';
import photo3 from './media/photo3.png';
import photo4 from './media/photo4.png';
import photo5 from './media/photo5.png';
import photo6 from './media/photo6.png';

function App() {
  return (
    <>
        <div className="profile-hero-component">
            <div className="profile-hero-container container">
                <div className="avatar-wrapper">
                    <img src={profilePhoto} alt="User profile photo" className="avatar"/>
                </div>
                <h1 className="username">Rodney Cotton</h1>
                <span className="location">Helsinki, Finland</span>
                <div className="status-list">
                    <div className="status">
                        <span className="info highlight">100</span>
                        <span className="info">Posts</span>
                    </div>
                    <div className="status">
                        <span className="info highlight">2,242</span>
                        <span className="info">Followers</span>
                    </div>
                    <div className="status">
                        <span className="info highlight">1,432</span>
                        <span className="info">Following</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="gallery-component">
            <div className="gallery-container container">
                    <img className="image image1" src={photo1} alt="Plant vase"/>
                    <img className="image image2" src={photo2} alt="Couch"/>
                    <img className="image image3" src={photo3} alt="Bathtub"/>
                    <img className="image image4" src={photo4} alt="Table"/>
                    <img className="image image5" src={photo5} alt="Plant"/>
                    <img className="image image6" src={photo6} alt="Lamp"/>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-container container">
                <span className="copyright">
                    created by <u><strong>tasca-eduard</strong></u> - devChallenges.io
                </span>
            </div>
        </footer>     
    </>
  );
}

export default App;
