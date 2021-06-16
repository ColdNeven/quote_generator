import {config} from './modules/config'
import AppService from "./modules/app.service";
import './css/index.css'
import './less/index.less'
// import './scss/index.scss'
import React from "react";
import {render} from "react-dom"
import App from "./App";
import './modules/ts.module'

console.log('Config key:', config.key)

const service = new AppService('Hello world!')
service.log()

render(<App />, document.getElementById('app'))