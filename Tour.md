# Tour of Tailwind (v5) — 12 Lessons

> 手を動かして **Tailwind を体系的に網羅**するミニツアー。  
> 各レッスンは **Tailwind Play** にそのままコピペで動きます。  
> 参考実装はユーティリティ中心（CSSを書かずに構築）＋必要に応じて `@layer components` と `@theme` を使用。

## 目次
1. [Utility-First ウォームアップ](#lesson-1-utility-first-ウォームアップ)
2. [レスポンシブの基本](#lesson-2-レスポンシブの基本)
3. [コンテナクエリ入門](#lesson-3-コンテナクエリ入門)
4. [状態バリアント（hover/focus/ARIA/peer）](#lesson-4-状態バリアントhoverfocusariapeer)
5. [レイアウト（Flex / Grid）](#lesson-5-レイアウトflex--grid)
6. [タイポ & 可読性](#lesson-6-タイポ--可読性)
7. [トランジション & アニメーション](#lesson-7-トランジション--アニメーション)
8. [ダークモード & テーミング](#lesson-8-ダークモード--テーミング)
9. [フォーム & アクセシビリティ](#lesson-9-フォーム--アクセシビリティ)
10. [メディア（アスペクト比/画像フィット）](#lesson-10-メディアアスペクト比画像フィット)
11. [コンポーネント設計（Button/Card/Modal）](#lesson-11-コンポーネント設計buttoncardmodal)
12. [まとめ（LP風ワンページ）](#lesson-12-まとめlp風ワンページ)

---

## Lesson 1: Utility-First ウォームアップ

**ゴール**：CSSを書かずに、ユーティリティクラスだけでカードレイアウトを完成。

```html
<div class="min-h-dvh bg-slate-50">
  <main class="mx-auto max-w-screen-lg p-6 space-y-8">
    <header class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">Utility-First Warm-up</h1>
      <p class="text-slate-600 leading-relaxed">CSSなしでカードを仕上げる。</p>
    </header>

    <section class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-900">余白</h2>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">p-6 / gap-6 / space-y-*</p>
        <button class="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-600 px-3 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Action</button>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-900">色</h2>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">bg-slate-50 / bg-white / text-slate-900</p>
        <div class="mt-4 flex items-center gap-2">
          <span class="h-6 w-6 rounded bg-slate-50 border border-slate-200"></span>
          <span class="h-6 w-6 rounded bg-white border border-slate-200"></span>
          <span class="h-6 w-6 rounded bg-sky-600"></span>
        </div>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-lg font-semibold text-slate-900">タイポ</h2>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">text-lg / text-sm / leading-relaxed</p>
        <a href="#" class="mt-4 inline-block text-sm font-medium text-sky-700 hover:text-sky-800 underline underline-offset-4">More →</a>
      </article>
    </section>
  </main>
</div>
```

---

## Lesson 2: レスポンシブの基本

**ゴール**：`sm:` `md:` `lg:` `xl:` の接頭辞で列数・余白・文字サイズを切替。

```html
<div class="min-h-dvh bg-slate-50">
  <main class="mx-auto max-w-screen-xl p-4 sm:p-6 lg:p-10 space-y-8">
    <header>
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Responsive Basics</h1>
    </header>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      <!-- カードを複製して枚数を増やせる -->
      <article class="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
        <h2 class="text-base sm:text-lg font-semibold text-slate-900">Card</h2>
        <p class="mt-2 text-sm text-slate-600 leading-relaxed">列数・余白・文字サイズが段階的に拡大。</p>
      </article>
    </section>
  </main>
</div>
```

---

## Lesson 3: コンテナクエリ入門

**ゴール**：親に `@container`、子で `@sm:` `@md:` を使い、**親幅基準**で切替。

```html
<div class="min-h-dvh bg-slate-50 p-6">
  <main class="mx-auto max-w-screen-lg space-y-6">
    <section class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div class="mb-3 flex gap-2 text-sm text-slate-600">
        <button class="rounded border px-3 py-1 hover:bg-slate-100" onclick="wrap.style.width='100%'">100%</button>
        <button class="rounded border px-3 py-1 hover:bg-slate-100" onclick="wrap.style.width='720px'">720px</button>
        <button class="rounded border px-3 py-1 hover:bg-slate-100" onclick="wrap.style.width='480px'">480px</button>
      </div>

      <div id="wrap" class="@container mx-auto w-full transition-all duration-300">
        <div class="grid grid-cols-1 gap-4 @sm:grid-cols-2 @md:grid-cols-3">
          <article class="rounded-xl border border-slate-200 p-4 @sm:p-5 @md:p-6">
            <h2 class="text-base @sm:text-lg @md:text-xl font-semibold text-slate-900">Card</h2>
            <p class="mt-1 text-sm @sm:text-[0.95rem] @md:text-base text-slate-600 leading-relaxed">親幅で1→2→3列。</p>
          </article>
          <!-- もっと追加OK -->
        </div>
      </div>
    </section>
  </main>
</div>
<script>const wrap = document.getElementById('wrap');</script>
```

---

## Lesson 4: 状態バリアント（hover/focus/ARIA/peer）

**ゴール**：UIの状態変化をユーティリティの**掛け算**で制御。

```html
<div class="min-h-dvh bg-slate-50 p-6">
  <main class="mx-auto max-w-screen-md space-y-8">
    <!-- ボタン -->
    <section>
      <button
        class="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium
               hover:bg-sky-700 active:bg-sky-800
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2
               transition">Button</button>
    </section>

    <!-- details + group-open -->
    <section>
      <details class="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <summary class="flex cursor-pointer items-center justify-between">
          <span class="font-medium">開閉</span><span class="transition group-open:rotate-180">⌄</span>
        </summary>
        <div class="mt-3 hidden group-open:block text-slate-700">group-open: で表示</div>
      </details>
    </section>

    <!-- peer-checked -->
    <section>
      <label class="flex items-center gap-3">
        <input type="checkbox" class="peer size-4 rounded border-slate-300" />
        <span class="rounded-lg border px-3 py-1.5 text-sm peer-checked:bg-emerald-600 peer-checked:text-white transition">トグル</span>
      </label>
    </section>

    <!-- ARIA + 任意セレクタバリアント -->
    <section>
      <button id="ariaBtn" aria-expanded="false"
              class="rounded-lg border border-slate-300 bg-white px-4 py-2
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
                     transition [&[aria-expanded='true']]:bg-sky-600 [&[aria-expanded='true']]:text-white">
        ARIAで開閉
      </button>
      <div id="ariaPanel" hidden class="mt-2 rounded-lg border p-3">開いたときだけ表示</div>
    </section>
  </main>
</div>
<script>
  const btn = document.getElementById('ariaBtn');
  const panel = document.getElementById('ariaPanel');
  btn.addEventListener('click', () => {
    const next = btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    btn.setAttribute('aria-expanded', next);
    panel.hidden = next !== 'true';
  });
</script>
```

---

## Lesson 5: レイアウト（Flex / Grid）

**ゴール**：ヘッダー=Flex、ページ=Grid。

```html
<div class="min-h-dvh bg-slate-50">
  <header class="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-14 items-center justify-between">
        <div class="font-semibold">Flex/Grid Layout</div>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a class="text-slate-600 hover:text-slate-900" href="#">Docs</a>
          <a class="text-slate-600 hover:text-slate-900" href="#">Blog</a>
        </nav>
      </div>
    </div>
  </header>

  <main class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-6 grid gap-6 grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr_320px]">
    <aside class="hidden md:block sticky top-16 rounded-xl border bg-white p-3 text-sm">
      <a class="block rounded-lg px-3 py-2 bg-sky-50 text-sky-800 border border-sky-200" href="#">Dashboard</a>
      <a class="block rounded-lg px-3 py-2 hover:bg-slate-50 mt-1" href="#">Projects</a>
    </aside>

    <section class="space-y-6">
      <article class="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 class="text-2xl sm:text-3xl font-semibold text-slate-900">概要</h1>
        <p class="mt-2 text-slate-600">Header=Flex / Page=Grid の組み合わせ。</p>
      </article>
      <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article class="rounded-xl border bg-white p-5"><h2 class="text-lg font-semibold">カード</h2></article>
        <article class="rounded-xl border bg-white p-5"><h2 class="text-lg font-semibold">カード</h2></article>
        <article class="rounded-xl border bg-white p-5"><h2 class="text-lg font-semibold">カード</h2></article>
      </div>
    </section>

    <aside class="hidden lg:block sticky top-16">
      <div class="rounded-xl border bg-white p-5">右カラム</div>
    </aside>
  </main>
</div>
```

---

## Lesson 6: タイポ & 可読性

**ゴール**：`max-w-[65ch]` / `leading-*` / `text-balance` / `text-pretty`。

```html
<div class="min-h-dvh bg-slate-50 antialiased">
  <main class="mx-auto max-w-screen-lg p-6 sm:p-10">
    <article class="mx-auto max-w-[65ch] text-pretty selection:bg-yellow-200 selection:text-black text-base leading-7 text-slate-800 space-y-4">
      <h1 class="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">可読性の調整</h1>
      <p>本文幅を <code>max-w-[65ch]</code> に抑えると読みやすい。</p>
      <p class="indent-4">段落間隔は親に <code>space-y-4</code>。行間は <code>leading-7</code> を基準に。</p>
      <pre class="overflow-x-auto rounded-lg bg-slate-950 p-4 text-slate-50 text-sm leading-6"><code>console.log('code block');</code></pre>
    </article>
  </main>
</div>
```

---

## Lesson 7: トランジション & アニメーション

**ゴール**：`transition-*` / `animate-*` / カスタム `@keyframes`。

```html
<div class="min-h-dvh bg-slate-50 p-6 sm:p-10">
  <main class="mx-auto max-w-screen-lg space-y-8">
    <button class="rounded-lg bg-sky-600 px-4 py-2 text-white font-medium hover:translate-y-[-1px] hover:shadow-md hover:bg-sky-700 active:translate-y-0 transition-all duration-200 ease-out">Button</button>

    <div class="group relative overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div class="h-40 bg-[url('https://picsum.photos/800/400')] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"></div>
      <span class="absolute left-3 top-3 translate-y-[-8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">NEW</span>
    </div>

    <div class="h-4 w-1/2 rounded bg-[linear-gradient(110deg,#e5e7eb,45%,#f3f4f6,55%,#e5e7eb)] bg-[length:200%_100%] animate-[shimmer_1.4s_linear_infinite]"></div>
  </main>
</div>
<style>
  @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
</style>
```

---

## Lesson 8: ダークモード & テーミング

**ゴール**：`html.dark` + `@theme`（ブランド色トークン）。

```html
<div class="min-h-dvh bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased p-6">
  <main class="mx-auto max-w-screen-lg space-y-6">
    <header class="flex items-center gap-2">
      <button class="rounded-lg border px-3 py-1.5 text-sm" onclick="document.documentElement.classList.toggle('dark')">🌓 Toggle</button>
    </header>

    <section class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 shadow-sm" data-theme="mint">
      <h2 class="text-2xl font-semibold">Theming</h2>
      <div class="mt-4 flex gap-2">
        <button class="rounded-lg px-3 py-2 text-sm font-medium text-white bg-brand hover:bg-brand/90">Primary</button>
        <span class="rounded-md px-2 py-1 text-xs bg-brand/15 text-brand border border-brand/20">badge</span>
      </div>
    </section>
  </main>
</div>

<style>
  @theme { --color-brand: oklch(70% 0.17 155); }            /* default (mint) */
  [data-theme="mint"] { @theme { --color-brand: oklch(70% 0.17 155); } }
  [data-theme="amber"] { @theme { --color-brand: oklch(78% 0.20 70); } }
  [data-theme="ocean"] { @theme { --color-brand: oklch(68% 0.19 220); } }
</style>
```

---

## Lesson 9: フォーム & アクセシビリティ

**ゴール**：`required:` / `invalid:` / `focus-visible:` / `:has()` / `aria-*`。

```html
<div class="min-h-dvh bg-slate-50 antialiased p-6">
  <main class="mx-auto max-w-screen-sm space-y-6">
    <form class="space-y-6" novalidate>
      <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm [&:has(input:invalid)]:ring-2 [&:has(input:invalid)]:ring-rose-200">
        <label for="name" class="block text-sm font-medium">お名前 <span class="text-rose-600">*</span></label>
        <input id="name" required minlength="2" class="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 invalid:border-rose-400" placeholder="山田 太郎" />
      </div>

      <label class="flex items-start gap-3 text-sm rounded-xl border border-slate-200 bg-white p-4">
        <input type="checkbox" required class="peer mt-0.5 size-4 rounded border-slate-300" />
        <span><span class="font-medium">利用規約に同意</span><span class="block text-slate-600">必須です。</span><span class="mt-1 hidden text-rose-700 peer-[&:not(:checked)]:block">チェックしてください。</span></span>
      </label>

      <button type="submit" class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-black focus-visible:ring-2 focus-visible:ring-sky-400">送信</button>
    </form>
  </main>
</div>
```

---

## Lesson 10: メディア（アスペクト比/画像フィット）

**ゴール**：`aspect-*` / `object-*` / `<figure>/<figcaption>` / shimmer。

```html
<div class="min-h-dvh bg-slate-50 antialiased p-6">
  <main class="mx-auto max-w-screen-lg space-y-6">
    <div class="rounded-2xl border bg-white p-4 shadow-sm">
      <h3 class="text-lg font-semibold">YouTube（aspect-video）</h3>
      <div class="mt-3 aspect-video overflow-hidden rounded-xl bg-slate-100">
        <iframe class="size-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <figure class="rounded-xl border bg-white p-3 shadow-sm">
        <div class="aspect-square overflow-hidden rounded-lg bg-slate-100">
          <img class="size-full object-contain" src="https://picsum.photos/id/1025/800/600" alt="Dog">
        </div>
        <figcaption class="mt-2 text-xs text-slate-600">object-contain（全体表示）</figcaption>
      </figure>
      <figure class="rounded-xl border bg-white p-3 shadow-sm">
        <div class="aspect-square overflow-hidden rounded-lg bg-slate-100">
          <img class="size-full object-cover object-center" src="https://picsum.photos/id/1025/800/600" alt="Dog">
        </div>
        <figcaption class="mt-2 text-xs text-slate-600">object-cover（埋める）</figcaption>
      </figure>
      <figure class="rounded-xl border bg-white p-3 shadow-sm">
        <div class="aspect-square overflow-hidden rounded-lg bg-slate-100">
          <img class="size-full object-cover object-[30%_20%]" src="https://picsum.photos/id/1025/800/600" alt="Dog (focus)">
        </div>
        <figcaption class="mt-2 text-xs text-slate-600">object-[30%_20%]（焦点指定）</figcaption>
      </figure>
    </div>
  </main>
</div>
```

---

## Lesson 11: コンポーネント設計（Button/Card/Modal）

**ゴール**：`@layer components + @apply` と data属性で再利用。

```html
<div class="min-h-dvh bg-slate-50 antialiased p-6">
  <main class="mx-auto max-w-screen-md space-y-8">
    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Buttons</h2>
      <div class="flex flex-wrap gap-2">
        <button class="btn" data-variant="primary">Primary</button>
        <button class="btn" data-variant="outline">Outline</button>
        <button class="btn" data-variant="ghost">Ghost</button>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Cards</h2>
      <article class="card"><h3 class="card-title">Card</h3><p class="card-desc">説明文。</p></article>
      <article class="card" data-tone="accent"><h3 class="card-title">Accent</h3><p class="card-desc">左ライン付き。</p></article>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Modal</h2>
      <button id="open" class="btn" data-variant="primary">開く</button>
      <div id="backdrop" class="modal-backdrop" hidden></div>
      <div id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="m_title" hidden>
        <header class="modal-header">
          <h3 id="m_title" class="modal-title">タイトル</h3>
          <button id="close" class="icon-btn" aria-label="閉じる">✕</button>
        </header>
        <div class="modal-body"><p>本文</p></div>
        <footer class="modal-actions">
          <button class="btn" data-variant="ghost" id="cancel">キャンセル</button>
          <button class="btn" data-variant="primary">OK</button>
        </footer>
      </div>
    </section>
  </main>
</div>

<style>
  @theme { --color-brand: oklch(70% 0.17 155); }
  @layer components {
    .btn { @apply inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-transparent bg-slate-900 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 transition; }
    .btn[data-variant="primary"] { @apply bg-brand hover:bg-brand/90 text-white; }
    .btn[data-variant="outline"] { @apply bg-white text-slate-900 border-slate-300 hover:bg-slate-50; }
    .btn[data-variant="ghost"]   { @apply bg-transparent text-slate-900 hover:bg-slate-100; }

    .card { @apply rounded-2xl border border-slate-200 bg-white p-5 shadow-sm; }
    .card[data-tone="accent"] { @apply relative ps-5; }
    .card[data-tone="accent"]::before { content:""; @apply absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-brand; }
    .card-title { @apply text-lg font-semibold text-slate-900; }
    .card-desc  { @apply mt-1 text-sm text-slate-600; }

    .modal-backdrop { @apply fixed inset-0 bg-slate-900/50; }
    .modal { @apply fixed left-1/2 top-1/2 w-[min(560px,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-0 shadow-xl; }
    .modal-header { @apply flex items-center justify-between border-b border-slate-200 px-5 py-3; }
    .modal-title  { @apply text-base font-semibold text-slate-900; }
    .modal-body   { @apply px-5 py-4 text-slate-700; }
    .modal-actions{ @apply flex justify-end gap-2 border-t border-slate-200 px-5 py-3; }

    .icon-btn { @apply inline-flex size-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900; }
  }
</style>
<script>
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const cancel = document.getElementById('cancel');
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('backdrop');
  function show(){ modal.hidden = backdrop.hidden = false; modal.querySelector('button').focus(); }
  function hide(){ modal.hidden = backdrop.hidden = true; open.focus(); }
  open.addEventListener('click', show);
  close.addEventListener('click', hide);
  cancel.addEventListener('click', hide);
  backdrop.addEventListener('click', hide);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && !modal.hidden) hide(); });
</script>
```

---

## Lesson 12: まとめ（LP風ワンページ）

**ゴール**：これまでの要素を1ページに統合。

```html
<div class="min-h-dvh bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
  <header class="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-14 items-center justify-between">
        <a class="font-semibold tracking-tight" href="#">Tailwind Tour</a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a class="hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400" href="#features">Features</a>
          <a class="hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400" href="#media">Media</a>
          <a class="hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400" href="#contact">Contact</a>
        </nav>
        <div class="flex items-center gap-2">
          <button class="btn" data-variant="outline" onclick="document.documentElement.classList.toggle('dark')">🌓</button>
          <button class="btn" data-variant="primary">Get Started</button>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="relative overflow-hidden">
      <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-[1.1fr_.9fr] items-center gap-8 py-12 sm:py-16">
          <div class="space-y-4">
            <h1 class="text-balance text-4xl sm:text-5xl font-semibold tracking-tight">これ一枚で、Tailwindの“要”は押さえられる</h1>
            <p class="text-slate-600 dark:text-slate-400 text-lg">ユーティリティ / レスポンシブ / コンテナクエリ / 状態 / タイポ / アニメーション / ダーク・テーマ。</p>
            <div class="flex flex-wrap gap-2">
              <button class="btn" data-variant="primary">今すぐ始める</button>
              <button class="btn" data-variant="ghost">ドキュメント</button>
            </div>
          </div>
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-3">
            <div class="aspect-video overflow-hidden rounded-xl bg-[linear-gradient(110deg,#e5e7eb,45%,#f3f4f6,55%,#e5e7eb)] bg-[length:200%_100%] animate-[shimmer_1.4s_linear_infinite]">
              <iframe class="size-full opacity-0 transition-opacity duration-500" id="heroVid" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Intro" allowfullscreen loading="lazy"></iframe>
            </div>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">動画は <code>aspect-video</code> で比率固定。</p>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="@container">
        <div class="grid gap-4 @sm:grid-cols-2 @lg:grid-cols-3">
          <article class="card"><h3 class="card-title">レスポンシブ</h3><p class="card-desc">`sm:` `md:` `lg:` で段階的に。</p></article>
          <article class="card"><h3 class="card-title">コンテナクエリ</h3><p class="card-desc">親幅で切替（`@sm:`）。</p></article>
          <article class="card"><h3 class="card-title">状態</h3><p class="card-desc">`hover:` `focus-visible:` など。</p></article>
          <article class="card"><h3 class="card-title">タイポ</h3><p class="card-desc">`max-w-[65ch]`。</p></article>
          <article class="card" data-tone="accent"><h3 class="card-title">ダーク & テーマ</h3><p class="card-desc">`html.dark` と `@theme`。</p></article>
          <article class="card"><h3 class="card-title">アニメーション</h3><p class="card-desc">`transition-*` / `animate-*`。</p></article>
        </div>
      </div>
    </section>

    <section id="media" class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid gap-6 sm:grid-cols-2">
        <figure class="card">
          <div class="aspect-[3/2] overflow-hidden rounded-xl">
            <img class="size-full object-cover object-[50%_20%]" src="https://picsum.photos/seed/focus/1200/800" alt="">
          </div>
          <figcaption class="mt-2 text-sm text-slate-600">焦点を任意位置に。</figcaption>
        </figure>
        <figure class="card">
          <picture>
            <source media="(min-width:1024px)" srcset="https://picsum.photos/id/1018/1200/500">
            <source media="(min-width:640px)"  srcset="https://picsum.photos/id/1018/1000/600">
            <img class="aspect-[3/2] w-full rounded-xl object-cover" src="https://picsum.photos/id/1018/800/900" alt="">
          </picture>
          <figcaption class="mt-2 text-sm text-slate-600">画面幅でアートディレクション。</figcaption>
        </figure>
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-screen-sm px-4 sm:px-6 lg:px-8 py-10">
      <form class="card space-y-4" novalidate>
        <h3 class="card-title">お問い合わせ</h3>
        <label class="text-sm font-medium">メール</label>
        <input type="email" required class="input" placeholder="you@example.com">
        <label class="text-sm font-medium">内容</label>
        <textarea required rows="4" class="input resize-y" placeholder="メッセージ"></textarea>
        <div class="flex justify-end gap-2">
          <button type="reset" class="btn" data-variant="ghost">クリア</button>
          <button type="submit" class="btn" data-variant="primary">送信</button>
        </div>
      </form>
    </section>
  </main>

  <footer class="border-t border-slate-200/70 dark:border-slate-800/70 py-8">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <span>© 2025 Tailwind Tour</span>
      <nav class="flex gap-4"><a class="hover:text-slate-900 dark:hover:text-white" href="#">利用規約</a><a class="hover:text-slate-900 dark:hover:text-white" href="#">プライバシー</a></nav>
    </div>
  </footer>
</div>

<style>
  @theme { --color-brand: oklch(70% 0.17 155); }
  @layer components {
    .btn { @apply inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition border border-transparent bg-slate-900 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2; }
    .btn[data-variant="primary"] { @apply bg-brand hover:bg-brand/90 text-white; }
    .btn[data-variant="outline"] { @apply bg-white text-slate-900 border-slate-300 hover:bg-slate-50; }
    .btn[data-variant="ghost"]   { @apply bg-transparent text-slate-900 hover:bg-slate-100; }

    .card { @apply rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 p-5 shadow-sm; }
    .card[data-tone="accent"] { @apply relative ps-5; }
    .card[data-tone="accent"]::before { content:""; @apply absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-brand; }
    .card-title { @apply text-lg font-semibold text-slate-900 dark:text-white; }
    .card-desc  { @apply mt-1 text-sm text-slate-600 dark:text-slate-400; }

    .input { @apply w-full rounded-lg border border-slate-300 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40; }
  }
  @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
</style>
<script>
  const vid = document.getElementById('heroVid');
  vid.addEventListener('load', () => { vid.style.opacity = 1; });
</script>
```

---

### おすすめの使い方
- **Tailwind Play** を開いて各レッスンのコードを貼り付け → 右側のプレビューで挙動を確認。
- 章末のミニ課題は、コメントや `TODO:` を入れて自分用にアレンジ。

> 補足：ここで使用している `@container` / `@theme` / 任意セレクタ（`[&[aria-...]]`）等は、最新の Tailwind とモダンブラウザで動作します。プロジェクト導入時は使用バージョンのドキュメントを確認してください。
