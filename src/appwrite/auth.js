import { Client, Account, ID } from "appwrite"
import conf from "../conf/conf.js"

export class auth {

  client = new Client()

  constructor() {
    this.client 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

    this.account = new Account(this.client)
  }
  
  createAccount = async ({email, password, fullname}) => {
    
    try {
      console.log('Creating account with:', email, password, fullname);
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        fullname
      )
      console.log("Processing...");

      if( userAccount ) {
        console.log('User: ', userAccount);
        return this.Login({email, password})
      }

      else{
        console.log("Created Account ");
        return userAccount
      }

    } catch (error) {
      console.log("ACCOUT CREATION ERROR: ", error);
      throw error
    }

  }

  Login = async ({email, password}) => {
    
    try {

      const sessions = await this.account.listSessions()
      if(sessions) {
        
            await this.account.deleteSessions()
        
      }

      console.log(`Logging in with values ${email} and ${password}`);
      return await this.account.createEmailPasswordSession(email, password)

    } catch (error) {
    console.log("Error while logging In: ", error);
    }

  }


  Logout = async () => {
   try {
    return await this.account.deleteSessions()
   } catch (error) {
    console.log("LOGOUT ERROR: ", error);
   }
  }

  // handleActiveSessions = async () => {
  //   try {
  //     // Fetch all active sessions
  //     const sessions = await this.account.listSessions();

  //     // Loop through the sessions and delete them
  //     if(sessions) {
  //       for (const session of sessions.sessions) {
  //         await account.deleteSession(session.$id);
  //       }
  //     }

  //   } catch (error) {
  //     console.log('Error while handling active sessions: ', error);
  //     throw error;
  //   }
  // }


  getCurrentUser = async() => {
    try {
      
      const user = await this.account.get()

      return user

    } catch (error) {
      console.log("ERROR FETCHING USER: ", error);
      throw error
    }
  }

  


}

const authService  = new auth()

export default authService