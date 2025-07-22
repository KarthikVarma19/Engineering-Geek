import "./App.css";
import ReviewCard from "./components/ReviewCard/ReviewCard"; // Ensure this path is correct and the component exists
import CollegesList from "./pages/collegesList";
function App() {
  const reviewsData = [
    {
      starRating: 4.5,
      reviewHeading: "Excellent Service!",
      reviewContent:
        "Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.Everything from delivery to packaging was top-notch. The product quality was even better than expected.",
      reviewPics: ["review1_img1.jpg", "review1_img2.jpg"],
      reviewerName: "Aarav Mehta",
      isTrustedUser: true,
      userLocation: "Mumbai, India",
      reviewDate: "2 days ago",
      reviewLikes: 120,
      reviewDislikes: 3,
      numberOfReportAbuses: 0,
    },
    {
      starRating: 3.2,
      reviewHeading: "Good but needs improvement",
      reviewContent:
        "The product is decent for the price, but it lacks some features that competitors offer.",
      reviewPics: ["review2_img1.jpg"],
      reviewerName: "Sneha Sharma",
      isTrustedUser: false,
      userLocation: "Bangalore, India",
      reviewDate: "1 week ago",
      reviewLikes: 56,
      reviewDislikes: 5,
      numberOfReportAbuses: 1,
    },
    {
      starRating: 1.8,
      reviewHeading: "Not worth it",
      reviewContent:
        "Very disappointed. It stopped working after 3 days. I wouldn't recommend this to anyone.",
      reviewPics: [],
      reviewerName: "Rahul Dev",
      isTrustedUser: false,
      userLocation: "Chennai, India",
      reviewDate: "3 days ago",
      reviewLikes: 12,
      reviewDislikes: 25,
      numberOfReportAbuses: 3,
    },
    {
      starRating: 5.0,
      reviewHeading: "Absolutely fantastic!",
      reviewContent:
        "I've been using it for a month now, and it's flawless. High quality, reliable, and totally worth the price.",
      reviewPics: ["review4_img1.jpg", "review4_img2.jpg", "review4_img3.jpg"],
      reviewerName: "Priya Raj",
      isTrustedUser: true,
      userLocation: "Delhi, India",
      reviewDate: "5 days ago",
      reviewLikes: 230,
      reviewDislikes: 2,
      numberOfReportAbuses: 0,
    },
    {
      starRating: 2.6,
      reviewHeading: "Average Experience",
      reviewContent:
        "Not too bad, but the instructions were unclear and the packaging was a bit damaged.",
      reviewPics: ["review5_img1.jpg"],
      reviewerName: "Vikram Singh",
      isTrustedUser: false,
      userLocation: "Pune, India",
      reviewDate: "6 days ago",
      reviewLikes: 38,
      reviewDislikes: 6,
      numberOfReportAbuses: 2,
    },
  ];

  return (
    <>
      {reviewsData.map((eachReview, index) => (
        <ReviewCard data={eachReview} key={index} />
      ))}
    </>
  );
  // return <>{CollegesList && <CollegesList />}</>;
}

export default App;
