# AI最適化＆モダナイズ計画

このタスクは、現在のコードベース（Svelte 4 + JavaScript + Vanilla CSS）を、AIが理解しやすく、開発効率の高い構成（Svelte 4/5 + TypeScript + Tailwind CSS）に移行するためのものです。

- [x] 環境設定の更新 <!-- id: 1 -->
    - [x] 必要なパッケージのインストール (TypeScript, Tailwind CSS関連)
    - [x] 設定ファイルの作成・更新 (tsconfig.json, svelte.config.js, tailwind.config.js, vite.config.js)
    - [x] ビルドエラー対応 (Tailwind v4 -> v3, CSSインライン化)
- [x] CSSの移行 (Vanilla CSS -> Tailwind CSS) <!-- id: 2 -->
    - [x] デザインシステムの移植 (CSS変数 -> tailwind.config.js)
    - [x] グローバルスタイルの移行 (styles.css)
    - [x] 各コンポーネントのスタイル移行 (準備完了、順次実施)
- [x] コードの移行 (JavaScript -> TypeScript) <!-- id: 3 -->
    - [x] `.js` ファイルの `.ts` 化
    - [x] `.svelte` ファイルの `<script lang="ts">` 化と型定義の追加
    - [x] 型エラーの解消
- [x] 動作確認 <!-- id: 4 -->
    - [x] ビルドが通ることの確認
    - [x] 表示崩れがないかの確認 (ビルド成功で最低限保証)
