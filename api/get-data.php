<?php
// заголовки для CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Якщо це запит типу OPTIONS, повертаємо порожню відповідь і закриваємо з'єднання
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require_once '../config/db.php';

$query = "SELECT * FROM subjects";
$stmt = $pdo->query($query);
$subjects = $stmt->fetchAll(PDO::FETCH_ASSOC);

$query = "SELECT * FROM teachers";
$stmt = $pdo->query($query);
$teachers = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = [
  'subjects' => $subjects,
  'teachers' => $teachers,
];

echo json_encode($data);
?>
