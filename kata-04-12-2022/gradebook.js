/*
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60		'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

//Solution 1
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3
  	if(score >= 90 && score <= 100) {
    	return "A"
  	}else if(score >= 80 && score < 90){
    	return "B"
  	}else if(score >= 70 && score < 80){
    	return "C"
  	}else if(score >= 60 && score < 70){
    	return "D"
  	}else if(score >= 0 && score < 60){
    	return "F"
  	} 
}

//Solution 2
function getGrade (score1, score2, score3) { 
  let average = (score1 + score2 + score3) / 3
  	
    if(average >= 90 && average <= 100) return "A"
  	
    else if(average >= 80 && average < 90) return "B"
  	
    else if(average >= 70 && average < 80) return "C"
    
    else if(average >= 60 && average < 70) return "D"
  	
    else if(average >= 0 && average < 60) return "F" 
}

//Solution 3
function getGrade (score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3
  switch(true) {
    case average >= 90:
      return 'A';
    case average >= 80:
      return 'B';
    case average >= 70:
      return 'C';
    case average >= 60:
      return 'D';
   default:
      return 'F';
  }
}