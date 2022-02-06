# Thoughts on the Egnine.

## Intro
This doucment is just a way for the to put down some thoughts.  I have them every once in a while and if I don't write them down I will lose them. Also, as I put them down and walk away for a while and revisit them and thing, `that was crap.`  That is good -- just so I don't get in the practice of thinking that whatever I think is good.

## Index
* <a href="#rules">thoughts on Rules</a>
* <a href="#modification">thoughts on Mods</a>
* <a href="#persistent">thoughts on Persistents</a>
* <a href="#options">thoughts on Options</a>
* <a href="#files">thoughts on file retrieval</a>


### <a id="rules">Rules</a>
#### Rules code kept in the db. 
* How about having the Rules in the db.  What I am thinking here is that I can build a class to have the rule and it be stored in a record.  Not sure if that would work. Can I have the server side lookup a Rule and then import it, and instantiate the rule, apply it and run from there?

#### Rules having basic methods
* run() - this would be how the system on a normal data building cycle would run the code
* scan() - Thiw was used before (in v1) where the parameters were checked.  I think that will be done earlier and the UI will not allow parameters not allowed.
* If a set of params can be used on multiple Rules, then it becomes a [Mod](./modifications.md) and set in the mod matrix??

### <a id="modification">Mods</a>
#### Modifications kept in a matrix so knowing what mods can be used with what Rules.
* how would that matrix look.
* How can it be validated
* When a change is made (new one added) how can it be tested
* What order must mods be done (I would think ANY order ... how can we test all the combinations of that!?)

### <a id="persistent">Persistents</a>
#### Persistents kept in a matrix so knowing what Persistents can be used with what Rules or column types???.
* How would a matrix for this look (like Mods?)
* 

### <a id="options">Options</a>
#### What options are required.
* First, there are some options I was thinking of using that really were not required to be used since they can be calculated. 
* I think that `how many records should a file have` if there are multiple files is OK. I was thinking that doing some testing on building, storing, retrieving and downloading which would help to determine the max number (say 100k/file or 1M).



### <a id="files">files</a>
#### This started in the options but moved it here to explore more thoughts.
* being able to bundle the files into a .zip file and download would be good.  
* what if there was a way to push the data onto a `Box` or `Dropbox` somewhere?
