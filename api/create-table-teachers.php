<?php
require_once '../config/db.php';

$name = 'teachers';

$query = "
CREATE TABLE IF NOT EXISTS $name (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'teacher ID',
    name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci COMMENT 'teacher name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $pdo->exec($query);
    echo "Таблиця $name була успішно створена!";
} catch (PDOException $e) {
    die("Помилка при створенні таблиці: " . $e->getMessage());
}

$seeds = [
  'Jhon Doe',
  'Alex Shepard',
  'Johnny Walker',
  'Emili Blant',
  'Wade Wilson',
  'Tj Joseph Miller',
  'Chris Pratt',
  'Jordana Brewster'
];

foreach ($seeds as $seed) {
  $stmt = $pdo->prepare("INSERT INTO teachers (name) VALUES(?)");
  $stmt->execute([$seed]);
}

echo "$name створена та заповнена";
?>
