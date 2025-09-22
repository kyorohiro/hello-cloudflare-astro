# Tailwind レイアウト チートシート

---

## 1. Flexbox（1次元レイアウト）

### 有効化
- `flex` : Flexbox
- `inline-flex` : インライン要素としての Flexbox

### 方向（flex-direction）
- `flex-row` : 横並び（デフォルト）
- `flex-row-reverse`
- `flex-col`
- `flex-col-reverse`

### 横揃え（justify-content）
- `justify-start` : 左寄せ
- `justify-center` : 中央
- `justify-end` : 右寄せ
- `justify-between` : 両端に寄せて間隔均等
- `justify-around` : 両端に余白を含めて均等
- `justify-evenly` : 全部同じ間隔

### 縦揃え（align-items）
- `items-start` : 上揃え
- `items-center` : 中央揃え
- `items-end` : 下揃え
- `items-stretch` : 高さ揃え（デフォルト）
- `items-baseline` : テキストのベースライン

### 折り返し
- `flex-nowrap` : 折り返さない（デフォルト）
- `flex-wrap`
- `flex-wrap-reverse`

### 個別の伸縮
- `flex-1` : 空きスペースを均等に埋める
- `flex-none` : 固定
- `grow` / `grow-0`
- `shrink` / `shrink-0`
- `basis-1/2`, `basis-[200px]`

---

## 2. Grid（2次元レイアウト）

### 有効化
- `grid`

### 列（grid-template-columns）
- `grid-cols-1`
- `grid-cols-2`
- `grid-cols-3` …  
- `grid-cols-[200px_minmax(900px,_1fr)_100px]`（任意値）

### 行（grid-template-rows）
- `grid-rows-1`
- `grid-rows-2`  
- 任意値: `grid-rows-[100px_auto]`

### ギャップ
- `gap-2`, `gap-4`
- `gap-x-4`, `gap-y-6`

### 配置
- `place-items-center` : 中央揃え（縦横）
- `items-start/center/end`
- `justify-items-start/center/end`

### 個別アイテムの配置
- `col-span-2`, `row-span-3`
- `col-start-2 col-end-4`

---

## 3. Position（位置指定）

### 基本
- `relative` : 基準
- `absolute` : 親の `relative` 基準に配置
- `fixed` : 画面基準に固定
- `sticky` : スクロールで一定位置に張り付く

### 位置指定
- `top-0`, `bottom-0`, `left-0`, `right-0`
- 任意値: `top-[10px]`

### Z-index
- `z-0`, `z-10`, `z-50`
- 任意値: `z-[9999]`

---

## 4. Spacing & Sizing（余白とサイズ）

### 余白（margin / padding）
- `m-4` : margin 1rem
- `mx-auto` : 左右 margin 自動
- `p-6` : padding 1.5rem
- `px-4`, `py-2`

### 幅（width）
- `w-full`, `w-screen`
- `w-1/2`, `w-1/3`
- `max-w-sm`, `max-w-lg`
- 任意値: `w-[300px]`

### 高さ（height）
- `h-full`, `h-screen`
- `h-1/2`
- `min-h-screen`
- 任意値: `h-[200px]`

---

## 5. Display / Visibility

### 表示モード
- `block`
- `inline-block`
- `inline`
- `flex`
- `grid`

### 表示制御
- `hidden`
- `visible` / `invisible`

### レスポンシブ制御
- `hidden md:block` : モバイル非表示、PC表示
- `block lg:hidden` : モバイル表示、PC非表示

---

## 6. Float / Clear（回り込み）

- `float-left`, `float-right`, `float-none`
- `clear-left`, `clear-right`, `clear-both`

---

## 7. Multi-column（段組み）

- `columns-1`
- `columns-2`
- `columns-3`
- 任意値: `columns-[300px]`

- `break-inside-avoid` : 要素を段で分割させない
