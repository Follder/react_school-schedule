<?php
// заголовки для CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


require_once '../config/db.php';

$day = $_POST['day'] ?? null;
$subject = $_POST['subject'] ?? null;

// Логування отриманих значень
file_put_contents('debug.log', "Subject: $subject, Day: $day\n", FILE_APPEND);

if ($subject && $day) {
    try {
        $query = "INSERT INTO subjects (subject, day) VALUES (:subject, :day)";
        $stmt = $pdo->prepare($query);
        $stmt->execute(['subject' => $subject, 'day' => $day]);
        echo json_encode(['status' => 'success', 'message' => 'Дані додано успішно']);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Помилка при вставці: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Невірні дані']);
}

?>