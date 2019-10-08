import { Menu } from '../model/menu'

export const getMenu = (req, res, next) => {
  Menu.find()
    .then(doc => {
      if (!doc) {
        res.status(404).json({
          message: '404! Not found in database'
        })
      }
      res.status(200).json({ data: doc })
    })
    .catch(err => res.status(500).json({
      message: 'Fetching error occured',
      error: err
    }))
}
