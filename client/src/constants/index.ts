import {
  House,
  User,
  PersonStanding,
  AtSign,
  Speech,
  Glasses,
} from "lucide-react";

const links = [
  {
    name: "Home",
    url: "/",
    icon: House,
    description: "Home page",
  },
  {
    name: "Profile",
    url: "/profile",
    icon: User,
    description: "Your profile",
  },
  {
    name: "Users",
    url: "/users",
    icon: PersonStanding,
    description: "List of users",
  },
  {
    name: "Authors",
    url: "/authors",
    icon: Speech,
    description: "List of authors",
  },
  {
    name: "Tweets",
    url: "/tweets",
    icon: AtSign,
    description: "List of tweets",
  },
  {
    name: "About",
    url: "/about",
    icon: Glasses,
    description: "About the lonely dev who made this site",
  },
];

export { links };
