# What is this?
SFサイトのプレビューを作成することができるサイトです。

## Getting started
:::button-normal{link="/editor"}
Go to Editor>
:::
このリンクよりアクセスして、内容を編集して遊んでみてください。

## Usage
サレ祭の企画は、以下の要素を含みます。Youtubeの動画をイメージしてもらえればいいかと思われます。

- タイトル `*`
- 説明文 `*`
- 所属
- サムネイル
- 企画の内容

`*`は、Markdown記法が使用できる。

### タイトル
企画のタイトル。  
「`【Nuxt3】サレ祭のサイトのプレビューを作ってみましたわ～～～！！【ですわ～】`」など。

### 説明文
企画の説明文があれば。Youtubeでいう概要欄。

### 所属
企画の所属する場所。
「`5年E組IT班の遊び場`」など。

### サムネイル
サムネイル画像。ファイル形式はJPEG、大きさは2MB以下を推奨。

### 企画の内容
Youtube動画や、GoogleDriveのPDFファイルなどをIDで指定します。  
以下に、どのように記述すればよいか示しておきます。企画にはそれぞれIDを指定してください。  
Youtubeでは、VideoId、GoogleDriveではFileIdとか言います。
:::content-table
TYPE|URL|ID
:-|:-|:-
Youtube|https://youtube.com/watch?v=WwXxYyZz|WwXxYyZz
Youtube|https://youtu.be/WwXxYyZz|WwXxYyZz
GoogleDrive|https://drive.google.com/file/d/WwXxYyZz/view?usp=sharing|WwXxYyZz
:::

(網代メモぷりーずいぐのあ,
youtube.com/embed/:id,
drive.google.com/file/d/:id/preview)