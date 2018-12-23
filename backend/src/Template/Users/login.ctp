<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<div class="users form large-9 medium-8 columns content">
    <?= $this->Flash->render('auth') ?>
    <?= $this->Form->create() ?>
    <fieldset>
        <legend><?= __('ログイン') ?></legend>
        <?php
            echo $this->Form->control('name');
            echo $this->Form->control('password');
        ?>
    </fieldset>
    <?= $this->Form->button(__('ログイン')) ?>
    <?= $this->Form->end() ?>
    <br><br><br><?= $this->Html->link(__('新規登録'), ['action' => 'regist']) ?>
</div>
