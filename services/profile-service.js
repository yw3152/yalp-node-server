const dao = require('../db/profile/profile-dao');

module.exports = (app) => {

    const updateProfile = (req, res) => {
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status))
    }
    const createProfile = (req, res) =>
        dao.createProfile(req.body)
            .then((newProfile) => res.json(newProfile));


    const findAllProfiles = (req, res) =>
        dao.findAllProfiles()
            .then(profiles => res.json(profiles));
    const deleteProfile = (req, res) => {}

    app.put('/api/profile/', updateProfile);
    app.delete('/api/profile', deleteProfile);
    app.post('/api/profile', createProfile);
    app.get('/api/profile', findAllProfiles);
};
