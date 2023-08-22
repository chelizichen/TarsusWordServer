## DB INIT

insert data
````ts

INSERT INTO words ( en_name, own_mark, type )
VALUES
( 'apple', 'fruit', 1 ),(
    'banana',
        'fruit',
        1
),(
    'carrot',
        'vegetable',
        1
),(
    'dog',
        'animal',
        2
),(
    'elephant',
        'animal',
        2
),(
    'book',
        'object',
        3
),(
    'chair',
        'object',
        3
),(
    'computer',
        'object',
        3
),(
    'red',
        'color',
        4
),(
    'blue',
        'color',
        4
);
INSERT INTO word_translates ( cn_name, en_type, own_mark, word_id )
VALUES
( '苹果', '水果', 'fruit', 1 ),(
    '香蕉',
        '水果',
        'fruit',
        2
),(
    '胡萝卜',
        '蔬菜',
        'vegetable',
        3
),(
    '狗',
        '动物',
        'animal',
        4
),(
    '大象',
        '动物',
        'animal',
        5
),(
    '书',
        '物品',
        'object',
        6
),(
    '椅子',
        '物品',
        'object',
        7
),(
    '电脑',
        '物品',
        'object',
        8
),(
    '红色',
        '颜色',
        'color',
        9
),(
    '蓝色',
        '颜色',
        'color',
        10
);
INSERT INTO records ( is_register, user_id )
VALUES
( '1', 1 ),(
    '1',
        2
),(
    '0',
        3
),(
    '1',
        4
),(
    '0',
        5
),(
    '1',
        1
),(
    '1',
        2
),(
    '1',
        3
),(
    '1',
        4
),(
    '0',
        5
);
INSERT INTO words ( en_name, own_mark, type )
VALUES
( 'apple', 'fruit', 1 ),(
    'banana',
        'fruit',
        1
),(
    'carrot',
        'vegetable',
        1
),(
    'dog',
        'animal',
        2
),(
    'elephant',
        'animal',
        2
),(
    'book',
        'object',
        3
),(
    'chair',
        'object',
        3
),(
    'computer',
        'object',
        3
),(
    'red',
        'color',
        4
),(
    'blue',
        'color',
        4
);
INSERT INTO plan_words ( word_ids, mark_date, is_mark, user_id, plan_id )
VALUES
( '[1, 2, 3]', '2023-08-05', 1, 'user1', 1 ),(
    '[4, 5]',
        '2023-08-10',
        0,
        'user2',
        2
),(
    '[6, 7, 8]',
        '2023-08-15',
        1,
        'user3',
        3
),(
    '[9, 10]',
        '2023-08-20',
        1,
        'user4',
        4
),(
    '[1, 3, 5]',
        '2023-08-25',
        0,
        'user5',
        5
),(
    '[2, 4]',
        '2023-08-05',
        1,
        'user1',
        1
),(
    '[6, 8, 10]',
        '2023-08-10',
        1,
        'user2',
        2
),(
    '[1, 5, 9]',
        '2023-08-15',
        1,
        'user3',
        3
),(
    '[2, 6, 10]',
        '2023-08-20',
        1,
        'user4',
        4
),(
    '[3, 7]',
        '2023-08-25',
        0,
        'user5',
        5
);
INSERT INTO plan_detail ( id, user_id, is_mark, plan_start_time, plan_end_time )
VALUES
( 1, 'user1', '1', '2023-08-01', '2023-08-31' ),(
    2,
        'user2',
        '0',
        '2023-08-05',
        '2023-08-25'
),(
    3,
        'user3',
        '1',
        '2023-08-10',
        '2023-08-20'
),(
    4,
        'user4',
        '1',
        '2023-08-15',
        '2023-08-31'
),(
    5,
        'user5',
        '0',
        '2023-08-01',
        '2023-08-31'
),(
    6,
        'user1',
        '1',
        '2023-08-01',
        '2023-08-31'
),(
    7,
        'user2',
        '1',
        '2023-08-01',
        '2023-08-31'
),(
    8,
        'user3',
        '1',
        '2023-08-01',
        '2023-08-31'
),(
    9,
        'user4',
        '1',
        '2023-08-01',
        '2023-08-31'
),(
    10,
        'user5',
        '0',
        '2023-08-01',
        '2023-08-31'
);
INSERT INTO users (
    id,
    username,
    PASSWORD,
    email,
    phone,
    role_name,
    LEVEL,
    create_time,
    update_time
)
VALUES
(
    1,
    'user1',
    'password1',
    'user1@example.com',
    '123456789',
    'user',
    'normal',
    '2023-08-19 12:00:00',
    '2023-08-19 12:00:00'
),(
    2,
        'user2',
        'password2',
        'user2@example.com',
        '987654321',
        'user',
        'normal',
        '2023-08-19 13:00:00',
        '2023-08-19 13:00:00'
),(
    3,
        'admin',
        'adminpass',
        'admin@example.com',
        '555555555',
        'admin',
        'admin',
        '2023-08-19 14:00:00',
        '2023-08-19 14:00:00'
);
````