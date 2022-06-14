/*
    This is our back-end API. It provides all the data services
    our database needs. Note that this file contains the controller
    functions for each endpoint for post
    
    @author Andy Yang
*/

const Post = require('../models/Post')
//const bcrypt = require("bcryptjs");
//const auth = require("../auth");

createPost = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'Improperly formatted request',
        }) 
    }

   
        const newPost = new Post(body);

        try{
            const savedPost = await newPost.save();
            console.log("new post saved: " + newPost._id);
            res.status(200).json(savedPost); 
        }
        catch (err) {
            //console.error(err);
            res.status(500).send(err);
        }
}

updateMovie = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            errorMessage: 'You must provide a body to update movie',
        })
    }

    if(req.user.isAdmin){
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}); //update first, then return new movie 
            console.log("movie updated: " + updatedMovie._id);
            res.status(200).json(updatedMovie); 
        }
        catch (err) {
            console.error(err);
            res.status(500).send();
        }

    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to update movies"});
    }
}

deleteMovie = async (req, res) => {
    console.log("delete movie with id: " + JSON.stringify(req.params.id));
    Movie.findById({ _id: req.params.id }, (err, movie) => {
        console.log("Movie found: " + JSON.stringify(movie));
        if (err) {
            return res.status(404).json({
                errorMessage: 'Movie not found!',
            })
        }

        async function asyncCheckIsAdmin(){
            if(req.user.isAdmin){
                try{
                    const deletedMovie = await Movie.findByIdAndDelete(req.params.id); 
                    console.log("SUCCESS deleted movie");
                    res.status(200).json(deletedMovie); 
                }
                catch (err) {
                    console.error(err);
                    res.status(500).send();
                }
        
            }
            else{
                console.log("incorrect user!");
                res.status(403).json({errorMessage: "You're not allowed to delete movie"});
            }
        }
        asyncCheckIsAdmin();
    })
     
}

getMovie = async (req, res) => {
    try{
        const getMovie = await Movie.findById(req.params.id); 
        console.log("SUCCESS found movie");
        res.status(200).json("movie has been found: " + {getMovie});
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    } 
}

getMovieRandom = async (req, res) => {          // get random movie for the big background screen
    const type = req.query.type;        // example: in movieRoute, ("/getRandom?type=series") will return series

    let movie;
    try{
        if(type === "series"){
            movie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}}                // find all series, then give us 1 sample 
            ])
        }
        else{
            movie = await Movie.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}}                // find all movies, then give us 1 sample 
            ])
        }
        console.log("SUCCESS found random movie");
        res.status(200).json(movie);
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    } 
}

getAllMovie = async (req, res) => {
    if(req.user.isAdmin){
        try{
            const allMovie =await Movie.find(); 
            console.log("SUCCESS get all movies ");
            res.status(200).json(allMovie.reverse());       // return most recent created movies
        }
        catch(err){
            console.error(err);
            res.status(500).send();
        }
    }
    else{
        res.status(403).json({errorMessage: "You're not allowed to see all users"});
    }
}



module.exports = {
    createPost,
    updateMovie,
    deleteMovie,
    getMovie,
    getMovieRandom,
    getAllMovie
};