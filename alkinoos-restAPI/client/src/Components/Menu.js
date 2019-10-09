import React, { Fragment, Component } from 'react'
import MenuItem from './MenuItem'
import Navbar from './Navbar'
import db from '../base'

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      appetizers: false,
      desserts: false,
      salads: false,
      maindishes: false,
      links: ['menu', 'book-table']
    }
  }

  componentDidMount() {
    fetch('http://localhost:8070/api/menu')
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch menu')
        }
        return res.json()
      })
      .then(doc => {
        Object.values(doc.data).forEach(item => {
          this.setState({
            appetizers: item.Appetizers,
            desserts: item.Desserts,
            salads: item.Salads,
            maindishes: item.MainDishes
          })
        })
      })
      .catch(err => console.log(err.status))
    // db.collection('menu')
    //   .get()
    //   .then(snapshot => {
    //     snapshot.docs.forEach(doc => {
    //       console.log('Doc from Firestore: ', doc.data())
    //       this.setState({
    //         appetizers: doc.data().Appetizers,
    //         desserts: doc.data().Desserts,
    //         salads: doc.data().Salads,
    //         maindishes: doc.data()['Main-dishes']
    //       })
    //     })
    //   })
  }

  render() {
    const { appetizers, desserts, salads, maindishes, links } = this.state
    return (
      <Fragment>
        <Navbar name="Alkinoos Taverna" hashlink={false} links={links} />
        <section id="menu" className="section menu container fade-in">
          <h1 className="heading heading--center menu__heading">Menu</h1>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">Appetizers</h2>
                <ul className="menu__list">
                  {appetizers
                    ? appetizers.map(appetizer => <MenuItem menu={appetizer} />)
                    : null}
                </ul>
              </article>
            </div>
            <div className="section__col">
              <h2 className="menu__title">Desserts</h2>
              <ul className="menu__list">
                {desserts
                  ? desserts.map(dessert => <MenuItem menu={dessert} />)
                  : null}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">Salads</h2>
                <ul className="menu__list">
                  {salads ? salads.map(salad => <MenuItem menu={salad}/>) : null}
                </ul>
              </article>
            </div>

            <div className="section__col">
              <article className="menu__container">
                <h2 className="menu__title">Main dishes</h2>
                <ul className="menu__list">
                  {maindishes ? maindishes.map(maindish => <MenuItem menu={maindish}/>) : null}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default Menu
