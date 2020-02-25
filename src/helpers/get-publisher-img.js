export const getPublisherImage = publisher =>
  require(`./../images/publishers/${publisher
    .toLowerCase()
    .split(" ")
    .join("_")}.png`)
