// TODO :
// get the review data use the package and calculate the past date
//
import { useState } from "react";
import "./ReviewCard.css";
import { Ellipsis, Flag, ThumbsDown, ThumbsUp } from "lucide-react";

const ReviewCard = (props) => {
  const sampleData = props.data;
  const [reviewMoreContent, setReviewMoreContent] = useState(false);

  const [likes, setLikesUpdate] = useState(false);
  const [dislikes, setDislikesUpdate] = useState(false);

  const [reviewFooterMore, setReviewFooterMore] = useState(false);
  const toggleReviewContent = () => {
    setReviewMoreContent((prev) => !prev);
  };
  // one user can like or dislike a post
  // one user can only like once
  // one user can only dislike once
  // both like and dislike shouldn't update once
  // reviewLikes: 120,
  // reviewDislikes: 3,

  const incrementLikes = () => {
    // if like is already updated then decrement the likes
    if (likes === true) {
      sampleData.reviewLikes -= 1;
      setLikesUpdate(false);
    }
    // call an api to increase the count of the likes
    else {
      // if already user has clicked on dislike and trying to like the same review
      if (dislikes == true) {
        sampleData.reviewDislikes -= 1;
        setDislikesUpdate(false);
      }
      sampleData.reviewLikes += 1;
      setLikesUpdate(true);
    }
  };

  const incrementDislikes = () => {
    // if dislike is already updated then decrement the dislikes
    if (dislikes === true) {
      sampleData.reviewDislikes -= 1;
      setDislikesUpdate(false);
    }
    // call an api to increase the count of the dislikes
    else {
      // if already user has cliked on like and trying to dislike the same review
      if (likes === true) {
        sampleData.reviewLikes -= 1;
        setLikesUpdate(false);
      }
      sampleData.reviewDislikes += 1;
      setDislikesUpdate(true);
    }
  };

  const handleReportAbuse = () => {
    console.log("Reported");
  };

  return (
    <div className="reviewContainer">
      {/* Review Header */}
      <div className="reviewContainerHeaderContainer">
        <span
          className={
            sampleData.starRating >= 2.5
              ? "reviewCardRatingStarPositive"
              : "reviewCardRatingStarNegative"
          }
        >
          {sampleData.starRating + " ★"}
        </span>
        <span className="reviewCardReviewHeading">
          {sampleData.reviewHeading}
        </span>
      </div>
      {/* Review Container */}
      <div className="reviewCardReviewContentContainer">
        <p className="reviewCardReviewContentContent">
          {sampleData.reviewContent?.length > 100 && reviewMoreContent
            ? sampleData.reviewContent?.slice(0, 100) + "...."
            : sampleData.reviewContent}

          {sampleData.reviewContent?.length > 100 && (
            <span onClick={toggleReviewContent} className="viewMoreButton">
              {reviewMoreContent ? "More" : "Less"}
            </span>
          )}
        </p>
      </div>
      {/* Pic Container */}
      <div className="reviewCardReviewPicContainer">
        {sampleData.reviewPics?.map((eachPic, index) => (
          <img
            src={`${eachPic}`}
            alt={`Pic: ${index}`}
            key={eachPic}
            className="reviewCardReviewPicImage"
          />
        ))}
      </div>
      {/* Review Footer Container*/}
      <div className="reviewCardFooterContainer">
        <div className="reviewCardFooterContainerLeftRight">
          {/* Review Footer Left Container */}
          <div className="reviewCardFooterContainerLeftContainer">
            <span className="reviewCardFooterReviewerName">
              {"🙍🏻‍♂️ " + sampleData.reviewerName}
            </span>
            <span
              className={
                sampleData.isTrustedUser
                  ? `reviewCardFooterReviewerVerifiedSuccessName`
                  : `reviewCardFooterReviewerUnVerifiedSuccessName`
              }
            >
              {sampleData.isTrustedUser
                ? "✅️ Verified User"
                : "❌ UnVerified User"}
            </span>
            <span className="reviewCardFooterReviewerLocation">
              {"📍 " + sampleData.userLocation}
            </span>
            <span className="reviewCardFooterReviewerDate">
              {"🗓️ " + sampleData.reviewDate}
            </span>
          </div>
        </div>
        {/* Review Footer Right Container Container Only Likes and Dislikes*/}
        <div className="reviewCardFooterContainerRightContainer">
          <div
            className={`reviewCardFooterLikesContainer ${
              likes ? "reviewCardFooterLikesContainerCliked" : ""
            }`}
            onClick={incrementLikes}
          >
            <ThumbsUp size={"15"} />
            <span className="reviewCardFooterLikesNumber">
              {sampleData.reviewLikes}
            </span>
          </div>
          <div
            className={`reviewCardFooterDisLikesContainer ${
              dislikes ? "reviewCardFooterDisLikesContainerDisLiked" : ""
            }`}
            onClick={incrementDislikes}
          >
            <ThumbsDown size={"15"} />
            <span className="reviewCardFooterLikesNumber">
              {sampleData.reviewDislikes}
            </span>
          </div>
          <div
            className="reviewCardFooterMoreContainer"
            onClick={() => setReviewFooterMore((prev) => !prev)}
          >
            <Ellipsis size={"15"} />
          </div>
          <div
            className={
              reviewFooterMore
                ? "reviewCardFooterMoreContainerOnClikedContainer.active"
                : "reviewCardFooterMoreContainerOnClikedContainer"
            }
          >
            <div
              className="reviewCardFooterMoreContainerOnClikedContainerReportAbuse"
              onClick={handleReportAbuse}
            >
              <Flag size={"15"} />
              <span className="reviewCardFooterMoreContainerOnClikedContainerReportAbuseName">
                Report Abuse
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
