/*「EC」はDB名*/
use EC; 

/* Create Tables */

CREATE TABLE addresses
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(256) NOT NULL,
	post_code int NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE carts
(
	id int NOT NULL AUTO_INCREMENT,
	count int NOT NULL,
	update_time datetime DEFAULT NOW(),
	product_id int NOT NULL,
	user_id int NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (product_id),
	UNIQUE (user_id)
);


CREATE TABLE categories
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(128) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);


CREATE TABLE conditions
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(128) NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);


CREATE TABLE orders
(
	id int NOT NULL AUTO_INCREMENT,
	address varchar(256) NOT NULL,
	price int NOT NULL,
	count int NOT NULL,
	update_time datetime DEFAULT NOW(), 
	user_id int NOT NULL,
	product_id int NOT NULL,
	condition__id int NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (user_id),
	UNIQUE (product_id)
);


CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(64) NOT NULL,
	detail varchar(128),
	-- path?
	img_path varchar(64) COMMENT 'path?',
	price int NOT NULL,
	stock int NOT NULL,
	update_time datetime DEFAULT NOW(), 
	-- 1:削除
	delete_flg boolean DEFAULT '0' COMMENT '1:削除',
	category_id int NOT NULL,
	PRIMARY KEY (id),
	UNIQUE (name)
);


CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(32) NOT NULL,
	mail_address varchar(256) NOT NULL,
	tel_no varchar(64),
	birthday varchar(64),
	password varchar(256) NOT NULL,
    is_admin boolean DEFAULT '0' COMMENT '1:管理者',
	PRIMARY KEY (id)
);



/* Create Foreign Keys */

ALTER TABLE products
	ADD FOREIGN KEY (category_id)
	REFERENCES categories (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE orders
	ADD FOREIGN KEY (condition__id)
	REFERENCES conditions (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE carts
	ADD FOREIGN KEY (product_id)
	REFERENCES products (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE orders
	ADD FOREIGN KEY (product_id)
	REFERENCES products (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE addresses
	ADD FOREIGN KEY (user_id)
	REFERENCES users (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE carts
	ADD FOREIGN KEY (user_id)
	REFERENCES users (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


ALTER TABLE orders
	ADD FOREIGN KEY (user_id)
	REFERENCES users (id)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;