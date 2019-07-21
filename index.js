const fs = require('fs');
const getRepoInfo = require('git-repo-info');
const express = require('express');
const app = express();


app.get('/api/chat/:conversationId', async (req, res) => {
  const { conversationId } = req.params;

  res.send({
    conversationId,
  })
});


app.get('/api/getControlData', (req, res) => {
  const gitRepoInfo = getRepoInfo();
  res.send(gitRepoInfo);
});


const port = process.env.PORT || 8000;
app.listen(port);
console.log('Service listening on port', port);
