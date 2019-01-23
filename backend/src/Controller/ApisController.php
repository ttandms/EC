<?php
namespace App\Controller;

use App\Controller\AppController;

class ApisController extends AppController {

  public function add() {
    // HTMLの表示はいらないため自動レンダリングをOFFにする
    $this->autoRender = false;
    echo $this->request->body;
    // レスポンスの形式をJSONで指定
    $this->response->type('application/json');

    $apples = array('apple'=>'りんご', 'peach'=>'もも', 'pear'=>'なし');
    $this->response->body(json_encode($apples,JSON_UNESCAPED_UNICODE));
    //debug.logでhttpリクエスト・レスポンスの中身が見れる
    $this->log($this, "debug");
  }
}