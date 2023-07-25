import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import userModel from "@models/user"

const handler = NextAuth({
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    })
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {

        const model = await userModel()

        const userExists = Boolean(await model?.find({name: user.email}))
  
        if (userExists) {  //  do not save if user already exists in the database
          console.log("user is already found")
          return true;
        }
        const {id, ...userToSave} = user;

        // create new user with the user info
        await model?.create(userToSave).then((user) => {
          console.log(`created a new User! ${user}`)
          return true
        });
        
        return true
      } catch(e) {
        console.log(e)
        return Promise.reject(new Error(e))
      }
     
    },

    async jwt({ user, token }) {
      //   update token if user is returned
      if (user) {
        token.user = user;
      }
      //   return final_token
      return token;
    },

    async session({ session, user, token }) {
        return session
      },
  }
})

export { handler as GET, handler as POST }