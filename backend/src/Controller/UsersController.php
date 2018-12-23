<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\Event\Event;

//session_start();

/**
 * Users Controller
 *
 * @property \App\Model\Table\UsersTable $Users
 *
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{
    //ログイン後のアクセス権限制御
    //Authコンポーネントを使用する際は必ず用意
    //2018/12/23 今後ここで管理者権限設定などを行う
    public function isAuthorized($user = null){
      //アクセスしたアクション名取得
      $action=$this->request->params['action'];

      if(in_array($action,['index','view'])){
        return true;
      }
      if($user['is_admin']==1){
        return true;
      }
      if($user['is_admin']!=1){
        return true;
      }

      return false;//アクセス不許可
    }

    // 認証を通さないアクションがある場合のみ
    public function beforeFilter(Event $event)
    {
        parent::beforeFilter($event);
        $this->Auth->allow(['login','logout','regist']);
    }

    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
     //ログイン後のトップページ
    public function index() {
        //セッションからログインIDを取得
        $id = $this->getRequest()->getSession()->read('Auth.User.id');
        //該当IDをDBから探索しデータ型に変換
        $user = $this->Users->findById($id)->toArray();
        //２次元配列として格納されてしまうため、１次元化してViewへ
        $user = $user[0];
//foreach($_POST as $idx => $val){echo "$idx = $val<br>";}
//print_r($user['Users']);
//echo "id:".$user['id'];
        $this->set(compact('user'));
        //$this->set('user',$user);
    }

    // ユーザ登録
    public function regist() {
        $user = $this->Users->newEntity();
        if ($this->request->is('post')) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('登録したぜ！'));

                return $this->redirect(['action' => 'login']);
            }
            $this->Flash->error(__('変更できぬ・・・'));
        }
        $this->set(compact('user'));
    }

    // ユーザ修正
    public function edit($id = null) {
        $user = $this->Users->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $this->Flash->success(__('変更完了したぜ！'));

                return $this->redirect(['action' => 'edit', $user->id]);
            }
            $this->Flash->error(__('変更できず・・・'));
        }
        $this->set(compact('user'));
    }

    // ログイン
    public function login(){
      if ($this->request->is('post')) {
        $user = $this->Auth->identify();
//foreach($_POST as $idx => $val){echo "$idx = $val<br>";}
//echo var_dump($user);
//echo "user_id:".$user['id'];
        if ($user) {
          $this->Auth->setUser($user);
          //$this->Session->write('user_id',$user['id']);
          return $this->redirect($this->Auth->redirectUrl());
        }
        $this->Flash->error(__('ユーザ名もしくはパスワードが間違っています'));
      }
    }

    // ログアウト
    public function logout() {
        $this->request->session()->destroy();
        return $this->redirect($this->Auth->logout());
    }

}
