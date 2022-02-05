Modifications
=============
<a id="top"></a>

modification | description
:-- | :--
<a href="#pre">pre</a> | place a string in front of data
<a href="#post">post</a> | append a string to data
<a href="#peri">peri</a> | place a string in front and append another string (like using both pre/post)
<a href="#format">format</a> | format the output using a string for guide
<a href="#multiplicity">multiplicity</a> | create multiples of this data in the column given a char/string for a delimiter
<a href="#lowerCase">lowerCase</a> | make all output lower cased
<a href="#upperCase">upperCase</a> | make all output upper case
<a href="#capitalCase">capitalCase</a> | make the first letter of string upper case and lower the rest
<a href="#limit">limit</a> | limit the data to a specific size no padding if fewer char than size.
<a href="#toString">toString</a> | make the output a string no matter the type
<a href="#pad">pad</a> | pad the string to a specific size, truncate if larger.
<a href="#money">money</a> | make the output format as a money value .

---



## <a id="pre">pre</a>

\["pre", string\]

prepend 'string' on the data element

<a href="#top">back to top</a>

## <a id="post">post</a>

\["post", string\]

append 'string' on the data element.

<a href="#top">back to top</a>

## <a id="peri">peri</a>

\["peri", string1, string2\]

a combination of Pre/Post where string1 is prepended and string2 is appended to the data element.

<a href="#top">back to top</a>

## <a id="format">format</a>

\['format', string\]

Format the output according to specification for the rule. ie date use YYYY,etc, Number us 999.99

<a href="#top">back to top</a>

## <a id="multiplicity">multiplicity</a>

\["multiplicity", n, string\]

create multiple output for this data as an array of data or quoted csv. The string parameter is separate value.

ie \["multiples", 4, "|"\] creates the data as a pipe delimited string like "Joe|Carl|Bill|Mike"

<a href="#top">back to top</a>

## <a id="lowerCase">lowerCase</a>

\["lowerCase"\]

for String/Character output the data in all lowercase letters

<a href="#top">back to top</a>

## <a id="upperCase">upperCase</a>

\["upperCase"\]

for String/Character output the data in all uppercase letters

<a href="#top">back to top</a>

## <a id="capitalCase">capitalCase</a>

\["capitalCase"\]

For String/ multiple Characters, have the first letter uppercase and the remaining lowercase

<a href="#top">back to top</a>

## <a id="limit">limit</a>

\["limit", n\]

Limit the output to n characters. This is mainly used for dataset like lorem-ipsum where the output may be too long.

<a href="#top">back to top</a>

## <a id="toString">toString?</a>

\["toString"\]

Mainly used on Number output to format the output number as a string

<a href="#top">back to top</a>

## <a id="pad">pad</a>

\["pad", n\]

Pad the output with n spaces. On numbers the spaces will be prepended the number, on string/char the spaces will be appended.

<a href="#top">back to top</a>

## <a id="money">money</a>

\["money", char\]

format the output (number) to be a money value pre-pending char. \["money", "$"\] make 12345 => $123.45 String

<a href="#top">back to top</a>
