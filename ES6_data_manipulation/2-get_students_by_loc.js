export default function getStudentsByLocation(arr) {
  if (!Array.isArray(arr)) {
  return [];
  }
  return arr.map(student => student.id);
}
