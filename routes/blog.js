const express = require('express')
const path =require('path')
const blogs =require('../data/blogs')
const e = require('express')
const router=express.Router()

router.get('/',(req,res)=>{ 
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})
router.get('/blog',(req,res)=>{
   
    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('blogHome',{
        blogs:blogs
    })
  
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlog=blogs.filter((e)=>{
       return e.slug==req.params.slug;
    })
    res.render('blogPage',{
        title:myBlog[0].title,
        content1:myBlog[0].content1,
        content2:myBlog[0].content2,
        content3:myBlog[0].content3,
        content4:myBlog[0].content4,
        content5:myBlog[0].content5,
        content6:myBlog[0].content6,
        heading1:myBlog[0].heading1,
        heading2:myBlog[0].heading2,
        code1:myBlog[0].code1,
        code2:myBlog[0].code2,
        code3:myBlog[0].code3,
        image:myBlog[0].image,
        color:myBlog[0].color,

    })
    // res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})
module.exports=router