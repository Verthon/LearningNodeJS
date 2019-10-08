import mongoose from 'mongoose'
const Schema = mongoose.Schema

const menuSchema = new Schema({
  Appetizers: Array,
  Desserts: Array,
  MainDishes: Array,
  Salads: Array
})

menuSchema.set('collection', 'menu')

export const Menu = mongoose.model('Menu', menuSchema)
