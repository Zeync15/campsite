export const sampleData = [
  {
    id: "1",
    title: "Trip to Empire State building",
    date: new Date("2018-03-21"),
    category: "culture",
    photo:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },
    venue: {
      address: "Empire State Building, 5th Avenue, New York, NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: new Date("2018-03-18"),
    category: "drinks",
    photo:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: {
      address: "NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },
    venue: {
      address: "Empire State Building, 5th Avenue, New York, NY, USA",
      latLng: {
        lat: 40.7484405,
        lng: -73.98566440000002,
      },
    },
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "a",
        displayName: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        displayName: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
];
