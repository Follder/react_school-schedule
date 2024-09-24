<?php
// заголовки для CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../config/db.php';

$subjectIds = $_POST['subjectId'] ?? [];
$teacherIds = $_POST['teacherId'] ?? [];

// Логування отриманих значень
file_put_contents('debug.log', "Subjects: " . implode(',', $subjectIds) . ", Teachers: " . implode(',', $teacherIds) . "\n", FILE_APPEND);

try {
    foreach ($subjectIds as $index => $subjectId) {
        if (!empty($subjectId)) {
          $teacherId = !empty($teacherIds[$index]) ? $teacherIds[$index] : null;

          $query = "INSERT INTO subject_teacher (subjectId, teacherId) 
            VALUES (:subjectId, :teacherId)
            ON DUPLICATE KEY UPDATE teacherId = VALUES(teacherId)";

          $stmt = $pdo->prepare($query);

          $stmt->execute([
            'subjectId' => $subjectId, 
            'teacherId' => $teacherId
          ]);
        }
    }
    echo json_encode(['status' => 'success', 'message' => 'Data added successfully']);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Paste error: ' . $e->getMessage()]);
}
?>
