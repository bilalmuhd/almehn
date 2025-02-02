import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: "dhant9mij",
  api_key: "449147564231388",
  api_secret: "HHtlWXQ0k1H1yiK9ezIwy3a-br0",
});

(async function () {
  const results = await cloudinary.uploader.upload(
    "../assets/office_images/another_design 3.jpg"
  );
  console.log(results);
  const url = cloudinary.url(results.public_id, {
    transformation: [
      {
        quality: "auto",
        fetch_format: "auto",
      },
      {
        width: 552,
        crop: "fill",
        gravity: "auto",
      },
    ],
  });
  console.log(url)
})();
