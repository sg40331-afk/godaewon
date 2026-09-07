import { createAdminSession } from "@/app/admin-auth";

export async function POST(request:Request){const{password}=await request.json() as{password?:string};if(!process.env.ADMIN_PASSWORD||!process.env.ADMIN_SESSION_SECRET)return Response.json({error:"Vercel 환경변수 설정이 필요합니다."},{status:503});if(password!==process.env.ADMIN_PASSWORD)return Response.json({error:"비밀번호가 맞지 않습니다."},{status:401});await createAdminSession();return Response.json({ok:true})}
