var surveys = [
  {
    title: 'Restaurant A',
    creator: 'Person A',
    votes: 5
  },
  {
    title: 'Restaurant B',
    creator: 'Person B',
    votes: 4
  },
  {
    title: 'Restaurant C',
    creator: 'Person C',
    votes: 3
  }
];

module.exports = {
  get: function (req, res) {
    res.send(surveys);
  },
  getOne: function (req, res) {
    var id = req.params.id;
    res.send(surveys[id]);
  }
};
