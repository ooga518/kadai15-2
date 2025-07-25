<?php
// 作成１：日本のタイムゾーンに設定
date_default_timezone_set('Asia/Tokyo');

// 作成２：現在時刻を「〇時〇分〇秒」の形式で取得
$time_now = date("H時i分s秒");

// メッセージと時刻を返却するデータとして用意
$data = [
    'message' => 'Ajax通信成功！',
    'time' => '現在時刻：' . $time_now
];

// 作成３：連想配列をJSON形式に変換して出力
echo json_encode($data);
exit;
?>
