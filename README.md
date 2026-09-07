# 고대원 세무사 홈페이지 — GitHub·Vercel 배포용

이 폴더는 ChatGPT Sites용 원본을 표준 Next.js 구조로 변환한 별도 복사본입니다. GitHub에 올린 뒤 Vercel에서 그대로 가져와 배포할 수 있습니다.

## 포함된 내용

- 반응형 메인페이지와 전체 서브페이지
- 세무 정보창고 60개 상세 글
- 블로그 기본 글 10개
- 관리자 글 작성·수정·삭제·공개
- 블로그 이미지 업로드, 서체와 글자 크기 편집

## 1. GitHub에 올리기

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더 안의 파일과 폴더를 모두 저장소에 업로드합니다.
3. `node_modules`, `.next`, `.env.local`은 올리지 않습니다.

## 2. Vercel에 배포하기

1. Vercel에서 **Add New → Project**를 누릅니다.
2. 위에서 만든 GitHub 저장소를 선택합니다.
3. Framework Preset은 **Next.js**로 둡니다.
4. Root Directory는 변경하지 않습니다.
5. Build Command는 기본값 `next build` 또는 비워둡니다.
6. **Deploy**를 누릅니다.

기본 홈페이지, 60개 정보글과 기존 블로그 10개는 별도 환경변수 없이 표시됩니다.

## 3. 관리자 글쓰기를 사용하려면

Vercel 프로젝트에서 **Storage → Blob → Create**를 눌러 Blob 저장소를 연결합니다. 연결하면 `BLOB_READ_WRITE_TOKEN`이 자동으로 생성됩니다.

그다음 **Settings → Environment Variables**에 아래 두 항목을 추가합니다.

- `ADMIN_PASSWORD`: 관리자 화면에서 사용할 비밀번호
- `ADMIN_SESSION_SECRET`: 영문·숫자를 섞은 32자 이상의 임의 문자열

환경변수를 저장한 뒤 **Deployments → Redeploy**를 실행합니다. 배포된 주소 뒤에 `/admin`을 붙이면 관리자 화면으로 들어갈 수 있습니다.

예: `https://내주소.vercel.app/admin`

## 로컬 확인

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 주의사항

- `.env.local`이나 관리자 비밀번호는 GitHub에 올리지 마세요.
- Vercel Blob을 연결하지 않아도 홈페이지와 기존 글은 정상 표시되지만 새 글 저장과 이미지 업로드는 사용할 수 없습니다.
- 관리자 비밀번호를 변경했다면 Vercel에서 다시 배포하세요.
