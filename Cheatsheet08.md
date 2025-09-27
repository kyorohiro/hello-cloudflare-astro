# カード レイアウト & タイポ セット（Tailwind v4）

カードUIを量産するための **ベースプリセット** と **タイポ構成**、**レイアウト例** をまとめます。

---

## 0) ベースカード（推奨）
```html
<article class="rounded-2xl border border-slate-200 bg-white shadow-sm
                p-5 sm:p-6">
  <!-- 中身 -->
</article>
```
- 影の段階：`shadow-xs` / `shadow-sm` / `shadow` / `shadow-md`…  
- 余白は `sm:p-*` でブレークポイント調整。

---

## 1) タイトル・メタ・本文のタイポ
```html
<article class="rounded-2xl border bg-white p-5 shadow-sm">
  <header class="mb-3">
    <h3 class="text-xl font-semibold leading-tight text-balance">カードの見出し</h3>
    <p class="mt-1 text-xs text-slate-500 leading-snug">2025-09-27 · 3 min read</p>
  </header>
  <div class="prose-p:leading-relaxed prose-p:text-slate-700 space-y-3">
    <p class="text-pretty">本文は `leading-relaxed` と `text-pretty` を基本に。</p>
    <p class="text-pretty">文章塊ごとに `space-y-*` で呼吸を確保。</p>
  </div>
  <footer class="mt-4 flex items-center gap-3">
    <button class="rounded-lg px-3 py-1.5 text-sm font-medium
                   bg-slate-900 text-white hover:bg-slate-800
                   [transition:background-color_160ms_ease,transform_100ms_ease]">
      詳細
    </button>
    <button class="rounded-lg px-3 py-1.5 text-sm font-medium
                   bg-slate-100 text-slate-900 hover:bg-slate-200
                   [transition:background-color_160ms_ease,transform_100ms_ease]">
      共有
    </button>
  </footer>
</article>
```

---

## 2) メディア + コンテンツ（比率固定）
```html
<article class="overflow-hidden rounded-2xl border bg-white shadow-sm">
  <div class="aspect-[16/9] bg-slate-100">
    <!-- 画像なら object-cover -->
    <img src="/hero.jpg" alt="" class="size-full object-cover" />
  </div>
  <div class="p-5 sm:p-6">
    <h3 class="text-xl font-semibold leading-tight text-balance">タイトル</h3>
    <p class="mt-2 text-slate-700 leading-relaxed text-pretty">
      説明テキスト。画像の下に本文を配置。
    </p>
  </div>
</article>
```

---

## 3) 横並び（SM以上で2カラム）
```html
<article class="grid gap-0 overflow-hidden rounded-2xl border bg-white shadow-sm
                sm:grid-cols-[40%_1fr]">
  <div class="bg-slate-100">
    <img src="/thumb.jpg" alt="" class="h-full w-full object-cover" />
  </div>
  <div class="p-5 sm:p-6">
    <h3 class="text-xl font-semibold leading-tight text-balance">横並びカード</h3>
    <p class="mt-2 text-slate-700 leading-relaxed text-pretty">
      小さな画面では縦積み、SM以上で2カラムに。
    </p>
  </div>
</article>
```

---

## 4) カード一覧のグリッド
```html
<section class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  <!-- 上記のカードを量産 -->
</section>
```
- 列間は `gap-*`、縦の間はカード内で `space-y-*`。

---

## 5) ヘッダーアクション（右寄せ）
```html
<header class="mb-3 flex items-start justify-between gap-3">
  <div>
    <h3 class="text-xl font-semibold leading-tight text-balance">タイトル</h3>
    <p class="mt-1 text-xs text-slate-500 leading-snug">サブ情報</p>
  </div>
  <div class="flex items-center gap-2">
    <button class="size-9 rounded-md inline-grid place-items-center
                   bg-slate-100 hover:bg-slate-200
                   [transition:background-color_160ms_ease]">⋯</button>
  </div>
</header>
```

---

## 6) バッジ / ステータス
```html
<span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium
             bg-emerald-100 text-emerald-800">New</span>
<span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium
             bg-amber-100 text-amber-800">Beta</span>
<span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium
             bg-rose-100 text-rose-800">Error</span>
```

---

## 7) コンパクト / ワイドのバリエーション
```html
<!-- Compact -->
<article class="rounded-xl border bg-white p-4 shadow-xs text-sm">
  …
</article>

<!-- Spacious -->
<article class="rounded-2xl border bg-white p-6 shadow-md">
  …
</article>
```

---

## 8) ダークモードの調整（例）
```html
<article class="rounded-2xl border border-slate-800/50 bg-slate-900 text-slate-100 shadow
                p-5 sm:p-6">
  <h3 class="text-xl font-semibold leading-tight text-balance">Dark Card</h3>
  <p class="mt-2 text-slate-300 leading-relaxed text-pretty">…</p>
</article>
```

---

## 9) スケルトン（ローディング）
```html
<article class="rounded-2xl border bg-white p-5 shadow-sm animate-pulse">
  <div class="h-40 rounded-xl bg-slate-200"></div>
  <div class="mt-4 space-y-2">
    <div class="h-4 w-3/5 rounded bg-slate-200"></div>
    <div class="h-4 w-full rounded bg-slate-200"></div>
    <div class="h-4 w-4/5 rounded bg-slate-200"></div>
  </div>
</article>
```

---

## 10) 実戦プリセット（コピペ用）
```html
<!-- Card Preset -->
<article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
  <header class="mb-3 flex items-start justify-between gap-3">
    <div>
      <h3 class="text-xl font-semibold leading-tight text-balance">タイトル</h3>
      <p class="mt-1 text-xs text-slate-500 leading-snug">メタ情報</p>
    </div>
    <button class="size-9 rounded-md inline-grid place-items-center bg-slate-100 hover:bg-slate-200
                   [transition:background-color_160ms_ease]">⋯</button>
  </header>
  <p class="text-slate-700 leading-relaxed text-pretty">
    本文は読みやすさ優先。`max-w-[65ch]` を親に入れても良い。
  </p>
  <footer class="mt-4 flex items-center gap-3">
    <button class="rounded-lg px-3 py-1.5 text-sm font-medium
                   bg-slate-900 text-white hover:bg-slate-800 active:scale-95
                   [transition:background-color_160ms_ease,transform_100ms_ease]">
      決定
    </button>
    <button class="rounded-lg px-3 py-1.5 text-sm font-medium
                   bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-95
                   [transition:background-color_160ms_ease,transform_100ms_ease]">
      キャンセル
    </button>
  </footer>
</article>
```

