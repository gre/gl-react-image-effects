module.exports = image =>
fetch("https://api.imgur.com/3/image", {
  method: "POST",
  headers: {
    Authorization: "Client-ID 39022a8ba96c6ea",
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    image: image.replace(/^data:image\/(png|jpg);base64,/, ""),
    type: "base64",
    name: "gl-react powered effects",
    description: "created with https://github.com/gre/gl-react-image-effects"
  })
})
.then(r => {
  if (r.status >= 200 && r.status < 300) return r;
  throw r;
})
.then(r => r.json());
