/*
 Navicat Premium Data Transfer

 Source Server         : leemulus
 Source Server Type    : MySQL
 Source Server Version : 80033 (8.0.33)
 Source Host           : localhost:3306
 Source Schema         : word_server

 Target Server Type    : MySQL
 Target Server Version : 80033 (8.0.33)
 File Encoding         : 65001

 Date: 30/08/2023 22:27:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for plan_detail
-- ----------------------------
DROP TABLE IF EXISTS `plan_detail`;
CREATE TABLE `plan_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `is_mark` varchar(1) DEFAULT NULL,
  `plan_start_time` datetime DEFAULT NULL,
  `plan_end_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of plan_detail
-- ----------------------------
BEGIN;
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (1, '1', '1', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (2, '1', '0', '2023-08-05 00:00:00', '2023-08-25 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (3, '2', '1', '2023-08-10 00:00:00', '2023-08-20 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (4, '3', '1', '2023-08-15 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (5, '4', '0', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (6, '1', '1', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (7, '1', '1', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (8, '1', '1', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (9, '1', '1', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (10, '1', '0', '2023-08-01 00:00:00', '2023-08-31 00:00:00', '2023-08-01 00:00:00');
INSERT INTO `plan_detail` (`id`, `user_id`, `is_mark`, `plan_start_time`, `plan_end_time`, `create_time`) VALUES (11, '1', '0', '2023-08-22 00:00:00', '2023-08-31 00:00:00', '2023-08-22 23:54:57');
COMMIT;

-- ----------------------------
-- Table structure for plan_words
-- ----------------------------
DROP TABLE IF EXISTS `plan_words`;
CREATE TABLE `plan_words` (
  `word_ids` text,
  `mark_date` datetime DEFAULT NULL,
  `is_mark` int DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `plan_id` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of plan_words
-- ----------------------------
BEGIN;
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[1, 2, 3]', '2023-08-05 00:00:00', 1, 'user1', 1, 1);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[4, 5]', '2023-08-10 00:00:00', 0, 'user2', 2, 2);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[6, 7, 8]', '2023-08-15 00:00:00', 1, 'user3', 3, 3);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[9, 10]', '2023-08-20 00:00:00', 1, 'user4', 4, 4);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[1, 3, 5]', '2023-08-25 00:00:00', 0, 'user5', 5, 5);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[2, 4]', '2023-08-05 00:00:00', 1, 'user1', 1, 6);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[6, 8, 10]', '2023-08-10 00:00:00', 1, 'user2', 2, 7);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[1, 5, 9]', '2023-08-15 00:00:00', 1, 'user3', 3, 8);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[2, 6, 10]', '2023-08-20 00:00:00', 1, 'user4', 4, 9);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[3, 7]', '2023-08-25 00:00:00', 0, 'user5', 5, 10);
INSERT INTO `plan_words` (`word_ids`, `mark_date`, `is_mark`, `user_id`, `plan_id`, `id`) VALUES ('[50,49]', '2023-08-27 00:00:00', 1, '1', 11, 11);
COMMIT;

-- ----------------------------
-- Table structure for records
-- ----------------------------
DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_register` enum('0','1') NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of records
-- ----------------------------
BEGIN;
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (1, '2023-08-21 17:52:26', '1', 1);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (2, '2023-08-21 17:52:26', '1', 2);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (3, '2023-08-21 17:52:26', '0', 3);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (4, '2023-08-21 17:52:26', '1', 4);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (5, '2023-08-21 17:52:26', '0', 5);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (6, '2023-08-21 17:52:26', '1', 1);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (7, '2023-08-21 17:52:26', '1', 2);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (8, '2023-08-21 17:52:26', '1', 3);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (9, '2023-08-21 17:52:26', '1', 4);
INSERT INTO `records` (`id`, `create_time`, `is_register`, `user_id`) VALUES (10, '2023-08-21 17:52:26', '0', 5);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `role_name`, `level`, `create_time`, `update_time`) VALUES (1, 'yuyutianxin', '3786@yuyu', 'user1@example.com', '123456789', 'user', 'normal', '2023-08-19 12:00:00', '2023-08-19 12:00:00');
INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `role_name`, `level`, `create_time`, `update_time`) VALUES (2, 'user2', 'password2', 'user2@example.com', '987654321', 'user', 'normal', '2023-08-19 13:00:00', '2023-08-19 13:00:00');
INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone`, `role_name`, `level`, `create_time`, `update_time`) VALUES (3, 'admin', 'adminpass', 'admin@example.com', '555555555', 'admin', 'admin', '2023-08-19 14:00:00', '2023-08-19 14:00:00');
COMMIT;

-- ----------------------------
-- Table structure for word_translates
-- ----------------------------
DROP TABLE IF EXISTS `word_translates`;
CREATE TABLE `word_translates` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `cn_name` varchar(255) NOT NULL,
  `en_type` varchar(255) NOT NULL,
  `own_mark` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `word_id` int DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of word_translates
-- ----------------------------
BEGIN;
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (1, '测试', 'n', '测试11', '2023-08-21 01:00:43', 1, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (2, '苹果', 'n', 'fruit', '2023-08-21 17:52:26', 1, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (3, '香蕉', 'n', 'fruit', '2023-08-21 17:52:26', 2, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (4, '胡萝卜', 'n', 'vegetable', '2023-08-21 17:52:26', 3, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (5, '狗', 'n', 'animal', '2023-08-21 17:52:26', 4, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (6, '大象', 'n', 'animal', '2023-08-21 17:52:26', 5, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (7, '书', 'n', 'object', '2023-08-21 17:52:26', 6, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (8, '椅子', 'n', 'object', '2023-08-21 17:52:26', 7, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (9, '电脑', 'n', 'object', '2023-08-21 17:52:26', 8, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (10, '红色', 'n', 'color', '2023-08-21 17:52:26', 9, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (42, '苹果的相关东西', 'v', '111', '2023-08-21 22:50:02', 0, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (43, '测试翻译', 'v', '测试笔记', '2023-08-21 22:54:21', 3, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (44, '测试111', 'adj', '撒打算大2 211 ', '2023-08-21 23:11:20', 4, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (45, '雀巢咖啡', 'n', '品牌', '2023-08-23 00:01:05', 49, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (46, 'Nodejs框架', 'n', 'Nodejs框架 URL< nestjs.com>', '2023-08-23 00:01:41', 49, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (47, '雀巢咖啡;nest框架;巢穴', 'v/n', '', '2023-08-23 00:06:52', 49, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (48, '添加', 'v', '1234萨洒大地啊深爱的', '2023-08-23 00:17:36', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (49, '增加', 'v', '增加', '2023-08-23 00:18:28', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (50, '增加的数量', 'n', '增加', '2023-08-23 00:18:41', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (51, '测试更新时间', 'v', '1111', '2023-08-23 00:59:32', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (52, '111ce', '', '222', '2023-08-23 09:20:05', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (53, '1212', '', '1112', '2023-08-23 09:21:43', 50, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (54, 'ces ', '', '11111', '2023-08-23 09:22:45', 49, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (55, '测试1', 'v', '1111', '2023-08-28 20:13:28', 51, NULL);
INSERT INTO `word_translates` (`id`, `cn_name`, `en_type`, `own_mark`, `create_time`, `word_id`, `user_id`) VALUES (56, '测试1', 'v', '111122222', '2023-08-28 20:13:33', 51, NULL);
COMMIT;

-- ----------------------------
-- Table structure for words
-- ----------------------------
DROP TABLE IF EXISTS `words`;
CREATE TABLE `words` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `en_name` varchar(255) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `own_mark` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of words
-- ----------------------------
BEGIN;
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (1, 'TARSUS', '2023-08-20 10:36:30', 'MircoService（微服务框架）', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (2, 'TARO', '2023-08-21 01:33:17', 'TARO 是TarsusFrameWork下的协议文件，该协议可以编译成 java 与 typescript文件。', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (3, 'apple', '2023-08-21 17:52:26', 'fruit', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (4, 'banana', '2023-08-21 17:52:26', 'fruit', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (5, 'carrot', '2023-08-21 17:52:26', 'vegetable', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (6, 'dog', '2023-08-21 17:52:26', 'animal', '2', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (7, 'elephant', '2023-08-21 17:52:26', 'animal', '2', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (8, 'book', '2023-08-21 17:52:26', 'object', '3', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (9, 'chair', '2023-08-21 17:52:26', 'object', '3', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (10, 'computer', '2023-08-21 17:52:26', 'object', '3', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (11, 'red', '2023-08-21 17:52:26', 'color', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (12, 'blue', '2023-08-21 17:52:26', 'color', '1', 1, NULL);
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (49, 'nest', '2023-08-21 23:12:44', '巢穴', '1', 1, '2023-08-23 09:22:45');
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (50, 'add', '2023-08-23 00:17:06', '添加', '1', 1, '2023-08-23 09:21:43');
INSERT INTO `words` (`id`, `en_name`, `create_time`, `own_mark`, `type`, `user_id`, `update_time`) VALUES (51, '123aaaaa', '2023-08-28 20:13:17', '测试111', '1', 1, '2023-08-28 20:13:33');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
