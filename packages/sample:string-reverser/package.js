Package.onTest(function (api) {
  api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"], ['server']);

  api.addFiles('tests/server/server.js', ['server']);
});
