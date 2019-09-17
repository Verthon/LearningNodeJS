const Speaker = require('../model/Speaker')

exports.addSpeaker = (req, res, next) => {
  console.log(req.body)
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
      console.log(speakers)
      res.render('/speakers', {
        speakers: speakers,
        pageTitle: 'Speakers'
      })
    })
    .catch(err => console.log(err))
}
