# Tailwind でコンテンツを中央寄せするチートシート

あなたの元の例：

```html
<article class="p-4 bg-slate-100 border-2 border-slate-600 shadow-sm rounded-xl text-slate-950">s001</article>
```

---

## 1) 水平（横）だけ中央
テキストの配置を中央に。
```html
<article class="p-4 bg-slate-100 border-2 border-slate-600 rounded-xl text-slate-950 text-center">
  s001
</article>
```

## 2) 垂直（縦）だけ中央（flex）
高さを決めて、`items-center`。
```html
<article class="h-24 p-4 bg-slate-100 border-2 border-slate-600 rounded-xl text-slate-950 flex items-center">
  s001
</article>
```

## 3) 縦横どちらも中央（もっとも簡単：flex）
```html
<article class="h-24 p-4 bg-slate-100 border-2 border-slate-600 rounded-xl text-slate-950 flex items-center justify-center">
  s001
</article>
```

## 4) 縦横どちらも中央（grid派）
```html
<article class="h-24 p-4 bg-slate-100 border-2 border-slate-600 rounded-xl text-slate-950 grid place-items-center">
  s001
</article>
```

## 5) 絶対配置でド真ん中（親を相対に）
親を `relative`、子を `absolute` + translate。
```html
<article class="relative h-24 p-4 bg-slate-100 border-2 border-slate-600 rounded-xl">
  <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-950">
    s001
  </span>
</article>
```

## 6) 複数行テキストを中央（flex + text-center）
```html
<article class="h-32 p-4 bg-slate-100 border-2 border-slate-600 rounded-xl flex items-center justify-center text-center">
  改行ありのテキストです。<br>中央にそろえます。
</article>
```

---

### メモ
- `shadow-2sm` は Tailwind 標準にないため、`shadow-sm` / `shadow` / `shadow-md` などを利用。
- “縦中央”には高さ（`h-*` / `min-h-*`）の指定が必要。
- 1要素内の単純な中央寄せなら **grid の `place-items-center`** も覚えやすい。


