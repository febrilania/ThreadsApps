import { v2 as cloudinary } from "cloudinary";

export default new (class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: "dhlcorr0z",
      api_key: "767241247135225",
      api_secret: "RmYNTZENaBeciEq3ufs93fCExvE",
    });
  }

  async destination(image: string): Promise<any> {
    try {
      return await cloudinary.uploader.upload(`src/uploads/${image}`);
    } catch (error) {
      throw error;
    }
  }
})();
