import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from "./Rating.module.css"
const Rating = ({score}) => {
  console.log(score);

  return (
    <div className={styles.rating}>
        <p>Rating: {score}</p>

            <div className={styles.StarsBorder}>
            <StarBorderIcon className={styles.ratingStarBorder}></StarBorderIcon>
            <StarBorderIcon className={styles.ratingStarBorder}></StarBorderIcon>
            <StarBorderIcon className={styles.ratingStarBorder}></StarBorderIcon>
            <StarBorderIcon className={styles.ratingStarBorder}></StarBorderIcon>
            <StarBorderIcon className={styles.ratingStarBorder}></StarBorderIcon>
            </div>

            <div className={styles.FullStars} style={{clipPath:`polygon(0 0, ${score*20}% 0, ${score*20}% 100%, 0% 100%)`}}>
              <StarIcon className={styles.ratingStar}></StarIcon>
              <StarIcon className={styles.ratingStar}></StarIcon>
              <StarIcon className={styles.ratingStar}></StarIcon>
              <StarIcon className={styles.ratingStar}></StarIcon>
              <StarIcon className={styles.ratingStar}></StarIcon>
            </div>


    </div>
  )
}

export default Rating