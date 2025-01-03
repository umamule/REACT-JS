import conf from "../conf/conf.js";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    Client =new Client();
    Databases;
    bucket;


    constructor(){

        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.Client);
        this.bucket=new Storage(this.Client);

    }
    async createPost({title,slug,content,featuredImage,status,userid}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteColllectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            )
        }catch(error){
            console.log("Appwrite service::createPost::error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteColllectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch (error){
            console.log("Appwrite service::updatePost::error",error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteColllectionId,
                slug
            )
            true
        }catch{
            console.log("Appwrite service::deletePost::error",error);
            false;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteColllectionId,
                slug
            )    
        }catch{
            console.log("Appwrite service::createPost::error",error);
            return false
        }
    }
      async getPost(queries=[Query.equal("status","active")]){
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteColllectionId,
                queries,
            )
        } catch (error) {
         console.log("dssd",error);   
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
            
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}




const service=new Service()

export default service
