const model = require('./review-model');

const findAllReviews = () => model.find();

const findReviewsByRestaurantId = (id) => model.find({'restaurant.location_id': id});

const findReviewsByLocalRestaurantId = (id) => model.find({'restaurant._id': id});

const createReview = (review) => model.create(review);

const deleteReview = (id) => model.deleteOne({_id: id});

const updateReview = (id, review) => model.updateOne({_id: id}, {$set: review});

module.exports = {
    findAllReviews,
    findReviewsByRestaurantId,
    findReviewsByLocalRestaurantId,
    createReview,
    deleteReview,
    updateReview
};

