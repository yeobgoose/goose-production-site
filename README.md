# 협곡도사 덕구 — Cloudflare Pages 배포용 저장소

Cloudflare Pages 설정:

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `public`

배포 전 수정:

`public/assets/config.js`

```js
window.GOOSE_CONFIG = {
  discordInviteUrl: "실제 Discord Bot 초대 URL",
  contactEmail: "실제 운영 이메일",
  serviceUrl: "실제 서비스 도메인"
};
```

Production 신청 전 추가 확인:

1. `public/privacy.html` 실제 운영 정책 반영
2. `public/terms.html` 실제 운영 정책 반영
3. Riot General Policies의 최신 필수 legal boilerplate 확인 및 footer 반영
4. 실제 Discord 초대 링크 확인
5. 실제 연락 가능한 이메일 확인
6. Custom Domain 연결 및 HTTPS 확인
7. Riot Production 신청 후 안내된 Verification 문자열/경로를 정확히 반영

주의:
- `RIOT_API_KEY`, `OPENAI_API_KEY`, Discord Bot Token은 이 정적 웹사이트 저장소에 절대 넣지 않습니다.
- API 키들은 24시간 실행되는 봇 서버의 환경변수로만 관리합니다.
