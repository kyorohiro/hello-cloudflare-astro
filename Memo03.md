# Tailwind カード設計・最小チートシート（生 Markdown 版）

> Tailwind で “カード” を作るときに **まず覚えておけば足りるクラス群**を、用途別に最小セットで整理。最後に **コピペ用プリセット**付き。

---

## 基本の部品（カテゴリ別）

- **レイアウト・余白**
  - `p-4/5/6`（内側余白）
  - `space-y-2/3`（見出しと本文の間）
  - `w-full` / `max-w-sm/md`（横幅制御）
  - `flex flex-col gap-3`（中身の縦並び）

- **背景・境界**
  - `bg-white`（明） / `bg-slate-800`（暗）
  - `border border-slate-200`（薄い枠）
  - `rounded-lg/-xl/2xl`（角丸）

- **影（エレベーション）**
  - `shadow-sm` / `shadow` / `shadow-md`
  - ホバー：`hover:shadow-md` + `transition-shadow`

- **タイポグラフィ**
  - 見出し：`text-lg font-semibold text-slate-900`
  - 本文：`text-sm leading-relaxed text-slate-600`
  - 補助：`text-xs text-slate-500`

- **インタラクション（クリック可能カード）**
  - `transition hover:-translate-y-0.5`
  - `hover:bg-slate-50`
  - `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2`

- **画像・メディア**
  - 角丸継承：`overflow-hidden`
  - サムネ：`aspect-video object-cover`
  - アイコン枠：`h-10 w-10 rounded-md bg-slate-100 flex items-center justify-center`

- **ステータス/タグ**
  - バッジ：`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700`

- **ダークモード（任意）**
  - `dark:bg-slate-900 dark:border-slate-700`
  - `dark:text-slate-200 dark:[&_.muted]:text-slate-400`

---

## よく使うバリアント（3種）

**1) Elevated（影・枠薄）**
```
<article class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
  <!-- 中身 -->
</article>
```

**2) Outline（枠のみ・フラット）**
```
<article class="rounded-xl border border-slate-200 bg-white p-6">
  <!-- 中身 -->
</article>
```

**3) Ghost（背景透明・中で区切る）**
```
<article class="rounded-xl p-6">
  <!-- 中身 -->
</article>
```

---

## コピペレシピ

### 基本カード（見出し＋本文＋アクション）
```
<article class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
  <header class="space-y-1">
    <h3 class="text-lg font-semibold text-slate-900">カード見出し</h3>
    <p class="text-sm text-slate-600">説明テキストが入ります。</p>
  </header>

  <div class="mt-4 flex items-center gap-2">
    <span class="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">Badge</span>
  </div>

  <footer class="mt-6">
    <a href="#"
       class="inline-flex items-center rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white
              hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2">
      アクション
    </a>
  </footer>
</article>
```

### クリック可能カード（上にフワッと上がる）
```
<a href="#"
   class="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm
          transition hover:-translate-y-0.5 hover:shadow-md
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2">
  <h4 class="text-base font-semibold text-slate-900">タイトル</h4>
  <p class="mt-1 text-sm text-slate-600">概要テキスト…</p>
</a>
```

### サムネ付きカード（画像上・本文下）
```
<article class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <img src="/img.jpg" alt="" class="h-48 w-full object-cover">
  <div class="p-5">
    <h3 class="text-lg font-semibold text-slate-900">見出し</h3>
    <p class="mt-1 text-sm text-slate-600">テキスト…</p>
  </div>
</article>
```

### 統計/KPIカード（中央揃え）
```
<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
  <div class="text-sm text-slate-500">本日の売上</div>
  <div class="mt-1 text-3xl font-bold tracking-tight text-slate-900">¥128,900</div>
  <div class="mt-1 text-xs text-emerald-600">+5.2% vs 昨日</div>
</div>
```

---

## 親コンテナの並べ方レシピ（隙間の管理）

**基本は `gap`（折り返し対応）**
```
<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <!-- 上のカードを複数 -->
</section>
```

**端にも“ガター”が必要なとき**
```
<div class="px-6">
  <section class="mx-auto max-w-screen-lg grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- カード群 -->
  </section>
</div>
```

**ペアごとに隙間を変える（横一列・折返しなし）**
```
<div class="flex gap-0">
  <div class="...">A</div>
  <div class="... ml-8">B</div>   <!-- A-B = 2rem -->
  <div class="... ml-16">C</div>  <!-- B-C = 4rem -->
</div>
```

**親から一括制御（任意セレクタバリアント）**
```
<div class="flex gap-0
            [&>*:nth-child(2)]:ml-8
            [&>*:nth-child(3)]:ml-16">
  <div class="...">A</div>
  <div class="...">B</div>
  <div class="...">C</div>
</div>
```

**Grid でスペーサ列（折返しありでも安定）**
```
<div class="grid grid-cols-[1fr_2rem_1fr_4rem_1fr] items-start">
  <div class="col-[1] ...">A</div>
  <div class="col-[3] ...">B</div>
  <div class="col-[5] ...">C</div>
</div>
```

---

## 仕上げチェックリスト

- クリック可能なら **`a` か `button` をラッパ**に
- **フォーカスリング**：`focus-visible:*` を必ず付与
- **内部の隙間**＝`gap`、**外周の余白**＝親に `px-*`
- **トップの距離**は `margin-top` ではなく **`pt-*`**（折り畳み回避）
- 影と枠は **過度に併用しない**（`shadow-sm` + `border-slate-200` 程度から）

---

## コピペ用プリセット（`@layer components`）

```
@layer components {
  .card { @apply rounded-xl border border-slate-200 bg-white p-6 shadow-sm; }
  .card-hover { @apply transition hover:-translate-y-0.5 hover:shadow-md; }
  .card-header { @apply space-y-1; }
  .card-title { @apply text-lg font-semibold text-slate-900; }
  .card-subtle { @apply text-sm text-slate-600 leading-relaxed; }
  .card-badge { @apply inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700; }
  .card-focus { @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2; }
}
```

**使用例**
```
<article class="card card-hover">
  <header class="card-header">
    <h3 class="card-title">カード見出し</h3>
    <p class="card-subtle">説明テキストが入ります。</p>
  </header>

  <div class="mt-4 flex items-center gap-2">
    <span class="card-badge">Badge</span>
  </div>

  <footer class="mt-6">
    <a href="#" class="inline-flex items-center rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white card-focus">
      アクション
    </a>
  </footer>
</article>
```

