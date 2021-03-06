import { useState, useEffect } from 'react'
import { formatMenu, doFetch } from '../utils/helpers'
import { useGetCollection } from './useGetCollection'

type MenuData = {
  description: string
  name: string
  price: number
}

type MenuCategory = {
  id: string
  data: {
    data: Array<MenuData>
  }
}

type MenuState = Array<MenuCategory>

export const useMenuData = () => {
  const [menu, setMenu] = useState<MenuState>([])
  const [isLoading, setIsLoading] = useState(true)
  const data = [
    {
      id: 'appetizers',
      data: {
        data: [
          {
            description:
              'Refreshing traditional cucumber and garlic yogurt dip. Seasoned with fresh, local herbs.',
            name: 'Tzatziki',
            price: 750
          },
          {
            description:
              'Bite size, beef or lamb meatballs seasoned with fresh Greek herbs.',
            name: 'Keftedakia',
            price: 1600
          },
          {
            description:
              'Fried traditional Greek cheese - Graviera with light hint of lemon and garlic.',
            name: 'Saganaki',
            price: 1500
          }
        ]
      }
    },
    {
      id: 'desserts',
      data: {
        data: [
          {
            description:
              'Egg shaped dessert made from olive oil, honey, cognac, cinnamon, orange.',
            name: 'Melomakarono',
            price: 850
          },
          {
            description:
              'Dessert of semolina custard or rice custard in filo. Coated with a sweet syrup.',
            name: 'Galaktoboureko',
            price: 1100
          },
          {
            description:
              'Dessert cake made primarily from walnuts and covered in a sweet syrup.',
            name: 'Karydopita',
            price: 1000
          }
        ]
      }
    },
    {
      id: 'mains',
      data: {
        data: [
          {
            description:
              'Layers of cooked aubergine slices alternating with minced meat, covered with a thick béchamel sauce.',
            name: 'Moussaka',
            price: 1300
          },
          {
            description:
              'Slow roasted perfectly pink and juicy inside, covered with rosemary, garlic and honey.',
            name: 'Roasted leg of lamb',
            price: 2200
          },
          {
            description:
              'Spicy full of herbs chickpeas soup made from olives, garlic, kale, bay leafs.',
            name: 'Chickpea soup',
            price: 1200
          },
          {
            description:
              'Delightful stew made from octopus braised with wine, shallot onions, tomato, aromatic herb.',
            name: 'Octopus stifado',
            price: 1600
          }
        ]
      }
    },
    {
      id: 'salads',
      data: {
        data: [
          {
            description:
              'Homemade pita bread filled with lettuce, pitted Kalamata olives, onion, roasted peppers and feta.',
            name: 'Pita special',
            price: 500
          },
          {
            description:
              'A truly traditional Greek Salad with ripe tomatoes, cucumbers, bell peppers, onions, and creamy feta.',
            name: 'Horiatiki',
            price: 1000
          },
          {
            description:
              'Vegetarian salad made mostly of finely chopped parsley, with tomatoes, mint, onion and bulgur.',
            name: 'Tabbouleh',
            price: 1100
          }
        ]
      }
    }
  ]
  useEffect(() => {
    doFetch('menu')
      .then(data => {
        console.log('data', data)
        const formattedMenu: MenuState = formatMenu(data.data)
        setMenu(formattedMenu)
        console.log('formattedMenu, menu', formattedMenu, menu)
        setIsLoading(false)
      })
      .catch(error => {
        console.error(error)
        setIsLoading(false)
      })
  }, [])
  return {
    menu,
    isLoading
  }
}
