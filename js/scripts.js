// MOBILE NAV
const bodyTag = document.getElementsByTagName("body")[0];
const headerTag = document.getElementsByClassName("header")[0];
const hamburgerBtn = document.getElementsByClassName("hamburger-btn")[0];

hamburgerBtn.addEventListener("click", () => {
  bodyTag.classList.toggle("--disable-scroll");
  headerTag.classList.toggle("topnav--visible");
});
// END MOBILE NAV

// FEATURES TAB DISPLAY ACTIVE
// data
const featuresArray = [
  {
    id: "feature-0",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imgPath: "./images/illustration-features-tab-1.svg",
    altText: "dashboard icon",
  },
  {
    id: "feature-1",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgPath: "./images/illustration-features-tab-2.svg",
    altText: "dashboard with magnifying glass",
  },
  {
    id: "feature-2",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgPath: "./images/illustration-features-tab-3.svg",
    altText: "people waving to each other",
  },
];

// select elements
const featuresList = document.querySelector(".features-list");
const featuresTextContainer = document.querySelector(
  ".features-explained__text"
);
const featureImg = document.querySelector(".features-explained__img");
const featureTitle = document.querySelector(".features-explained__title");
const featureDescription = document.querySelector(
  ".features-explained__description"
);

// event listener
featuresList.addEventListener("click", (e) => {
  // first, remove active class from feature element
  for (child of featuresList.children) {
    child.classList.remove("features-list__item--active");
  }

  // second, add active class to current target
  e.target.classList.add("features-list__item--active");

  // lastly, swap in new content
  updateFeatureContent(e.target);
});

//helper function
function updateFeatureContent(nodeIn) {
  let currentID = nodeIn.id;

  featuresArray.forEach((item) => {
    if (currentID === item.id) {
      featureImg.children[0].src = item.imgPath;
      featureImg.children[0].altText = item.altText;
      featureTitle.innerText = item.title;
      featureDescription.innerText = item.description;
    }
  });

  // fade it
  featureImg.children[0].classList.add("animate__fadeIn");
  featuresTextContainer.classList.add("animate__fadeIn");

  setTimeout(() => {
    featureImg.children[0].classList.remove("animate__fadeIn");
    featuresTextContainer.classList.remove("animate__fadeIn");
  }, 500);
}

// END FEATURES TAB DISPLAY ACTIVE
