import { bucket } from "../../lib/firebase";

export const uploadImage = async (imageUri: string): Promise<string> => {
  try {
    const [uploadFile] = await bucket.upload(imageUri);
    const url = await uploadFile.getSignedUrl({
      action: 'read',  // Hành động là 'read' để tạo URL có thể đọc
      expires: '03-01-2500',  // Ngày hết hạn của URL
    });
    return url[0];
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Unable to upload image");
  }
};