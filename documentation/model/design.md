# Design

## Introduction
This document will document the decision on the design.  Hopefully, it will be kept up.  The deisgn is for a second generation of a data generator (V2).  The original was build using Nodejs and typescript.  It was all done via a hand build template (config) file.

## TL;DR
* Angular/Material (v14?) UI
* Spring boot API - serve up the UI and connect to db 
* Mongodb cluster
* Nodejs Engine to connect to db for template, Rules, etc and store generated data.

### major question it how to kick off the NodeJS engine to build data

## UI
The Deisgn of V2 will be UI driven for building the configuration (template) file and submitting it to the server.  Because of this, there will be a need for a API and someway to kick off the engine.  

One of the issues found in v1 was the inability to build files up to a specific size.  Last time I checked it would crap out about 200k.

I like the v2+ Angular and component work.  Gonna stick to that.


## API
I have recently gotten into Spring boot.  Use to use NodeJs but think that it is easier to get a singular java jar file that will serve up the angular and connect to the db.

## Engine
I like javascript.  I like some of the freedom I have with this language.  Currently, working on getting this all to work together is fun.

## Db
Mongo is nice -- I can deal with new attributes easier if I use it more like a NoSQL and less like a regular Postgres type db.
