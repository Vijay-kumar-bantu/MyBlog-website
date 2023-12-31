import { useState } from "react";
import "./App.css";
import logo from "./assets/SVG/Logo1.svg";
import darkLogo from "./assets/SVG/Logo2.svg";
import search from "./assets/SVG/search-outline.svg";
import toggle from "./assets/SVG/toggle.svg";
import hamburger from "./assets/SVG/hamburger.svg";
import cover from "./assets/images/cover.png";
import PostCard from "./components/PostCard";

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  const themeToggler = () => {
    setTheme((prev) => {
      return !prev;
    });
  };
  return (
    <div className={`${theme ? "dark:bg-primary" : ""}`}>
      <header className="flex justify-between items-center p-3">
        <div>
          <img src={theme ? darkLogo : logo} />
        </div>
        <nav
          className={` hidden list-none justify-between text-center w-1/3 font-extralight lg:flex ${
            theme ? "dark:text-white" : ""
          } `}
        >
          <li>Home</li>
          <li>Blog</li>
          <li>Single Post</li>
          <li>Pages</li>
          <li>Contact</li>
        </nav>

        <div className="flex items-center lg:w-1/4">
          <input
            type="text"
            className="p-1 bg-lightgrey rounded-md font-body focus:border-none lg:w-full"
            placeholder="Search"
          />
          <img src={search} className="w-5 -m-5" />
        </div>

        <div
          className={
            !theme
              ? "bg-lightgrey rounded-2xl w-14 flex transition-all duration-300"
              : "bg-lightblue rounded-2xl w-14 flex flex-row-reverse transition-all duration-300"
          }
          onClick={themeToggler}
        >
          <img src={toggle} />
        </div>

        <div
          className={`w-8 lg:hidden rounded-md ${theme ? "dark:bg-white" : ""}`}
        >
          <img src={hamburger} />
        </div>
      </header>

      <main className="flex flex-col items-center gap-20">
        <div className="cover-content">
          <div className="p-3">
            <img src={cover} className="object-cover relative" />
            <div
              className={`p-3 bg-white w-3/5 rounded-md shadow-md absolute top-60 left-10 lg:p-10 lg:w-2/5 lg:top-auto lg:-bottom-5 lg:left-60 ${
                theme ? "dark:bg-darkcard dark:text-white" : ""
              }`}
            >
              <p className="bg-lightblue w-fit text-xs p-1 text-white rounded-md font-semibold lg:text-sm">
                Technology
              </p>
              <h1 className="font-bold text-sm lg:text-4xl my-4">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <p className="text-xs font-extralight">vijay kumar bantu</p>
            </div>
          </div>
        </div>
        <div className=" min-w-full p-3">
          <h1 className="font-bold lg:text-3xl dark:text-white">
            Latest Posts
          </h1>
          <div className="p-3 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
            <PostCard theme={theme} />
          </div>
        </div>
      </main>

      <footer
        className={`p-3 bg-lightgrey ${
          !theme ? "" : "dark:bg-darkfooter dark:text-slate-400"
        } `}
      >
        <div className="flex  justify-evenly p-3 gap-5 flex-wrap lg:flex-row lg:justify-around">
          <div className="w-lvw lg:w-1/3">
            <h1 className="font-bold mb-4">About</h1>
            <p className="text-sm">
              I have successfully designed and developed a frontend blog website
              using React.js, showcasing a significant enhancement in my
              frontend development skills with this technology. The project not
              only demonstrates my proficiency in React.js but also reflects my
              ability to create engaging and interactive user interfaces for web
              applications. Through this experience, I have gained valuable
              insights and hands-on experience that contribute to my growing
              expertise in frontend development with React.js.
            </p>
          </div>
          <div className="list-none flex flex-col gap-3 cursor-pointer">
            <h1 className="font-bold">Quick links</h1>
            <li>Home</li>
            <li>Blog</li>
            <li>Single Post</li>
            <li>Pages</li>
            <li>Contact</li>
          </div>
          <div className="list-none flex flex-col gap-3 cursor-pointer">
            <h1 className="font-bold">Categroy</h1>
            <li>Life style</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </div>
        </div>
        <div className="p-3 flex flex-col-reverse justify-between gap-4 my-5 lg:flex-row">
          <div>
            <img src={theme ? darkLogo : logo} />
          </div>
          <div className="list-none flex justify-evenly cursor-pointer lg:w-1/2">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
