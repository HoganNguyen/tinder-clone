import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faHeart,
  faStar,
  faRotateLeft,
  faMagnifyingGlassLocation,
  faBriefcase,
  faShield,
  faLocationDot,
  faGraduationCap,
  faInfo,
  faDownLong
} from "@fortawesome/free-solid-svg-icons";

import { useSwipeable } from "react-swipeable";

function App() {
  const [currentTab, setCurrentTab] = useState("Matches");

  const [currentImage, setCurrentImage] = useState(0);

  const [infoButtonClicked, setInfoButtonClicked] = useState(false);

  const images = [
    {
      src: "img/image-1.jpg",
      name: "Em Yeu 1",
      age: "19",
      address: "Ha Noi",
      distances: "3km",
      university: "Hoc vien Ngan hang"
    },
    {
      src: "img/image-2.jpg",
      name: "Em Yeu 2",
      age: "19",
      address: "Ha Noi",
      distances: "3km",
      university: "Hoc vien Ngan hang"
    },
    {
      src: "img/image-3.jpg",
      name: "Em Yeu 3",
      age: "19",
      address: "Ha Noi",
      distances: "3km",
      university: "Hoc vien Ngan hang"
    },
    {
      src: "img/image-4.jpg",
      name: "Em Yeu 4",
      age: "19",
      address: "Ha Noi",
      distances: "3km",
      university: "Hoc vien Ngan hang"
    }
  ];

  const matched = images;

  const matchedMessages = matched.map(item => <div />);

  const matchedItems = images.map(image =>
    <li
      key={image.src}
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 items-center grid justify-items-center"
    >
      <img
        className="rounded-full w-20 h-20 object-cover"
        src={image.src}
      />{" "}
      <span>{image.name}</span>
    </li>
  );

  const changeTab = tabName => {
    setCurrentTab(tabName);
  };

  const previous = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const handleSwipe = eventData => {
    console.log("Swiped");
    next();
  };

  const handlers = useSwipeable({
    onSwipedLeft: eventData => {
      console.log("User Swiped Left!", eventData);
      next();
    },
    onSwipedRight: eventData => {
      console.log("User Swiped Right!", eventData);
      next();
    },
    delta: 50,
    trackMouse: true
  });

  const handleInfoButtonClicked = () => {
    setInfoButtonClicked(!infoButtonClicked);
    console.log("Info button Clicked" + infoButtonClicked);
  };

  return (
    <div className="flex h-screen">
      <div className="h-full w-1/5 border-r-2 border-solid border-slate-50">
        <div className="flex h-24 items-center space-x-16 bg-gradient-to-r from-pink-600 via-red-600 to-orange-600">
          <div className="w-36 h-14 items-center ml-3 hover:bg-zinc-800 rounded-full p-1">
            <a className="w-full text-white font-bold flex items-center pt-1">
              <img
                className="rounded-full w-12 h-10 object-cover"
                src="img/download.jpg"
              />
              <span className="inline-block ml-3 w-24">Ngot Bui</span>
            </a>
          </div>

          <div className="flex space-x-4 pr-2">
            <div className="nav-box col-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlassLocation}
                style={{ color: "#FFFFFF" }}
                size="2x"
              />
            </div>
            <div className="nav-box col-2">
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ color: "#FFFFFF" }}
                size="2x"
              />
            </div>
            <div className="nav-box col-2">
              <FontAwesomeIcon
                icon={faShield}
                style={{ color: "#FFFFFF" }}
                size="2x"
              />
            </div>
          </div>
        </div>

        <div className="bar-container">
          <div className="bar-container-header flex justify-between">
            <button
              className={
                currentTab === "Matches"
                  ? "flex-1 border-none pt-3"
                  : "flex-1 border-none pt-3"
              }
              onClick={() => changeTab("Matches")}
            >
              <span
                className={
                  currentTab === "Matches"
                    ? "border-b-4 border-solid border-pink-600"
                    : ""
                }
              >
                Matches
              </span>
            </button>
            <button
              className={
                currentTab === "Messages"
                  ? "flex-1 border-none pt-3"
                  : "flex-1 border-none pt-3"
              }
              onClick={() => changeTab("Messages")}
            >
              <span
                className={
                  currentTab === "Messages"
                    ? "border-b-4 border-solid border-pink-600"
                    : ""
                }
              >
                Messages
              </span>
            </button>
          </div>
          <div className="h-full">
            {currentTab === "Matches" &&
              <div className="mt-4 mx-3">
                <ul className="grid gap-4 grid-cols-3">
                  {matchedItems}
                </ul>
              </div>}
            {currentTab === "Messages" &&
              <div className="flex">
                <ul>
                  <li>Message 1</li>
                  <li>Message 2</li>
                  <li>Message 3</li>
                  <li>Message 4</li>
                </ul>
              </div>}
          </div>
        </div>
      </div>

      <div className="relative h-screen w-4/5 grid justify-items-center items-center">
        <div className="relative h-4/6 w-96">
          {!infoButtonClicked &&
            <div className="w-full h-full relative mix-blend-overlay">
              <img
                {...handlers}
                className="object-cover min-h-full absolute opacity-50 rounded-lg"
                draggable
                src={images[currentImage].src}
              />
              <div className="absolute -z-10 bg-gradient-to-t from-black via-black to-transparent h-full w-full rounded-lg" />
              <div className="absolute bottom-28 text-white pl-10">
                <div className="flex">
                  <span className="text-3xl font-bold mr-2">
                    {images[currentImage].name}
                  </span>{" "}
                  <span className="text-3xl font-light">
                    {images[currentImage].age}
                  </span>
                </div>

                <div className="flex">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ paddingTop: "5px" }}
                  />{" "}
                  <span className="text-xl font-bold ml-2 mr-9">
                    {images[currentImage].address}
                  </span>
                  <span className="text-xl font-light">
                    {images[currentImage].distances} away
                  </span>
                </div>

                <div className="flex">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ paddingTop: "4px" }}
                  />
                  <span className="ml-2 mr-9">
                    {images[currentImage].university}
                  </span>
                </div>
              </div>
            </div>}
          {infoButtonClicked &&
            <div
              className="h-full w-full overflow-y-scroll shadow-md rounded-lg"
              style={{ overscrollBehavior: "none" }}
            >
              <img
                {...handlers}
                className="object-cover h-96 absolute rounded-lg border-b border-solid"
                draggable
                src={images[currentImage].src}
                min-h-full
              />
              <div className="absolute bottom-40 pl-10 border-b border-solid w-full pb-2">
                <div className="flex">
                  <span className="text-3xl font-bold mr-2">
                    {images[currentImage].name}
                  </span>{" "}
                  <span className="text-3xl font-light">
                    {images[currentImage].age}
                  </span>
                </div>

                <div className="flex text-slate-500">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ paddingTop: "5px" }}
                  />{" "}
                  <span className="text-xl font-bold ml-2 mr-9">
                    {images[currentImage].address}
                  </span>
                  <span className="text-xl font-light">
                    {images[currentImage].distances} away
                  </span>
                </div>

                <div className="flex text-slate-500">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ paddingTop: "4px" }}
                  />
                  <span className="ml-2 mr-9">
                    {images[currentImage].university}
                  </span>
                </div>
              </div>
            </div>}
          <div
            className={
              infoButtonClicked
                ? "absolute bottom-60 right-12"
                : "absolute bottom-32 right-14"
            }
          >
            <button
              className={
                infoButtonClicked
                  ? "rounded-full bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 w-12 h-12 items-center p-1 hover:-translate-y-1 hover:scale-125 duration-150"
                  : "rounded-full bg-white w-6 h-6 items-center hover:-translate-y-1 hover:scale-125 duration-300"
              }
              onClick={() => handleInfoButtonClicked()}
            >
              {infoButtonClicked &&
                <FontAwesomeIcon
                  icon={faDownLong}
                  style={{ color: "#FFFFFF" }}
                  size="2x"
                />}
              {!infoButtonClicked &&
                <FontAwesomeIcon icon={faInfo} style={{ color: "#000000" }} />}
            </button>
          </div>
          <div className="flex items-center justify-center absolute bottom-5 left-12 space-x-3">
            <button
              className="rounded-circle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 border-2 border-solid border-[#FFBF00] rounded-full p-1"
              onClick={() => previous()}
            >
              <FontAwesomeIcon
                icon={faRotateLeft}
                style={{ color: "#FFBF00" }}
                size="3x"
              />
            </button>
            <button
              className="rounded-circle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 border-2 border-solid border-[#FF0000] rounded-full px-3 py-1"
              onClick={() => next()}
            >
              <FontAwesomeIcon
                icon={faX}
                style={{ color: "#FF0000" }}
                size="3x"
              />
            </button>
            <button
              className="rounded-circle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 border-2 border-solid border-[#00A36C] rounded-full p-1"
              onClick={() => next()}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#00A36C" }}
                size="3x"
              />
            </button>
            <button
              className="rounded-circle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 border-2 border-solid border-[#00FFFF] rounded-full p-1"
              onClick={() => next()}
            >
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#00FFFF" }}
                size="3x"
              />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-5 left-1/3 flex">
          <div className="hide-btn">
            {/* <button>Hide</button> */}
          </div>
          <ul className="flex list-group list-group-horizontal">
            <li className="list-group-item border-3 border-solid border p-2">
              Nope
            </li>
            <li className="list-group-item border-3 border-solid border p-2">
              Like
            </li>
            <li className="list-group-item border-3 border-solid border p-2">
              Open Profile
            </li>
            <li className="list-group-item border-3 border-solid border p-2">
              Close Profile
            </li>
            <li className="list-group-item border-3 border-solid border p-2">
              Super Like
            </li>
            <li className="list-group-item border-3 border-solid border p-2">
              Next Photo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
