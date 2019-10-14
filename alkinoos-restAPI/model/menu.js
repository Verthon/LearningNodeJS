import mongoose from 'mongoose'
const Schema = mongoose.Schema

const menuSchema = new Schema({
  Appetizers: {
    type: Array,
    required: true
  },
  Desserts: {
    type: Array,
    required: true
  },
  MainDishes: {
    type: Array,
    required: true
  },
  Salads: {
    type: Array,
    required: true
  }
})

menuSchema.set('collection', 'menu')

export const Menu = mongoose.model('Menu', menuSchema)
