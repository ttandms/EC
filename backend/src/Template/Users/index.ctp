<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User[]|\Cake\Collection\CollectionInterface $users
 */
?>
<?php echo "ログイン成功";?>
<br><?= $this->Html->link(__('登録情報変更'), ['action' => 'edit', $user->id]) ?>
<br><?= $this->Html->link(__('ログアウト'), ['action' => 'logout']) ?>
<?php
/*
<br><?= $this->Html->link(__('商品一覧'), ['controller' => 'products', 'action' => 'index']) ?>
*/
?>
