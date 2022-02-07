Definitions
===========

Term | Definition 
:-- | :--
Row | This is a row of data that has a set of columns of data. There can be `n` number of types of rows. They can inter-relate to other rows. <br/>**Note**: the term Row is interchangeable with JSON object (if JSON is the selected output option). This document will use the term ROW.
Column | This is the data in a row. There can be `x` number of columns in a **row**. Data is defined by a **rule**. the Data is manipulated by **parameters** (params). Data is augmented by **modifications** (mods). <br/>**Note**: the term Column is interchangeable with attribute in a JSON object. This document will use the term COLUMN.
Column Definition | A Column Definition defines how data is generated and how it will be presented. Column Definition has the **name**, the **rule**, rule **parameters** (params) , rule **datasets**, final **modifications** (mods), p**ersistent**, and other **triggers**.
Name | The Name is a required part of the column definition. It is the column name if a header record is required, and the attribute of a JSON object if the output is JSON data.
Rule | The Rule is a required part of the column definition. A Rule defines what is put into a column of data. The rule defines how the data is generated or calculated. Rules may use a **Dataset** for the data. Rules may also use **Parameters** when building or selecting the data.
Dataset | the Dataset is an optional part of the Rule. A Dataset is a predefined set ( 1 .. \* ) of values a Rule can use to select and use as the output for the column. Datasets include Names, Cities, Counties, Languages, Letters, Special Characters etc.
Parameter |The Parameter is an optional part of the Rule. A Parameter is a limiting or further defining factor(s) for a rule when generating data.
Modification |The Modification is an optional part of the column definition. Modifications (mods) are manipulations set to the data after the Rule has completed. Mods are predefined and allowed/limited to a Rule but not part of the Params. Many Mods can be used on all Rules.
Persistent | The Persistent is an optional part of the column definition. It is an array of keywords which will tell the data generator to handle this column in a very special way. The keywords are **Singular**, **Increment**, **Unique**, **Tally**. These keywords are by default off. By including them in the Persistent activates them.
Trigger | Trigger is an optional part of the column definition. Is a way for the data designer to add a small snippet of javaScript code as a modification to the generated data. <br/>_**This feature will not be implement in the first few minor releases of 2.0.**_