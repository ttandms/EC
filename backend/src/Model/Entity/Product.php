<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Product Entity
 *
 * @property int $id
 * @property string $name
 * @property string|null $detail
 * @property string|null $img_path
 * @property int $price
 * @property int $stock
 * @property \Cake\I18n\FrozenTime|null $update_time
 * @property bool|null $delete_flg
 * @property int $category_id
 *
 * @property \App\Model\Entity\Category $category
 * @property \App\Model\Entity\Cart[] $carts
 * @property \App\Model\Entity\Order[] $orders
 */
class Product extends Entity
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
        'detail' => true,
        'img_path' => true,
        'price' => true,
        'stock' => true,
        'update_time' => true,
        'delete_flg' => true,
        'category_id' => true,
        'category' => true,
        'carts' => true,
        'orders' => true
    ];
}
