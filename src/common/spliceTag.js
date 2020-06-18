export default function spliceTag(str) {
  let m1 = str.match(/(.*?)|/)
  let m2 = str.match(/|(.*?)/)
  return m1
}