const dao = require('../db/restaurant/restaurant-dao');

module.exports = (app) => {
    const findRestaurantsByName = (req, res) =>{
      console.log("find restaurant in server", req.params)
        dao.findRestaurantsByName(req.params.name)
            .then(restaurants => res.json(restaurants))};

    const findRestaurantsByCity = (req, res) =>
        dao.findRestaurantsByCity(req.params.city)
            .then(restaurants => res.json(restaurants));

    const findRestaurantById = (req, res) =>{
        console.log("find restaurant by id in server", req.params)
        dao.findRestaurantById(req.params.id)
            .then(restaurants => res.json(restaurants));}

  const postRestaurant = (req, res) =>{
      console.log("post restaurant server", req.body)
      dao.postRestaurant(req.body)
      .then(restaurants => res.json(restaurants));}

  const findRestaurantByAuthor = (req, res) =>{
    console.log("find restaurant by author server", req.params)
    dao.findRestaurantByAuthor(req.params.author)
    .then(restaurants => res.json(restaurants));
  }

    app.get('/api/restaurants/:name', findRestaurantsByName);
    app.get('/api/restaurants/:city', findRestaurantsByCity);
    app.get('/api/restaurants/id/:id', findRestaurantById);
    app.get('/api/restaurants/author/:author', findRestaurantByAuthor);
    app.post('/api/restaurants', postRestaurant)
}