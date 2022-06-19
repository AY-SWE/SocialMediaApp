import React ,{useEffect} from 'react'
//import { Followers } from '../../data/Followers'
import Users from '../usersCard/Users'
import "./FollowersCard.scss"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/userRequestApi'

const FollowersCard = () => {
  const user = useSelector((state)=>state.authReducer.authData.user);
  const userExisting = user[Object.keys(user)[0]];
  const userId = user[Object.keys(user)[0]]._id;
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const getAllFollowers = async () => {
      const {data} = await getAllUser();
      setFollowers(data)
      //console.log(data);
    };
    getAllFollowers();
  },[]);
  return (
    <div className="followersCard">
      <h3>Discover other people</h3>
    
      {followers.map((follower, id) => {
        if(follower._id !== userId){
      return (
        <Users follower= {follower} key= {id}/>
      )}
    })}

    </div>
  )
}

export default FollowersCard