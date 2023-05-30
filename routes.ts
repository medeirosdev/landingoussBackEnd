import { Request, Response } from 'express';

const Router = require('express').Router()

import Controller from "./controller"

Router.post('/send' , Controller.ResponseBody)

module.exports = Router;