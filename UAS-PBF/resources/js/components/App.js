import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import MahasiswaIndex from './MahasiswaIndex'
import MahasiswaCreate from './MahasiswaCreate'
import MahasiswaShow from './MahasiswaShow'
import MahasiswaEdit from './MahasiswaEdit'
 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                    <Route exact path='/' component={MahasiswaIndex}/>
                    <Route exact path='/create' component={MahasiswaCreate} />
                    <Route path='/mahasiswa/edit/:id' component={MahasiswaEdit} />
                    <Route path='/mahasiswa/:id' component={MahasiswaShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))