const path = require('path')
const express = require('express')
const fs = require('fs')

const routes = require('./routes')
const app = express()

const bodyParser = require('body-parser')

app.set