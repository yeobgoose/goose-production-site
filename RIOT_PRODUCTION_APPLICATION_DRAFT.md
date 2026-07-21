# Riot Production Application Draft — 협곡도사 덕구

> Replace every `[PLACEHOLDER]` before submitting.
> Keep the product description aligned with the actually deployed version.

## Product name
협곡도사 덕구 (English working name: Rift Sage Deokgu)

## Product URL
[PLACEHOLDER: https://your-owned-domain.example]

## Product type
Discord bot + public product website

## Game
League of Legends

## Short description
협곡도사 덕구 is a post-game coaching Discord bot for League of Legends players. A player links their own Riot ID, and the service analyzes completed match history and Match Timeline data to produce a personal review, team-flow summary, long-term play profile (“Play DNA”), repeated-mistake detection, and one actionable mission for the next game.

## Player value
The product is designed as a training and self-review tool. It helps players understand patterns across their own completed matches instead of only showing raw match statistics.

## User flow
1. The user adds the Discord bot to a server.
2. The user registers their own Riot ID using `/등록`.
3. The service resolves the Riot ID to PUUID.
4. The user can request `/실제복기`, or enable `/자동복기 켜기`.
5. After a completed match is detected, the service retrieves Match and Timeline data.
6. A deterministic analysis layer calculates post-game metrics and important events.
7. An optional AI wording layer rewrites only the provided analysis into concise coaching language.
8. The user receives two review cards and coaching text in Discord.
9. Aggregated historical analysis powers `/성장` and the mission system.
10. The next completed match is used to evaluate mission progress when the metric is observable.

## Prototype / testability
The public website contains an interactive mock-data prototype demonstrating:
- Post-game review
- Play DNA
- Mission tracking

The Discord bot codebase and database pipeline are implemented. Riot API-dependent user flows are prepared to be activated with an approved Production API key.

## Riot APIs planned
- ACCOUNT-V1: Riot ID → PUUID
- MATCH-V5: match IDs, match details, match timeline
- SUMMONER-V4: PUUID → summoner profile data where needed
- LEAGUE-V4: ranked solo information where available

Static game assets are loaded from Data Dragon.

## Routing
- Regional routing for Korean match history: `asia`
- Platform routing for Korean League services: `kr`

## Data use
Stored data may include:
- Discord user ID
- Discord guild/channel IDs for requested automatic notifications
- Riot ID
- PUUID
- Match IDs and match statistics
- Derived post-game analysis
- Play DNA aggregates
- Mission history and progress

The Riot API key is stored only in server-side environment variables and is not exposed to client-side code.

## AI use
The optional AI coach is used only to rewrite already-computed post-game analysis into natural-language feedback.
The AI layer does not calculate official rank, MMR, or ELO.
The intended AI request payload excludes Discord IDs, PUUIDs, and Riot API credentials.

## Game integrity
The product is post-game focused.
It does not aim to expose hidden in-game information, de-anonymize anonymous players, calculate a substitute MMR/ELO, or provide an unfair live-game advantage.

Internal labels such as “Impact Score” and “Play DNA” are clearly presented as unofficial product-specific coaching indicators, not Riot skill rankings.

## Monetization
Current plan: Free prototype / no monetization.

[Update this section if monetization changes before launch.]

## Terms of Service
[PLACEHOLDER: https://your-owned-domain.example/terms.html]

## Privacy Policy
[PLACEHOLDER: https://your-owned-domain.example/privacy.html]

## Contact
[PLACEHOLDER: contact@your-domain.example]

## Discord access
[PLACEHOLDER: Discord bot invite URL]

## Verification
After submitting the Production application, follow the exact verification URL/instructions shown by Riot.
This package includes `riot-verification.txt` only as a placeholder. Replace or relocate it according to the verification instruction you actually receive.

## Reviewer notes
- Public website intentionally uses mock data until Production API access is approved.
- The intended complete flow is visible on the website.
- The product is intended to help players review their own completed matches and improve over time.
