const router = require('express').Router();
const axios =  require('axios')


router.get('',async (req,res)=>{
    try{
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts`) ;
        res.render('news', {article:newsAPI.data})
    }
    catch(err){
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else if(err.request){
            console.log(err.request);
        } else{
            console.error('Error:', err.message);
        }
    }
});


router.get('/article/:id',async (req,res)=>{
    const articleID = req.params.id
    try{
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`) ;
        res.render('newsSingle', {article:newsAPI.data})
    }
    catch(err){
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }else if(err.request){
            console.log(err.request);
        } else{
            console.error('Error:', err.message);
        }
    }
});


module.exports = router;