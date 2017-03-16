// Convert date in database into js Date
export default dbDate => {
  const tabDate = dbDate.split("/").reverse()
  return new Date( ...tabDate  )
}
