// Convert date in database into js Date
export default dbDate => {
  const tabDate = dbDate.split("/").reverse()

  //convert number of month into jS 0-11
  tabDate[1] -= 1

  //convert number of day into jS 0-30
  tabDate[2] -= 1

  return new Date( ...tabDate  )
}
