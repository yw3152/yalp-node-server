const model = require('./restaurant-model');

const findRestaurantsByName = (name) => model.find({name: name});

const findRestaurantsByCity = (city) => model.find({city: city});

const findRestaurantById = (id) => model.findOne({_id: id});

const postRestaurant = (info) => model.create(info);

const findRestaurantByAuthor = (author_id) => model.find({author: author_id});

module.exports = {
    findRestaurantsByName,
    findRestaurantsByCity,
    findRestaurantById,
    postRestaurant,
    findRestaurantByAuthor
};
