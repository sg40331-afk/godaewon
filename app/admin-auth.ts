import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME="godaewon_admin";
async function sessionToken(){const secret=process.env.ADMIN_SESSION_SECRET;if(!secret)return"";const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);const bytes=await crypto.subtle.sign("HMAC",key,new TextEncoder().encode("godaewon-blog-admin"));return Buffer.from(bytes).toString("base64url")}
export async function getAdminUser(){const token=(await cookies()).get(COOKIE_NAME)?.value;if(!token||!process.env.ADMIN_SESSION_SECRET||token!==await sessionToken())return null;return{email:"관리자"}}
export async function requireAdmin(_returnTo:string){const user=await getAdminUser();if(!user)redirect("/admin/login");return{user,allowed:true}}
export async function createAdminSession(){(await cookies()).set(COOKIE_NAME,await sessionToken(),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*12})}
export async function clearAdminSession(){(await cookies()).delete(COOKIE_NAME)}
