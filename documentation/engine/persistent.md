# Persistent
## Persistent is an array in the column definition.

### There are specific keywords that are allowed in persistent. Each keyword will allow the data generator to act differently for the specific column.

**keyword** | **Description**
:-- | :-- 
Singular | Singular will use a column's RULE to build the first data for the column. After that, for each row in this column the same data value will be used.
Unique | Unique will insure that each time a value is generated it has not been already used in this column for this document. This will not ensure that the value is in another column in the document.
Increment | Increment will use the RULE to build the first data for the column (number) and then it will subsequently increment that value by 1 (one). The number can begin at any value according the the parameter
Tally |sTally will keep a running total (sum) of this column. It can be retrieved using the RULE: GrandTotal