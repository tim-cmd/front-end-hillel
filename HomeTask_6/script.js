const students = [
  {
      id:10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
      id:11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {
      id:12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {
      id:13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
];

/**
 * @param {object} student students element 
 * @returns {number} student marks avg
 */
function calculateStudentAverageMark(student){
  return calculateAverage(student.marks);
}

/**
 * @param {students[]} studentsList 
 * @returns {number} all students marks avg
 */
function calculateGroupAverageMark(studentsList){
  let allMarks = [];
  studentsList.forEach(student => allMarks = allMarks.concat(student.marks));
  // const allMarks = studentsList.reduce((accum, current) => accum = accum.concat(current.marks),[]);
  return calculateAverage(allMarks);
}

/**
 * @param {number[]} numsArr 
 * @returns {number} array avg
 */
function calculateAverage(numsArr){
  return numsArr.reduce((accum, current) => accum + current) / numsArr.length;
}