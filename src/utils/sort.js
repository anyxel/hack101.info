export const sort = data => {
  return data.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else if (a.id < b.id) {
      return -1
    }
    return true
  })
}
