let regex = /harry/;
//regex=/^harryc/;   // it will starts matching from first
//regex=/rryc$/     // it will starts matching from last
//regex=/h.rry/    // it will any one character
//regex=/h*rry/    // it will match 0 or more characters
//regex=/ha?rryi?t/  // after character means that character is optional
//regex=/h\*rry/
//regex =/h[a-z]rry/    // matches any character from (a-z);
//regex=/h[aty]rry/        // matches the character from a, t,y;
//regex=/h[^aty]rry/       // ^ not matches from a,t,y
//regex=/h[^aty]rr[^yu]/
//regex=/h[a-zA-Z]rr[yYu]/    // it matches A-Z and a-z and yYu;
//regex=/h[a-zA-Z]rr[yu0-10]/    // it matches A-Z and 0-10;
//regex=/h[a-zA-Z]rr[yu0-10][0-9]/
//QUANTIFIERS
//regex = /har{2}y/;   // it can occur r(2 times);
//regex = /har{0,2}y/     // {0,2} r occurs without(0) /with(2 times)
//GROUPINGS we use paranthesis for groupings();
//regex=/(harry){2}/
//regex=/(har){2}[(0-9)r{5}]/
//regex=/\wt/                  // returns word character or _ or alphabets or numbers
//regex=/\w+oe/                    // returns word character and also matches oe 
//regex=/\WJEAL/          // non word character
//regex=/\W+/
//regex=/\W+JEAL/   // non Word character 
//regex=/\d234/
regex = /number \d+/  // matches one or more digits
regex = /number \d999/   // matches the digits
regex = /\D999/   // matches the Non digit
regex=/\D+999/
regex=/\snumber/  // matches white spaces and also \t and more white spaces
regex=/\s+number/   // matches more than spaces
regex=/\Snumber/ //matches non-whitespaces
regex=/\S+number/
regex=/ka\b/    //word boundary
//ASSERTIONS
regex=/n(?=u)/   //adj number 
regex=/n(?!u)/
//let str = "harry is harry"; 
str = "harrykauioyu %$&number 89999 harry999"

let result = regex.exec(str);
console.log(result);
if (regex.test(str)) {
    console.log(` The String ${str} matches the expression ${regex}`);
}
else {
    console.log(` The String ${str} doesnot matches the expression ${regex}`);
};