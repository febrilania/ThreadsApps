import { v2 as cloudinary } from "cloudinary";

class CloudinaryConfig {
  constructor() {
    // Panggil metode config() saat kelas diinisialisasi
    this.config();
  }

  config() {
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
}

export default new CloudinaryConfig();
