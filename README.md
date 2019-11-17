# Tweet Cleaner

## Purpose
This simple app intends to delete tweets that match a query

## Configuration
Define them for Twitter as environnement variable while running the script
`CONSUMER_KEY`
`CONSUMER_SECRET`
`ACCESS_KEY`
`ACCESS_SECRET`
`USER`

## Deployement
To make it callable once every 48h, simply use crontab.
```sh
crontab -e
# 0 2 */2 * * CONSUMER_KEY=<your_key> CONSUMER_SECRET=<your_key> ACCESS_KEY=<your_key> ACCESS_SECRET=<your_key> USER=<twitteruserid> node <path_to_script>/index.js
````
