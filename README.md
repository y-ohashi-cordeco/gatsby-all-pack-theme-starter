[![Netlify Status](https://api.netlify.com/api/v1/badges/c04a44ac-d26e-4471-8cc7-929be2ae980e/deploy-status)](https://app.netlify.com/sites/gatsby-all-pack-theme-starter/deploys)

![](https://img.esa.io/uploads/production/attachments/15569/2020/08/03/84487/c0055f0b-8732-4943-8b05-029608a12334.png)

https://gatsby-all-pack-theme-starter.netlify.app/

# What is this

**gatsby-all-pack-theme-starter**

GatsbyJS に最初から入っていれば良いのにと思い作成したのがこちらのBlog Themeになります。

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
```

2. NetlifyのサイトでGit連携をする

3. デプロイする

## Site Setting

サイト名、タイトル、ブログ画像、ヘッダー画像、著者情報などブログに必要な内容を設定していく

## Analytics & Algolia Setting

TODO

## Netlify Env Setting

TODO

## Color Setting

![](https://img.esa.io/uploads/production/attachments/15569/2020/08/03/84487/c0055f0b-8732-4943-8b05-029608a12334.png)

**Theme Dark mode (Sample)**
- white: `#1F1F1F`
- primary: `#00FFC5`
- accent: `#007ACE`
- baseBack: `#121212`
- baseFont: `#FAFAFA`
- baseGray: `#3F3F3F`
- baseGrayLight: `#4E4E4E`

**Theme Light mode (Sample)**
- white: `#FFFFFF`
- primary: `#00FFC5`
- accent: `#007ACE`
- baseBack: `#ebebeb`
- baseFont: `#141414`
- baseGray: `#282828`
- baseGrayLight: `#E2E8F0`

## How To Post articles

### Netlify CMSでの更新

1. your-domain.com/admin にアクセスしログイン
2. posts のタブに遷移し、記事を編集する

### esa.io でのthird party CMSでの更新

[こちら](https://github.com/yoshiki-0428/esa-source-lambda/blob/master/README.md)を参照
