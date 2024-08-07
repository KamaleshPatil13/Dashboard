import React from "react";

type FeedbackProps = {
  userlogo: any;
  username: string;
  rating: number;
  description: string;
};

const Feedback: React.FC<FeedbackProps> = ({
  userlogo,
  username,
  rating,
  description,
}) => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-2xl">&#9733;</span>); // Filled star with larger size
      } else {
        stars.push(<span key={i} className="text-2xl">&#9734;</span>); // Empty star with larger size
      }
    }
    return stars;
  };

  return (
    <div className="flex-col">
      <div className="flex space-x-3">
        <div>{userlogo}</div>
        <div>{username}</div>
      </div>
      <div className="flex mb-2 text-amber-300 h-4">{generateStars(rating)}</div>
      <div className="pt-3  text-[10px]">{description}</div>
      <hr className="border-t border-gray-800 mt-3 mb-3" />
    </div>
  );
};

export default Feedback;
