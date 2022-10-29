import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='right-bar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='friend-request'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <span>Mike Barry</span>
            </div>
            <div className='right'>
              <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
          <div className='friend-request'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <span>Bill Bailey</span>
            </div>
            <div className='right'>
              <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Latest Activities</span>
          <div className='activity'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <p>
                <span>Bill Bailey</span>changed their cover picture
              </p>
            </div>
            <div className='right'>
              <span>1 min ago</span>
            </div>
          </div>
          <div className='activity'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <p>
                <span>Jane Doe</span>posted a new photo
              </p>
            </div>
            <div className='right'>
              <span>3 min ago</span>
            </div>
          </div>
          <div className='activity'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <p>
                <span>Thomas Ross</span>checked in at Starbucks
              </p>
            </div>
            <div className='right'>
              <span>9 min ago</span>
            </div>
          </div>
          <div className='activity'>
            <div className='left'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <p>
                <span>Chucky Singer</span>posted an Event
              </p>
            </div>
            <div className='right'>
              <span>13 min ago</span>
            </div>
          </div>
        </div>
        <div className='item'>
          <span>Online Friends</span>
          <div className='friends-online'>
            <div className='friend'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <div className='online' />
              <span>Vicki Dixon</span>
            </div>
          </div>
          <div className='friends-online'>
            <div className='friend'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <div className='online' />
              <span>Elaina Gilbert</span>
            </div>
          </div>
          <div className='friends-online'>
            <div className='friend'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <div className='online' />
              <span>Damon Salvitore</span>
            </div>
          </div>
          <div className='friends-online'>
            <div className='friend'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <div className='online' />
              <span>Stefan Salvitore</span>
            </div>
          </div>
          <div className='friends-online'>
            <div className='friend'>
              <img
                src='https://images.pexels.com/photos/8880117/pexels-photo-8880117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='profilePic'
              />
              <div className='online' />
              <span>Bonnie Bennet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
