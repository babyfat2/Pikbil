import admin from "firebase-admin";
// Hàm tải file lên Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyALU-DJTWgZlYD4Qs8yiQqMjjBupMeSOcI",
  authDomain: "pikbil-2617a.firebaseapp.com",
  projectId: "pikbil-2617a",
  storageBucket: "pikbil-2617a.appspot.com",
  messagingSenderId: "362678991964",
  appId: "1:362678991964:web:56fcfa011d6e018397ba99",
  measurementId: "G-T9K3HNC7W3"
};
admin.initializeApp(firebaseConfig);

export const uploadImage = async (imageUri: string): Promise<string> => {
  const filename = imageUri.substring(imageUri.lastIndexOf('/'));
    console.log(imageUri);
    const bucket = admin.storage().bucket();

    const file = bucket.file(`image/${filename}`)
    const uploadFile = bucket.upload(imageUri);
  try {
    return filename;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Unable to upload image");
  }
};