express = require 'express'
router = express.Router()

# GET home page.

router.get '/', (req, res) ->
  res.render 'index', { title: 'Express' }

router.get '/login', (req, res) ->
  res.render 'login', { title: 'Express' }

router.get '/register', (req, res) ->
  res.render 'register', { title: 'Express' }

router.get '/dashboard', (req, res) ->
  res.render 'dashboard', { title: 'Express' }

router.get '/home', (req, res) ->
  res.render 'home', { title: 'Express' }

router.get '/writer', (req, res) ->
  res.render 'writer', { title: 'Express' }

router.get '/about', (req, res) ->
  res.render 'about', { title: 'Express' }

router.get '/contactus', (req, res) ->
  res.render 'contactus', { title: 'Express' }

router.get '/team', (req, res) ->
  res.render 'team', { title: 'Express' }

router.get '/crops', (req, res) ->
  res.render 'crops', { title: 'Express' }



module.exports = router
