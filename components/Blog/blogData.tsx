import { Event } from "@/types/event";

const blogData: Event[] = [
  {
    id: 1,
    title: "Field Exploration & Household Survey",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/events/event1.jpg",
    venue: {
      name: "Adopted Village",
      image: "/images/events/location-icon.jpg",
      location: "Varadharajapuram, Tamil Nadu",
    },
    tags: ["creative"],
    publishDate: "2023",
  },
  // {
  //   id: 2,
  //   title: "Event 2",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/events/events-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/events/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Event 3",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/events/events-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/events/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default blogData;
