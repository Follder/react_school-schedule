<?php
require_once '../config/db.php';

$name = 'subject_teacher';

$query = "
CREATE TABLE IF NOT EXISTS $name (
    subjectId INT(11) UNSIGNED NOT NULL UNIQUE PRIMARY KEY COMMENT 'subject ID',
    teacherId INT(11) COMMENT 'teacher ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
";

try {
  $pdo->exec($query);
  echo "Table $name was successfully created!";
} catch (PDOException $e) {
  die("Error when creating the table: " . $e->getMessage());
}
?>
