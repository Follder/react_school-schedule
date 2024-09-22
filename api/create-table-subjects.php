<?php
require_once '../config/db.php';

$name = 'subjects';

$query = "
CREATE TABLE IF NOT EXISTS $name (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'subject ID',
    day ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday') NOT NULL COLLATE utf8mb4_unicode_ci COMMENT 'day of week',
    subject VARCHAR(255) NOT NULL DEFAULT '' COLLATE utf8mb4_unicode_ci UNIQUE COMMENT 'subject name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $pdo->exec($query);
    echo "Таблиця $name була успішно створена!";
} catch (PDOException $e) {
    die("Помилка при створенні таблиці: " . $e->getMessage());
}
?>
