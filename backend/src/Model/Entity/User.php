<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;
use Cake\Auth\DefaultPasswordHasher;

/**
 * User Entity
 *
 * @property int $id
 * @property string $name
 * @property string $mail_address
 * @property string|null $tel_no
 * @property string|null $birthday
 * @property string $password
 * @property bool|null $is_admin
 *
 * @property \App\Model\Entity\Address[] $addresses
 * @property \App\Model\Entity\Cart[] $carts
 * @property \App\Model\Entity\Order[] $orders
 */
class User extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'name' => true,
        'mail_address' => true,
        'tel_no' => true,
        'birthday' => true,
        'password' => true,
        'is_admin' => true,
        'addresses' => true,
        'carts' => true,
        'orders' => true
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password'
    ];

    /**
     * パスワード保存時のハッシュ化
     * @param  string $password パスワード文字列
     * @return string           ハッシュ化されたパスワード
     */
    protected function _setPassword($password)
    {
        return (new DefaultPasswordHasher)->hash($password);
    }
    
}
