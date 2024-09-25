<?php
// заголовки для CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


require_once '../config/db.php';

$day = $_POST['day'] ?? null;
$subject = $_POST['subject'] ?? null;

// Логування отриманих значень
file_put_contents('debug.log', "Subject: $subject, Day: $day\n", FILE_APPEND);

if (empty(trim($subject))) {
  echo json_encode(['status' => 'error', 'message' => 'Subject can`t be empty']);
  exit;
}

if (empty($day)) {
  echo json_encode(['status' => 'error', 'message' => 'Please choose day of week']);
  exit;
}

try {
  $query = "INSERT INTO subjects (subject, day) VALUES (:subject, :day)";
  $stmt = $pdo->prepare($query);
  $stmt->execute(['subject' => $subject, 'day' => $day]);
  echo json_encode(['status' => 'success', 'message' => 'Data added successfully']);
} catch (PDOException $e) {
  echo json_encode(['status' => 'error', 'message' => 'Eerror: ' . $e->getMessage()]);
}

?>