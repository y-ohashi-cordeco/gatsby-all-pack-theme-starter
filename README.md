[![Netlify Status](https://api.netlify.com/api/v1/badges/c04a44ac-d26e-4471-8cc7-929be2ae980e/deploy-status)](https://app.netlify.com/sites/gatsby-all-pack-theme-starter/deploys)

![](https://img.esa.io/uploads/production/attachments/15569/2020/08/03/84487/c0055f0b-8732-4943-8b05-029608a12334.png)

https://gatsby-all-pack-theme-starter.netlify.app/

# What is this

**gatsby-all-pack-theme-starter**

GatsbyJS に最初からこんな機能が入っていれば良いのにと思い作成したのがこちらのBlog Themeです。

最初からワードの記事検索機能やRSSの生成機能、Google Analyticsでのランキング機能、関連記事の表示など
ブログに最低限必要な機能をすべて詰め込んだThemeになります。

多機能ながらもカラーテーマやサイトテーマを細く設定でき、カスタマイズが可能になっています。
唯一GUIで設定が完結できるGatsby themeです

# What is a feature?

- Algoliaでの記事検索機能
- Google Analyticsより取得されたPV数でランキング機能
- 記事の関連リンク設定（関連記事の設定が可能）
- サイトテーマカラー、デザインをNetlify CMSで調整可能
- レスポンシブ対応・ハンバーガーメニューの実装
- タグ機能・カテゴリー機能
- RSSの生成機能・サイトマップ生成機能

# How To Deploy & Site Setting

## Netlify Upload

1. gatsby new hoge でソースコードを取得する(CUI操作はここだけです)

```
gatsby new blog https://github.com/yoshiki-0428/gatsby-all-pack-theme-starter.git
cd blog
git remote add origin [your-git-repository-url]
git push origin master
```

2. NetlifyのサイトでGit連携をする

3. Netlify Envを設定する

![](https://ucarecdn.com/73d29e3e-1542-4320-a67b-51487ddafec3/)

秘匿情報をGit履歴にコミットしないようEnvを設定する必要があります。Themeでは2つのEnvが必要です。

- ALGOLIA_ADMIN_KEY: [取得の仕方](https://www.algolia.com/doc/guides/security/api-keys/#admin-api-key)
- GA_CRED: : [Google Cloud API Credentials Json 取得の仕方](https://cloud.google.com/docs/authentication/getting-started)

4. デプロイする

## Site Setting

サイト名、タイトル、ブログ画像、ヘッダー画像、著者情報などブログに必要な内容を設定していく

## Google Analytics & Algolia Setting

各種APIのAPI Keyを取得する必要があります。Skip可能です。

## Color Setting

![](https://img.esa.io/uploads/production/attachments/15569/2020/08/03/84487/c0055f0b-8732-4943-8b05-029608a12334.png)

**Theme Dark mode (Sample)**
- white: <div style="color: #1F1F1F">`#1F1F1F`</div>
- primary: <div style="color: "#00FFC5">`#00FFC5`</div>
- accent: <div style="color: "#007ACE">`#007ACE`</div>
- baseBack: <div style="color: "#121212">`#121212`</div>
- baseFont: <div style="color: "#FAFAFA">`#FAFAFA`</div>
- baseGray: <div style="color: "#3F3F3F">`#3F3F3F`</div>
- baseGrayLight: <div style="color: "#4E4E4E">`#4E4E4E`</div>

**Theme Light mode (Sample)**
- white: <div style="color: "#FFFFFF">`#FFFFFF`</div>
- primary: <div style="color: "#00FFC5">`#00FFC5`</div>
- accent: <div style="color: "#007ACE">`#007ACE`</div>
- baseBack: <div style="color: "#ebebeb">`#ebebeb`</div>
- baseFont: <div style="color: "#141414">`#141414`</div>
- baseGray: <div style="color: "#282828">`#282828`</div>
- baseGrayLight: <div style="color: "#E2E8F0">`#E2E8F0`</div>

## How To Post articles

### Netlify CMSでの更新

1. your-domain.com/admin にアクセスしログイン
2. posts のタブに遷移し、記事を編集する

### esa.io などのthird party CMSでの更新

[こちら](https://github.com/yoshiki-0428/esa-source-lambda/blob/master/README.md)を参照
