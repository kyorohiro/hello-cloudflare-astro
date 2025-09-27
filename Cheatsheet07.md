# ボタン状態遷移 レシピ集（Tailwind v4）

`hover` / `active` / `focus-visible` / `disabled` の基本と、**プロパティ別のトランジション時間**を分ける実用例をまとめます。

---

## 0) ベース（推奨の土台）
```html
<button
  class="inline-flex items-center justify-center gap-2
         rounded-lg px-4 py-2 text-sm font-medium
         bg-sky-600 text-white
         hover:bg-sky-700 active:bg-sky-800
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2
         disabled:opacity-50 disabled:pointer-events-none
         [transition:background-color_180ms_ease,box-shadow_180ms_ease,transform_100ms_ease-out]">
  Button
</button>
```
- **任意プロパティ**で `background-color`=180ms、`box-shadow`=180ms、`transform`=100ms を個別指定。

---

## 1) 色=150ms、移動=100ms の分離
```html
<button
  class="[transition:background-color_150ms_ease,transform_100ms_ease-out]
         bg-sky-600 text-white hover:bg-sky-700 active:translate-y-0.5">
  Button
</button>
```

### 1-1) 列挙で可読性重視
```html
<button
  class="[transition-property:background-color,transform]
         [transition-duration:150ms,100ms]
         [transition-timing-function:ease,ease-out]
         bg-sky-600 text-white hover:bg-sky-700 active:translate-y-0.5">
  Button
</button>
```

---

## 2) フォーカスリング専用の遷移（色と分離）
```html
<button
  class="[transition:background-color_160ms_ease,box-shadow_160ms_ease,transform_100ms_ease-out]
         focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2">
  Button
</button>
```
- `ring-*` は実体は `box-shadow`。上の `box-shadow` に含めておくと滑らか。

---

## 3) 状態ごとに duration を変える（入/戻の体感調整）
```html
<button
  class="transition-colors duration-300 ease-out hover:duration-150
         bg-sky-600 hover:bg-sky-700">
  Button
</button>
```
- ユーティリティで**状態中の値を上書き**。プロパティ別で分けたい場合は 1) の任意プロパティへ。

---

## 4) 触感のある押下（active）
```html
<button
  class="[transition:transform_100ms_ease,background-color_160ms_ease]
         active:translate-y-0.5 active:bg-sky-800">
  Button
</button>
```

---

## 5) アクセシビリティ：`motion-reduce`
```html
<button
  class="[transition:background-color_160ms_ease,transform_120ms_ease]
         motion-reduce:transition-none motion-reduce:transform-none">
  Button
</button>
```

---

## 6) バリアント（Primary / Secondary / Ghost / Destructive）
```html
<!-- Primary -->
<button class="rounded-lg px-4 py-2 font-medium text-white
              bg-sky-600 hover:bg-sky-700 active:bg-sky-800
              [transition:background-color_160ms_ease,transform_100ms_ease]">
  Primary
</button>

<!-- Secondary -->
<button class="rounded-lg px-4 py-2 font-medium
              bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300
              [transition:background-color_160ms_ease,transform_100ms_ease]">
  Secondary
</button>

<!-- Ghost -->
<button class="rounded-lg px-4 py-2 font-medium
              bg-transparent text-slate-900 hover:bg-slate-100/70 active:bg-slate-200/70
              [transition:background-color_160ms_ease,transform_100ms_ease]">
  Ghost
</button>

<!-- Destructive -->
<button class="rounded-lg px-4 py-2 font-medium text-white
              bg-rose-600 hover:bg-rose-700 active:bg-rose-800
              [transition:background-color_160ms_ease,transform_100ms_ease]">
  Delete
</button>
```

---

## 7) サイズ（XS / SM / MD / LG）
```html
<!-- XS -->
<button class="h-8 px-3 text-xs rounded-md">XS</button>
<!-- SM -->
<button class="h-9 px-3 text-sm rounded-md">SM</button>
<!-- MD（基準） -->
<button class="h-10 px-4 text-sm rounded-lg">MD</button>
<!-- LG -->
<button class="h-11 px-5 text-base rounded-lg">LG</button>
```

---

## 8) アイコンボタン & アイコン+ラベル
```html
<!-- Icon-only -->
<button class="inline-grid place-items-center size-10 rounded-full
              bg-slate-900 text-white hover:bg-slate-800 active:scale-95
              [transition:background-color_160ms_ease,transform_100ms_ease]"
        aria-label="Search">
  🔍
</button>

<!-- Icon + Label -->
<button class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
              bg-slate-900 text-white hover:bg-slate-800 active:scale-95
              [transition:background-color_160ms_ease,transform_100ms_ease]">
  <span>🔍</span><span>Search</span>
</button>
```

---

## 9) ローディング状態（`aria-busy` + `disabled`）
```html
<button
  class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium
         bg-slate-900 text-white hover:bg-slate-800
         disabled:opacity-50 disabled:pointer-events-none
         [transition:background-color_160ms_ease,transform_100ms_ease]"
  aria-busy="true" disabled>
  <svg class="size-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
    <path class="opacity-75" d="M4 12a8 8 0 0 1 8-8" fill="currentColor"/>
  </svg>
  Loading...
</button>
```
