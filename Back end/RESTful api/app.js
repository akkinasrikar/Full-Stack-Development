const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

const article1 = new Article({
    title : "API",
    content : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
});

const article2 = new Article({
    title : "Bootstrap",
    content : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
});

const article3 = new Article({
    title : "DOM",
    content : "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document."
});

/*
Article.insertMany([article1, article2, article3], function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Successfully saved all the articles to wikiDB");
    }
});
*/

app.route("/articles")

    .get(function(req, res){
        Article.find({},function(err, foundArticles){
            if(!err){
                res.send(foundArticles);
            } else {
                res.send(err);    
            }
        });
    })

    .post(function(req, res){
        const newArticle = new Article({
            title : req.body.title,
            content : req.body.content
        });
        newArticle.save(function(err){
            if(!err){
                res.send("Successfully added a new article");
            } else {
                res.send(err);
            }
        });
    })

    .delete(function(req, res){
        Article.deleteMany(function(err){
            if(!err){
                res.send("Successfully deleted all articles");
            } else {
                res.send(err);
            }
        });
});


app.route("/articles/:articleTitle")

    .get(function(req, res){
        Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
            if(foundArticle){
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title was found");
            }
        });
    })

    .put(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: req.body},
            {overwrite: true},
            function(err){
                if(!err){
                    res.send("Successfully updated article");
                }
            }
        );
    })

    .patch(function(req, res){
        Article.updateOne(
            {title: req.params.articleTitle},
            {$set: {title:req.body.title}},
            function(err){
                if(!err){
                    res.send("Successfully updated article");
                } else {
                    res.send(err);
                }
            });
    })

    .delete(function(req, res){
        Article.deleteOne(
            {title: req.params.articleTitle},
            function(err){
                if(!err){
                    res.send("Successfully deleted the corresponding article");
                } else {
                    res.send(err);
                }
            });
    });


app.listen(3000, function() {
  console.log("Server started on port 3000");
});