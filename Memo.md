# Tailwind Flex チートシート

## 基本
- `flex` : Flexbox を有効化（横並び）
- `inline-flex` : インライン要素としての Flexbox

## 方向（flex-direction）
- `flex-row` : 横並び（デフォルト）
- `flex-row-reverse` : 横並び・逆順
- `flex-col` : 縦並び
- `flex-col-reverse` : 縦並び・逆順

## 横揃え（justify-content）
- `justify-start` : 左寄せ
- `justify-center` : 中央寄せ
- `justify-end` : 右寄せ
- `justify-between` : 両端に寄せて間隔を均等
- `justify-around` : 間隔を均等（両端にも余白あり）
- `justify-evenly` : 全て均等に配置

## 縦揃え（align-items）
- `items-start` : 上揃え
- `items-center` : 縦中央揃え
- `items-end` : 下揃え
- `items-stretch` : 高さを揃える（デフォルト）
- `items-baseline` : テキストのベースライン揃え

## 折り返し（flex-wrap）
- `flex-nowrap` : 折り返さない（デフォルト）
- `flex-wrap` : 折り返す
- `flex-wrap-reverse` : 折り返す（逆方向）

## 個別の伸縮（grow / shrink / basis）
- `flex-1` : 空きスペースを均等に埋める
- `flex-none` : 固定サイズ（伸縮しない）
- `grow` : 要素を広げる（grow:1）
- `grow-0` : 広がらない
- `shrink` : 要素を縮める（shrink:1）
- `shrink-0` : 縮まない
- `basis-1/2` : 基準サイズを 50% に
- `basis-[200px]` : 基準サイズを任意の px に

## よく使う組み合わせ例
- `flex justify-center items-center` : 中央揃え（横・縦）
- `flex flex-col gap-2` : 縦並び + 要素間に隙間
- `flex flex-wrap gap-4` : 折り返し + 間隔
- `flex-1` : 空きスペースを均等に埋める
