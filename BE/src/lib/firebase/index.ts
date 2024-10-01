import admin from "firebase-admin";

const serviceAccount = require("../../../../pikbil.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

export const bucket = admin.storage().bucket()