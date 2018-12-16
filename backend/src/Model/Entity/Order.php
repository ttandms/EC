<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Order Entity
 *
 * @property int $id
 * @property string $address
 * @property int $price
 * @property int $count
 * @property \Cake\I18n\FrozenTime|null $update_time
 * @property int $user_id
 * @property int $product_id
 * @property int $condition__id
 *
 * @property \App\Model\Entity\User $user
 * @property \App\Model\Entity\Product $product
 * @property \App\Model\Entity\Condition $condition
 */
class Order extends Entity
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
        'address' => true,
        'price' => true,
        'count' => true,
        'update_time' => true,
        'user_id' => true,
        'product_id' => true,
        'condition__id' => true,
        'user' => true,
        'product' => true,
        'condition' => true
    ];
}
