# Rules

## The Rules will be created ahead of time and compiled into the system. Some rules would be:

<a id="top"></a>
Rule | Description
:-- | :--
<a href=#number>Number</a> | Build a number according to parameters
<a href="#date">Date</a> |Build a date according to the parameters specified
<a href="#parameter">Parameter</a> | Randomly selects from the parameters for the data
<a href="#character">character</a> | builds a character(s)
<a href="#dataset">dataset</a> | uses a specific dataset for data
<a href="#format">format</a> | creates an output according a format
<a href="#ssn">ssn</a> | builds a ssa qualified test ssn
<a href="#sameas">sameAs</a> | uses the data from a apiori column
<a href="#binary">binary</a> | true or fase 
<a href="#guid">guid</a> | builds a random v4 uuid
<a href="#gender">gender</a> | 
<a href="#address">address</a> | build an address
<a href="#email">email</a> | builds an email accordint to the parameters
<a href="#grandtotal">grandtotal</a> | places the tally in the attribute

---
## <a id="number">Number</a>
Build a number according to the parameters specified.

### Output Type:
* The output will be a number unless a Modification makes it a string

### Dataset:
N/A

### Parameter
* \["startAt", n\]
* \["between",n,m\]
* if no parameter then it will default to \["startAt",0\]

### Modifications
None

### Persistents
* Singular
* Total

### Example:
```
    attribute: index
    Parameter: startAt, 5

    attribute: age
    Parameter: between, 30, 45
```
### result
```
    index: 5
    age: 33
```
<a href="#top">back to top</a>
## <a id="date">Date</a>

Build a date according to the parameters specified

N/A

\["past", n, m, timeframe\]

\["future", n, m, timeframe\]

n,m are integers between timeframe (days, months, years) date is calculated.

\["now"\]

\["age", string\] use a previously created attribute's number as the age to build date from.

\["set", date\] set a specific date

if no parameters given then default is \["now"\]

\["format", string\]

Singular

<a href="#top">back to top</a>

## <a id="parameter">Parameter</a>

Randomly select data given in the parameters

N/A

required: \[value1, value2, ... valueN\] values used by rule

<a href="#top">back to top</a>

## <a id="character">Character</a>

Randomly choose characters. If parameters are given then they will focus the set. Character Rule will use Number, letters, SpecialCharacters to select from.

N/A

\["includeNumbers"\]

\["includeSpecialChar"\]

<a href="#top">back to top</a>

## <a id="dataset">Dataset</a>

Select from the given Dataset a value

see list of Datasets to choose from

\["limit",n\]

Singular

<a href="#top">back to top</a>

## <a id="format"> Format</a>

Create an output using random Characters and numbers according to the Parameter

required: \[format String\]

%3s-%2d.%2d = xxx-nn.nn

Singular

<a href="#top">back to top</a>

## <a id="ssn"> SSN</a>

Create an output using the SSA's rules for test SSN/TNN

N/A

\["useDashes"\] Will put dashes in format :999-99-9999

Singular

<a href="#top">back to top</a>

## <a id="sameas"> SameAs</a>

use the result of an attribute which is already created on this row (Cannot use SameAs for a future attribute)

N/A

required: \[attribute\]

<a href="#top">back to top</a>

## <a id="binary"> Binary</a>

Randomly select True/False

N/A

\["yn"\] output "yes"/"no" string

\["10"\] output "1" / "0" string

with no parameters the default is true/false

\[upperCase, lowerCase,

capitalCase, limit\]

<a href="#top">back to top</a>

## <a id="guid"> GUID</a>

Build a 5 segment v4 guid in format

"xxxxxxxx-xxxx-Mxx-Nxx-xxxxxxxxxxxx"

N/A

\["version", 1..4\] to 'force' the M to number but know that it will not conform to uuid standard.

with no parameters the default is \["version", 4\]

Singular

<a href="#top">back to top</a>

## <a id="gender"> Gender</a>

return Male, Female

N/A

\["unk"\] will add Unknown as a value randomly

\["na", binary\] will randomly put "N/A" as gender or if binary=true leave blank.

<a href="#top">back to top</a>

## <a id="address"> Address</a>

builds a typical address with the format of number+space+street name+space +street type

N/A

uses streetNames, streetTypes

Singular

<a href="#top">back to top</a>

## <a id="email"> Email</a>

Build an email address according to parameters local@hostname.domain

N/A

uses:

Characters, FirstName,

LastName,

Hostnames,

Domains

\["attributes", string1, string2, binary\] builds an email addressing using data in attribute string1 and string2.

if binary = true then use first letter in string1 and string2 as local.

no parameters will generate a random string 9-13 char long as local

Singular

Unique

<a href="#top">back to top</a>

## <a id="grandtotal"> GrandTotal</a>

will put the running total of an attribute.

N/A

required: \["attribute"\] the column which used the **persistent.total** keyword.

<a href="#top">back to top</a>
