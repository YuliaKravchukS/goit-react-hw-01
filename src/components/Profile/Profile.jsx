//import clsx from "clsx";
import css from "./Profile.module.css";


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
  <div className={css.user}>
        <img
          className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.nameText}>{name}</p>
    <p className={css.userText}>@{tag}</p>
    <p className={css.userText}>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile