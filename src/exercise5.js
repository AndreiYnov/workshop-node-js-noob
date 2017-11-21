exports.run = function(input) {
fs.access('/etc/passwd', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(err ? 'Something goes wrong!');
});
};
