import { Client, Databases, ID } from 'appwrite';
import conf from '../conf/conf';

export class config {

  client = new Client()

  constructor() {
    this.client

    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.databases = new Databases(this.client)
  }
  

  addProductToCart = async ({userId, product_Id, quantity=1}) => {
    try {

    console.log('userId:', userId);
    console.log('product_Id:', product_Id);
    console.log('quantity:', quantity);

      const response = await this.databases.createDocument (

        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),

        {
          userId,
          product_Id,
          quantity
        }

      )

      console.log("Product Added to Cart ", response);
      return response

    } catch (error) {
      console.error('Error adding product to cart:', error);
      throw error;
    }
  }
  



}

const service = new config()
export default service