<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\User $user
 */
?>
<div class="users form large-9 medium-8 columns content">
    <?= $this->Form->create($user) ?>
    <fieldset>
        <legend><?= __('登録情報変更') ?></legend>
        <?php
            echo $this->Form->control('name');
            echo $this->Form->control('mail_address');
            echo $this->Form->control('tel_no');
            echo $this->Form->control('birthday');
            echo $this->Form->control('password');
        ?>
    </fieldset>
    <?= $this->Form->button(__('変更')) ?>
    <?= $this->Form->end() ?>
    <br><br><br><?= $this->Html->link(__('トップページへ'), ['action' => 'index']) ?>
</div>
