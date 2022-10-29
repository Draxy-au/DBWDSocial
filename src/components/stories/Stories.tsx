import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  // TEMPORARY DUMMY DATA
  const stories = [
    {
      id: 1,
      name: "Sam Smith",
      img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640",
    },
    {
      id: 2,
      name: "Ben Dover",
      img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640",
    },
    {
      id: 3,
      name: "Shane Cats",
      img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640",
    },
    {
      id: 4,
      name: "Peter Lane",
      img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640",
    },
    {
      id: 5,
      name: "Pug Pug",
      img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640",
    },
    // {
    //   id: 6,
    //   name: "Lou Garde",
    //   img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640"
    // },
    // {
    //   id: 7,
    //   name: "Polly Carb",
    //   img: "https://images.pexels.com/photos/8880186/pexels-photo-8880186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=640"
    // },
  ];

  return (
    <div className='stories'>
      <div className='story'>
        <img src={currentUser.profilePic} alt='' />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className='story'>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
