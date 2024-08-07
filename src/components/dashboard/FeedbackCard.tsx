import Feedback from "../Feedback";

const FeedbackCard = () => {
  const feedbacks = [
    {
      id: 1,
      username: "Jenny Willson",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userlogo: (
        <svg viewBox="0 0 16 16" fill="currentColor" height="1.5em" width="1.5em"  color="red">
          <path
            fill="currentColor"
            d="M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      username: "Dianne Russell",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userlogo: (
        <svg viewBox="0 0 16 16" fill="currentColor" height="1.5em" width="1.5em"  color="blue">
          <path
            fill="currentColor"
            d="M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      username: "Devon Lene",
      rating: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userlogo: (
        <svg viewBox="0 0 16 16" fill="currentColor" height="1.5em" width="1.5em"  color="pink">
          <path
            fill="currentColor"
            d="M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-600 mt-10 flex-col text-white p-3 rounded-lg shadow-lg">
        <h4 className="mb-4 px-7.5 text-xl font-semibold text-white">
          Customer's Feedback
        </h4>
        <div>
          {feedbacks.map((feedback) => (
            <Feedback
              key={feedback.id} // Added key prop
              userlogo={feedback.userlogo}
              username={feedback.username} // Updated to match prop name in Feedback component
              rating={feedback.rating}
              description={feedback.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;
