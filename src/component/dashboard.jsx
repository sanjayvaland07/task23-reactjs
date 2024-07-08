import "./dashboard.css";
import pic1 from "../assets/pic3.jpg";
import pic2 from "../assets/pic4.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
import post4 from "../assets/post4.jpg";
function Dashboard() {
  return (
    <div className="home-container" id="dashboard-container">
      <div className="main">
        <img src={pic1} alt="pic1" />
        <div className="main-detail">
          <h2>TITLE HEADING</h2>
          <p>
            Title Decription,<span> April 7, 2014</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            amet animi voluptatem iure a dignissimos ducimus vel, autem eius.
            Eligendi rem doloribus, ratione sapiente aperiam similique modi
            repudiandae inventore laudantium!
          </p>
          <div className="main-footer">
            <button>Read More</button>
            <p>
              Comments <span>0</span>
            </p>
          </div>
        </div>
      </div>
      <div className="aside">
        <div className="first-div">
          <img src={pic2} alt="" />
          <div className="first-div-detail">    
            <h3>Sanjay Valand</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              corporis aliquam labore, sit aspernatur est mollitia delectus
              pariatur voluptate debitis?
            </p>
          </div>
        </div>
        <div className="popular-post">
            <h3>Popular Posts</h3>
            <div className="post">
                <img src={post4} alt="" />
                <div className="post-detail">
                    <p>lorem</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <hr />
            <div className="post">
                <img src={post3} alt="" />
                <div className="post-detail">
                    <p>lorem</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <hr />
            <div className="post">
                <img src={post2} alt="" />
                <div className="post-detail">
                    <p>lorem</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
            <hr />
            <div className="post">
                <img src={post1} alt="" />
                <div className="post-detail">
                    <p>lorem</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>
        <div className="tags">
            <h3>Tags</h3>
            <div className="tags-detail">
                <span>Travel</span>
                <span>Music</span>
                <span>Coding</span>
                <span>Dance</span>
                <span>Reading</span>
                <span>Business</span>
                <span>Singing</span>
                <span>Learning</span>
                <span>Upskill</span>
                <span>News</span>
                <span>Building</span>
                <span>Hacking</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
