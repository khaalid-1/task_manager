import  "dotenv/config";

export const config = {
   port : process.env.PORT || 4000,
   mong_url : process.env.MONG_URL,
   secretToken : process.env.SECRET_TOKEN,
}