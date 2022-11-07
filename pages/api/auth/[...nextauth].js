import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  adapter: FirestoreAdapter({
    apiKey: "AIzaSyAqWN1I96Medc2BSMUnvc-nAVyO5FRQsWE",
    authDomain: "health-app-209f0.firebaseapp.com",
    projectId: "health-app-209f0",
    storageBucket: "health-app-209f0.appspot.com",
    messagingSenderId: "414328237050",
    appId: "1:414328237050:web:c51905e20867a304a11243",
  }),
});