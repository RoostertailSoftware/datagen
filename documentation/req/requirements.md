# Requirements

## 1. Introduction
At times there is a need to have what may look like PHI or PII data for testing and development.  Testing with real PHI/PII data has the hazzard of possible data spill. Furthermore, the inconvenience of developing on a system with the security needed to handle PHI/PII data is at time restricting.  The requirements are for a product which will generate data and be flexible and generic enough to acoomidate almost perfect data in many forms and data types.

## 2. Purpose
The overall product will be a web application for defining the template used to build one or more row types of data (think header, body, trailer).  The System will also have a server side data generator engine to interpate the template and produce an output.

## 3. Intended Audience
The System is designed to be used by developer, data analysist and db administrators.  Developers will be abl to generate the amount and type of data required to mimmic a production or in development data system and continue to work locally.  Data analysists will be able to generate data with specificity for work on heirarchial system before working on real data.  Data base administrators can generate large data sets of any size records to test different fasets of a new system.

## 4. Scope
This document is solely about this software.

## 5. Definitions
The system will use the definitions found in the [ definitions ](../definitions.md) file in the documentation directory.


## 7. UI
    7.1 UI - System shall have a UI component
    1.1 Document configuration is done via UI
    1.2 Ability to store frequently used configuration
    1.3 Shall be able to download configuration
    1.4 Shall be able to upload configuration
        1.4.1 Shall be able to verify/validate configuration
        1.4.2 correctness

## 8.0 API
    8.1 The System shall have a API component
    2.1 login users? or just let them have a named space for templates.
    2.2 template retrieval
    2.3 document send

## 9.0 Database
    9.1 The System shall have a db Component
    3.1 document configuration templates
    3.2 Store legit user's configuration
    3.3 document temporary data

## 10.0 Data
    10.1 The System will use a standard, human readible Configuration Template
    4.1 The Configuration Template will have three sections
        4.1.1 Template will have an Options section which defines how the output file is created, named
            4.1.1.1 [Options](./options.md)
        4.1.2 Template will have a documentation section that is for the humnas and not read by system for configuration
        4.1.3 Template will have a row configuration section which holds all column information for a data row
            4.1.3.1 Column definitions are defined in Requirement 5.0
        4.1.4 Template will have a row directive section to define how each row relates to another if applicable
        
    Column Definitions - Row definitions will have column definitions
    5.1 Name
    5.2 Data type
    5.3 Data size
    5.4 Rules
    5.5 Modifications
    5.6 Persistent

## 11.0 System
    11.1 The system shall be responsive

## 12.0 Security 
    12.1 the system shall be secure
