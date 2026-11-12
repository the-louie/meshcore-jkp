# meshcore-jkp.se

The regional MeshCore website for Jönköpings län (region `se-jkp`, IATA `JKG`).

Built with Hugo from the shared template
[sweden-mesh/meshcore-regional-template](https://github.com/sweden-mesh/meshcore-regional-template),
imported as a Hugo module. This repository holds only what is local: `hugo.toml` (region,
Beacon URL, community links, channels) and pages under `content/`. Any template file can be
overridden by putting a file at the same path here.

Live data comes from our Beacon backend, https://beacon.meshcore-jkp.se.

Domains: `meshcore-jkp.se` and `meshcore-jönköping.se` (`xn--meshcore-jnkping-vwbc.se`), which
redirects. Hosting: Cloudflare Pages.

## Build

Hugo ≥ 0.146 and Go:

```sh
hugo server               # local preview
hugo --gc --minify        # the site in public/
hugo mod get -u           # update the template
```

## Deploy

`.github/workflows/deploy.yml` builds with Hugo and uploads to Cloudflare Pages (project
`meshcore-jkp`, Direct Upload):

| Branch | Where | Indexed |
|---|---|---|
| `dev` | https://staging.meshcore-jkp.se (`dev.meshcore-jkp.pages.dev`) | no (`HUGO_PARAMS_NOINDEX`) |
| `main` | https://meshcore-jkp.se | yes |
| pull requests | built, not deployed | — |
| every 6 h (cron) | production rebuild, for a fresh Beacon snapshot | — |

Secrets: `CLOUDFLARE_API_TOKEN` (Pages:Edit only) and `CLOUDFLARE_ACCOUNT_ID`.
