const Speaker = require('../model/speaker')

exports.addSpeaker = (req, res, next) => {
  const name = req.body.name
  const title = req.body.title
  const description = req.body.description
  const skills = req.body.skills
  const personalInfo = req.body.personalInfo
  const socials = req.body.socials
  const speaker = new Speaker({
    name: name,
    title: title,
    description: description,
    skills: skills,
    personalInfo: personalInfo,
    socials: socials
  })
  speaker
    .save()
    .then(res => {
      console.log('Speaker added', res)
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getAllSpeakers = (req, res, next) => {
  Speaker.find()
    .then(speakers => {
      res.render('speakers', {
        pageTitle: 'Speakers',
        links: ['speakers', 'about', 'schedule', 'contact'],
        speakers: speakers
      })
    })
    .catch(err => console.log(err))
}

exports.getSpeaker = (req, res, next) => {
  const prodId = req.params.speakerId
  Speaker.findById(prodId)
    .then(speaker => {
      res.render('single-speaker', {
        speaker: speaker,
        pageTitle: speaker.title,
        path: '/speakers'
      })
      next()
    })
    .catch(err => console.log(err))
}
