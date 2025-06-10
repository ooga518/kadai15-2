//読み込み完了後に実行する
$(function() {
    console.log('jQueryの準備ができました。ページ読み込み完了。');
    // ボタンがクリックされたときの処理
    $('#ajaxButton').on('click', function() {
        
        $.ajax({

            //リクエスト先のURLを設定（作成１)
            url: ,

        }).done(function(data){

            //JSONデータを解析
            let result = JSON.parse(data);
            //解析データを整形
            // result.messageとresult.timeを改行で結合（作成２)
            

            $("#ajax_return").text(text);

        }).fail(function(data){
            //通信が失敗したときの処理
            alert("通信に失敗しました");
        });
 
    });
});