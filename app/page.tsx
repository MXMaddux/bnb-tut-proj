import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl ">HomePage</h1>
      <Link
        href={"/about"}
        className="text-xl text-blue-500 inline-block capitalize"
      >
        about page
      </Link>
    </div>
  );
};
export default HomePage;
