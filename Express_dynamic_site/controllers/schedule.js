const Schedule = require('../model/schedule')

exports.getSchedule = (req, res, next) => {
  Schedule.find()
    .then(schedule => {
      console.log(schedule)
      res.render('schedule', {
        pageTitle: 'Schedule',
        links: ['speakers', 'about', 'schedule', 'contact'],
        schedule: schedule
      })
    })
    .catch(err => console.log(err))
}
