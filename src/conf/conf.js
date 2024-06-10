const conf = {

  appwriteUrl: String("https://cloud.appwrite.io/v1"),
  appwriteProjectId : String("6662a8ef002803dea29a"),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export default conf