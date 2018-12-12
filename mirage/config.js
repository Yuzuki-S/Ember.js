export default function() {
  this.namespace = "/api";
  this.get("/data", function() {
    return {
      data: [
        {
          id: "egmont-street-eatery",
          title: "Egmont Street Eatery",
          street: "Egmont St",
          range: "10-20",
          distance: "98m"
        },
        {
          id: "little-penang",
          title: "Little Penang",
          street: "Dixon St",
          range: "8-15",
          distance: "130m"
        },
        {
          id: "red-hill",
          title: "Red Hill",
          street: "Dixon",
          range: "10",
          distance: "600m"
        }
      ]
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
