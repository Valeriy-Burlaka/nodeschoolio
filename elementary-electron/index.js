const picture = require("cat-picture");
const src = picture.src;
const image = require("lightning-image-poly");


picture.remove();

const viz = new image("#visualization", null, [src], {hullAlgorithm: "convex"})

