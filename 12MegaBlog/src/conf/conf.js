const conf={
    appwriteUrl:String(import.meta.env.VITE_APP_APPWRITE_URL),//endpoint also
    appwriteProjectId:String(import.meta.env.VITE_APP_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APP_DATABASE_ID),
    appwriteColllectionId:String(import.meta.env.VITE_APP_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APP_BUCKET_ID)



}



export default conf;