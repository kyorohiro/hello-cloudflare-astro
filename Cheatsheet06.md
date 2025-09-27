# タイポグラフィ Cheat Sheet（Tailwind v4）

本文の可読性は **行長**・**行間**・**折返し品質** の三本柱で整えます。ここでは次の4つに絞って実用要約します：  
`max-w-[65ch]` / `leading-*` / `text-balance` / `text-pretty`

---

## `max-w-[65ch]`（行長：1行の長さ）
- **目的**：本文の行長を **約60–80文字**に収めて読みやすくする  
- **`ch`**：等幅フォントの「0」の幅を基準にした長さ（本文でも実用的）
- **使い所**：記事本文・説明テキストのブロック
- **例**
```html
<article class="mx-auto max-w-[65ch] p-6">
  …
</article>
```
- **Tips**
  - 見出しは少し広めでもOK（例：`lg:max-w-[72ch]`）
  - 横幅が極端に狭い表示では `max-w` より親要素の幅が効くのが普通

---

## `leading-*`（行間：line-height）
- **役割**：行間で読みやすさを調整  
- **主なプリセット**
  - `leading-none`（1.0 前後）
  - `leading-tight`（見出し向け）
  - `leading-snug`
  - `leading-normal`（既定）
  - `leading-relaxed`（本文向け）
  - `leading-loose`
- **推奨**
  - **本文**：`leading-relaxed`（やや広め）
  - **大きい見出し**：`leading-tight`（締まる）
  - **細かい注釈**：`leading-normal` or `leading-snug`
- **任意値**
```html
<p class="leading-[1.65]">厳密に1.65を指定</p>
```

---

## `text-balance`（見出しの均等折返し）
- **CSS 対応**：`text-wrap: balance;`  
- **効果**：複数行になった見出しで行の長さを**バランス良く**配分  
- **使い所**：H1〜H3、カードタイトル、ヒーロー見出し
- **例**
```html
<h2 class="text-3xl font-bold leading-tight text-balance">
  Tailwindで読みやすい文章レイアウトを最短で整える方法
</h2>
```
- **注意**：効果を出したい**要素自身**に付ける

---

## `text-pretty`（本文の自然な折返し）
- **CSS 対応**：`text-wrap: pretty;`  
- **効果**：記号や短語の**不自然な折返しを緩和**し、読みやすく
- **使い所**：本文・キャプション・短文ボタン等
- **例**
```html
<p class="text-slate-700 leading-relaxed text-pretty">
  モバイルでも気持ちよく読めるよう、行間と折り返しを整えています。…
</p>
```
- **`balance` との使い分け**
  - **見出し** → `text-balance`
  - **本文** → `text-pretty`

---

## 即戦力レシピ（コピペ用）

### 記事本文ブロック（定番）
```html
<article class="mx-auto max-w-[65ch] p-6 space-y-6">
  <h1 class="text-4xl font-bold leading-tight text-balance">
    文章は“行長・行間・折返し”の3点で読みやすくなる
  </h1>
  <p class="text-slate-700 leading-relaxed text-pretty">
    1行の長さを 65ch 前後に抑え、本文はやや広めの行間…
  </p>
  <p class="text-slate-700 leading-relaxed text-pretty">
    見出しには text-balance、本文には text-pretty を使うと…
  </p>
</article>
```

### カードのタイトル＋本文
```html
<article class="rounded-xl border bg-white p-5 shadow-sm">
  <h3 class="text-xl font-semibold leading-tight text-balance">
    設置だけで見栄えが整う最小セット
  </h3>
  <p class="mt-2 text-slate-700 leading-relaxed text-pretty">
    max-w / leading / text-wrap 系を押さえると、タイポは一気に読みやすくなります。
  </p>
</article>
```

### レスポンシブで“本文幅だけ”拡げる
```html
<main class="mx-auto max-w-[65ch] lg:max-w-[72ch] p-6 space-y-6">
  …
</main>
```

---

## まとめ（迷ったら）
- **本文**：`max-w-[65ch]` + `leading-relaxed` + `text-pretty`  
- **見出し**：`leading-tight` + `text-balance`  
- **段落間**：`space-y-*` で段落の呼吸を確保（例：`space-y-6`）

