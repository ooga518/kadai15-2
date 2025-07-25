// 読み込み完了後に実行する
$(function() {
    console.log('jQueryの準備ができました。ページ読み込み完了。');

    // ボタンがクリックされたときの処理
    $('#ajaxButton').on('click', function() {

        $.ajax({
            // リクエスト先のURLを設定（作成１）
            url: 'api.php',
            type: 'POST', // POSTでもGETでも良いが統一してPOSTに
            data: {} // 今回は送信するデータなし
        }).done(function(data) {
            // JSONデータを解析
            let result = JSON.parse(data);

            // result.message と result.time を改行で結合（作成２）
            let text = result.message + '\n' + result.time;

            // 結果を表示
            $("#ajax_return").text(text);

        }).fail(function() {
            alert("通信に失敗しました");
        });

    });
});
