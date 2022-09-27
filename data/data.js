import { GlobalStyles } from "../constant/styles";

export const WALKTHROUGH = [
  {
    id: 1,
    title: "WAEC/NECO Past Questions And Answers",
    description:
      "Objective and Theory Questions and Answers Explained in details from 1990",
    imageUrl: require("../assets/Image/Walkthrough/Walk.png"),
  },
  {
    id: 2,
    title: "JAMB Past Questions With Solutions",
    description:
      "Quiz With Interactive Timer To Test Your Knowledge and Speed ",
    imageUrl: require("../assets/Image/Walkthrough/Walk.png"),
  },
];

export const HOMESUBJECTS = [
  {
    id: 3,
    title: "JAMB Questions",
    time: "60 mins",
    backgroundColor: "#f5e7e4",
    imageUrl: require("../assets/Image/Home/jamb.png"),
    navigate: "jamb",
  },
  {
    id: 1,
    title: "WAEC Questions",
    time: "1hr 00mins",
    backgroundColor: "#d5eaf9",
    imageUrl: require("../assets/Image/Home/waec.png"),
    navigate: "waec",
  },
  {
    id: 2,
    title: "Question Search",
    time: "58 mins",
    backgroundColor: "#f8f8e2",
    imageUrl: require("../assets/Image/Home/research.png"),
    navigate: "search",
  },
  {
    id: 4,
    title: "Literature Books",
    time: "60 mins",
    backgroundColor: "#d6f7cd",
    imageUrl: require("../assets/Image/Home/book.png"),
    navigate: "book",
  },
];

export const WAECSUBJECTS = [
  {
    id: 1,
    title: "Mathematics",
    imageUrl: require("../assets/Image/Home/math.png"),
    color: GlobalStyles.colors.categoryBlue,
    navigate: "Math",
  },
  {
    id: 2,
    title: "English",
    imageUrl: require("../assets/Image/Home/english.png"),
    color: GlobalStyles.colors.categoryGreen,
    navigate: "English",
  },
  {
    id: 3,
    title: "Economics",
    imageUrl: require("../assets/Image/Home/econs.png"),
    color: GlobalStyles.colors.categoryOrange,
    navigate: "Economics",
  },
  {
    id: 6,
    title: "Biology",
    imageUrl: require("../assets/Image/Home/biology.png"),
    color: GlobalStyles.colors.categoryGreen,
    navigate: "Biology",
  },
  {
    id: 9,
    title: "Chemistry",
    imageUrl: require("../assets/Image/Home/lit.png"),
    color: GlobalStyles.colors.categoryBlue,
    navigate: "Chemistry",
  },
  {
    id: 5,
    title: "Commerce",
    imageUrl: require("../assets/Image/Home/comm.png"),
    color: GlobalStyles.colors.categoryBlue,
    navigate: "Commerce",
  },
  {
    id: 8,
    title: "Lit in English",
    imageUrl: require("../assets/Image/Home/lit.png"),
    color: GlobalStyles.colors.categoryPurple,
    navigate: "Literature",
  },
];
