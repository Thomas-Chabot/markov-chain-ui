function doLoadText () {
  return new Promise ((fulfill, reject) => {
    $.get ("/generate", fulfill).fail (reject);
  });
}
