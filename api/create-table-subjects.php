<?php
require_once '../config/db.php';

$name = 'subjects';

$query = "
CREATE TABLE IF NOT EXISTS $name (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'subject ID',
    day ENUM('01', '02', '03', '04', '05', '06', '07') NOT NULL COLLATE utf8mb4_unicode_ci COMMENT 'day of week',
    subject VARCHAR(255) NOT NULL DEFAULT '' COLLATE utf8mb4_unicode_ci COMMENT 'subject name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
    $pdo->exec($query);
    echo "Table $name was successfully created!";
} catch (PDOException $e) {
  die("Error when creating the table: " . $e->getMessage());
}
?>
