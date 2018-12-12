import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        id: "egmont-street-eatery",
        title: "Egmont Street Eatery",
        street: "Egmont St",
        range: "10-20",
        distance: "98m",
        image:
          "https://dpjlz66qmvbwg.cloudfront.net/media/images/Egmont_front_shot.2e16d0ba.fill-300x225.jpg"
      },
      {
        id: "little-penang",
        title: "Little Penang",
        street: "Dixon St",
        range: "8-15",
        distance: "130m",
        image:
          "https://b.zmtcdn.com/data/pictures/7/7100087/236e1feb73ae9eec7b291573c7f46cf8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
      },
      {
        id: "red-hill",
        title: "Red Hill",
        street: "Dixon St",
        range: "10",
        distance: "600m",
        image:
          "https://b.zmtcdn.com/data/pictures/3/7100213/bd5aef59bff1aa6137ff9dbac8893a60.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
      }
    ];
  }
});
