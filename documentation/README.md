# Readme for documentation

## Introduction
This document is an index into the different directories in the documentation space.

## Definitions
The [definitions](./definitions.md) document is kepts in this directory and not in a sub directory.  
##### **Note**: Keeping this document and the requirements and all other documents in sync and up to date is a pain. If you find that a definition is misspelled, incorrectly used then fix it.  But you better be right.

## Documentation Index
This document should keep topic areas for the different parts of the system.  Update this document as new areas are brought up and discussed.  Add the file here if created.
1. [UI](./ui/main-ui-document.md)
    * document how the different components are connected in the UI and communicate locally
    * Discussion how data is passed and kept up to date etc.
    * wireframes for the UI are kept here
2. [API](./api/Main-API-documentation.md)
    - documents how the API communicats with the UI and Db
    - discussions on security
    * Any model of the API is kept in the model directory in the StarUML file.
3. [Engine](./engine/Main-Engine-documentation.md)
    - how the data is created
    - discussion on the state machine of the engine
    - discussion on how the engine will address heirarchy file creation
    * Any model of the Engine statemachine, etc are kept in the model directory inthe StarUML file
4. [Database](./database/Main-Database-documentation.md)
    - data schema (not postgres db schema but table schema) for storing data
    - how templates are stored for work from the engine, and how data is stored before bundled and sent back to ui
    * Any model of the Database statemachine, etc are kept in the model directory inthe StarUML file
5. [Build](./build/buildProcess.md) 
    - how to build the system for development, test and production
6. [model](./model/Model-Documentation.md) 
    - different modeling diagrams for understanding the system more
7. [misc](./misc/livingSpec.md) 
    - a document which was first used to thing thru this project. The output of that is in the md and .pdf. 
    - Use these with caution as they are both out of date as of 06 Feb 2022.  