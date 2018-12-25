<?php
namespace App\Controller;

use App\Controller\AppController;

class ApisController extends AppController {

  public function index() {
    // HTMLの表示はいらないため自動レンダリングをOFFにする
    $this->autoRender = false;
    // レスポンスの形式をJSONで指定
    $this->response->type('application/json');

    $apples = array('apple'=>'りんご', 'peach'=>'もも', 'pear'=>'なし');
    $this->response->body(json_encode($apples,JSON_UNESCAPED_UNICODE));
    //debug.logでhttpリクエスト・レスポンスの中身が見れる
    $this->log($this, "debug");
  }
}