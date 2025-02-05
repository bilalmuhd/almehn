const { v2: cloudinary } = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();

dotenv.config();

cloudinary.config({
  cloud_name: "dhant9mij",
  api_key: "449147564231388",
  api_secret: "HHtlWXQ0k1H1yiK9ezIwy3a-br0",
});

(async function () {
  const results = await cloudinary.uploader.upload(
    "../assets/office_images/office_carpetflooring.jpg"
  );
  console.log(results);
  const url = cloudinary.url(results.public_id, {
    transformation: [
      {
        quality: "auto",
        fetch_format: "auto",
      },
      {
        height: 290,
        width: 340,
        crop: "fill",
        gravity: "auto",
      },
    ],
  });
  console.log(url);
})();
