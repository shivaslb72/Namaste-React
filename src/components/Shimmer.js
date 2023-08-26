import { shimmer_card_unit } from "../Config";

const CardShimmer = () => {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md animate-pulse">
      <div className="w-32 h-24 bg-gray-300 rounded-md mb-2 animate-pulse"></div>
      <div className="w-40 h-6 bg-gray-300  rounded-md mb-2 animate-pulse"></div>
      <div className="w-24 h-4 bg-gray-300  rounded-md mb-2 animate-pulse"></div>
      <div className="w-64 h-4 bg-gray-300  rounded-md animate-pulse"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="p-2 m-2 flex flex-wrap justify-between gap-4">
    {new Array(shimmer_card_unit).fill(0).map((element, index) => {
      return <CardShimmer key={index} />;
    })}
  </div>
  

  );
};

export default Shimmer;
