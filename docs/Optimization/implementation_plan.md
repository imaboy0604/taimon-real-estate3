# AI最適化・モダナイズ実装計画

現在のコードベースを、AIアシスタントとの協業において最も効率的で、かつ保守性の高い「最適」な構成へ移行します。

## 現状の課題と改善案

| 項目 | 現状 | 課題 | 改善案 (AI最適化) |
|---|---|---|---|
| 言語 | JavaScript | 型情報がなく、AIが文脈を推測しにくい。リファクタリング時の安全性に欠ける。 | **TypeScript**<br>型定義によりAIの理解度が向上し、バグを未然に防ぐ。 |
| スタイリング | Vanilla CSS | CSSファイルとSvelteファイルの行き来が必要。クラス名の管理が煩雑。 | **Tailwind CSS**<br>コンポーネント内でスタイルが完結。AIがスタイルを生成・修正しやすい。 |
| フレームワーク | Svelte 4 | (特に問題なし) | **Svelte 4 + Vite**<br>現状維持。必要であればSvelte 5へのアップグレードも検討可能だが、まずはTS/Tailwind化を優先。 |

## User Review Required

> [!IMPORTANT]
> **大規模なリファクタリングになります**
> ファイルの拡張子変更 (`.js` -> `.ts`) や、CSSの大幅な書き換えが発生します。
> 一時的に開発サーバーがエラーになる可能性があります。

## Proposed Changes

### 1. 環境構築 [Configuration]

#### [NEW] パッケージ導入
- TypeScript, Svelte-Preprocess
- Tailwind CSS, PostCSS, Autoprefixer

#### [NEW] [tsconfig.json](file:///Users/takumi/Developer/taimon-real-estate2/tsconfig.json)
TypeScriptの設定ファイルを追加。

#### [NEW] [tailwind.config.js](file:///Users/takumi/Developer/taimon-real-estate2/tailwind.config.js)
Tailwind CSSの設定ファイル。既存の `styles.css` の変数をここに移植することで、デザインシステムを維持します。

#### [MODIFY] [vite.config.js](file:///Users/takumi/Developer/taimon-real-estate2/vite.config.js)
Svelteプラグインの設定を確認・更新。

### 2. デザインシステムの移行 [CSS]

#### [MODIFY] [styles.css](file:///Users/takumi/Developer/taimon-real-estate2/styles.css)
既存のCSS変数を `tailwind.config.js` の `theme.extend` に移植し、`styles.css` は Tailwind のディレクティブのみ（または最小限のグローバルスタイル）にします。

#### [MODIFY] コンポーネントファイル (*.svelte)
`<style>` タグ内のCSSを削除し、Tailwindのクラス名に置き換えます。

### 3. コード移行 [TypeScript]

#### [MODIFY] [src/main.js](file:///Users/takumi/Developer/taimon-real-estate2/src/main.js)
`src/main.ts` にリネームし、型付けを行います。

#### [MODIFY] コンポーネントファイル (*.svelte)
`<script>` を `<script lang="ts">` に変更し、Propsの型定義を追加します。

## Verification Plan

### Automated Tests
- `npm run dev`: エラーなく起動するか
- `npm run build`: プロダクションビルドが成功するか

### Manual Verification
- 元のデザインと見た目が変わっていないか、主要ページ（トップページ）を目視で確認します。
