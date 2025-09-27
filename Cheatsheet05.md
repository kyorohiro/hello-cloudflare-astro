# 🎛️ Tailwind 状態バリアント Cheatsheet

> UIの状態変化を **ユーティリティの掛け算** で制御するためのまとめ  
> 対応：Tailwind CSS v4+

---

## 🧩 基本の状態バリアント

| バリアント | 意味 | CSS対応 | Tailwind独自 |
|-------------|------|-----------|---------------|
| `hover:` | マウスカーソルが乗っているとき | `:hover` | ❌ |
| `focus:` / `focus-visible:` | フォーカスを得たとき（特にキーボード操作） | `:focus`, `:focus-visible` | ❌ |
| `active:` | クリック・タップ中 | `:active` | ❌ |
| `group-hover:` | 親 `.group` が hover のとき | `.group:hover .child` | ✅ |
| `group-open:` | 親 `<details>` が open のとき | `.group[open] .child` | ✅ |
| `peer-checked:` | 兄弟 `.peer` input が checked のとき | `.peer:checked ~ .child` | ✅ |
| `[aria-*]` | ARIA属性が特定の値のとき | `[aria-expanded='true']` | ✅ |
| `[data-*]` | カスタム属性に応じて | `[data-state='open']` | ✅ |
| `has-[]:` | 子孫に特定要素があるとき | `:has(input:checked)` | ✅（v4以降） |

---

## 🧠 状態ごとのCSS動作

| 状態 | 発火タイミング | 備考 |
|------|----------------|------|
| `hover:` | マウスが乗った時 | スマホでは擬似的に動作する場合あり |
| `focus:` | キーボードで選択した時 | UIアクセシビリティで重要 |
| `focus-visible:` | 見た目上フォーカスが必要なとき | キーボード操作時のみ発火 |
| `active:` | 押している間 | hover より優先される |
| `group-open:` | `<details>` の open 状態 | JavaScript不要で開閉制御可能 |
| `peer-checked:` | 兄弟 input がチェック済み | トグルUIによく使う |
| `[aria-expanded='true']` | ARIA属性に応じて | JSと組み合わせて状態連動 |

---

## ⚙️ `hover` と `active` の関係

### 優先順位
- `:active` は `:hover` より **優先される**
- どちらも specificity（優先度）は同じ
- Tailwind内部では `.active:` が `.hover:` の後に出力されるため、常に `active` が優先

### 状態遷移フロー

1. マウスが乗る → `:hover`
2. クリック押下中 → `:active`
3. 離すと両方解除

---

## 🧩 組み合わせ指定（複合セレクタ）

Tailwind v4 以降では **`[&:...]` 構文** で任意の組み合わせが可能。

### `:active && :hover`
```html
<button class="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 [&:active:hover]:bg-sky-800 text-white px-4 py-2 rounded">
  押している間さらに濃くなる
</button>
```

### `:active && !:hover`
```html
<button class="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 [&:active:not(:hover)]:bg-red-600 text-white px-4 py-2 rounded">
  押したままカーソルを外すと赤くなる
</button>
```

---

## 💡 CSSでの等価表現

| Tailwind構文 | 等価CSS |
|---------------|-----------|
| `hover:bg-sky-600` | `button:hover { background: #0284c7; }` |
| `active:bg-sky-800` | `button:active { background: #075985; }` |
| `[&:active:hover]:bg-sky-800` | `button:active:hover { background: #075985; }` |
| `[&:active:not(:hover)]:bg-red-600` | `button:active:not(:hover) { background: #dc2626; }` |

---

## 🧩 状態連動の代表的パターン

| 状態源 | ターゲット例 | 用途 |
|----------|---------------|------|
| `.group:hover` | `.group-hover:` | 親カードホバーで子のアイコンを変える |
| `.group[open]` | `.group-open:` | `<details>` 展開時に矢印回転 |
| `.peer:checked` | `.peer-checked:` | トグルスイッチ、カスタムチェックボックス |
| `[aria-expanded='true']` | `[&[aria-expanded='true']]:` | JSで開閉状態連動 |
| `[data-state='open']` | `[&[data-state='open']]:` | カスタム状態制御 |

---

## 🧠 応用例：すべての状態を組み合わせたボタン

```html
<button
  class="rounded-lg border border-slate-300 bg-sky-500 text-white px-4 py-2 font-medium
         hover:bg-sky-600 active:bg-sky-700
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400
         [&:active:hover]:bg-sky-800 [&:active:not(:hover)]:bg-red-600
         transition">
  完全版ボタン
</button>
```

---

## 🧭 状態バリアント早見表

| 状態 | Tailwind構文 | 標準CSS | 備考 |
|------|---------------|----------|------|
| Hover | `hover:` | `:hover` | マウスオーバー |
| Focus | `focus:` | `:focus` | フォーカス時 |
| Focus Visible | `focus-visible:` | `:focus-visible` | キーボード操作時のみ |
| Active | `active:` | `:active` | 押している間 |
| Group Hover | `group-hover:` | `.group:hover .child` | 親hoverに連動 |
| Group Open | `group-open:` | `.group[open] .child` | `<details>`開状態に連動 |
| Peer Checked | `peer-checked:` | `.peer:checked ~ .child` | input連動 |
| ARIA属性 | `[&[aria-expanded='true']]:` | `[aria-expanded='true']` | JSで状態切替 |
| Data属性 | `[&[data-state='open']]:` | `[data-state='open']` | カスタム状態制御 |
| has()構文 | `has-[input:checked]:` | `:has(input:checked)` | ネイティブ状態検知 |

---

## 🧩 参考：Tailwind 4 の新構文 `[&:...]`

| 用途 | Tailwind構文 | 意味 |
|------|---------------|------|
| 子孫に対して条件指定 | `[&:has(input:checked)]:bg-green-500` | 内部にチェックあり |
| 否定条件 | `[&:not(:hover)]:opacity-50` | hoverしていないとき透明 |
| 複合条件 | `[&:hover:active]:scale-95` | hover かつ active のとき縮小 |

---

## ✅ まとめ

- `:active` は `:hover` より優先される（Tailwind内部順序でも後）
- Tailwind v4 から `[&:active:hover]` のような複合指定が可能
- 状態は JS ではなく「構造 × クラス」で制御できる
- ARIA・data属性・peer・group を組み合わせると JSレスで高度なUI制御が可能

---

> 💬 一言まとめ  
> Tailwind の状態バリアントは **“UIの状態＝HTML構造 × クラス構成”** で表現する思想。  
> コードが宣言的で、アクセシブルで、保守しやすくなる。
