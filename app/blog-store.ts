import { list, put } from "@vercel/blob";
import { journalPosts } from "./journal/blog-data";

export type EditablePost={slug:string;category:string;title:string;excerpt:string;body:string;publishedAt:string;readTime:string;status:"draft"|"published";isDeleted:boolean};
const STORE_PATH="blog-data/posts.json";
function legacyBody(p:(typeof journalPosts)[number]){return[p.intro,...p.sections.flatMap(s=>[`## ${s.title}`,s.body]),"## 오늘 바로 확인할 세 가지",...p.checks.map(x=>`- ${x}`)].join("\n\n")}
function legacyPosts():EditablePost[]{return journalPosts.map(p=>({slug:p.slug,category:p.category,title:p.title,excerpt:p.excerpt,body:legacyBody(p),publishedAt:p.date,readTime:p.read,status:"published",isDeleted:false}))}
async function savedPosts():Promise<EditablePost[]>{if(!process.env.BLOB_READ_WRITE_TOKEN)return[];try{const result=await list({prefix:STORE_PATH,limit:1});const blob=result.blobs.find(x=>x.pathname===STORE_PATH);if(!blob)return[];const response=await fetch(blob.url,{cache:"no-store"});return response.ok?await response.json():[]}catch{return[]}}
async function writePosts(posts:EditablePost[]){if(!process.env.BLOB_READ_WRITE_TOKEN)throw new Error("Vercel Blob 저장소가 연결되지 않았습니다.");await put(STORE_PATH,JSON.stringify(posts),{access:"public",addRandomSuffix:false,allowOverwrite:true,contentType:"application/json"})}
export async function getAllPosts(){const saved=await savedPosts();const bySlug=new Map(legacyPosts().map(p=>[p.slug,p]));saved.forEach(p=>bySlug.set(p.slug,p));return[...bySlug.values()].filter(p=>!p.isDeleted).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt))}
export async function getPublicPosts(){return(await getAllPosts()).filter(p=>p.status==="published")}
export async function getPost(slug:string){return(await getAllPosts()).find(p=>p.slug===slug)??null}
export async function savePost(post:EditablePost,_email:string){const saved=await savedPosts();const index=saved.findIndex(p=>p.slug===post.slug);if(index>=0)saved[index]={...post,isDeleted:false};else saved.push({...post,isDeleted:false});await writePosts(saved)}
export async function deletePost(slug:string,_email:string){const saved=await savedPosts();const current=await getPost(slug);if(!current)return;const deleted={...current,isDeleted:true,status:"draft" as const};const index=saved.findIndex(p=>p.slug===slug);if(index>=0)saved[index]=deleted;else saved.push(deleted);await writePosts(saved)}
