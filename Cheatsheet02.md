# Tailwind クラス チートシート

---

## 1. Layout（配置・サイズ）
- `container` : 中央寄せ + 最大幅
- `block` / `inline` / `inline-block`
- `flex` / `inline-flex`
- `grid`
- 幅: `w-1/2`, `w-full`, `max-w-sm`, `w-[300px]`
- 高さ: `h-1/2`, `h-full`, `h-screen`, `h-[200px]`
- 位置: `relative`, `absolute`, `fixed`, `sticky`, `top-0`, `left-1/2`

---

## 2. Flex & Grid
### Flex
- `flex-row` / `flex-col`
- `justify-start` / `justify-center` / `justify-end` / `justify-between`
- `items-start` / `items-center` / `items-end`
- `gap-2`, `gap-4`

### Grid
- `grid-cols-2`, `grid-cols-3`, …
- `gap-4`, `gap-x-2`, `gap-y-8`
- `col-span-2`, `row-span-3`
- `place-items-center`（縦横中央）

---

## 3. Spacing（余白）
- Margin: `m-4`, `mx-auto`, `mt-2`, `mb-6`
- Padding: `p-4`, `px-6`, `py-2`
- Gap: `gap-2`, `gap-x-4`, `gap-y-8`

---

## 4. Typography（文字）
- サイズ: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- 太さ: `font-light`, `font-normal`, `font-bold`
- 色: `text-gray-800`, `text-red-500`, `dark:text-white`
- 装飾: `italic`, `underline`, `line-through`, `uppercase`

---

## 5. Background / Border
- 背景色: `bg-white`, `bg-gray-100`, `bg-blue-500`
- 枠線: `border`, `border-gray-300`, `border-t-2`
- 角丸: `rounded`, `rounded-md`, `rounded-full`
- 影: `shadow`, `shadow-md`, `shadow-lg`

---

## 6. Effects（効果）
- 不透明度: `opacity-50`, `opacity-100`
- 重なり順: `z-0`, `z-10`, `z-50`
- 遷移・アニメーション: `transition`, `duration-300`, `ease-in-out`
- ホバー: `hover:bg-gray-200`, `hover:text-blue-500`

---

## 7. Responsive / State
- ブレークポイント: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
  - 例: `hidden md:block`（モバイル非表示、PC表示）
- 状態: `hover:`, `focus:`, `active:`, `disabled:`
- ダークモード: `dark:bg-gray-900`, `dark:text-white`

---

# ✅ よく使う組み合わせ例
- 中央寄せ: `flex justify-center items-center`
- 横並びカード: `flex gap-4`
- 縦並びカード: `flex flex-col gap-2`
- ギャラリー: `grid grid-cols-3 gap-4`
- ボタン: `px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600`

