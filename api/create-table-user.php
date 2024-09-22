<?php
require_once '../config/db.php';

$query = "
CREATE TABLE IF NOT EXISTS users (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'user ID',
    name VARCHAR(255) NOT NULL DEFAULT '' COLLATE utf8mb4_unicode_ci COMMENT 'user name',
    email VARCHAR(255) NOT NULL DEFAULT '' COLLATE utf8mb4_unicode_ci UNIQUE COMMENT 'user email'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $pdo->exec($query);
    echo "Таблиця users була успішно створена!";
} catch (PDOException $e) {
    die("Помилка при створенні таблиці: " . $e->getMessage());
}
?>
