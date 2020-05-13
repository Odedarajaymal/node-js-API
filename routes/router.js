const express = require('express')
const router = new express.Router()
const API = require('../models/user')


router.post('/api/users',async(req,res)=>{
    const api = new API(req.body)
    try{
         await api.save()
         res.status(201).send(api)
    }catch (e){
         res.status(400).send({e:'some errors'})
    }
})

router.get('/api/users',async (req,res)=>{
    try{
   const api =  await API.find({})
        res.status(200).send(api)
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/api/users/:id',async (req,res)=>{
    try{
        const api = await API.findById(req.params.id)
        if (!api) {
            return res.status(404).send()
        }

        res.send(api)
    }catch(e){
      res.status(400).send(e)
    }
})


router.put('/api/users/:id',async (req,res)=>{
    try{
       const api =  await API.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true })
       if (!api) {
        return res.status(404).send()
    }

    res.send(api)
    }catch(e){ 
        res.status(400).send(e)
    }
})

router.delete('/api/users/:id',async (req,res)=>{
    try{
        const api =  await API.findByIdAndRemove(req.params.id)
        if (!api) {
            return res.status(404).send()
        }
    
        res.send(api)   

    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router