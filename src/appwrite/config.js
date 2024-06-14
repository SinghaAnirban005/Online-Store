import { Client, Databases, ID, Query } from 'appwrite';
import conf from '../conf/conf';
import { addToCart } from '../store/authSlice.js';
import authService from './auth.js';


export class config {

  client = new Client()

  constructor() {
    this.client

    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.databases = new Databases(this.client)
  }

  addToCartAsync = (item) => async (dispatch) => {
  
    try {
      await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
  
        {
          userId: item.id, 
          title: item.title,
          price: item.price,
          image: item.image,
        }
  
      );
  
      dispatch(addToCart(item));

    } catch (error) {
      console.log(typeof item.price);
      console.error('Error adding product to cart:', error);
    }
  
  };


  getDocuments = async () => {
    

   try {
    const user = await authService.getCurrentUser()

    const response = await this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,

      [
          Query.equal("userId", user.$id)
      ]

    )

    return response

   } catch (error) {
      console.log("Error fetching Products: ", error);
      throw error
   }
  }

}

const service = new config()
export default service