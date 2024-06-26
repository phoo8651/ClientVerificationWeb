const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
  res.render('index', { Title: process.env.Title, Company: process.env.Company, Url: process.env.Url, TwitchName: process.env.TwitchName, TwitchLink: process.env.TwitchLink, YoutubeLink: process.env.YoutubeLink });
});

router.get('/interlocking-procedure', (req, res) => {
  res.render('interlocking-procedure', { Title: process.env.Title, Company: process.env.Company, Url: process.env.Url, TwitchName: process.env.TwitchName, TwitchLink: process.env.TwitchLink, YoutubeLink: process.env.YoutubeLink });
});

router.get('/terms-of-use', (req, res) => {
  res.render('terms-of-use', { Title: process.env.Title, Company: process.env.Company, Url: process.env.Url, TwitchName: process.env.TwitchName, TwitchLink: process.env.TwitchLink, YoutubeLink: process.env.YoutubeLink });
});

router.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy', { Title: process.env.Title, Company: process.env.Company, Url: process.env.Url, TwitchName: process.env.TwitchName, TwitchLink: process.env.TwitchLink, YoutubeLink: process.env.YoutubeLink, Email: process.env.Email });
});

router.get('/license', (req, res) => {
  res.render('license', { Title: process.env.Title, Company: process.env.Company, Url: process.env.Url, TwitchName: process.env.TwitchName, TwitchLink: process.env.TwitchLink, YoutubeLink: process.env.YoutubeLink });
});

router.get('/integration', (req, res) => {
  let redirectUrl = process.env.Url + '/oauth/twitch/login';
  res.redirect(redirectUrl);
});

module.exports = router;
