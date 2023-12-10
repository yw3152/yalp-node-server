const dao = require('../db/review/review-dao');

module.exports = (app) => {
    const findAllReviews = (req, res) =>
        dao.findAllReviews()
            .then(reviews => res.json(reviews));

    const findReviewsByRestaurantId = (req, res) =>
        dao.findReviewsByRestaurantId(req.params.id)
            .then(reviews => res.json(reviews));

    const createReview = (req, res) =>
        dao.createReview(req.body)
            .then(insertedReview => res.json(insertedReview));

    const deleteReview = (req, res) =>
        dao.deleteReview(req.params.id)
            .then(status => res.send(status));

    app.get('/api/reviews', findAllReviews);
    app.get('/api/reviews/:id', findReviewsByRestaurantId);
    app.post('/api/reviews', createReview);
    app.delete('/api/reviews/:id', deleteReview);
    // app.put('/api/reviews/:id', updateReview);

}