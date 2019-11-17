const Twitter = require('twitter')

client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_KEY,
  access_token_secret: process.env.ACCESS_SECRET
})

client.get('search/tweets', {q: '#ISS #NASA #space #NoutPei'}, (error, tweets) => {
  if(error) throw error;
  const { statuses } = tweets
  statuses.forEach(({ id_str, user: { id: userId }}) => {
    if(`${userId}` === process.env.USER) {
      client.post(`statuses/destroy/${id_str}`,  (error, tweet) => {
        if(error) throw error
        console.info(`Deleted tweet ${id_str}`)
      });
    }
  })
})
