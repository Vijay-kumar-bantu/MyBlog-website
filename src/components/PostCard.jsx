import cover from "../assets/images/cover.png";

const PostCard = ({ theme }) => {
  return (
    <div
      className={`p-3 bg-white rounded-md shadow-md lg:max-w-fit ${
        theme ? "dark:bg-darkcard dark:text-white" : ""
      }`}
    >
      <img
        src={cover}
        className="object-contain h-32 rounded-md lg:h-48 lg:w-2/3"
      />
      <p className="bg-lightgrey w-fit text-xs p-1 text-lightblue rounded-md font-semibold my-2 lg:text-sm">
        Technology
      </p>
      <h1 className="font-bold text-sm lg:text-2xl my-3">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <p className="text-xs font-extralight">vijay kumar bantu</p>
    </div>
  );
};

export default PostCard;
