const axios = require('axios');

const bufferFrom = Buffer.from ? Buffer.from : new Buffer;

exports.composeRequest = ({ username, pass, jiraOrigin, jql, options }) => (
  {
    url: `${jiraOrigin}/rest/api/2/search?jql=${jql}&${options}`,
    method: 'GET',
    headers: {
      'Authorization': "Basic " + bufferFrom(`${username}:${pass}`).toString('base64')
    }
  })

exports.getList = (httpRequestOptions) => axios(httpRequestOptions)
