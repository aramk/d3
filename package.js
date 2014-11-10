// Meteor package definition.
Package.describe({
  name: 'aramk:d3',
  version: '3.4.13',
  summary: 'Data-Driven Documents',
  git: 'https://github.com/aramk/d3.git#meteor'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles(['d3.js'], 'client');
});
