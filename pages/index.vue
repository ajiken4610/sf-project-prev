<template>
  <div excerpt="[object Object]">
    <h1 id="what-is-this">What is this?</h1>
    <p>SFサイトのプレビューを作成することができるサイトです。</p>
    <h2 id="getting-started">
      <a
        aria-current="page"
        href="/#getting-started"
        class="router-link-active router-link-exact-active"
        >Getting started</a
      >
    </h2>
    <NuxtLink to="/editor" class=""
      ><button class="btn btn-primary mb-2">Go to Editor&gt;</button></NuxtLink
    >
    <p>このリンクよりアクセスして、内容を編集して遊んでみてください。</p>
    <h2 id="usage">
      <a
        aria-current="page"
        href="/#usage"
        class="router-link-active router-link-exact-active"
        >Usage</a
      >
    </h2>
    <p>
      サレ祭の企画は、以下の要素を含みます。Youtubeの動画をイメージしてもらえればいいかと思われます。
    </p>
    <ul>
      <li>タイトル <code>*</code></li>
      <li>説明文 <code>*</code></li>
      <li>所属</li>
      <li>サムネイル</li>
      <li>企画の内容</li>
    </ul>
    <p><code>*</code>は、Markdown記法が使用できる。</p>
    <h3 id="タイトル">
      <a
        aria-current="page"
        href="/#タイトル"
        class="router-link-active router-link-exact-active"
        >タイトル</a
      >
    </h3>
    <p>
      企画のタイトル。<br />
      「<code>【Nuxt3】サレ祭のサイトのプレビューを作ってみましたわ～～～！！【ですわ～】</code>」など。
    </p>
    <h3 id="説明文">
      <a
        aria-current="page"
        href="/#説明文"
        class="router-link-active router-link-exact-active"
        >説明文</a
      >
    </h3>
    <p>企画の説明文があれば。Youtubeでいう概要欄。</p>
    <h3 id="所属">
      <a
        aria-current="page"
        href="/#所属"
        class="router-link-active router-link-exact-active"
        >所属</a
      >
    </h3>
    <p>企画の所属する場所。 「<code>5年E組IT班の遊び場</code>」など。</p>
    <h3 id="サムネイル">
      <a
        aria-current="page"
        href="/#サムネイル"
        class="router-link-active router-link-exact-active"
        >サムネイル</a
      >
    </h3>
    <p>サムネイル画像。ファイル形式はJPEG、大きさは2MB以下を推奨。</p>
    <h3 id="企画の内容">
      <a
        aria-current="page"
        href="/#企画の内容"
        class="router-link-active router-link-exact-active"
        >企画の内容</a
      >
    </h3>
    <p>
      Youtube動画や、GoogleDriveのPDFファイルなどをIDで指定します。<br />
      Youtube動画、GoogleDriveのファイル(ファイルプレビューとRawファイル)、Githubのファイル、Gist埋め込み、ページ埋め込み、NoContent
      に対応します。<br />
      以下に、どのように記述すればよいか示しておきます。企画にはそれぞれIDを指定してください。<br />
      Youtubeでは、VideoId、GoogleDriveではFileIdとか言います。
    </p>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th align="left">TYPE</th>
            <th align="left">URL</th>
            <th align="left">ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">Youtube</td>
            <td align="left">
              <a
                href="https://youtube.com/watch?v=WwXxYyZz"
                rel="nofollow noopener noreferrer"
                target="_blank"
                >https://youtube.com/watch?v=WwXxYyZz</a
              >
            </td>
            <td align="left">WwXxYyZz</td>
          </tr>
          <tr>
            <td align="left">Youtube</td>
            <td align="left">
              <a
                href="https://youtu.be/WwXxYyZz"
                rel="nofollow noopener noreferrer"
                target="_blank"
                >https://youtu.be/WwXxYyZz</a
              >
            </td>
            <td align="left">WwXxYyZz</td>
          </tr>
          <tr>
            <td align="left">GoogleDrive</td>
            <td align="left">
              <a
                href="https://drive.google.com/file/d/WwXxYyZz/view?usp=sharing"
                rel="nofollow noopener noreferrer"
                target="_blank"
                >https://drive.google.com/file/d/WwXxYyZz/view?usp=sharing</a
              >
            </td>
            <td align="left">WwXxYyZz</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      (網代メモぷりーずいぐのあ, youtube.com/embed/:id,
      drive.google.com/file/d/:id/preview)
    </p>
  </div>
</template>
