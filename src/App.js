import React from 'react'
import $ from 'jquery'

export  default  class App extends  React.Component {
    componentDidMount() { //весь код находится в html

        console.log('Header component')

        $('<h1 />')
            .text('Hello world from JQuery')
            .css({
                textAlign: 'center',
                color: 'red'
            })
            .appendTo($('header'))
    }

    render() {
        return (
            <React.Fragment>
            <header></header>
        <hr/>
        <div className="box">
            <h2 className="box-title">Box title</h2>
            <p className="'box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus dolor
                dolores est et illo nostrum provident tenetur voluptas voluptate?</p>
        </div>
            </React.Fragment>
        )

    }
}