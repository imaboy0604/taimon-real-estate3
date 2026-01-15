# Concept Section リデザイン完了

## 概要
Figmaなどのデザインツールで作成されたイメージを元に、Concept Sectionをリデザインしました。
縦書きを取り入れた和モダンかつスタイリッシュなレイアウトを実装しました。

## 変更点

### 1. 新コンポーネントの作成
- `src/components/ConceptSection.svelte` を新規作成。
- 縦書きテキスト (`writing-mode: vertical-rl`) を活用し、情緒的な表現を実現。
- 左側に家族の写真とメッセージ、右側に三重県の地図とキャッチコピーを配置。

### 2. メインページへの組み込み
- `src/routes/+page.svelte` に `ConceptSection` をインポートし、配置。

## 検証結果

### スクリーンショット
実装されたConcept Sectionのスクリーンショットです。

![Concept Section Redesign](/Users/takumi/.gemini/antigravity/brain/c2e574a4-829b-4b00-a3ac-c18ab6195140/concept_section_redesign_1768493529919.png)

### 動作確認
- ブラウザサブエージェントにより、要素の表示、縦書きスタイルの適用を確認済み。
