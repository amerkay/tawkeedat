// See https://harrisonkolor.medium.com/using-the-instagram-api-serverless-netlify-to-display-your-own-photos-in-2021-7923014522d0
// Current app under kaysilverback FB account.

const axios = require('axios')
const endpoint = 'https://graph.instagram.com'
const userId = process.env.INSTAGRAM_USER_ID
const token = process.env.INSTAGRAM_ACCESS_TOKEN

require('dotenv').config()

exports.handler = async function instagram(event, context, callback) {
  // https://developers.facebook.com/docs/instagram-api/reference/ig-media
  const fields =
    'id,caption,media_url,permalink,comments_count,like_count,timestamp'
  const limit = 9
  const media_type = 'IMAGE'
  const url = `${endpoint}/${userId}/media/?fields=${fields}&access_token=${token}&limit=${limit}&media_type=${media_type}`

  // refresh token 1 in 100 calls
  if (Math.floor(Math.random() * 100) == 1) await refreshToken()

  await axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map((i) => ({
            id: i.id,
            url: i.media_url,
            caption: i.caption,
            comments_count: i.comments_count,
            like_count: i.like_count,
            timestamp: i.timestamp,
          }))
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}

// See https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens/
async function refreshToken(event, context, callback) {
  const url = `${endpoint}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`

  var { data } = await axios.get(url)
  console.log('refreshToken', data)

  return data
}
